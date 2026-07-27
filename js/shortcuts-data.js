// ─── Mac vs Windows Excel Shortcuts ─────────────────────────
// Each entry: { task, win, mac, notes, category }
// win/mac are arrays of key combos. Each combo is an array of key strings.
// e.g. [["Ctrl","C"]] or [["Ctrl","C"],["Ctrl","Insert"]] for alternatives.

const SHORTCUTS = [
  // ── NAVIGATION ────────────────────────────────────────────
  {
    category: 'Navigation',
    task: 'Move to next cell',
    win: [['Tab']],
    mac: [['Tab']],
    notes: ''
  },
  {
    category: 'Navigation',
    task: 'Move to previous cell',
    win: [['Shift','Tab']],
    mac: [['Shift','Tab']],
    notes: ''
  },
  {
    category: 'Navigation',
    task: 'Move to beginning of row',
    win: [['Home']],
    mac: [['Fn','←']],
    notes: 'Mac keyboards lack a dedicated Home key — use Fn+Left Arrow'
  },
  {
    category: 'Navigation',
    task: 'Move to end of row (last used cell)',
    win: [['End']],
    mac: [['Fn','→']],
    notes: 'Mac keyboards lack a dedicated End key — use Fn+Right Arrow'
  },
  {
    category: 'Navigation',
    task: 'Move to cell A1',
    win: [['Ctrl','Home']],
    mac: [['Ctrl','Fn','←']],
    notes: ''
  },
  {
    category: 'Navigation',
    task: 'Move to last used cell',
    win: [['Ctrl','End']],
    mac: [['Ctrl','Fn','→']],
    notes: ''
  },
  {
    category: 'Navigation',
    task: 'Move one screen down',
    win: [['Page Down']],
    mac: [['Fn','↓']],
    notes: ''
  },
  {
    category: 'Navigation',
    task: 'Move one screen up',
    win: [['Page Up']],
    mac: [['Fn','↑']],
    notes: ''
  },
  {
    category: 'Navigation',
    task: 'Move one screen right',
    win: [['Alt','Page Down']],
    mac: [['Fn','Option','↓']],
    notes: ''
  },
  {
    category: 'Navigation',
    task: 'Move one screen left',
    win: [['Alt','Page Up']],
    mac: [['Fn','Option','↑']],
    notes: ''
  },
  {
    category: 'Navigation',
    task: 'Go To (specific cell)',
    win: [['F5'], ['Ctrl','G']],
    mac: [['Fn','F5'], ['Ctrl','G']],
    notes: 'F5 requires Fn key on Mac; Ctrl+G works on both'
  },
  {
    category: 'Navigation',
    task: 'Move between sheets (next)',
    win: [['Ctrl','Page Down']],
    mac: [['Option','→']],
    notes: 'Completely different shortcuts!'
  },
  {
    category: 'Navigation',
    task: 'Move between sheets (prev)',
    win: [['Ctrl','Page Up']],
    mac: [['Option','←']],
    notes: 'Completely different shortcuts!'
  },
  {
    category: 'Navigation',
    task: 'Jump to edge of data region',
    win: [['Ctrl','Arrow']],
    mac: [['⌘','Arrow']],
    notes: 'Windows uses Ctrl; Mac uses Command (⌘)'
  },

  // ── SELECTION ─────────────────────────────────────────────
  {
    category: 'Selection',
    task: 'Select entire row',
    win: [['Shift','Space']],
    mac: [['Shift','Space']],
    notes: ''
  },
  {
    category: 'Selection',
    task: 'Select entire column',
    win: [['Ctrl','Space']],
    mac: [['Ctrl','Space']],
    notes: ''
  },
  {
    category: 'Selection',
    task: 'Select all cells (entire sheet)',
    win: [['Ctrl','A']],
    mac: [['⌘','A']],
    notes: ''
  },
  {
    category: 'Selection',
    task: 'Extend selection to beginning of row',
    win: [['Shift','Home']],
    mac: [['Shift','Fn','←']],
    notes: ''
  },
  {
    category: 'Selection',
    task: 'Extend selection to last cell in row',
    win: [['Shift','End']],
    mac: [['Shift','Fn','→']],
    notes: ''
  },
  {
    category: 'Selection',
    task: 'Extend selection to last used cell',
    win: [['Ctrl','Shift','End']],
    mac: [['⌘','Shift','Fn','→']],
    notes: 'Mac requires an extra key'
  },
  {
    category: 'Selection',
    task: 'Extend selection by one screen down',
    win: [['Shift','Page Down']],
    mac: [['Shift','Fn','↓']],
    notes: ''
  },
  {
    category: 'Selection',
    task: 'Select to edge of data region',
    win: [['Ctrl','Shift','Arrow']],
    mac: [['⌘','Shift','Arrow']],
    notes: ''
  },

  // ── EDITING ──────────────────────────────────────────────
  {
    category: 'Editing',
    task: 'Copy',
    win: [['Ctrl','C']],
    mac: [['⌘','C']],
    notes: ''
  },
  {
    category: 'Editing',
    task: 'Cut',
    win: [['Ctrl','X']],
    mac: [['⌘','X']],
    notes: ''
  },
  {
    category: 'Editing',
    task: 'Paste',
    win: [['Ctrl','V']],
    mac: [['⌘','V']],
    notes: ''
  },
  {
    category: 'Editing',
    task: 'Paste Special',
    win: [['Ctrl','Alt','V']],
    mac: [['⌘','Ctrl','V']],
    notes: 'Different modifier combo — memorize this one!'
  },
  {
    category: 'Editing',
    task: 'Undo',
    win: [['Ctrl','Z']],
    mac: [['⌘','Z']],
    notes: ''
  },
  {
    category: 'Editing',
    task: 'Redo',
    win: [['Ctrl','Y']],
    mac: [['⌘','Y']],
    notes: ''
  },
  {
    category: 'Editing',
    task: 'Edit active cell (enter edit mode)',
    win: [['F2']],
    mac: [['Fn','F2'], ['Ctrl','U']],
    notes: 'F2 needs Fn key on Mac; Ctrl+U is often easier'
  },
  {
    category: 'Editing',
    task: 'Delete cell contents',
    win: [['Delete']],
    mac: [['Delete']],
    notes: 'Mac Delete = Windows Backspace. On Mac: Fn+Delete for forward delete'
  },
  {
    category: 'Editing',
    task: 'Delete cell (shift cells up/left)',
    win: [['Ctrl','-']],
    mac: [['⌘','-']],
    notes: ''
  },
  {
    category: 'Editing',
    task: 'Insert cells',
    win: [['Ctrl','Shift','+']],
    mac: [['⌘','Shift','+']],
    notes: ''
  },
  {
    category: 'Editing',
    task: 'Find',
    win: [['Ctrl','F']],
    mac: [['⌘','F']],
    notes: ''
  },
  {
    category: 'Editing',
    task: 'Find & Replace',
    win: [['Ctrl','H']],
    mac: [['⌘','H']],
    notes: ''
  },
  {
    category: 'Editing',
    task: 'Fill Down',
    win: [['Ctrl','D']],
    mac: [['⌘','D']],
    notes: ''
  },
  {
    category: 'Editing',
    task: 'Fill Right',
    win: [['Ctrl','R']],
    mac: [['⌘','R']],
    notes: ''
  },
  {
    category: 'Editing',
    task: 'Flash Fill (auto-complete pattern)',
    win: [['Ctrl','E']],
    mac: [['⌘','E']],
    notes: ''
  },

  // ── FORMATTING ───────────────────────────────────────────
  {
    category: 'Formatting',
    task: 'Bold',
    win: [['Ctrl','B']],
    mac: [['⌘','B']],
    notes: ''
  },
  {
    category: 'Formatting',
    task: 'Italic',
    win: [['Ctrl','I']],
    mac: [['⌘','I']],
    notes: ''
  },
  {
    category: 'Formatting',
    task: 'Underline',
    win: [['Ctrl','U']],
    mac: [['⌘','U']],
    notes: ''
  },
  {
    category: 'Formatting',
    task: 'Strikethrough',
    win: [['Ctrl','5']],
    mac: [['⌘','Shift','X']],
    notes: 'Completely different — Windows uses Ctrl+5'
  },
  {
    category: 'Formatting',
    task: 'Format Cells dialog',
    win: [['Ctrl','1']],
    mac: [['⌘','1']],
    notes: ''
  },
  {
    category: 'Formatting',
    task: 'Apply Currency format',
    win: [['Ctrl','Shift','$']],
    mac: [['⌘','Shift','$']],
    notes: ''
  },
  {
    category: 'Formatting',
    task: 'Apply Percentage format',
    win: [['Ctrl','Shift','%']],
    mac: [['⌘','Shift','%']],
    notes: ''
  },
  {
    category: 'Formatting',
    task: 'Apply General number format',
    win: [['Ctrl','Shift','~']],
    mac: [['⌘','Shift','~']],
    notes: ''
  },
  {
    category: 'Formatting',
    task: 'Apply Date format (DD-MMM-YY)',
    win: [['Ctrl','Shift','#']],
    mac: [['⌘','Shift','#']],
    notes: ''
  },
  {
    category: 'Formatting',
    task: 'Apply Time format (HH:MM AM/PM)',
    win: [['Ctrl','Shift','@']],
    mac: [['⌘','Shift','@']],
    notes: ''
  },
  {
    category: 'Formatting',
    task: 'Increase font size',
    win: [['Alt','H','F','G']],
    mac: [['⌘','Shift','>']],
    notes: 'Windows uses Ribbon Alt key navigation (not available on Mac)'
  },
  {
    category: 'Formatting',
    task: 'Add borders (outline)',
    win: [['Ctrl','Shift','&']],
    mac: [['⌘','Option','0']],
    notes: 'Completely different shortcuts!'
  },

  // ── FORMULAS ─────────────────────────────────────────────
  {
    category: 'Formulas',
    task: 'Enter a formula (start)',
    win: [['=']],
    mac: [['=']],
    notes: ''
  },
  {
    category: 'Formulas',
    task: 'Toggle absolute/relative reference ($)',
    win: [['F4']],
    mac: [['Fn','F4'], ['⌘','T']],
    notes: 'F4 needs Fn on Mac; ⌘+T is the easier Mac alternative'
  },
  {
    category: 'Formulas',
    task: 'AutoSum selected range',
    win: [['Alt','=']],
    mac: [['⌘','Shift','T']],
    notes: 'One of the biggest differences — Alt+= on Windows doesn\'t work on Mac'
  },
  {
    category: 'Formulas',
    task: 'Insert function dialog',
    win: [['Shift','F3']],
    mac: [['Shift','Fn','F3']],
    notes: ''
  },
  {
    category: 'Formulas',
    task: 'Show/hide formulas in cells',
    win: [['Ctrl','`']],
    mac: [['Ctrl','`']],
    notes: 'Same on both! (backtick key)'
  },
  {
    category: 'Formulas',
    task: 'Evaluate formula (step through)',
    win: [['Alt','M','V']],
    mac: [['N/A']],
    notes: 'Ribbon-based shortcut — not available on Mac. Use Formulas > Evaluate Formula menu instead'
  },
  {
    category: 'Formulas',
    task: 'Enter array formula',
    win: [['Ctrl','Shift','Enter']],
    mac: [['⌘','Shift','Enter']],
    notes: 'Required for legacy array formulas (not needed for modern dynamic arrays)'
  },
  {
    category: 'Formulas',
    task: 'Recalculate all formulas',
    win: [['F9']],
    mac: [['Fn','F9']],
    notes: ''
  },
  {
    category: 'Formulas',
    task: 'Name a range (Name Box)',
    win: [['Ctrl','F3']],
    mac: [['Ctrl','Fn','F3']],
    notes: ''
  },

  // ── FILE & WORKBOOK ──────────────────────────────────────
  {
    category: 'File & Workbook',
    task: 'Save',
    win: [['Ctrl','S']],
    mac: [['⌘','S']],
    notes: ''
  },
  {
    category: 'File & Workbook',
    task: 'Save As',
    win: [['F12']],
    mac: [['⌘','Shift','S']],
    notes: 'F12 doesn\'t work on Mac for this — use ⌘+Shift+S'
  },
  {
    category: 'File & Workbook',
    task: 'Open file',
    win: [['Ctrl','O']],
    mac: [['⌘','O']],
    notes: ''
  },
  {
    category: 'File & Workbook',
    task: 'New workbook',
    win: [['Ctrl','N']],
    mac: [['⌘','N']],
    notes: ''
  },
  {
    category: 'File & Workbook',
    task: 'Print',
    win: [['Ctrl','P']],
    mac: [['⌘','P']],
    notes: ''
  },
  {
    category: 'File & Workbook',
    task: 'Close workbook',
    win: [['Ctrl','W']],
    mac: [['⌘','W']],
    notes: ''
  },
  {
    category: 'File & Workbook',
    task: 'Insert new worksheet',
    win: [['Shift','F11']],
    mac: [['Shift','Fn','F11']],
    notes: ''
  },
  {
    category: 'File & Workbook',
    task: 'Switch between open workbooks',
    win: [['Ctrl','Tab']],
    mac: [['⌘','`']],
    notes: 'Mac uses Command+backtick to cycle through windows'
  },

  // ── VPN / FUNCTION KEY TIPS ──────────────────────────────
  {
    category: 'VPN & Function Key Tips',
    task: 'Use F1–F12 keys in Excel on Mac',
    win: [['F1']],
    mac: [['Fn','F1']],
    notes: 'On Mac, F-keys control brightness/volume by default. Hold Fn to send the F-key to Excel. You can reverse this in System Settings > Keyboard'
  },
  {
    category: 'VPN & Function Key Tips',
    task: 'Access Ribbon shortcuts (Alt key menu)',
    win: [['Alt']],
    mac: [['N/A']],
    notes: 'Windows lets you press Alt to navigate the Ribbon with letters. This feature does NOT exist in Mac Excel. Use the menu bar instead.'
  },
  {
    category: 'VPN & Function Key Tips',
    task: 'Right-click context menu via keyboard',
    win: [['Menu key']],
    mac: [['Ctrl','Click']],
    notes: 'Mac keyboards have no Menu key. Use Ctrl+Click or two-finger tap on trackpad'
  },
  {
    category: 'VPN & Function Key Tips',
    task: 'Insert current date',
    win: [['Ctrl',';']],
    mac: [['Ctrl',';']],
    notes: 'Same! One of the rare identical shortcuts'
  },
  {
    category: 'VPN & Function Key Tips',
    task: 'Insert current time',
    win: [['Ctrl','Shift',';']],
    mac: [['⌘',';']],
    notes: 'Different modifiers — Windows needs Shift, Mac uses just ⌘'
  },
];
