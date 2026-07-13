function isPaid(order) {
    return order.payment.status === 'paid';
}

function hasShipped(order) {
    return order.shipping.status === 'shipped';
}

function getDeliveryMessage(order) {
    let message = ``;
    if (order.shipping.status === 'shipped') {
        message = `Order shipped. Estimated delivery: ${order.shipping.estimatedDelivery}`;
    } else if (order.shipping.status === 'processing') {
        message = `Order has not shipped yet`;
    }
    return message;
}

function needsAttention(order) {
    return order.payment.status === 'unpaid' || order.shipping.status === 'processing';
}

function itemCount(order) {
    let count = 0;
    for (let item of order.items) {
        count += item.quantity;
    }
    return count;
}

function createOrderSummary(order) {
    return {
        id: order.id,
        customerName: order.customer.name,
        paid: isPaid(order),
        shipped: hasShipped(order),
        itemCount: itemCount(order),
        deliveryMessage: getDeliveryMessage(order),
        needsAttention: needsAttention(order)
    }
}

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

console.log(createOrderSummary(order));
console.log(isPaid(order));
console.log(hasShipped(order));

const pendingOrder = {
    ...order,
    payment: { status: 'unpaid' },
    shipping: { status: 'processing', estimatedDelivery: '2026-06-18' },
};
console.log(needsAttention(pendingOrder));
console.log(getDeliveryMessage(pendingOrder));