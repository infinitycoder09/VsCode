let myInput = document.getElementById("enter");
let myButton = document.getElementById("buttonPadre");
let MY_FORM = document.getElementById("myForm");
let ul = document.getElementById("ul");
let li = document.createElement("li");
const contador = 10;
let padre = document.getElementById("padre");
let mostrar = padre;
    

function addElement() {
  
  myButton.addEventListener("click", function () {
    
    if(myInput.value.trim() === ''){
      alert('Por Favor Ingrese Un Valor Valido!!');
      return;
    }
    else{

    }

    mostrar.innerHTML += `<span id="mySpan" class="mySpan">${myInput.value}</span>`;
    myInput.value = "";
    
    if (mostrar.childElementCount >= contador) {
      // alert(`Limite de Tareas Superadas ${contador}`);
      myInput.remove();
      myButton.remove();
      let error = '<h1 class="error">Maximo de tareas superadas</h1>';
      MY_FORM.innerHTML = error;
    }
  });
}



myButton.addEventListener("click", function (event) {
  event.preventDefault();
  console.log(myInput.value);
  
});


addElement();
