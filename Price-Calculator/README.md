# Price Calculator

Calculates the final price of an item after applying a discount and
then tax.

## How to Run

1. Clone the repository:
   \`\`\`bash
   git clone https://github.com/Danbaba1/javascript-roadmap-practice.git
   cd javascript-roadmap-practice/price-calculator
   \`\`\`
2. Run the script:
   \`\`\`bash
   node index.js
   \`\`\`

## Project Page

https://roadmap.sh/projects/js-price-calculator

## Main Function

\`\`\`js
createPriceSummary(price, discountPercent, taxPercent)
\`\`\`

**Input:**

- `price`: number
- `discountPercent`: number, e.g. `20` for 20% off
- `taxPercent`: number, e.g. `10` for 10% tax (applied _after_ discount)

**Returns:** an object:
\`\`\`js
{ price, discount, tax, finalPrice }
\`\`\`

## Example

\`\`\`js
createPriceSummary(100, 20, 10);
// => { price: 100, discount: 20, tax: 8, finalPrice: 88 }

createPriceSummary(200, 25, 5);
// => { price: 200, discount: 50, tax: 7.5, finalPrice: 157.5 }

createPriceSummary(50, 0, 10);
// => { price: 50, discount: 0, tax: 5, finalPrice: 55 }

```

## Helper Functions

Also included, and usable independently:
- `calculateDiscount(price, discountPercent)` — returns the discount amount
- `calculateTax(priceAfterDiscount, taxPercent)` — returns the tax amount (charged on the post-discount price)

## Notes
- Tax is calculated **after** the discount is applied, not on the original price.
- There's also a `calculateFinalPrice(price, discountPercent, taxPercent)` function that duplicates the same math as `createPriceSummary` but returns just the final number instead of the full breakdown object — it isn't used in the example above, but is available if you only need the total.
```
