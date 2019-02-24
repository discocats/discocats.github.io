let clicks = 0;
function addProductToCart() {
    document.getElementById("clicks").innerHTML = ++clicks;
}

function fromSweetToArticle(sweet) {
    return "<article class='col-12 col-md-4'>"
    + `<a href=${sweet.imageBigUrl} data-fancybox="sweetPicture"> <img src=${sweet.imageUrl} class='rounded-circle' alt='Фотография товара'/> </a>`
    + `<h4>${sweet.name}</h4>`
    + `<p id="descrProduct">${sweet.description}</p>`
    + `<p id="price">${sweet.price} &#8381;</p>` + '<p id="addCart" onclick="addProductToCart()"> <i class="fas fa-cart-plus"></i> </p>'
    + "</article>";
}

function fromSweetsToHtml(sweets) {
  let finalHtml = "";
  for (let i = 0; i < sweets.length; i++) {
      finalHtml += fromSweetToArticle(sweets[i]);
  }

  return finalHtml;
}

function updateCatalog(sweets) {
  const html = fromSweetsToHtml(sweets);

  const catalog = document.getElementsByClassName("catalog")[0];
  catalog.innerHTML = html;
}

fetch('https://whispering-sea-97013.herokuapp.com/products')
  .then(response => response.json())  
  .then(sweets => updateCatalog(sweets))
  .catch(error => {
    alert(error);
  });