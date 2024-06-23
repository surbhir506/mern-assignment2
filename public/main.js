fetch('/products')
    .then(response => response.json())
    .then(products => {
        const productContainer = document.getElementById('products');
        products.forEach(product => {
            const productCard = document.createElement('div');
            productCard.className = 'product-card';
            productCard.innerHTML = `
                <img src="${product.thumbnail}" alt="${product.title}">
                <h2>${product.title}</h2>
                <p>Price: $${product.price}</p>
                <a href="/product.html?id=${product.id}">View Details</a>
            `;
            productContainer.appendChild(productCard);
        });
    })
    .catch(error => console.error('Error fetching products:', error));
