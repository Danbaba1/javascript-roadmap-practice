# Greeting Builder

A simple JavaScript program that builds a personalized greeting based on
a person's first name, last name, and the time of day.

## How to Run

1. Make sure you have [Node.js](https://nodejs.org/) installed.
2. Clone the repository:
   \`\`\`bash
   git clone https://github.com/Danbaba1/javascript-roadmap-practice.git
   cd javascript-roadmap-practice/greeting-builder
   \`\`\`
3. Run the script:
   \`\`\`bash
   node index.js
   \`\`\`

## Project Page

https://roadmap.sh/projects/js-greeting-builder

## How it Works

The program combines two helper functions:

- `getGreeting(timeOfDay)` – returns "Good morning,", "Good afternoon," or "Good evening," based on input
- `formatName(firstName, lastName)` – combines first and last name into a full name

These are joined together in `createGreeting()` to produce the final greeting.

## Example

\`\`\`
Good morning, Ava Stone
Good evening, Noah Kim
Good afternoon, Mina Patel
\`\`\`
