# Task List Utilities

A set of pure functions for managing a task list — adding, completing,
removing tasks, and counting incomplete ones — without mutating the
original list.

## How to Run

1. Clone the repository:
   \`\`\`bash
   git clone https://github.com/Danbaba1/javascript-roadmap-practice.git
   cd javascript-roadmap-practice/task-list-utilities
   \`\`\`
2. Run the script:
   \`\`\`bash
   node index.js
   \`\`\`

## Project Page

https://roadmap.sh/projects/js-task-list-utilities

## Functions

\`\`\`js
addTask(tasks, title)
completeTask(tasks, taskId)
removeTask(tasks, taskId)
countIncompleteTasks(tasks)
\`\`\`

**Input (all functions):** `tasks` — array of objects shaped like:
\`\`\`js
{ id, title, completed }
