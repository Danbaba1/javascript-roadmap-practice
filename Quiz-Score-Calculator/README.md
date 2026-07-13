# Quiz Score Calculator

Grades a quiz by comparing user answers against correct answers, then
returns a score summary with a percentage and feedback message.

## How to Run

1. Clone the repository:
   \`\`\`bash
   git clone https://github.com/Danbaba1/javascript-roadmap-practice.git
   cd javascript-roadmap-practice/quiz-score-calculator
   \`\`\`
2. Run the script:
   \`\`\`bash
   node index.js
   \`\`\`

## Project Page

https://roadmap.sh/projects/js-quiz-score-calculator

## Main Function

\`\`\`js
createQuizResult(questions, userAnswers)
\`\`\`

**Input:**

- `questions`: array shaped like `{ id, correctAnswer }`
- `userAnswers`: array shaped like `{ questionId, answer }`

**Returns:** an object:
\`\`\`js
{ correctCount, totalQuestions, percentage, message }
\`\`\`

## Result Messages

| Percentage | Message         |
| ---------- | --------------- |
| 0–25       | Keep practicing |
| 26–50      | You tried       |
| 51–75      | You passed      |
| 76–100     | Excellent       |

## Example

\`\`\`js
const questions = [
{ id: 1, correctAnswer: 'B' },
{ id: 2, correctAnswer: 'A' },
{ id: 3, correctAnswer: 'D' },
{ id: 4, correctAnswer: 'C' },
];

const userAnswers = [
{ questionId: 1, answer: 'B' },
{ questionId: 2, answer: 'C' },
{ questionId: 3, answer: 'D' },
{ questionId: 4, answer: 'C' },
];

createQuizResult(questions, userAnswers);
// => { correctCount: 3, totalQuestions: 4, percentage: 75, message: 'You passed' }

const partialAnswers = [{ questionId: 1, answer: 'B' }];

createQuizResult(questions, partialAnswers);
// => { correctCount: 1, totalQuestions: 4, percentage: 25, message: 'Keep practicing' }
