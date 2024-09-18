import { allProduct } from "./main.js"; // تأكد من المسار الصحيح

// Function to fetch and display products
function fetchAndDisplayProducts(url, containerSelector) {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            // Add fetched products to allProduct array
            allProduct.push(...data);

            const container = document.querySelector(containerSelector);
            if (container) {
                container.innerHTML = data.map(product => `
                    <div class="box">
                        <div class="image">
                            <img src="${product.img}" alt="${product.name}">
                        </div>
                        <div class="stars">
                            ${'<i class="fas fa-star"></i>'.repeat(5)}
                        </div>
                        <p>${product.name}</p>
                        <span>$${product.price}</span>
                        <button data-id="${product.id}" class="add-to-cart">Add Cart</button>
                    </div>
                `).join('');
                
                // Add event listeners for buttons
                container.querySelectorAll('.add-to-cart').forEach(button => {
                    button.addEventListener('click', () => openProduct(button.dataset.id));
                });
            }
        })
        .catch(error => console.error('Error fetching products:', error));
}

// Function to handle opening product details
function openProduct(productId) {
    console.log(`Opening product with ID: ${productId}`);
    window.open("product.html", "_self");
}

// Fetch and display products from different categories
fetchAndDisplayProducts('product.json', '.shop .content');
fetchAndDisplayProducts('featured.json', '.featured .content');
fetchAndDisplayProducts('dresses&jumpsuits.json', '.dresses-jumpsuits .content');
fetchAndDisplayProducts('shoes.json', '.shoes .content');
