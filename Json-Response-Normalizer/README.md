# JSON Response Normalizer

Filters and reshapes a raw API response into a clean, simplified list
of published article summaries.

## How to Run

1. Clone the repository:
   \`\`\`bash
   git clone https://github.com/Danbaba1/javascript-roadmap-practice.git
   cd javascript-roadmap-practice/json-response-normalizer
   \`\`\`
2. Run the script:
   \`\`\`bash
   node index.js
   \`\`\`

## Project Page

https://roadmap.sh/projects/js-json-response-normalizer

## Main Function

\`\`\`js
normalizeArticles(response)
\`\`\`

**Input:** `response` — an object shaped like:
\`\`\`js
{
data: [
{
id, title, status,
author: { name },
stats: { views }
},
...
]
}
