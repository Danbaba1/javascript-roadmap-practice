# Expense Summary

Summarizes a list of expenses — total spend, category breakdowns for
food and transport, and the single largest expense.

## How to Run

1. Clone the repository:
   \`\`\`bash
   git clone https://github.com/Danbaba1/javascript-roadmap-practice.git
   cd javascript-roadmap-practice/expense-summary
   \`\`\`
2. Run the script:
   \`\`\`bash
   node index.js
   \`\`\`

## Project Page

https://roadmap.sh/projects/js-expense-summary

## Main Function

\`\`\`js
createExpenseSummary(expenses)
\`\`\`

**Input:** `expenses` — array of objects shaped like:
\`\`\`js
{ id, category, amount }
\`\`\`

**Returns:** an object:
\`\`\`js
{ total, foodTotal, transportTotal, largestExpense }
\`\`\`

## Example

\`\`\`js
const expenses = [
{ id: 1, category: 'food', amount: 24 },
{ id: 2, category: 'transport', amount: 15 },
{ id: 3, category: 'food', amount: 18 },
{ id: 4, category: 'books', amount: 40 },
];

createExpenseSummary(expenses);
// => {
// total: 97,
// foodTotal: 42,
// transportTotal: 15,
// largestExpense: { id: 4, category: 'books', amount: 40 }
// }
