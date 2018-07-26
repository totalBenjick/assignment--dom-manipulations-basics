
document.querySelector("#inject-html button").addEventListener('click',function(){
  // TASK #1
  var answerBoxEl = document.querySelector('#inject-html .answer-box')
  answerBoxEl.innerHTML = "<h2>Here is some text for you!!</h2>"
})

document.querySelector("#double button").addEventListener('click',function(){
  // TASK #2
  var answerPTagWithValue = document.querySelector('#compoundInvestment')
  // you do the rest
  var content = parse(answerPTagWithValue.textContent);
  ans

})

document.querySelector("#blow-up button").addEventListener('click',function(){
  // TASK #3

var circle = documet.querySelector(".circle-red");
var circuloAlto = circle.offsetHeight;
var circuloAncho = circle.offsetWidth;




})

document.querySelector("#remove button").addEventListener('click',function(){
  // TASK #4

var lista = document.querySelectorAll("#user-list li")
var listParent = document.querySelector("#user-list")
//var listArray = [...list];

lista.forEach(function(listItem){
  if (listItem.className === "inactive") {
    listParent.removeChild(listItem)
  }
})
})

document.querySelector("#reverse-squares button").addEventListener('click',function(){
  // TASK #5
/*Task #5
Flip the squares to opposite order.
Hint: You will want to reverse the order of the div square elements 
and use the .appendChild() method.*/

var list = document.querySelectorAll("#squares-box span")
var listaPadre = document.querySelector("#squares-box")         //TENEMOS UNA LISTA DE NODO QUE QUEREMOS CONVERTIR A UN ARRAY
var arrayListDos = [...list]
var arrayReversa = arrayListDos.reverse()
console.log(arrayReversa)

arrayReversa.forEach(function(listElement){
  listaPadre.appendChild(listElement)

})
})

document.querySelector("#pig-latin button").addEventListener('click',function(){
  // TASK #6
var listaPalabras = document.querySelectorAll("#tasks li");//igual
var listaDelHtml = document.querySelector("#tasks"); //igual
var listaEnArray = [...listaPalabras]


listaEnArray.forEach(function(li){
  var nu = li.textContent
  nu = nu.split("").reverse().join("");  
  li.textContent=nu
  listaDelHtml.appendChild(li)
})
})


document.querySelector("#cycle-image button").addEventListener('click',function(){
   //TASK #7
var fotoSelect = document.querySelector("#city-img");
//var parentFoto = document.querySelector(".answer-box");
var laSRC = 2;

fotoSelect.setAttribute("src", "./images/city-photo-" + laSRC +".jpg");

for (var i = 0; i < 10; i++) {
  laSRC = i
}

})