let myInput = document.getElementById("enter");
let myButton = document.getElementById("buttonPadre");
let MY_FORM = document.getElementById("myForm");
let ul = document.getElementById("ul");
let li = document.createElement("li");
const contador = 10;
// let padre = document.getElementById('padre');

function addElement() {
  
  myButton.addEventListener("click", function () {
    let padre = document.getElementById("padre");
    let mostrar = padre;
    mostrar.innerHTML += `<span class="mySpan">${myInput.value}</span>`;
    myInput.value = "";

    if (mostrar.childElementCount >= contador) {
      alert(`Limite de Tareas Superadas ${contador}`);
    }
  });
}

myButton.addEventListener("click", function (event) {
  event.preventDefault();
  console.log(myInput.value);
  myInput.focus();
});

// valorVacio();
addElement();
