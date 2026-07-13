# Password Rule Checker

Validates a password against three rules — minimum length, contains a
number, contains an uppercase letter — and reports which rules failed.

## How to Run

1. Clone the repository:
   \`\`\`bash
   git clone https://github.com/Danbaba1/javascript-roadmap-practice.git
   cd javascript-roadmap-practice/password-rule-checker
   \`\`\`
2. Run the script:
   \`\`\`bash
   node index.js
   \`\`\`

## Project Page

https://roadmap.sh/projects/js-password-rule-checker

## Main Function

\`\`\`js
validatePassword(password)
\`\`\`

**Input:** `password` — string

**Returns:** an object:
\`\`\`js
{ valid, failedRules }
\`\`\`
`failedRules` is an array of strings naming each rule that failed (empty if valid).

## Rules

- Minimum length: at least 8 characters
- Must contain at least one digit
- Must contain at least one uppercase letter

## Example

\`\`\`js
validatePassword('hello');
// => { valid: false, failedRules: ['minimum length', 'number', 'uppercase letter'] }

validatePassword('Hello123');
// => { valid: true, failedRules: [] }

validatePassword('hello123');
// => { valid: false, failedRules: ['uppercase letter'] }

validatePassword('HELLOABC');
// => { valid: false, failedRules: ['number'] }
