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

// Update price and button state based on selected size
sizeSelect.addEventListener('change', () => {     // Adds an event listener to 'sizeSelect' that triggers whenever the selected value changes.
    const selectedSize = sizeSelect.value;
    const price = productData.prices[selectedSize];
    const stock = productData.stock[selectedSize];

    // The 'priceElement' text content is updated to show the formatted price using template literals and 'toFixed(2)' to ensure two decimal places.
    priceElement.textContent = `$${price.toFixed(2)}`;
    // The 'purchaseButton' is enabled or disabled based on whether the selected size is in stock (stock > 0 enables the button, otherwise disables it).
    purchaseButton.disabled = stock === 0;
});

// Handle purchase button click
// Adds an event listener to 'purchaseButton' that triggers on a click event.
purchaseButton.addEventListener('click', () => {
    const selectedSize = sizeSelect.value;
    const stock = productData.stock[selectedSize];

    if (stock > 0) {
        alert('Product purchased successfully!');
        productData.stock[selectedSize]--;
    } else {
        alert('Product is out of stock.');
    }
});
// If the stock is greater than 0, it displays a success message and decreases the stock count by 1.
// If the stock is 0, it displays an out-of-stock message.

function addNewProduct(productName, prices, stock) {
    const newProductContainer = document.createElement('div');
    newProductContainer.innerHTML = `
        <h2>${productName}</h2>
        <p id="product-price-${productName}">$${prices.small.toFixed(2)}</p>
        <select id="size-select-${productName}">
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
        </select>
        <button id="purchase-button-${productName}" disabled>Purchase</button>
    `;
    productContainer.appendChild(newProductContainer);
}
// It accepts three parameters: 'productName', 'prices', and 'stock' for the new product.
// Creates a new 'div' element to hold the new product details and uses template literals to populate it with the product name, initial price (for 'small' size), size selection dropdown, and a disabled purchase button.
// The generated HTML is appended to 'productContainer'.

// Example: Add a new product
addNewProduct('New Product', { small: 15.99, medium: 17.99, large: 19.99 }, { small: 2, medium: 1, large: 0 });
