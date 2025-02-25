// @ts-check

const fs = require('node:fs');
let promises = [];

/**
 * Reads and parses a JSON file.
 * @param {string} filename - The name of the file to read.
 * @returns {Object|null} The parsed JSON object or null if an error occurs.
 */
function readJSONFile(filename) {
    try {
        const data = fs.readFileSync(filename, 'utf8');
        return JSON.parse(data);
    } catch (err) {
        console.error(`Error reading ${filename}:`, err);
        return null;
    }
}

/**
 * Writes data to a JSON file after sorting it.
 * @param {string} filename - The name of the file to write to.
 * @param {Object} data - The data to write to the file.
 * @returns {Promise<void>}
 */
async function writeJSONFile(filename, data) {
    try {
        // Wait for all pending promises to settle
        await Promise.allSettled(promises);
        promises = [];

        // Write sorted data to file
        fs.writeFileSync(filename, JSON.stringify(sortJsonObject(data), null, 2));
        console.log(`Data written to ${filename}`);
    } catch (err) {
        console.error(`Error writing to ${filename}:`, err);
    }
}

/**
 * Sorts a JSON object recursively.
 * @param {Object} obj - The object to sort.
 * @returns {Object} A new sorted object.
 */
function sortJsonObject(obj) {
    const keysWithSubobjects = [];
    const keysWithoutSubobjects = [];

    // Separate keys into two groups
    for (const key in obj) {
        if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
            keysWithSubobjects.push({ key, value: sortJsonObject(obj[key]) });
        } else {
            keysWithoutSubobjects.push({ key, value: obj[key] });
        }
    }

    // Sort both groups alphabetically by key
    keysWithoutSubobjects.sort((a, b) => a.key.localeCompare(b.key));
    keysWithSubobjects.sort((a, b) => a.key.localeCompare(b.key));

    // Concatenate the sorted groups
    const sortedKeys = [...keysWithoutSubobjects, ...keysWithSubobjects];

    // Reconstruct the object using sorted keys
    const sortedObj = {};
    sortedKeys.forEach(item => {
        sortedObj[item.key] = item.value;
    });

    return sortedObj;
}

/**
 * Translates text using Google Translate API.
 * @param {string} text - The text to translate.
 * @param {string} targetLanguage - The target language code.
 * @returns {Promise<string>} The translated text.
 */
async function translateText(text, targetLanguage) {
    const apiKey = 'REPLACEME'; // Replace with your API key
    const url = `https://translation.googleapis.com/language/translate/v2?key=${apiKey}`;

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            charset: 'UTF-8',
        },
        body: JSON.stringify({
            q: text,
            target: targetLanguage
        })
    });

    const data = await response.json();
    return data.data.translations[0].translatedText;
}

/**
 * Recursively copies missing keys from source to destination, translating as necessary.
 * @param {Object} sourceData - The source data object.
 * @param {Object} destinationData - The destination data object.
 * @param {string} targetLanguage - The target language code.
 */
function copyMissingKeys(sourceData, destinationData, targetLanguage) {
    for (const key in sourceData) {
        if (!(key in destinationData)) {
            const englishText = sourceData[key];

            // Special handling for certain keys
            if (key === "am" || key === "pm" || key === "fileSizeTypes") {
                destinationData[key] = englishText;
                console.log(`Added key '${key}' with value '${englishText}'`);
            } else {
                // Translate and add the key
                const promise = translateText(englishText, targetLanguage)
                    .then(translation => {
                        console.log(`Translated "${englishText}" to ${targetLanguage}: "${translation}"`);
                        destinationData[key] = translation;
                    })
                    .catch(error => {
                        console.error(`Error translating key '${key}' text '${englishText}':`, error);
                        destinationData[key] = englishText;
                        console.log(`Added key '${key}' with value '${englishText}'`);
                    });
                promises.push(promise);
            }
        } else if (typeof sourceData[key] === 'object' && typeof destinationData[key] === 'object') {
            // Recursively handle nested objects
            copyMissingKeys(sourceData[key], destinationData[key], targetLanguage);
        }
    }
}

/**
 * Copies missing keys from source file to all destination files in a directory.
 * @param {string} sourceFile - The path to the source file.
 * @param {string} destinationDir - The path to the destination directory.
 */
function copyMissingKeysRecursive(sourceFile, destinationDir) {
    const sourceData = readJSONFile(sourceFile);

    if (!sourceData) {
        console.error("Error reading source file. Aborting operation.");
        return;
    }

    fs.readdir(destinationDir, (err, files) => {
        if (err) {
            console.error(`Error reading directory ${destinationDir}:`, err);
            return;
        }

        files.forEach(file => {
            const destinationFile = `${destinationDir}/${file}`;

            // Process only JSON files that are not the source file or package.json
            if (file.endsWith('.json') && !destinationFile.endsWith(sourceFile) && !file.endsWith('package.json')) {
                let destinationData = readJSONFile(destinationFile) || {};

                if (!destinationData) {
                    console.error(`Error reading ${destinationFile}. Skipping.`);
                    return;
                }

                const sourceLanguage = Object.keys(sourceData)[0];
                const destinationLanguage = Object.keys(destinationData)[0];

                if (!sourceLanguage || !destinationLanguage) {
                    console.error("Root keys not found in source or destination file.");
                    return;
                }

                console.log(`Source Language '${sourceLanguage}' to Destination Language '${destinationLanguage}'`);

                copyMissingKeys(sourceData[sourceLanguage], destinationData[destinationLanguage], destinationLanguage);
                writeJSONFile(destinationFile, destinationData);
            }
        });
    });
}

// Example usage
const sourceFile = 'en.json';
const destinationDir = '.';

copyMissingKeysRecursive(sourceFile, destinationDir);
