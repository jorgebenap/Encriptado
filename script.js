const botonEncriptar = document.querySelector(".btn_encriptar");
const botonDesencriptar = document.querySelector(".btn_desencriptar");
const imagen = document.querySelector(".imagen_empty");
const contenedor = document.querySelector(".contenedor_parrafo");
const resultado = document.querySelector(".texto_resultado");
const encriptado = document.querySelector(".contenedor_resultado");
const btn_copiar = document.querySelector(".btn_copiar");
const caja_texto = document.querySelector(".caja_texto");

function ocultarAdelante() {
  imagen.classList.add("ocultar");
  contenedor.classList.add("ocultar");
  encriptado.classList.remove("oculto");
  btn_copiar.classList.remove("oculto");
}

function recuperarTexto() {
  return caja_texto.value.toLowerCase();
}

function encriptarTexto(mensaje) {
  var texto = mensaje;
  var textoFinal = "";

  for (var i = 0; i < texto.length; i++) {
    if (texto[i] == "a") {
      textoFinal = textoFinal + "ai";
    } else if (texto[i] == "e") {
      textoFinal = textoFinal + "enter";
    } else if (texto[i] == "i") {
      textoFinal = textoFinal + "imes";
    } else if (texto[i] == "o") {
      textoFinal = textoFinal + "ober";
    } else if (texto[i] == "u") {
      textoFinal = textoFinal + "ufat";
    } else {
      textoFinal = textoFinal + texto[i];
    }
  }
  return textoFinal;
}

function desencriptarTexto(mensaje) {
  var texto = mensaje;
  var textoFinal = "";

  for (var i = 0; i < texto.length; i++) {
    if (texto[i] == "a") {
      textoFinal = textoFinal + "a";
      i = i + 1;
    } else if (texto[i] == "e") {
      textoFinal = textoFinal + "e";
      i = i + 4;
    } else if (texto[i] == "i") {
      textoFinal = textoFinal + "i";
      i = i + 3;
    } else if (texto[i] == "o") {
      textoFinal = textoFinal + "o";
      i = i + 3;
    } else if (texto[i] == "u") {
      textoFinal = textoFinal + "u";
      i = i + 3;
    } else {
      textoFinal = textoFinal + texto[i];
    }
  }

  return textoFinal;
}

function encriptar() {
  ocultarAdelante();
  var cajatexto = recuperarTexto();
  resultado.textContent = encriptarTexto(cajatexto);
}

function desencriptar() {
  ocultarAdelante();
  var cajatexto = recuperarTexto();
  resultado.textContent = desencriptarTexto(cajatexto);
}

botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;

btn_copiar.addEventListener(
  "click",
  (copiar = () => {
    var contenido = document.querySelector(".texto_resultado").textContent;
    navigator.clipboard.writeText(contenido);
  })
);