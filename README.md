# minesweeper

*¿Cómo ejecutar el proyecto?*

1. Clonar repositorio.
2. Doble clic en `index.html`.
3. El juego debe salir en tú navegador por defecto.

*¿Cómo Jugar?*

El fin del juego es marcar las casillas en donde se encuentran todas las minas en el tablero.

1. El juego requerirá que especifiques número de filas, número de columnas y número de minas.
2. Debes escoger una casilla para empezar el juego, para esto debes hacer clic a la casilla deseada.
   Las casillas en las que puedes hacer clic son representadas con un `.`.
3. Después de hacer clic pueden pasar varias cosas:
    - Se destapa una mina y pierdes el juego. Una mina es reprensentada con un `*`.
    - Se destapa un número, que puede estar entre el `1` y el `8`. Este numero indica la cantidad de minas   que hay adyacentes a la casilla destapada.
    - Se destapa una blanca, y luego automáticamente todas las blancas al rededor hasta encontrar números,   así sabras que en esas casillas no hay minas.
      Las blancas estan representadas con un `_`.
4. Las casillas en las que creas que hay una mina las debes marcar haciendo clic derecho en la casilla        deseada y en el tablero aparecerá una `P` que representará la casilla marcada.
5. El juego se gana cuando hayan sido marcadas todas las minas.