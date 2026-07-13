# User Profile Formatter

Builds a clean profile summary from a raw user object — display name,
location, contact info, account status, and plan.

## How to Run

1. Clone the repository:
   \`\`\`bash
   git clone https://github.com/Danbaba1/javascript-roadmap-practice.git
   cd javascript-roadmap-practice/user-profile-formatter
   \`\`\`
2. Run the script:
   \`\`\`bash
   node index.js
   \`\`\`

## Project Page

https://roadmap.sh/projects/js-user-profile-formatter

## Main Function

\`\`\`js
createProfileSummary(user)
\`\`\`

**Input:** `user` — an object shaped like:
\`\`\`js
{
id,
firstName, lastName,
email, phone,
address: { city, country },
account: { status, plan }
}
\`\`\`

**Returns:** an object:
\`\`\`js
{ displayName, location, contact, active, plan }

```

## Example

\`\`\`js
const user = {
  id: 42,
  firstName: 'Ava',
  lastName: 'Stone',
  email: 'ava@example.com',
  phone: null,
  address: { city: 'London', country: 'UK' },
  account: { status: 'active', plan: 'pro' },
};

createProfileSummary(user);
// => {
//   displayName: 'Ava Stone',
//   location: 'London, UK',
//   contact: { email: 'ava@example.com', phone: null },
//   active: true,
//   plan: 'pro'
// }

getDisplayName(user);
// => "Ava Stone"

isAccountActive(user);
// => true

getContactSummary(user);
// => { email: 'ava@example.com', phone: null }
```
