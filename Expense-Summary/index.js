function calculateTotal(expenses) {
    let amount = 0;
    for (let expense of expenses) {
        amount += expense.amount;
    }
    return amount;
}

function calculateCategoryTotal(expenses, category) {
    let total = 0;
    for (let expense of expenses) {
        if (expense.category == category) {
            total += expense.amount;
        }
    }
    return total;
}


function findLargestExpense(expenses) {
    let large = 0;
    for (let expense of expenses) {
        large = Math.max(large, expense.amount);
    }
    for (let expense of expenses) {
        if (expense.amount == large) {
            return expense;
        }
    }
}

function createExpenseSummary(expenses) {
    const total = calculateTotal(expenses);
    const foodTotal = calculateCategoryTotal(expenses, 'food');
    const transportTotal = calculateCategoryTotal(expenses, 'transport');
    const largestExpense = findLargestExpense(expenses);
    return {
        total,
        foodTotal,
        transportTotal,
        largestExpense
    }
}

const expenses = [
    { id: 1, category: 'food', amount: 24 },
    { id: 2, category: 'transport', amount: 15 },
    { id: 3, category: 'food', amount: 18 },
    { id: 4, category: 'books', amount: 40 },
];

console.log(createExpenseSummary(expenses));
console.log(calculateCategoryTotal(expenses, 'food'));
console.log(calculateCategoryTotal(expenses, 'health'));
console.log(findLargestExpense(expenses));