"use strict";

require("core-js/modules/es6.function.name");

var clicks = 0;

function addProductToCart() {
  document.getElementById("clicks").innerHTML = ++clicks;
}

function fromSweetToArticle(sweet) {
  return "<article class='col-12 col-md-4'>" + "<a href=".concat(sweet.imageBigUrl, " data-fancybox=\"sweetPicture\"> <img src=").concat(sweet.imageUrl, " class='rounded-circle' alt='\u0424\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0438\u044F \u0442\u043E\u0432\u0430\u0440\u0430'/> </a>") + "<h4>".concat(sweet.name, "</h4>") + "<p id=\"descrProduct\">".concat(sweet.description, "</p>") + "<p id=\"price\">".concat(sweet.price, " &#8381;</p>") + '<p id="addCart" onclick="addProductToCart()"> <i class="fas fa-cart-plus"></i> </p>' + "</article>";
}

function fromSweetsToHtml(sweets) {
  var finalHtml = "";

  for (var i = 0; i < sweets.length; i++) {
    finalHtml += fromSweetToArticle(sweets[i]);
  }

  return finalHtml;
}

function updateCatalog(sweets) {
  var html = fromSweetsToHtml(sweets);
  var catalog = document.getElementsByClassName("catalog")[0];
  catalog.innerHTML = html;
}

fetch('https://whispering-sea-97013.herokuapp.com/products').then(function (response) {
  return response.json();
}).then(function (sweets) {
  return updateCatalog(sweets);
}).catch(function (error) {
  alert(error);
});
var formLogin = new FormData(document.getElementById('loginForm'));
fetch("https://whispering-sea-97013.herokuapp.com/login", {
  method: "POST",
  body: formLogin
});
var formSignup = new FormData(document.getElementById('signupForm'));
fetch("https://whispering-sea-97013.herokuapp.com/signup", {
  method: "POST",
  body: formSignup
});