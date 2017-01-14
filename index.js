"use strict"

var boton = document.querySelector ("#js-numero-aleatorio")
var div = document.querySelector ("#numero")



function sacarNumeroAleatorio() {
  var numero = Math.ceil(Math.random() * 10)
  div.innerHTML = "Mi numero favorito es " + numero
}



boton.addEventListener ("click", sacarNumeroAleatorio)
sacarNumeroAleatorio ()
