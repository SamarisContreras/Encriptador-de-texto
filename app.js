// JavaScript Code

console.log("El archivo app.js se está ejecutando");
console.log(document.getElementById("texto"));  // Debería mostrar el elemento textarea
console.log(document.getElementById("resultado"));  // Debería mostrar el textarea de resultado


// Función para encriptar el texto
function encriptarTexto(texto) {
    return texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
}

// Función para desencriptar el texto
function desencriptarTexto(texto) {
    return texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
}

// Función que maneja el proceso de encriptar/desencriptar
function manejarTexto(idBoton) {
    const texto = document.getElementById("texto").value;
    let resultado = "";

    if (idBoton === "encriptar") {
        resultado = encriptarTexto(texto);
    } else if (idBoton === "desencriptar") {
        resultado = desencriptarTexto(texto);
    }

    const resultadoElement = document.getElementById("resultado");
    if (resultadoElement.tagName === "TEXTAREA" || resultadoElement.tagName === "INPUT") {
        resultadoElement.value = resultado;
    } else {
        resultadoElement.textContent = resultado;
    }

    //document.getElementById("resultado").value = resultado;

    // Mostrar el resultado y ocultar el mensaje de "Ningún mensaje fue encontrado"
    document.getElementById("vacio").style.display = "none";
}

/// Asignar funciones a los botones de encriptar y desencriptar
document.getElementById("encriptar").addEventListener("click", function() {
    manejarTexto("encriptar");
});
document.getElementById("desencriptar").addEventListener("click", function() {
    manejarTexto("desencriptar");
});