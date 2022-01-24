//Declariación de Variables Tomando Elementos del HTML
const btnEncriptar = document.querySelector("#encriptar");
const btnDesencriptar = document.querySelector("#desencriptar");
let myDiv = document.querySelector("#mensaje");
let btnCopiar;

//Event Listeners
btnEncriptar.addEventListener("click", encriptar);
btnDesencriptar.addEventListener("click", desencriptar);

//Funcion para tomar texto
function getTexto() {
  const texto = document.querySelector("#texto");
  if (texto.value == 0) {
    alert("Ingresa un texto");
  } else {
    return texto.value.toLowerCase();
  }
}

// Añadir Botón Copiar
function añadirBtn() {
  btnCopiar = document.createElement("button");
  btnCopiar.innerHTML = "Copiar";
  myDiv.appendChild(btnCopiar);
  btnCopiar.addEventListener("click", copiar);
}

//Botón para encriptar
function encriptar(e) {
  e.preventDefault();
  limpiarHTML();
  let texto = getTexto();
  let mostrar = encriptacion(texto);
  document.querySelector("#texto-out").value = mostrar;
  añadirBtn();
}

//Botón para desencriptar
function desencriptar(e) {
  e.preventDefault();
  limpiarHTML();
  let texto2 = getTexto();
  let mostrar2 = desencriptacion(texto2);
  document.querySelector("#texto-out").value = mostrar2;
  añadirBtn();
}

//Botón para Copiar
function copiar(e) {
  e.preventDefault();
  let copiar = document.querySelector("#texto-out");
  copiar.select();
  navigator.clipboard.writeText(copiar.value);
}

// Función Limpiar HTML para Borrar Botón "Copiar"
function limpiarHTML() {
  while (myDiv.lastChild == btnCopiar) {
    myDiv = btnCopiar.parentNode;
    myDiv.removeChild(btnCopiar);
  }
}
