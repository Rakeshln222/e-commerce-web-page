// main.js file for e-commerce web project

document.addEventListener('DOMContentLoaded', () => {
    const cart = [];
    const productList = document.getElementById('product-list');
    const cartCount = document.getElementById('cart-count');

    // Function to add product to cart
    function addToCart(product) {
        cart.push(product);
        updateCartCount();
        alert(`${product.name} has been added to your cart!`);
    }

    // Function to update cart count display
    function updateCartCount() {
        cartCount.textContent = cart.length;
    }

    // Function to fetch products and display them
    function fetchProducts() {
        // Sample products
        const products = [
            { id: 1, name: 'Product 1', price: 29.99 },
            { id: 2, name: 'Product 2', price: 39.99 },
            { id: 3, name: 'Product 3', price: 49.99 },
        ];

        products.forEach(product => {
            const productItem = document.createElement('div');
            productItem.className = 'product-item';
            productItem.innerHTML = `
                <h3>${product.name}</h3>
                <p>Price: $${product.price.toFixed(2)}</p>
                <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
            `;
            productList.appendChild(productItem);
        });
    }

    // Event delegation for add to cart buttons
    productList.addEventListener('click', (event) => {
        if (event.target.classList.contains('add-to-cart')) {
            const productId = event.target.getAttribute('data-id');
            const product = { id: productId, name: event.target.previousElementSibling.previousElementSibling.textContent };
            addToCart(product);
        }
    });

    fetchProducts();
});