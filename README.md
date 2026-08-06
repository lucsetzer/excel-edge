# ExcelEdge

> Your all-in-one Excel reference toolkit — formulas, error codes, and keyboard shortcuts for Mac & Windows users.

**Live site:** `https://YOUR-USERNAME.github.io/excel-edge`

---

## Pages

| Page | File | Description |
|---|---|---|
| Home | `index.html` | Landing page with links to all tools |
| Formula Lookup | `formulas.html` | Searchable database of 70+ Excel formulas |
| Error Lookup | `errors.html` | All Excel error codes with causes & fixes |
| Mac Shortcuts | `mac-shortcuts.html` | Mac vs Windows shortcut comparison |

---

## Publishing to GitHub Pages (2 steps)

1. Push this folder to a new GitHub repo named `excel-edge`
2. Go to **Settings → Pages → Source → Deploy from branch → `main` → `/ (root)`**
3. Your site will be live at `https://YOUR-USERNAME.github.io/excel-edge` in ~60 seconds

---

## Adding a New Page

1. Create a new `.html` file (e.g., `pivot-tables.html`) — copy any existing page as a template
2. Add your data to a new `js/your-topic-data.js` file
3. Add a card to `index.html` in the `.tools-grid`
4. Add a nav link to `js/nav.js` in the `NAV_LINKS` array
5. Push to GitHub — the site updates automatically

---

## File Structure

```
excel-edge/
├── index.html              ← Home page
├── formulas.html           ← Formula lookup
├── errors.html             ← Error lookup
├── mac-shortcuts.html      ← Mac keyboard shortcuts
├── css/
│   └── style.css          ← Shared design system (edit here for global style changes)
├── js/
│   ├── nav.js              ← Shared navigation (edit here to add/remove nav links)
│   ├── formulas-data.js    ← All formula data
│   ├── errors-data.js      ← All error data
│   └── shortcuts-data.js   ← All shortcut data
└── README.md
```

---

## Adding Data

### New Formula (`js/formulas-data.js`)
Add an object to the `FORMULAS` array:
```js
{
  name: 'MYFORMULA',
  category: 'math',           // math | lookup | text | datetime | logical | statistical | financial | info
  description: 'What it does.',
  syntax: 'MYFORMULA(arg1, arg2)',
  example: '=MYFORMULA(A1, B1)',
  tags: ['keyword1', 'keyword2'],
}
```

### New Error (`js/errors-data.js`)
Add an object to the `ERRORS` array:
```js
{
  code: '#MYERROR!',
  title: 'Short Title',
  meaning: 'What the error means.',
  causes: ['Cause 1', 'Cause 2'],
  fixes: ['Fix 1', 'Fix 2'],
  fix_formula: '=IFERROR(...)',
  color: 'red',
}
```

### New Shortcut (`js/shortcuts-data.js`)
Add an object to the `SHORTCUTS` array:
```js
{
  category: 'Editing',
  task: 'What the shortcut does',
  win: [['Ctrl', 'Key']],
  mac: [['⌘', 'Key']],
  notes: 'Any differences or gotchas.',
}
```


---

*Not affiliated with Microsoft Corporation.*


