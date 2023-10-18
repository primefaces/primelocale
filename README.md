# Internationalization and Localization

The Locale API allows setting i18n and l7n options globally for the components. You can import json files in this repo and use them in the locale API in the Prime UI libraries.

- [PrimeReact](https://primefaces.org/primereact/locale/)
- [PrimeNG](https://primefaces.org/primeng/i18n)
- [PrimeVue](https://primevue.org/configuration/#locale)
- [PrimeFaces](https://primefaces.github.io/primefaces/14_0_0/#/core/localization?id=client-localization)

Prime UI libraries only provide English translations by default, if you"d like to share translations, please contribute to this repo.

## Default Locale Options

| Key |	Value
| --- | ---
| startsWith | Starts with
| contains | Contains
| notContains | Not contains
| endsWith | Ends with
| equals | Equals
| notEquals | Not equals
| noFilter | No Filter
| filter | Filter // only available for PrimeReact
| lt | Less than
| lte | Less than or equal to
| gt | Greater than
| gte | Greater than or equal to
| dateIs | Date is
| dateIsNot | Date is not
| dateBefore | Date is before
| dateAfter | Date is after
| custom | Custom  // only available for PrimeReact
| clear | Clear
| apply | Apply
| matchAll | Match All
| matchAny | Match Any
| addRule | Add Rule
| removeRule | Remove Rule
| accept | Yes
| reject | No
| choose | Choose
| upload | Upload
| cancel | Cancel
| completed | Completed
| pending | Pending
| fileSizeTypes | ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"],
| dayNames | ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
| dayNamesShort | ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
| dayNamesMin | ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]
| monthNames | ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
| monthNamesShort | ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
| chooseYear | Choose Year
| chooseMonth | Choose Month
| chooseDate | Choose Date
| prevDecade | Previous Decade
| nextDecade | Next Decade
| prevYear | Previous Year
| nextYear | Next Year
| prevMonth | Previous Month
| nextMonth | Next Month
| prevHour | Previous Hour
| nextHour | Next Hour
| prevMinute | Previous Minute
| nextMinute | Next Minute
| prevSecond | Previous Second
| nextSecond | Next Second
| am | am
| pm | pm
| today | Today
| now | Now
| weekHeader | Wk
| firstDayOfWeek | 0
| showMonthAfterYear | false
| dateFormat | mm/dd/yy
| weak | Weak
| medium | Medium
| strong | Strong
| passwordPrompt | Enter a password
| emptyFilterMessage | No results found // @deprecated Use "emptySearchMessage" option instead.
| searchMessage | {0} results are available
| selectionMessage | {0} items selected
| emptySelectionMessage | No selected item
| emptySearchMessage | No results found
| emptyMessage | No available options
| aria.trueLabel | True
| aria.falseLabel | False
| aria.nullLabel | Not Selected
| aria.star | 1 star
| aria.stars | {star} stars
| aria.selectAll | All items selected
| aria.unselectAll | All items unselected
| aria.close | Close
| aria.previous | Previous
| aria.next | Next
| aria.navigation | Navigation
| aria.scrollTop | Scroll Top
| aria.moveTop | Move Top
| aria.moveUp | Move Up
| aria.moveDown | Move Down
| aria.moveBottom | Move Bottom
| aria.moveToTarget | Move to Target
| aria.moveToSource | Move to Source
| aria.moveAllToTarget | Move All to Target
| aria.moveAllToSource | Move All to Source
| aria.pageLabel | Page {page}
| aria.firstPageLabel | First Page
| aria.lastPageLabel | Last Page
| aria.nextPageLabel | Next Page
| aria.previousPageLabel | Previous Page
| aria.rowsPerPageLabel | Rows per page
| aria.jumpToPageDropdownLabel | Jump to Page Dropdown
| aria.jumpToPageInputLabel | Jump to Page Input
| aria.selectRow | Row Selected
| aria.unselectRow | Row Unselected
| aria.expandRow | Row Expanded
| aria.collapseRow | Row Collapsed
| aria.showFilterMenu | Show Filter Menu
| aria.hideFilterMenu | Hide Filter Menu
| aria.filterOperator | Filter Operator
| aria.filterConstraint | Filter Constraint
| aria.editRow | Edit Row
| aria.saveEdit | Save Edit
| aria.cancelEdit | Cancel Edit
| aria.listView | List View
| aria.gridView | Grid View
| aria.slide | Slide
| aria.slideNumber | {slideNumber}
| aria.zoomImage | Zoom Image
| aria.zoomIn | Zoom In
| aria.zoomOut | Zoom Out
| aria.rotateRight | Rotate Right
| aria.rotateLeft | Rotate Left
