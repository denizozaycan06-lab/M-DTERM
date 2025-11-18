document.addEventListener("DOMContentLoaded", function() {

    const grid_target = document.getElementById('grid_target');

    allProducts.forEach(function(product) {

        const prodcutHTML = `
           <a href="product.html?id=${product.id}" class="product_card">
            <div class="card_image">
                <img src="${product.image_url}" alt="${product.name}">
            </div>
            <div class="card_info">
                <h3>${product.name}</h3>
                  <p class="urun_fiyat">${product.price}TL</p>
            </div>
           </a>
        `;



        grid_target.innerHTML += prodcutHTML;
    });
});