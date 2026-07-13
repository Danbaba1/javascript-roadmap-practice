# Number Checker

Classifies a number across five properties: whether it's positive,
negative, zero, even, or odd.

## How to Run

1. Clone the repository:
   \`\`\`bash
   git clone https://github.com/Danbaba1/javascript-roadmap-practice.git
   cd javascript-roadmap-practice/number-checker
   \`\`\`
2. Run the script:
   \`\`\`bash
   node index.js
   \`\`\`

## Project Page

https://roadmap.sh/projects/js-number-checker

## Main Function

\`\`\`js
describeNumber(number)
\`\`\`

**Input:**

- `number`: number

**Returns:** an object
\`\`\`js
{ positive, negative, zero, even, odd }
\`\`\`

## Example

\`\`\`js
describeNumber(8);
// => { positive: true, negative: false, zero: false, even: true, odd: false }

describeNumber(-3);
// => { positive: false, negative: true, zero: false, even: false, odd: false }

describeNumber(0);
// => { positive: false, negative: false, zero: true, even: true, odd: false }

describeNumber(7);
// => { positive: true, negative: false, zero: false, even: false, odd: true }
