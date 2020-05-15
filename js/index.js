//====================== On product clicked ===========================//

const products = document.querySelectorAll('.product');

products.forEach(one_product => {
    one_product.addEventListener('click', (evt) => {
        window.location.href = './product-page.html?product=1'
    })
})