# Cart Total Calculator

Calculates a shopping cart summary — subtotal, discount, tax, and final
total — from a list of items.

## How to Run

1. Clone the repository:
   \`\`\`bash
   git clone https://github.com/Danbaba1/javascript-roadmap-practice.git
   cd javascript-roadmap-practice/cart-total-calculator
   \`\`\`
2. Run the script:
   \`\`\`bash
   node index.js
   \`\`\`

## Project Page

https://roadmap.sh/projects/js-cart-total-calculator

## Main Function

\`\`\`js
createCartSummary(items, discountPercent, taxPercent)
\`\`\`

**Input:**

- `items`: array of objects shaped like `{ name, price, quantity }`
- `discountPercent`: number, e.g. `10` for 10% off
- `taxPercent`: number, e.g. `5` for 5% tax (applied _after_ discount)

**Returns:** an object:
\`\`\`js
{ subtotal, discount, tax, total }
\`\`\`

## Example

\`\`\`js
const cartItems = [
{ name: 'Notebook', price: 10, quantity: 2 },
{ name: 'Pen', price: 2, quantity: 5 },
{ name: 'Bag', price: 30, quantity: 1 },
];

createCartSummary(cartItems, 10, 5);
// => { subtotal: 60, discount: 6, tax: 2.7, total: 56.7 }
