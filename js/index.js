const sweets = [
    { name: "Tetes Brulees Blue Raspberry Color", description: "Кислая малина" },
    { name: "Top Pops Red and Blue Raspberry", description: "Вкусные ретро жевательные ириски" },
    { name: "Top Pops Watermelon", description: "Вкусные ретро жевательные ириски"}
];

function fromSweetToArticle(data) {
    return "<article>"
    + `<h1>${data.name}</h1>`
    + `<p>${data.description}</p>`
    + "</article>";
}

let finalHtml = "";
for (let i = 0; i < sweets.length; i++) {
    finalHtml += fromSweetToArticle(sweets[i]);
}

const catalog = document.getElementsByClassName("catalog")[0];
catalog.innerHTML = finalHtml;
