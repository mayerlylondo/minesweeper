// Datos
var filas = [];

// Retorna un número aleatorio para fila
function elegirFilaRandomParaMina(numeroFilas) {
    return Math.floor(Math.random() * (numeroFilas - 0) + 0);
}

// Retorna un número aleatorio para columna
function elegirColumnaRandomParaMina(numeroColumnas) {
    return Math.floor(Math.random() * (numeroColumnas - 0) + 0);
}

// Valida si es una determinada celda hay una mina
function aquiHayMina(indiceFila, indiceColumna) {
    return (filas[indiceFila][indiceColumna].contenido == 'mina');
}

// Deacuerdo con el estado y contenido de una celda retornarme el icono (*, U, -, )
function obtenerTextoContenido(celda) {
    if (celda.estado == 'cubierto') {
        return '.';
    }
    if (celda.estado == 'marcado') {
        return 'P';
    }
    if (celda.estado == 'descubierto') {
        if (celda.contenido == 'blanco') {
            return '_';
        }
        if (celda.contenido == 'numero') {
            return celda.numero;
        }
        if (celda.contenido == 'mina') {
            return '*';
        }
    }
}

// Abre todas las celdas blancas que hay al lado de una celda blanca en especifico
function abrirBlancosCercanos(fila, columna, numeroFilas, numeroColumnas) {
    /*
    Se recorren en un ciclo for las 8 adyacencias (arriba, izq, der, etc etc)
    Por cada adyacencia: 
        1. Si es numero, marca destapado.
        2. Si es un blanco y no esta destapado, marca destapado y llama a esta misma funcion
    */
   
    // Declarando variables para adyacencias
    var arribaIzq = null, arriba = null, arribaDer = null, izquierda = null;
    var abajoIzq = null, abajo = null, abajoDer = null, derecha = null;
    // Asignando Variables
    if (fila > 0 && columna > 0) {
        arribaIzq = filas[fila - 1][columna - 1];
    }
    if (columna > 0) {
        izquierda = filas[fila][columna - 1]
        if (fila < numeroFilas - 1) {
            abajoIzq = filas[fila + 1][columna - 1]
        }
    }
    if (fila > 0) {
        arriba = filas[fila - 1][columna]
        if (columna < numeroColumnas - 1) {
            arribaDer = filas[fila - 1][columna + 1]
        }
    }
    if (columna < numeroColumnas - 1) {
        derecha = filas[fila][columna + 1]
    }
    if (fila < numeroFilas - 1) {
        abajo = filas[fila + 1][columna]
    }
    if ((fila < numeroFilas - 1) && (columna < numeroColumnas - 1)) {
        abajoDer = filas[fila + 1][columna + 1]
    }
    // Verificando adyacencias
    if (arribaIzq != null) {
        if (arribaIzq.contenido == 'numero') {
            arribaIzq.estado = 'descubierto'
        }
        if (arribaIzq.contenido == 'blanco' && arribaIzq.estado != 'descubierto') {
            arribaIzq.estado = "descubierto";
            abrirBlancosCercanos(fila - 1, columna - 1, numeroFilas, numeroColumnas)
        }
    }
    if (arriba != null) {
        if (arriba.contenido == 'numero') {
            arriba.estado = 'descubierto'
        }
        if (arriba.contenido == 'blanco' && arriba.estado != 'descubierto') {
            arriba.estado = "descubierto";
            abrirBlancosCercanos(fila - 1, columna, numeroFilas, numeroColumnas)
        }
    }
    if (arribaDer != null) {
        if (arribaDer.contenido == 'numero') {
            arribaDer.estado = 'descubierto'
        }
        if (arribaDer.contenido == 'blanco' && arribaDer.estado != 'descubierto') {
            arribaDer.estado = "descubierto";
            abrirBlancosCercanos(fila - 1, columna + 1, numeroFilas, numeroColumnas)
        }
    }
    if (derecha != null) {
        if (derecha.contenido == 'numero') {
            derecha.estado = 'descubierto'
        }
        if (derecha.contenido == 'blanco' && derecha.estado != 'descubierto') {
            derecha.estado = "descubierto";
            abrirBlancosCercanos(fila, columna + 1, numeroFilas, numeroColumnas)
        }
    }
    if (abajoDer != null) {
        if (abajoDer.contenido == 'numero') {
            abajoDer.estado = 'descubierto'
        }
        if (abajoDer.contenido == 'blanco' && abajoDer.estado != 'descubierto') {
            abajoDer.estado = "descubierto";
            abrirBlancosCercanos(fila + 1, columna + 1, numeroFilas, numeroColumnas)
        }
    }
    if (abajo != null) {
        if (abajo.contenido == 'numero') {
            abajo.estado = 'descubierto'
        }
        if (abajo.contenido == 'blanco' && abajo.estado != 'descubierto') {
            abajo.estado = "descubierto";
            abrirBlancosCercanos(fila + 1, columna, numeroFilas, numeroColumnas)
        }
    }
    if (abajoIzq != null) {
        if (abajoIzq.contenido == 'numero') {
            abajoIzq.estado = 'descubierto'
        }
        if (abajoIzq.contenido == 'blanco' && abajoIzq.estado != 'descubierto') {
            abajoIzq.estado = "descubierto";
            abrirBlancosCercanos(fila + 1, columna - 1, numeroFilas, numeroColumnas)
        }
    }
    if (izquierda != null) {
        if (izquierda.contenido == 'numero') {
            izquierda.estado = 'descubierto'
        }
        if (izquierda.contenido == 'blanco' && izquierda.estado != 'descubierto') {
            izquierda.estado = "descubierto";
            abrirBlancosCercanos(fila, columna - 1, numeroFilas, numeroColumnas)
        }
    }
}

// Asigna los numeros correspondientes alrededor de una mina
function colocarNumerosAdyacentes(fila, columna, numeroFilas, numeroColumnas) {
    if (fila > 0 && columna > 0) {
        if (filas[fila - 1][columna - 1].contenido != 'mina') {
            filas[fila - 1][columna - 1].numero += 1;
            filas[fila - 1][columna - 1].contenido = 'numero';
        }
    }
    if (columna > 0) {
        if (filas[fila][columna - 1].contenido != 'mina') {
            filas[fila][columna - 1].numero += 1;
            filas[fila][columna - 1].contenido = 'numero';
        }
        if (fila < numeroFilas - 1) {
            if (filas[fila + 1][columna - 1].contenido != 'mina') {
                filas[fila + 1][columna - 1].numero += 1;
                filas[fila + 1][columna - 1].contenido = 'numero';
            }
        }
    }
    if (fila > 0) {
        if (filas[fila - 1][columna].contenido != 'mina') {
            filas[fila - 1][columna].numero += 1;
            filas[fila - 1][columna].contenido = 'numero';
        }
        if (columna < numeroColumnas - 1) {
            if (filas[fila - 1][columna + 1].contenido != 'mina') {
                filas[fila - 1][columna + 1].numero += 1;
                filas[fila - 1][columna + 1].contenido = 'numero';
            }
        }
    }

    if (columna < numeroColumnas - 1) {
        if (filas[fila][columna + 1].contenido != 'mina') {
            filas[fila][columna + 1].numero += 1;
            filas[fila][columna + 1].contenido = 'numero';
        }
    }
    if (fila < numeroFilas - 1) {
        if (filas[fila + 1][columna].contenido != 'mina') {
            filas[fila + 1][columna].numero += 1;
            filas[fila + 1][columna].contenido = 'numero';
        }
    }
    if ((fila < numeroFilas - 1) && (columna < numeroColumnas - 1)) {
        if (filas[fila + 1][columna + 1].contenido != 'mina') {
            filas[fila + 1][columna + 1].numero += 1;
            filas[fila + 1][columna + 1].contenido = 'numero';
        }
    }
}

// Recorre el tablero en busca de minas para asignar los numeros adyacentes
function colocarNumeros(numeroFilas, numeroColumnas) {
    for (var i = 0; i < numeroFilas; i++) {
        for (var j = 0; j < numeroColumnas; j++) {
            if (aquiHayMina(i, j)) {
                colocarNumerosAdyacentes(i, j, numeroFilas, numeroColumnas);
            }
        }
    }
}

// Actualiza la interfaz grafica
function actualizaTablero(numeroFilas, numeroColumnas, perdimos = false) {
    var tablero = document.getElementById("tablero");
    var textoDeGameOver = document.getElementById("textoDeGameOver");
    tablero.innerHTML = '';
    tablero.oncontextmenu = function () { return false }
    for (var i = 0; i < numeroFilas; i++) {
        var nuevaFila = document.createElement("div");
        nuevaFila.setAttribute("class", "fila");
        nuevaFila.setAttribute("id", "fila" + i);
        tablero.appendChild(nuevaFila);
    }

    for (var i = 0; i < numeroFilas; i++) {
        var fila = document.getElementById(("fila" + i))
        for (var j = 0; j < numeroColumnas; j++) {
            var nuevaCelda = document.createElement("a");
            nuevaCelda.setAttribute("class", "celda");
            nuevaCelda.setAttribute("id", i + "-" + j);
            nuevaCelda.innerHTML = obtenerTextoContenido(filas[i][j])
            fila.appendChild(nuevaCelda);
        }
    }
    var celdas = document.getElementsByClassName("celda");
    for (var i = 0; i < celdas.length; i++) {
        celdas[i].addEventListener("mousedown", function (event) {
            var stringSeparado = event.target.id.split("-")
            if (event.button == 2) {
                manejarClicDeBanderita(parseInt(stringSeparado[0]), parseInt(stringSeparado[1]), numeroFilas, numeroColumnas);
            } else {
                manejarClicDeCelda(parseInt(stringSeparado[0]), parseInt(stringSeparado[1]), numeroFilas, numeroColumnas);
            }
        });
    }
    if (perdimos) {
        textoDeGameOver.className += " mostrar"
    } else {
        if(textoDeGameOver.classList.contains("mostrar")){
            textoDeGameOver.classList.remove("mostrar");
        }
    }
}

// Destapa todas las celdas de un tablero y muestra un mensaje
function gameOver(numeroFilas, numeroColumnas) {
    for (var i = 0; i < numeroFilas; i++) {
        for (var j = 0; j < numeroColumnas; j++) {
            filas[i][j].estado = 'descubierto';
        }
    }
}

// Click izquierdo
function manejarClicDeCelda(indiceFila, indiceColumna, numeroFilas, numeroColumnas) {
    var celdaActual = filas[indiceFila][indiceColumna];
    var gameOverTrigger = false;
    if (celdaActual.estado != 'marcado' && celdaActual.estado == 'cubierto') {
        if (celdaActual.contenido == 'mina') {
            gameOver(numeroFilas, numeroColumnas);
            gameOverTrigger = true
        } else if (celdaActual.contenido == 'numero') {
            celdaActual.estado = "descubierto";
        } else if (celdaActual.contenido == 'blanco') {
            celdaActual.estado = "descubierto";
            abrirBlancosCercanos(indiceFila, indiceColumna, numeroFilas, numeroColumnas);
        }
    }

    actualizaTablero(numeroFilas, numeroColumnas, gameOverTrigger);
}

// Click derecho (marcar)
function manejarClicDeBanderita(indiceFila, indiceColumna, numeroFilas, numeroColumnas) {

    var celdaActual = filas[indiceFila][indiceColumna];
    if (celdaActual.estado == 'marcado') {
        celdaActual.estado = 'cubierto';
    } else if (celdaActual.estado == 'cubierto') {
        celdaActual.estado = 'marcado';
    }

    actualizaTablero(numeroFilas, numeroColumnas);
}

// Se rellena el modelo del tablero
function fabricarCeldas(numeroFilas, numeroColumnas, numeroMinas) {
    // Fabricar Celdas (de momento vacias)
    for (var i = 0; i < numeroFilas; i++) {
        var celdas = [];
        for (var j = 0; j < numeroColumnas; j++) {
            celdas.push({
                numero: 0,
                contenido: 'blanco', // mina, numero, blanco
                estado: 'cubierto' // cubierto, marcado o descubierto
            })
        }
        filas.push(celdas);
    }
    // Llenar Minas
    var iteradorMinas = 0;
    while (iteradorMinas < numeroMinas) {
        var indiceFilaMina = elegirFilaRandomParaMina(numeroFilas);
        var indiceColumnaMina = elegirColumnaRandomParaMina(numeroColumnas);
        if (!aquiHayMina(indiceFilaMina, indiceColumnaMina)) {
            filas[indiceFilaMina][indiceColumnaMina].contenido = 'mina'
            iteradorMinas++;
        }
    }
    // Llenar numeros de acuerdo a las minas
    colocarNumeros(numeroFilas, numeroColumnas);
    // Actualizar Interfaz
    actualizaTablero(numeroFilas, numeroColumnas);
}

function iniciarPrograma() {
    var numeroDeFilas = prompt("¿Cuantas filas tendrá el juego?");
    var numeroDeColumnas = prompt("¿Cuantas columnas tendrá el juego?");
    var numeroDeMinas = prompt("¿Cuantas minas tendrá el juego?");

    if (!isNaN(numeroDeFilas) && !isNaN(numeroDeColumnas) && !isNaN(numeroDeMinas)
         && numeroDeFilas != null && numeroDeColumnas != null && numeroDeMinas != null
         && numeroDeFilas != '' && numeroDeColumnas != '' && numeroDeMinas != ''  ) {
        fabricarCeldas(numeroDeFilas, numeroDeColumnas, numeroDeMinas);
    } else {
        alert('No todos los valores digitados son numeros. Por favor haga clic en "Comienza de nuevo"')
    }
}

// INICIO DE MI PROGRAMA

var botonComienzaDeNuevo = document.getElementsByClassName("comienzaDeNuevo")[0];
botonComienzaDeNuevo.addEventListener("click", function () {
    filas = [];
    iniciarPrograma();
});

iniciarPrograma();
