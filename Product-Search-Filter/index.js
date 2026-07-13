function filterByCategory(products, category) {
    let result = [];
    for (let product of products) {
        if (product.category === category) {
            result.push(product);
        }
    }
    return result;
}

function filterByMaxPrice(products, maxPrice) {
    let result = [];
    for (let product of products) {
        if (product.price <= maxPrice) {
            result.push(product);
        }
    }
    return result;
}

function getInStockProducts(products) {
    let result = [];
    for (let product of products) {
        if (product.inStock === true) {
            result.push(product);
        }
    }
    return result;
}

function findProductById(products, productId) {
    for (let product of products) {
        if (product.id === productId) {
            return product;
        }
    }
}

function searchProducts(products, searchText) {
    let result = [];
    for (let product of products) {
        if (product.name.toLowerCase().includes(searchText.toLowerCase())) {
            result.push(product);
        }
    }
    return result;
}

const products = [
    { id: 1, name: 'Notebook', category: 'stationery', price: 10, inStock: true },
    { id: 2, name: 'Desk Lamp', category: 'home', price: 35, inStock: false },
    { id: 3, name: 'Pen Set', category: 'stationery', price: 6, inStock: true },
    {
        id: 4,
        name: 'Water Bottle',
        category: 'fitness',
        price: 18,
        inStock: true,
    },
];

console.log(filterByCategory(products, 'stationery').map((product) => product.name));
console.log(filterByMaxPrice(products, 20).map((product) => product.name));
console.log(findProductById(products, 3));
console.log(searchProducts(products, 'pen').map((product) => product.name));
console.log(getInStockProducts(products).map((product) => product.name));
console.log(findProductById(products, 99));