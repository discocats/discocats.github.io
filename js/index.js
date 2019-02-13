const sweets = [
    { imageBigUrl: "img/tetes_brulees_blueberry_Big.png", imageUrl: "img/tetes_brulees_blueberry.png", name: "Tetes Brulees Blue Raspberry Color", description: "Кислая малина", price: 42 },
    { imageBigUrl: "img/top_pops_berry_Big.png", imageUrl: "img/top_pops_berry.png", name: "Top Pops Red and Blue Raspberry", description: "Вкусные ретро жевательные ириски", price: 54 },
    { imageBigUrl: "img/top_pops_watermelon_Big.png", imageUrl: "img/top_pops_watermelon.png", name: "Top Pops Watermelon", description: "Вкусные ретро жевательные ириски", price: 33}
];

function fromSweetToArticle(data) {
    return "<article class='col-12 col-md-4'>"
    + `<a href=${data.imageBigUrl} data-fancybox="sweetPicture"> <img src=${data.imageUrl} class='rounded-circle' alt='Фотография товара'/> </a>`
    + `<h4>${data.name}</h4>`
    + `<p>${data.description}</p>`
    + `<p id="price">${data.price} &#8381;</p>` + '<p id="addCart" onclick="addProductToCart()"> <i class="fas fa-cart-plus"></i> </p>'
    + "</article>";
}

let finalHtml = "";
for (let i = 0; i < sweets.length; i++) {
    finalHtml += fromSweetToArticle(sweets[i]);
}

const catalog = document.getElementsByClassName("catalog")[0];
catalog.innerHTML = finalHtml;

var clicks = 0;
function addProductToCart() {
	clicks += 1;
    document.getElementById("clicks").innerHTML = clicks;
}


$('[data-fancybox="sweetPicture"]').fancybox({
  protect    : true,
  slideClass : 'sweetPicture',
  toolbar    : false,
  smallBtn   : true,
  buttons : [
    'zoom',
    'thumbs',
    'close'
  ]
});
