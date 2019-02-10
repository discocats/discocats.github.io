const sweets = [
    { imageUrl: "img/tetes_brulees_blueberry.png", name: "Tetes Brulees Blue Raspberry Color", description: "Кислая малина", price: 42 },
    { imageUrl: "img/top_pops_berry.png", name: "Top Pops Red and Blue Raspberry", description: "Вкусные ретро жевательные ириски", price: 54 },
    { imageUrl: "img/top_pops_watermelon.png", name: "Top Pops Watermelon", description: "Вкусные ретро жевательные ириски", price: 33}
];

function fromSweetToArticle(data) {
	const finalPrice = `<strong>${data.price}</strong> rub`;
    return "<article>"
    + `<img src=${data.imageUrl}>`
    + `<h1>${data.name}</h1>`
    + `<p>${data.description}</p>`
    + `<p>${finalPrice}</p>`
    + "</article>";
}

let finalHtml = "";
for (let i = 0; i < sweets.length; i++) {
    finalHtml += fromSweetToArticle(sweets[i]);
}

const catalog = document.getElementsByClassName("catalog")[0];
catalog.innerHTML = finalHtml;
