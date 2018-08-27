# minesweeper

*¿cómo ejecutar el proyecto?*

1. Clonar repositorio.
2. Doble clic en `index.html`.
3. El juego debe salir en su navegador por defecto.

*¿Cómo Jugar?*

El fin del juego es marcar las casillas en donde se encuentran todas las minas en el tablero.

1. El juego requerirá que usted especifique número de filas, número de columnas y número de minas.
2. Usted debe escoger una casilla para empezar el juego, para esto se dara clic a la casilla deseada.
   Las casillas en las que puedo hacer clic son representadas con un `.`.
3. Después de hacer clic pueden pasar varias cosas:
    - Se destapa una mina y pierdes el juego. Una mina es reprensentada con un `*`.
    - Se destapa un número, que puede ser del `1` al `8`. Este numero indica la cantidad de minas que hay    adyacentes a esta casilla.
    - Se destapa una blanca y con esta todas las blancas al rededor hasta encontrar numeros, asi sabras      que en esas casillas no hay minas.
      Las blancas estan representadas con un `_`.
4. Las casillas en la que crea que hay una mina se debe de carcar, para ello debe hacer el clic               derecho en la casilla en la que ha encontrado una mina y en el tablero aparecerá una P que representará    la casilla marcada.
5. El juego se gana cuando hayan sido marcadas todas las minas.