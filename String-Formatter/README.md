# String Formatter

Cleans up messy first/last name input (extra whitespace, inconsistent
casing) and formats it into a properly capitalized display name.

## How to Run

1. Clone the repository:
   \`\`\`bash
   git clone https://github.com/Danbaba1/javascript-roadmap-practice.git
   cd javascript-roadmap-practice/string-formatter
   \`\`\`
2. Run the script:
   \`\`\`bash
   node index.js
   \`\`\`

## Project Page

https://roadmap.sh/projects/js-string-formatter

## Main Function

\`\`\`js
formatDisplayName(firstName, lastName)
\`\`\`

**Input:**

- `firstName`: string (may have extra whitespace or mixed casing)
- `lastName`: string (same)

**Returns:** a string — `"Firstname Lastname"`, trimmed and properly capitalized.

## Example

\`\`\`js
formatDisplayName(' ava', 'STONE ');
// => "Ava Stone"

formatDisplayName('nOAh', ' kim');
// => "Noah Kim"

formatDisplayName(' mINA ', 'pATEL');
// => "Mina Patel"

```

## Helper Functions

Also included, and usable independently:
- `cleanText(text)` — trims leading/trailing whitespace
- `capitalizeText(text)` — uppercases the first letter, lowercases the rest

## Notes
- Assumes each name is a non-empty string — `capitalizeText` accesses `text[0]`, which would throw on an empty string.
- Only trims outer whitespace; doesn't collapse internal spaces (e.g. a name like `"a  va"` would keep the double space in the middle).
```
