# Order Status Helper

Generates a summary of the payment status of your order, whether it has been shipped,
the item count and if it needs attention.

## How to Run

1. Clone the repository:
   \`\`\`bash
   git clone https://github.com/Danbaba1/javascript-roadmap-practice.git
   cd javascript-roadmap-practice/order-status-helper
   \`\`\`
2. Run the script:
   \`\`\`bash
   node index.js
   \`\`\`

## Project Page

https://roadmap.sh/projects/js-order-status-helper

## Main Function

\`\`\`js
createOrderSummary(order)
\`\`\`

**Input:** `order` — an object shaped like:
\`\`\`js
{
id,
customer: { name, email },
payment: { status },
shipping: { status, estimatedDelivery },
items: [{ name, quantity }]
}
\`\`\`

**Returns:** an object:
\`\`\`js
{ id, customerName, paid, shipped, itemCount, deliveryMessage, needsAttention }
\`\`\`

## Example

\`\`\`js
const order = {
id: 'ORD-1001',
customer: {
name: 'Ava Stone',
email: 'ava@example.com',
},
payment: {
status: 'paid',
},
shipping: {
status: 'shipped',
estimatedDelivery: '2026-06-18',
},
items: [
{ name: 'Notebook', quantity: 2 },
{ name: 'Pen Set', quantity: 1 },
],
};

createOrderSummary(order);
// => {
// id: "ORD-1001",
// customerName: "Ava Stone",
// paid: true,
// shipped: true,
// itemCount: 3,
// deliveryMessage: "Order shipped. Estimated delivery: 2026-06-18",
// needsAttention: false
// }

const pendingOrder = {
...order,
payment: { status: 'unpaid' },
shipping: { status: 'processing', estimatedDelivery: '2026-06-18' },
};

needsAttention(pendingOrder);
// => true
getDeliveryMessage(pendingOrder);
// => "Order has not shipped yet"
