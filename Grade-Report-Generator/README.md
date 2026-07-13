# Grade Report Generator

Generates a student grade report — letter grade, pass/fail status, and
a feedback message — from a numeric score.

## How to Run

1. Clone the repository:
   \`\`\`bash
   git clone https://github.com/Danbaba1/javascript-roadmap-practice.git
   cd javascript-roadmap-practice/grade-report-generator
   \`\`\`
2. Run the script:
   \`\`\`bash
   node index.js
   \`\`\`

## Project Page

https://roadmap.sh/projects/js-grade-report-generator

## Main Function

\`\`\`js
createGradeReport(name, score)
\`\`\`

**Input:**

- `name`: string
- `score`: number (0–100 assumed)

**Returns:** an object:
\`\`\`js
{ name, score, grade, passed, feedback }
\`\`\`

## Grading Scale

| Score    | Grade |
| -------- | ----- |
| 90–100   | A     |
| 80–89    | B     |
| 70–79    | C     |
| 60–69    | D     |
| below 60 | F     |

Passing is score >= 60.

## Example

\`\`\`js
createGradeReport('Ava', 92);
// => { name: 'Ava', score: 92, grade: 'A', passed: true, feedback: 'Excellent work' }

createGradeReport('Noah', 48);
// => { name: 'Noah', score: 48, grade: 'F', passed: false, feedback: 'Keep practicing' }

createGradeReport('Mina', 75);
// => { name: 'Mina', score: 75, grade: 'C', passed: true, feedback: 'You Passed' }
