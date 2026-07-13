# Temperature Converter

Converts temperatures between Celsius and Fahrenheit, and formats the
result with a unit label.

## How to Run

1. Clone the repository:
   \`\`\`bash
   git clone https://github.com/Danbaba1/javascript-roadmap-practice.git
   cd javascript-roadmap-practice/temperature-converter
   \`\`\`
2. Run the script:
   \`\`\`bash
   node index.js
   \`\`\`

## Project Page

https://roadmap.sh/projects/js-temperature-converter

## Functions

\`\`\`js
celsiusToFahrenheit(celsius)
fahrenheitToCelsius(fahrenheit)
formatTemperature(value, unit)
\`\`\`

**Input:**

- `celsius` / `fahrenheit` / `value`: number
- `unit`: `'C'` or `'F'`

**Returns:**

- `celsiusToFahrenheit` / `fahrenheitToCelsius` → a number
- `formatTemperature` → a string like `"77 F"`

## Example

\`\`\`js
const fahrenheit = celsiusToFahrenheit(25);
formatTemperature(fahrenheit, 'F');
// => "77 F"

const celsius = fahrenheitToCelsius(68);
formatTemperature(celsius, 'C');
// => "20 C"

const freezingFahrenheit = celsiusToFahrenheit(0);
formatTemperature(freezingFahrenheit, 'F');
// => "32 F"

const freezingCelsius = fahrenheitToCelsius(32);
formatTemperature(freezingCelsius, 'C');
// => "0 C"
