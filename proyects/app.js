let myInput = document.getElementById("enter");
let myButton = document.getElementById("buttonPadre");
const MY_FORM = document.getElementById("myForm");
const CONTADOR = 10;
let id = 0;
let padre = document.getElementById("padre");
let mostrar = padre;
let mySpan = document.getElementById('mySpan');





function addElement() {
  
  myButton.addEventListener("click", function () {
    
    if(myInput.value.trim() === ''){ 
      window.location.href = 'error.html'
    
    }
    else {
      id++;
      mostrar.innerHTML += `
      <div id="btn${id} btnAll"
        <span class="mySpan">${myInput.value}</span>
      </div>`;
    }
    // mostrar.innerHTML += `<span onclick="removeButton()" id="mySpan" class="mySpan">${myInput.value}</span>`;
    myInput.value = "";
    myInput.focus();
    
    if (mostrar.childElementCount >= CONTADOR) {
      myInput.remove();
      myButton.remove();
      let error = `<h1 class="error">Maximo de tareas superadas ${CONTADOR}</h1>`;
      MY_FORM.innerHTML = error;
    }
  });
}

myButton.addEventListener("click", function (event) {
  event.preventDefault();
  console.log(myInput.value);
  
  
  
});

addElement();
