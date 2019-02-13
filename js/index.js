const sweets = [
    { imageUrl: "img/tetes_brulees_blueberry.png", name: "Tetes Brulees Blue Raspberry Color", description: "Кислая малина", price: 42 },
    { imageUrl: "img/top_pops_berry.png", name: "Top Pops Red and Blue Raspberry", description: "Вкусные ретро жевательные ириски", price: 54 },
    { imageUrl: "img/top_pops_watermelon.png", name: "Top Pops Watermelon", description: "Вкусные ретро жевательные ириски", price: 33}
];

function fromSweetToArticle(data) {
    return "<article class='col-12 col-md-4'>"
    + `<img src=${data.imageUrl} class='rounded-circle' alt='Фотография товара'/>`
    + `<h4>${data.name}</h4>`
    + `<p>${data.description}</p>`
    + `<p id="price">${data.price} &#8381;</p>` + '<a href="#"> <i class="fas fa-cart-plus"></i> </a>'
    + "</article>";
}

let finalHtml = "";
for (let i = 0; i < sweets.length; i++) {
    finalHtml += fromSweetToArticle(sweets[i]);
}

const catalog = document.getElementsByClassName("catalog")[0];
catalog.innerHTML = finalHtml;
