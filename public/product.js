const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('id');

fetch(`/products/${productId}`)
    .then(response => response.json())
    .then(product => {
        document.getElementById('product-name').textContent = product.title;
        document.getElementById('product-description').textContent = product.description;
        document.getElementById('product-price').textContent = `Price: $${product.price}`;
        document.getElementById('product-image').src = product.thumbnail;
        document.getElementById('product-image').alt = product.title;
    })
    .catch(error => console.error('Error fetching product:', error));
