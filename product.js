document.addEventListener("DOMContentLoaded", function() {

    const params = new URLSearchParams(window.location.search);
    const productId = params.get('id');


    const product = allProducts.find(p => p.id == productId);

    const target = document.getElementById('detail');

    if (product) {


        const productPrice = `${product.price} TL`;
        const productHTML = `
        <div class="product_container">
                <div class="product_image_gallery">
                    <img src="${product.image_url}" alt="${product.name}">
        </div>
                
        <div class="product_info">
            <h1>${product.name}</h1>
                  <p class="product_detail_price">${productPrice}</p>
                    <button class="add_to_cart_button">Sepete Ekle</button>
          <p class="product_detail_desc">
                        ${product.desc}
                    </p>
                </div>
            </div>
        `;
        target.innerHTML = productHTML;

    } else {
        target.innerHTML = "<p>No product?!</p>";
    };
});