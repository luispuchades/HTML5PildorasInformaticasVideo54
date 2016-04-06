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
}


function procesarArchivos(e) {
    'use strict';

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

    botonArchivos.addEventListener("change", procesarArchivos, false);
}




//3. Asignación de Eventos
document.addEventListener("DOMContentLoaded", comenzar, false);
