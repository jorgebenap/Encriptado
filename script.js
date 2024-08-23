const texto = document.querySelector(".texto");
const encriptado = document.querySelector(".encriptado");

//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"

function btnEncriptar() {
  const textoEncriptado = encriptar(encriptado.value);
  mensaje.value = textoEncriptadober;
}

function encriptar(stringEncriptada) {
let matrizCodigo = [["a","ai"],["e","enter"],["i","imes"],["o","ober"],["u","ufat"]];
stringEncriptada = stringEncriptada.toLowerCase()

for(let i = 0; i <matrizCodigo.length; i++){
  if (stringEncriptada.includes(matrizCodigo[i][0])){
    stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
  }
}
return stringEncriptada
}