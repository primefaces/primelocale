[![npm version](https://badge.fury.io/js/primelocale.svg)](https://badge.fury.io/js/primelocale)
![NPM Downloads](https://img.shields.io/npm/dm/primelocale?color=purple)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![primelocale](https://snyk.io/advisor/npm-package/primelocale/badge.svg)](https://snyk.io/advisor/npm-package/primelocale)

# Internationalization and Localization

The Locale API allows setting i18n and l7n options globally for the components. You can import json files in this repo and use them in the locale API in the Prime UI libraries.

- [PrimeReact](https://primereact.org/locale/)
- [PrimeNG](https://primeng.org/configuration#locale)
- [PrimeVue](https://primevue.org/configuration/#locale)
- [PrimeFaces](https://primefaces.github.io/primefaces/14_0_0/#/core/localization?id=client-localization)

Prime UI libraries only provide English translations by default, if you"d like to share translations, please contribute to this repo.

## Download

PrimeLocale is available at [npm](https://www.npmjs.com/package/primelocale).

```
# Using npm
npm install primelocale

# Using yarn
yarn add primelocale

# Using pnpm
pnpm add primelocale
```

### JavaScript Usage

- [PrimeReact Sandbox](https://stackblitz.com/edit/axcck4?file=src%2FApp.tsx)

When copying the local file to use, it is advisable to remove the object key in the json. For example, instead of having 

```js
{
"en":
    {
    ...
    }
}
```

Use:
```js
{
...
}
```

## Default Locale Options

| Key |	Value
| --- | ---
| accept | Yes
| addRule | Add Rule
| am | am
| apply | Apply
| cancel | Cancel
| choose | Choose
| chooseDate | Choose Date
| chooseMonth | Choose Month
| chooseYear | Choose Year
| clear | Clear
| completed | Completed
| contains | Contains
| custom | Custom  // only available for PrimeReact
| dateAfter | Date is after
| dateBefore | Date is before
| dateFormat | mm/dd/yy
| dateIs | Date is
| dateIsNot | Date is not
| dayNames | ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
| dayNamesMin | ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]
| dayNamesShort | ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
| emptyFilterMessage | No results found // @deprecated Use "emptySearchMessage" option instead.
| emptyMessage | No available options
| emptySearchMessage | No results found
| emptySelectionMessage | No selected item
| endsWith | Ends with
| equals | Equals
| fileSizeTypes | ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"],
| filter | Filter // only available for PrimeReact
| firstDayOfWeek | 0
| gt | Greater than
| gte | Greater than or equal to
| lt | Less than
| lte | Less than or equal to
| matchAll | Match All
| matchAny | Match Any
| medium | Medium
| monthNames | ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
| monthNamesShort | ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
| nextDecade | Next Decade
| nextHour | Next Hour
| nextMinute | Next Minute
| nextMonth | Next Month
| nextSecond | Next Second
| nextYear | Next Year
| noFilter | No Filter
| notContains | Not contains
| notEquals | Not equals
| now | Now
| passwordPrompt | Enter a password
| pending | Pending
| pm | pm
| prevDecade | Previous Decade
| prevHour | Previous Hour
| prevMinute | Previous Minute
| prevMonth | Previous Month
| prevSecond | Previous Second
| prevYear | Previous Year
| reject | No
| removeRule | Remove Rule
| searchMessage | {0} results are available
| selectionMessage | {0} items selected
| showMonthAfterYear | false
| startsWith | Starts with
| strong | Strong
| today | Today
| upload | Upload
| weak | Weak
| weekHeader | Wk
| aria.cancelEdit | Cancel Edit
| aria.close | Close
| aria.collapseLabel | Collapse
| aria.collapseRow | Row Collapsed
| aria.editRow | Edit Row
| aria.expandLabel | Expand
| aria.expandRow | Row Expanded
| aria.falseLabel | False
| aria.filterConstraint | Filter Constraint
| aria.filterOperator | Filter Operator
| aria.firstPageLabel | First Page
| aria.gridView | Grid View
| aria.hideFilterMenu | Hide Filter Menu
| aria.jumpToPageDropdownLabel | Jump to Page Dropdown
| aria.jumpToPageInputLabel | Jump to Page Input
| aria.lastPageLabel | Last Page
| aria.listView | List View
| aria.moveAllToSource | Move All to Source
| aria.moveAllToTarget | Move All to Target
| aria.moveBottom | Move Bottom
| aria.moveDown | Move Down
| aria.moveToSource | Move to Source
| aria.moveToTarget | Move to Target
| aria.moveTop | Move Top
| aria.moveUp | Move Up
| aria.navigation | Navigation
| aria.next | Next
| aria.nextPageLabel | Next Page
| aria.nullLabel | Not Selected
| aria.pageLabel | Page {page}
| aria.passwordHide | Password Hide
| aria.passwordShow | Password Show
| aria.previous | Previous
| aria.previousPageLabel | Previous Page
| aria.removeLabel | Remove
| aria.rotateLeft | Rotate Left
| aria.rotateRight | Rotate Right
| aria.rowsPerPageLabel | Rows per page
| aria.saveEdit | Save Edit
| aria.scrollTop | Scroll Top
| aria.selectAll | All items selected
| aria.selectLabel | Select
| aria.selectRow | Row Selected
| aria.showFilterMenu | Show Filter Menu
| aria.slide | Slide
| aria.slideNumber | {slideNumber}
| aria.star | 1 star
| aria.stars | {star} stars
| aria.trueLabel | True
| aria.unselectAll | All items unselected
| aria.unselectLabel | Unselect
| aria.unselectRow | Row Unselected
| aria.zoomImage | Zoom Image
| aria.zoomIn | Zoom In
| aria.zoomOut | Zoom Out

## Adding New Values

To add a new value to the translation files, follow these steps:

1. **Add to `en.json`**: First, add the new key-value pair to the `en.json` file. This file serves as the source for all translations.

2. **Obtain Google Translate API Key**: You'll need a Google Translate API key to run the translation script. If you don't have one, follow Google's instructions to obtain an API key.

3. **Update `script-translate.js`**: Once you have the API key, update the `script-translate.js` file. Locate the following line and replace `'REPLACEME'` with your actual API key:

   ```js
   const apiKey = 'REPLACEME'; // Replace with your API key
   ```

   **Note**: Be careful not to commit this change to version control to keep your API key private.

4. **Run the Translation Script**: After adding your new key to `en.json` and updating the API key, run the translation script:

   ```bash
   node script-translate.js
   ```

   This script will:
   - Read all language JSON files
   - Identify the new key(s) added to `en.json`
   - Translate the new value(s) to all other languages
   - Update all language files with the new translations

5. **Review Translations**: After running the script, it's a good practice to review the generated translations for accuracy.

By following these steps, you ensure that new values are consistently added and translated across all language files in your project.

## Publishing

Adjust the version in the `package.json` if necessary, then

```bash
npm login
# This will run npm run build automatically
npm publish --access public
```

Then upload code to github, create tag & release.

## License

Licensed under the MIT License.
