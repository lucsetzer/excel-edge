// ─── Excel Formula Data ──────────────────────────────────────
// Add new formulas here — the page auto-renders them.

const FORMULAS = [
  // ── MATH & TRIG ──────────────────────────────────────────
  {
    name: 'SUM',
    category: 'math',
    description: 'Adds all the numbers in a range of cells.',
    syntax: 'SUM(number1, [number2], ...)',
    example: '=SUM(A1:A10)',
    tags: ['add', 'total', 'sum', 'plus']
  },
  {
    name: 'SUMIF',
    category: 'math',
    description: 'Adds cells that meet a single condition.',
    syntax: 'SUMIF(range, criteria, [sum_range])',
    example: '=SUMIF(A1:A10, ">100", B1:B10)',
    tags: ['add', 'condition', 'filter', 'if']
  },
  {
    name: 'SUMIFS',
    category: 'math',
    description: 'Adds cells that meet multiple criteria.',
    syntax: 'SUMIFS(sum_range, range1, criteria1, [range2, criteria2]...)',
    example: '=SUMIFS(C1:C10, A1:A10, "East", B1:B10, ">500")',
    tags: ['add', 'multiple conditions', 'filter']
  },
  {
    name: 'ROUND',
    category: 'math',
    description: 'Rounds a number to a specified number of digits.',
    syntax: 'ROUND(number, num_digits)',
    example: '=ROUND(3.14159, 2)  → 3.14',
    tags: ['round', 'decimal', 'precision']
  },
  {
    name: 'ROUNDUP',
    category: 'math',
    description: 'Always rounds a number up (away from zero).',
    syntax: 'ROUNDUP(number, num_digits)',
    example: '=ROUNDUP(2.1, 0)  → 3',
    tags: ['round', 'ceiling', 'up']
  },
  {
    name: 'ROUNDDOWN',
    category: 'math',
    description: 'Always rounds a number down (toward zero).',
    syntax: 'ROUNDDOWN(number, num_digits)',
    example: '=ROUNDDOWN(2.9, 0)  → 2',
    tags: ['round', 'floor', 'down']
  },
  {
    name: 'ABS',
    category: 'math',
    description: 'Returns the absolute (positive) value of a number.',
    syntax: 'ABS(number)',
    example: '=ABS(-45)  → 45',
    tags: ['absolute', 'positive', 'negative']
  },
  {
    name: 'MOD',
    category: 'math',
    description: 'Returns the remainder after dividing two numbers.',
    syntax: 'MOD(number, divisor)',
    example: '=MOD(10, 3)  → 1',
    tags: ['remainder', 'divide', 'modulo']
  },
  {
    name: 'INT',
    category: 'math',
    description: 'Rounds a number down to the nearest integer.',
    syntax: 'INT(number)',
    example: '=INT(8.9)  → 8',
    tags: ['integer', 'truncate', 'whole number']
  },
  {
    name: 'POWER',
    category: 'math',
    description: 'Returns a number raised to a power.',
    syntax: 'POWER(number, power)',
    example: '=POWER(2, 10)  → 1024',
    tags: ['exponent', 'power', 'squared']
  },
  {
    name: 'SQRT',
    category: 'math',
    description: 'Returns the positive square root of a number.',
    syntax: 'SQRT(number)',
    example: '=SQRT(144)  → 12',
    tags: ['square root', 'root']
  },
  {
    name: 'RAND',
    category: 'math',
    description: 'Returns a random number between 0 and 1 (recalculates on each change).',
    syntax: 'RAND()',
    example: '=RAND()  → 0.7392...',
    tags: ['random', 'generate']
  },
  {
    name: 'RANDBETWEEN',
    category: 'math',
    description: 'Returns a random integer between two values.',
    syntax: 'RANDBETWEEN(bottom, top)',
    example: '=RANDBETWEEN(1, 100)',
    tags: ['random', 'integer', 'generate']
  },
  {
    name: 'CEILING',
    category: 'math',
    description: 'Rounds a number up to the nearest multiple of significance.',
    syntax: 'CEILING(number, significance)',
    example: '=CEILING(2.2, 0.5)  → 2.5',
    tags: ['round', 'up', 'ceiling']
  },
  {
    name: 'FLOOR',
    category: 'math',
    description: 'Rounds a number down to the nearest multiple of significance.',
    syntax: 'FLOOR(number, significance)',
    example: '=FLOOR(2.8, 0.5)  → 2.5',
    tags: ['round', 'down', 'floor']
  },

  // ── COUNTING ─────────────────────────────────────────────
  {
    name: 'COUNT',
    category: 'math',
    description: 'Counts cells that contain numbers.',
    syntax: 'COUNT(value1, [value2], ...)',
    example: '=COUNT(A1:A20)',
    tags: ['count', 'numbers']
  },
  {
    name: 'COUNTA',
    category: 'math',
    description: 'Counts cells that are not empty (any type of value).',
    syntax: 'COUNTA(value1, [value2], ...)',
    example: '=COUNTA(A1:A20)',
    tags: ['count', 'non-empty', 'all']
  },
  {
    name: 'COUNTBLANK',
    category: 'math',
    description: 'Counts empty cells in a range.',
    syntax: 'COUNTBLANK(range)',
    example: '=COUNTBLANK(A1:A20)',
    tags: ['count', 'empty', 'blank']
  },
  {
    name: 'COUNTIF',
    category: 'math',
    description: 'Counts cells that meet a single condition.',
    syntax: 'COUNTIF(range, criteria)',
    example: '=COUNTIF(A1:A20, ">0")',
    tags: ['count', 'condition', 'if', 'filter']
  },
  {
    name: 'COUNTIFS',
    category: 'math',
    description: 'Counts cells that meet multiple criteria.',
    syntax: 'COUNTIFS(range1, criteria1, [range2, criteria2]...)',
    example: '=COUNTIFS(A1:A10,"East",B1:B10,">100")',
    tags: ['count', 'multiple conditions', 'filter']
  },

  // ── LOOKUP & REFERENCE ────────────────────────────────────
  {
    name: 'VLOOKUP',
    category: 'lookup',
    description: 'Looks up a value in the first column of a table and returns a value in the same row from another column.',
    syntax: 'VLOOKUP(lookup_value, table_array, col_index_num, [range_lookup])',
    example: '=VLOOKUP(A2, D:F, 2, FALSE)',
    tags: ['lookup', 'find', 'search', 'table', 'vertical']
  },
  {
    name: 'XLOOKUP',
    category: 'lookup',
    description: 'Modern replacement for VLOOKUP. Searches a range and returns a matching item. Works in any direction.',
    syntax: 'XLOOKUP(lookup_value, lookup_array, return_array, [if_not_found], [match_mode], [search_mode])',
    example: '=XLOOKUP(A2, D:D, E:E, "Not found")',
    tags: ['lookup', 'find', 'search', 'modern', 'xlookup']
  },
  {
    name: 'HLOOKUP',
    category: 'lookup',
    description: 'Looks up a value in the top row of a table and returns a value from a specified row.',
    syntax: 'HLOOKUP(lookup_value, table_array, row_index_num, [range_lookup])',
    example: '=HLOOKUP("Q1", A1:D5, 3, FALSE)',
    tags: ['lookup', 'horizontal', 'find']
  },
  {
    name: 'INDEX',
    category: 'lookup',
    description: 'Returns the value of a cell at the intersection of a specific row and column.',
    syntax: 'INDEX(array, row_num, [col_num])',
    example: '=INDEX(A1:C10, 3, 2)',
    tags: ['lookup', 'return', 'position', 'row', 'column']
  },
  {
    name: 'MATCH',
    category: 'lookup',
    description: 'Returns the relative position of an item in a range that matches a specified value.',
    syntax: 'MATCH(lookup_value, lookup_array, [match_type])',
    example: '=MATCH("Apple", A1:A10, 0)',
    tags: ['position', 'find', 'search', 'row number']
  },
  {
    name: 'INDEX+MATCH',
    category: 'lookup',
    description: 'Powerful combination: use MATCH to find the row, INDEX to return the value. More flexible than VLOOKUP.',
    syntax: 'INDEX(return_range, MATCH(lookup_value, lookup_range, 0))',
    example: '=INDEX(B1:B10, MATCH("Jones", A1:A10, 0))',
    tags: ['lookup', 'find', 'flexible', 'match index']
  },
  {
    name: 'CHOOSE',
    category: 'lookup',
    description: 'Returns a value from a list of values based on an index number.',
    syntax: 'CHOOSE(index_num, value1, [value2], ...)',
    example: '=CHOOSE(2,"Red","Green","Blue")  → Green',
    tags: ['choose', 'list', 'select', 'index']
  },
  {
    name: 'OFFSET',
    category: 'lookup',
    description: 'Returns a reference offset from a starting cell by a specified number of rows and columns.',
    syntax: 'OFFSET(reference, rows, cols, [height], [width])',
    example: '=OFFSET(A1, 3, 1)',
    tags: ['offset', 'dynamic', 'reference', 'shift']
  },
  {
    name: 'INDIRECT',
    category: 'lookup',
    description: 'Returns the reference specified by a text string. Useful for dynamic references.',
    syntax: 'INDIRECT(ref_text, [a1])',
    example: '=INDIRECT("Sheet2!A1")',
    tags: ['indirect', 'dynamic', 'reference', 'text']
  },

  // ── TEXT ─────────────────────────────────────────────────
  {
    name: 'CONCATENATE',
    category: 'text',
    description: 'Joins two or more text strings into one (legacy — use CONCAT or & instead).',
    syntax: 'CONCATENATE(text1, [text2], ...)',
    example: '=CONCATENATE(A1," ",B1)',
    tags: ['join', 'combine', 'text', 'merge', 'string']
  },
  {
    name: 'CONCAT',
    category: 'text',
    description: 'Joins text from multiple ranges and strings. Replaces CONCATENATE.',
    syntax: 'CONCAT(text1, [text2], ...)',
    example: '=CONCAT(A1:A3)',
    tags: ['join', 'combine', 'text', 'merge']
  },
  {
    name: 'TEXTJOIN',
    category: 'text',
    description: 'Joins text from a range with a delimiter, optionally ignoring empty cells.',
    syntax: 'TEXTJOIN(delimiter, ignore_empty, text1, [text2], ...)',
    example: '=TEXTJOIN(", ", TRUE, A1:A5)',
    tags: ['join', 'delimiter', 'comma', 'list', 'combine']
  },
  {
    name: 'LEFT',
    category: 'text',
    description: 'Extracts a specified number of characters from the left of a text string.',
    syntax: 'LEFT(text, [num_chars])',
    example: '=LEFT("ExcelEdge", 5)  → Excel',
    tags: ['extract', 'left', 'start', 'substring', 'characters']
  },
  {
    name: 'RIGHT',
    category: 'text',
    description: 'Extracts a specified number of characters from the right of a text string.',
    syntax: 'RIGHT(text, [num_chars])',
    example: '=RIGHT("ExcelEdge", 4)  → Edge',
    tags: ['extract', 'right', 'end', 'substring', 'characters']
  },
  {
    name: 'MID',
    category: 'text',
    description: 'Extracts characters from the middle of a text string, starting at a specified position.',
    syntax: 'MID(text, start_num, num_chars)',
    example: '=MID("ExcelEdge", 3, 3)  → cel',
    tags: ['extract', 'middle', 'substring', 'characters']
  },
  {
    name: 'LEN',
    category: 'text',
    description: 'Returns the number of characters in a text string.',
    syntax: 'LEN(text)',
    example: '=LEN("Hello")  → 5',
    tags: ['length', 'count', 'characters', 'string']
  },
  {
    name: 'FIND',
    category: 'text',
    description: 'Returns the position of one text string within another (case-sensitive).',
    syntax: 'FIND(find_text, within_text, [start_num])',
    example: '=FIND("@", "user@email.com")  → 5',
    tags: ['find', 'position', 'search', 'case sensitive']
  },
  {
    name: 'SEARCH',
    category: 'text',
    description: 'Finds position of text within a string. Like FIND but NOT case-sensitive.',
    syntax: 'SEARCH(find_text, within_text, [start_num])',
    example: '=SEARCH("excel", "I Love Excel")  → 8',
    tags: ['find', 'position', 'search', 'case insensitive']
  },
  {
    name: 'SUBSTITUTE',
    category: 'text',
    description: 'Replaces specific text in a string with new text.',
    syntax: 'SUBSTITUTE(text, old_text, new_text, [instance_num])',
    example: '=SUBSTITUTE("Hello World","World","Excel")',
    tags: ['replace', 'substitute', 'swap', 'text']
  },
  {
    name: 'TRIM',
    category: 'text',
    description: 'Removes all extra spaces from text, leaving only single spaces between words.',
    syntax: 'TRIM(text)',
    example: '=TRIM("  Hello   World  ")  → Hello World',
    tags: ['clean', 'spaces', 'trim', 'remove']
  },
  {
    name: 'UPPER',
    category: 'text',
    description: 'Converts text to all uppercase letters.',
    syntax: 'UPPER(text)',
    example: '=UPPER("hello")  → HELLO',
    tags: ['uppercase', 'caps', 'convert']
  },
  {
    name: 'LOWER',
    category: 'text',
    description: 'Converts text to all lowercase letters.',
    syntax: 'LOWER(text)',
    example: '=LOWER("HELLO")  → hello',
    tags: ['lowercase', 'convert', 'case']
  },
  {
    name: 'PROPER',
    category: 'text',
    description: 'Capitalizes the first letter of each word in a text string.',
    syntax: 'PROPER(text)',
    example: '=PROPER("john doe")  → John Doe',
    tags: ['capitalize', 'title case', 'proper case', 'name']
  },
  {
    name: 'TEXT',
    category: 'text',
    description: 'Formats a number and converts it to text using a format code.',
    syntax: 'TEXT(value, format_text)',
    example: '=TEXT(TODAY(),"MM/DD/YYYY")',
    tags: ['format', 'convert', 'number to text', 'date format']
  },
  {
    name: 'VALUE',
    category: 'text',
    description: 'Converts a text string that represents a number into a number.',
    syntax: 'VALUE(text)',
    example: '=VALUE("1,234")  → 1234',
    tags: ['convert', 'text to number', 'parse']
  },

  // ── DATE & TIME ───────────────────────────────────────────
  {
    name: 'TODAY',
    category: 'datetime',
    description: 'Returns the current date. Updates every time the worksheet is recalculated.',
    syntax: 'TODAY()',
    example: '=TODAY()  → 07/27/2025',
    tags: ['today', 'current date', 'date']
  },
  {
    name: 'NOW',
    category: 'datetime',
    description: 'Returns the current date and time.',
    syntax: 'NOW()',
    example: '=NOW()  → 07/27/2025 10:30',
    tags: ['now', 'current time', 'timestamp', 'datetime']
  },
  {
    name: 'DATE',
    category: 'datetime',
    description: 'Creates a date value from separate year, month, and day numbers.',
    syntax: 'DATE(year, month, day)',
    example: '=DATE(2025, 12, 31)',
    tags: ['date', 'create', 'build']
  },
  {
    name: 'DATEDIF',
    category: 'datetime',
    description: 'Calculates the difference between two dates in days, months, or years.',
    syntax: 'DATEDIF(start_date, end_date, unit)',
    example: '=DATEDIF(A1, TODAY(), "Y")  → years',
    tags: ['date difference', 'age', 'between', 'duration']
  },
  {
    name: 'EDATE',
    category: 'datetime',
    description: 'Returns the date that is a specified number of months before or after a date.',
    syntax: 'EDATE(start_date, months)',
    example: '=EDATE(TODAY(), 3)  → 3 months from now',
    tags: ['date', 'months', 'future', 'past', 'add months']
  },
  {
    name: 'EOMONTH',
    category: 'datetime',
    description: 'Returns the last day of the month, a specified number of months from a date.',
    syntax: 'EOMONTH(start_date, months)',
    example: '=EOMONTH(TODAY(), 0)  → last day of this month',
    tags: ['end of month', 'last day', 'month end']
  },
  {
    name: 'NETWORKDAYS',
    category: 'datetime',
    description: 'Returns the number of working days between two dates (excludes weekends + holidays).',
    syntax: 'NETWORKDAYS(start_date, end_date, [holidays])',
    example: '=NETWORKDAYS(A1, B1)',
    tags: ['working days', 'business days', 'weekdays', 'workday']
  },
  {
    name: 'WORKDAY',
    category: 'datetime',
    description: 'Returns the date that is a specified number of working days from a start date.',
    syntax: 'WORKDAY(start_date, days, [holidays])',
    example: '=WORKDAY(TODAY(), 5)',
    tags: ['working days', 'business days', 'future date']
  },
  {
    name: 'YEAR',
    category: 'datetime',
    description: 'Extracts the year from a date as a 4-digit number.',
    syntax: 'YEAR(serial_number)',
    example: '=YEAR(TODAY())  → 2025',
    tags: ['year', 'extract', 'date part']
  },
  {
    name: 'MONTH',
    category: 'datetime',
    description: 'Extracts the month number (1–12) from a date.',
    syntax: 'MONTH(serial_number)',
    example: '=MONTH(TODAY())  → 7',
    tags: ['month', 'extract', 'date part']
  },
  {
    name: 'DAY',
    category: 'datetime',
    description: 'Extracts the day of the month (1–31) from a date.',
    syntax: 'DAY(serial_number)',
    example: '=DAY(TODAY())  → 27',
    tags: ['day', 'extract', 'date part']
  },
  {
    name: 'WEEKDAY',
    category: 'datetime',
    description: 'Returns the day of the week as a number (1=Sunday by default).',
    syntax: 'WEEKDAY(serial_number, [return_type])',
    example: '=WEEKDAY(TODAY(), 2)  → 1=Monday',
    tags: ['weekday', 'day of week', 'Monday']
  },

  // ── LOGICAL ──────────────────────────────────────────────
  {
    name: 'IF',
    category: 'logical',
    description: 'Returns one value if a condition is true and another value if false.',
    syntax: 'IF(logical_test, value_if_true, [value_if_false])',
    example: '=IF(A1>100, "Over", "Under")',
    tags: ['if', 'condition', 'logic', 'test', 'check']
  },
  {
    name: 'IFS',
    category: 'logical',
    description: 'Checks multiple conditions and returns the value for the first true condition.',
    syntax: 'IFS(condition1, value1, [condition2, value2]...)',
    example: '=IFS(A1>90,"A",A1>80,"B",A1>70,"C",TRUE,"F")',
    tags: ['multiple if', 'grade', 'condition', 'nested if']
  },
  {
    name: 'AND',
    category: 'logical',
    description: 'Returns TRUE if ALL conditions are true.',
    syntax: 'AND(logical1, [logical2], ...)',
    example: '=AND(A1>0, A1<100)',
    tags: ['and', 'all', 'condition', 'both']
  },
  {
    name: 'OR',
    category: 'logical',
    description: 'Returns TRUE if ANY condition is true.',
    syntax: 'OR(logical1, [logical2], ...)',
    example: '=OR(A1="Yes", A1="Y")',
    tags: ['or', 'any', 'condition', 'either']
  },
  {
    name: 'NOT',
    category: 'logical',
    description: 'Reverses a logical value — converts TRUE to FALSE and vice versa.',
    syntax: 'NOT(logical)',
    example: '=NOT(ISBLANK(A1))',
    tags: ['not', 'reverse', 'negate', 'opposite']
  },
  {
    name: 'IFERROR',
    category: 'logical',
    description: 'Returns a custom value if a formula produces an error; otherwise returns the formula result.',
    syntax: 'IFERROR(value, value_if_error)',
    example: '=IFERROR(VLOOKUP(A1,D:E,2,0), "Not Found")',
    tags: ['error', 'handle error', 'catch', 'iferror', 'protect']
  },
  {
    name: 'IFNA',
    category: 'logical',
    description: 'Returns a custom value only if the formula produces a #N/A error.',
    syntax: 'IFNA(value, value_if_na)',
    example: '=IFNA(VLOOKUP(A1,D:E,2,0), "Not Found")',
    tags: ['na error', 'handle', '#N/A', 'lookup']
  },
  {
    name: 'SWITCH',
    category: 'logical',
    description: 'Evaluates an expression against a list of values and returns the first matching result.',
    syntax: 'SWITCH(expression, value1, result1, [value2, result2]..., [default])',
    example: '=SWITCH(A1,1,"Jan",2,"Feb",3,"Mar","Other")',
    tags: ['switch', 'match', 'lookup value', 'map']
  },

  // ── STATISTICAL ──────────────────────────────────────────
  {
    name: 'AVERAGE',
    category: 'statistical',
    description: 'Returns the arithmetic mean of a range of numbers.',
    syntax: 'AVERAGE(number1, [number2], ...)',
    example: '=AVERAGE(A1:A10)',
    tags: ['average', 'mean', 'typical']
  },
  {
    name: 'AVERAGEIF',
    category: 'statistical',
    description: 'Returns the average of cells that meet a condition.',
    syntax: 'AVERAGEIF(range, criteria, [average_range])',
    example: '=AVERAGEIF(A1:A10, ">0", B1:B10)',
    tags: ['average', 'condition', 'if']
  },
  {
    name: 'MEDIAN',
    category: 'statistical',
    description: 'Returns the middle number in a set of numbers.',
    syntax: 'MEDIAN(number1, [number2], ...)',
    example: '=MEDIAN(A1:A10)',
    tags: ['median', 'middle', 'midpoint']
  },
  {
    name: 'MAX',
    category: 'statistical',
    description: 'Returns the largest value in a set of values.',
    syntax: 'MAX(number1, [number2], ...)',
    example: '=MAX(A1:A100)',
    tags: ['max', 'largest', 'highest', 'biggest']
  },
  {
    name: 'MIN',
    category: 'statistical',
    description: 'Returns the smallest value in a set of values.',
    syntax: 'MIN(number1, [number2], ...)',
    example: '=MIN(A1:A100)',
    tags: ['min', 'smallest', 'lowest', 'minimum']
  },
  {
    name: 'LARGE',
    category: 'statistical',
    description: 'Returns the k-th largest value in a dataset.',
    syntax: 'LARGE(array, k)',
    example: '=LARGE(A1:A20, 3)  → 3rd largest',
    tags: ['large', 'rank', 'nth largest', 'top']
  },
  {
    name: 'SMALL',
    category: 'statistical',
    description: 'Returns the k-th smallest value in a dataset.',
    syntax: 'SMALL(array, k)',
    example: '=SMALL(A1:A20, 2)  → 2nd smallest',
    tags: ['small', 'rank', 'nth smallest', 'bottom']
  },
  {
    name: 'STDEV',
    category: 'statistical',
    description: 'Estimates standard deviation based on a sample.',
    syntax: 'STDEV(number1, [number2], ...)',
    example: '=STDEV(A1:A50)',
    tags: ['standard deviation', 'variance', 'spread', 'stats']
  },
  {
    name: 'PERCENTILE',
    category: 'statistical',
    description: 'Returns the k-th percentile value from a dataset.',
    syntax: 'PERCENTILE(array, k)',
    example: '=PERCENTILE(A1:A100, 0.9)  → 90th percentile',
    tags: ['percentile', 'rank', 'distribution']
  },

  // ── FINANCIAL ────────────────────────────────────────────
  {
    name: 'PMT',
    category: 'financial',
    description: 'Calculates the periodic payment for a loan based on constant payments and interest rate.',
    syntax: 'PMT(rate, nper, pv, [fv], [type])',
    example: '=PMT(5%/12, 360, -200000)',
    tags: ['loan', 'payment', 'mortgage', 'finance']
  },
  {
    name: 'PV',
    category: 'financial',
    description: 'Returns the present value of an investment (total worth now of future payments).',
    syntax: 'PV(rate, nper, pmt, [fv], [type])',
    example: '=PV(6%/12, 60, -500)',
    tags: ['present value', 'pv', 'investment', 'finance']
  },
  {
    name: 'FV',
    category: 'financial',
    description: 'Returns the future value of an investment based on periodic payments and a constant interest rate.',
    syntax: 'FV(rate, nper, pmt, [pv], [type])',
    example: '=FV(5%/12, 120, -500)',
    tags: ['future value', 'fv', 'savings', 'investment']
  },
  {
    name: 'NPV',
    category: 'financial',
    description: 'Returns the net present value of an investment based on a discount rate and future cash flows.',
    syntax: 'NPV(rate, value1, [value2], ...)',
    example: '=NPV(10%, B2:B7)',
    tags: ['npv', 'net present value', 'investment', 'cash flow']
  },
  {
    name: 'IRR',
    category: 'financial',
    description: 'Returns the internal rate of return for a series of cash flows.',
    syntax: 'IRR(values, [guess])',
    example: '=IRR(A1:A6)',
    tags: ['irr', 'rate of return', 'investment', 'cash flow']
  },

  // ── INFORMATION ──────────────────────────────────────────
  {
    name: 'ISBLANK',
    category: 'info',
    description: 'Returns TRUE if a cell is empty.',
    syntax: 'ISBLANK(value)',
    example: '=ISBLANK(A1)',
    tags: ['blank', 'empty', 'check', 'is']
  },
  {
    name: 'ISNUMBER',
    category: 'info',
    description: 'Returns TRUE if a value is a number.',
    syntax: 'ISNUMBER(value)',
    example: '=ISNUMBER(A1)',
    tags: ['number', 'check', 'type', 'is']
  },
  {
    name: 'ISTEXT',
    category: 'info',
    description: 'Returns TRUE if a value is text.',
    syntax: 'ISTEXT(value)',
    example: '=ISTEXT(A1)',
    tags: ['text', 'check', 'type', 'is']
  },
  {
    name: 'ISERROR',
    category: 'info',
    description: 'Returns TRUE if a value is any error value.',
    syntax: 'ISERROR(value)',
    example: '=ISERROR(A1/B1)',
    tags: ['error', 'check', 'is error']
  },
  {
    name: 'UNIQUE',
    category: 'info',
    description: 'Returns a list of unique values from a range or array (dynamic array formula).',
    syntax: 'UNIQUE(array, [by_col], [exactly_once])',
    example: '=UNIQUE(A1:A20)',
    tags: ['unique', 'deduplicate', 'distinct', 'list']
  },
  {
    name: 'SORT',
    category: 'info',
    description: 'Sorts the contents of a range or array (dynamic array formula).',
    syntax: 'SORT(array, [sort_index], [sort_order], [by_col])',
    example: '=SORT(A1:B20, 2, -1)',
    tags: ['sort', 'order', 'arrange', 'dynamic']
  },
  {
    name: 'FILTER',
    category: 'info',
    description: 'Returns an array filtered based on a condition (dynamic array formula).',
    syntax: 'FILTER(array, include, [if_empty])',
    example: '=FILTER(A1:B20, B1:B20>100)',
    tags: ['filter', 'dynamic', 'condition', 'array']
  },
];
