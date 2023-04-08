import React from 'react';

import Patron from './images/patron.gif';

const vida = {
  title: 'Juguemos a Simular Vida',
  subtitle: 'Definir la vida es una tarea difícil; aquí una definición muy b' +
    'uena no vas a encontrar',
  short_content: 'El juego de la vida de John Conway es un ejemplo de jugar ' +
    'a simular vida, es un juego de cero jugadores, es decir, donde no hay u' +
    'na entidad externa que manipula el sistema, o hacerlo cambiar de estado' +
    '. El sistema en sí mismo es autogestionado y cambia de estado, creando ' +
    'así...',
  updated_on: 'March 6, 2023, 7:48 p.m.',
  reading_time: '10 min',
  slug: 'vida',
  content:
    <>
      <p>
        El Juego de la Vida de John Conway es un ejemplo de <b>jugar a simular
          vida</b>, estás aburrido un día y ¡pum!, creas un modelo computacional
        que simula un tipo de vida natural. El juego es uno de cero jugadores,
        es decir, donde no hay una entidad externa que logre manipular el
        sistema, o hacerlo cambiar de estado. El sistema en sí mismo es
        autogestionado y cambia de estado; creando así una simulación que
        parece simular la vida natural, partiendo de un espacio bidimencional,
        unos amiguitos que llamaremos células y unas simples reglas que definen
        cómo interaccionan las células.
      </p>

      <img className="rounded img-thumbnail float-end" src={Patron} alt="..."/>

      <p>
        Las reglas del Juego de la Vida son definidas siguiendo un esquema o
        estructura matemática llamada <b>Autómata Celular</b>, estas reglas,
        junto a un espacio, son las que dan origen a un comportamiento que no
        puede ser visto únicamente revisando las partes más fundamentales de
        éste, un modelo computacional que da origen a una forma particular de
        vida artificial que simula algunos aspectos de la vida natural, una
        sencilla vida artificial basada en silicio.
      </p>

      <h5><b>Autómatas Celulares</b></h5>

      <p>
        Un autómata celular es un modelo computacional en el que encontramos
        células (o celdas) con un número finito de estados y una grilla, matriz
        o espacio, donde se encuentras estas células. La matriz debe tener un
        número finito de dimensiones, un estado inicial y <b>generaciones</b>,
        o pasos del tiempo discretos, en el que se da la libertad a las células
        de cambiar de estado o <b>avanzar</b>.
      </p>

      <p>
        En el Juego de la Vida de John Conway nos encontramos con un tablero
        bidimensional en el que habitan células que pueden estar en solo dos
        estados: viva y muerta. Las reglas en las que las células cambian de
        estado (renacen, parmanecen vivas, permanecen muertas o mueren) son
        expuestas ac ontinuación:
      </p>

      <h5>Reglas</h5>

      <ol type="1">
        <li>
          Las células son seres sociales, necesitan de otras células para
          interactuar o vivir, así que cualquier célula con menos de dos
          vecinos morirá por desolación en la siguiente generación.
        </li>
        <li>
          Los recursos son bastante limitados en este espacio y en este tiempo,
          así que una célula con más de tres vecinos va a encontrar muchas
          dificultades para seguir viviendo en este espacio y en este tiempo.
          Así que en la siguiente generación morirá.
        </li>
        <li>
          Las células pueden ver nacer a una célula vecina si esta tiene tres
          vecinos, en estas condiciones se encuentra el surgir espontáneo de la
          vida.
        </li>
        <li>
          Cualquier célula viva con dos o tres vecinos vive en le próxima
          generación, teniendo las condiciones óptimas para su superviviencia.
        </li>
      </ol>

      <h4><b>La vida y sus múltiples definiciones</b></h4>

      <p>Y al empezar a hablar sobre la vida nos econtramos con un problema: no
        tenemos una definición común de vida. Deberíamos definirla; de forma en
        que todos sepamos de dónde partimos y hacia dónde vamos. Pero definir
        la vida es una tarea muy costosa, que tiene matices amplios y variados,
        matices como percepciones culturales, socioeconómicos, políticos,
        biológicos y, a veces, como en este caso, <b>computacionales</b>; pero
        tarea necesaria para que podamos <b>jugar a crear vida</b>. La
        definición de vida con el que vamos a partir en esta entrada del <a
        href="https://fortich.dev/"> Blog Aleatorio de internet @ Fortich.dev
      </a> , es la de un <a
        href="https://es.wikipedia.org/wiki/Patr%C3%B3n_(estructura)"> patrón
      </a> en el espacio y en el tiempo.
      </p>

      <p>
        Cuando nos centramos en los matices computacionales y matemáticos,
        llegamos a definiciones como estas, un patrón en el espacio y en el
        tiempo es una definición demasiado amplia que intenta encerrar en un
        conjunto todas las formas de vida que conocemos. Entendemos un patrón
        como un algo (cualquier cosa) que ocurre de forma repetida y regular, y
        el espacio y el tiempo donde se desarrolla el patrón, es el lugar y
        periodo de ocurrencia. Para ejemplificar esta idea, podemos ver a todas
        las plantas: las plantas aparecen en el espacio, perduran en el tiempo
        y desaparecen, comportándose como un patrón. La existencia misma de
        nuestro sistema solar puede ser visto como una forma de vida siguiendo
        esta definición, sin embargo, es lo suficientemente cerrada como para
        excluir una simple piedra, o el agua que corre por un río (según como
        se mire, claro).
      </p>
    </>,
};
export default vida;
