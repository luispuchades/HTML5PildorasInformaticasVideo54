/*global window */
/*global alert */
/*jslint browser: true, for:true */

//JavaScript Document

/**Curso: HMTL5 - Pildoras Informáticas - API File I
 * Origin: Capitulo54.html ==> Accediendo a archivos en local
 */

// "use strict";

// PENDIENTE CORREGIR  -  REVISAR DOCUMENTACION indexedDB //

//1. Definición de Objetos y Variables
var zonaDatos;
var botonArchivos;


//1.1 Extracción de elementos desde HTML
zonaDatos = document.getElementById("zona-datos");
botonArchivos = document.getElementById("archivos");

function mostrarEnWeb(e) {
    'use strict';

// Le pasamos el objeto que desencadena el envento en el momento en el que
// ocurre el evento. En este caso, la "e" esta haciendo referencia al lector.
    var resultado;

// Asignamos a la variable resultado, el resultado del objeto lector con result
// OJO >> EJECUTA CODIGO HTML. NO SOLO MUESTRA TEXTO.
    resultado = e.target.result;

    zonaDatos.innerHTML = resultado;
// Si en lugar de usar innerHTML usamos textContent, no ejecuta código HTML
//    zonaDatos.textContent = resultado;
}



function procesarArchivos(e) {
    'use strict';
//  Pasamos a la función procesarArchivos el parámetro e
//  que es el evento que desencadena input a través de su
//  botón botonArchivos que es la captura del botón archivos
//  del fichero HTML

    var archivos;
    var miArchivo;
    var lector;

// Almacenamos en una matriz bajo la variable archivos todos los archivos
// que capturamos con el objeto e al desencadenar el evento archivos
// y aplicarle la propiedad files, que registra todos los archivos como matriz.
    archivos = e.target.files;
    miArchivo = archivos[0];

// Creamos el lector:
// Necesitamos un lector para poder leer la información que nos devuelven
// los métodos del objeto devuelto
    lector = new FileReader();

// El lector lee el archivo seleccionado. Añadimos un segundo parámetro
// para que nos lea los carácteres de Europa Occidental
    lector.readAsText(miArchivo, "iso-8859-1");

// Ponemos el lector a la escucha. Cuando cargue el lector, asignaremos
// una función para que muestre el contenido del archivo.
    lector.addEventListener("load", mostrarEnWeb, false);


}


function comenzar() {
    'use strict';

// El botón "archivos" es un input tipo file que genera un
// evento. Este evento es la selección de un fichero
    botonArchivos.addEventListener("change", procesarArchivos, false);
}




//3. Asignación de Eventos
document.addEventListener("DOMContentLoaded", comenzar, false);
