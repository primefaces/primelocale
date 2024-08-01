const fs = require('fs');
const path = require('path');

// Set the directory where your JSON files are located
const jsonDir = '.';

// Read all files in the directory
fs.readdir(jsonDir, (err, files) => {
  if (err) {
    console.error(`Error reading directory: ${err}`);
    return;
  }

  // Filter out JSON files
  files.filter(file => path.extname(file) === '.json').forEach(file => {
    // Get the filename without the extension
    const filename = path.basename(file, '.json').replace(/-/g, '_');

    // Print the import statement
    console.log(`import locale_${filename} from 'primelocale/${file}';`);
  });
});