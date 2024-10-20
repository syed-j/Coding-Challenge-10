const productContainer = document.getElementById('product-container');
const priceElement = document.getElementById('product-price');
const sizeSelect = document.getElementById('size-select');
const purchaseButton = document.getElementById('purchase-button');

const productData = {
    name: 'Product Name',
    prices: {
        small: 10.99,
        medium: 12.99,
        large: 14.99
    },
    stock: {
        small: 5,
        medium: 3,
        large: 0
    }
};
