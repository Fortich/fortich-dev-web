import React from 'react';

const post = {
  title: 'Lógica de Predicados y Cuantificadores',
  subtitle: 'El problema más común en matemáticas: contar',
  short_content:
    'Con los predicados ahora podremos contruir de manera ' +
    'formal oraciones del tipo n es par, donde, dependiendo de n. Con los' +
    'cuantificadores repondemos dos preguntas muy fundamentales en las ' +
    'matemáticas; si existe un elemento que cumpla la propiedad y si todos ' +
    'los elementos cumplen una propiedad.',
  updated_on: 'March 7, 2023, 9:49 p.m.',
  reading_time: '30 min',
  slug: 'logica-de-predicados',
  content: (
    <>
      <p>
        Con los predicados ahora podremos contruir de manera formal oraciones
        del tipo <code>n es par</code>, donde, dependiendo de <code>n</code>.
        Con los cuantificadores repondemos dos preguntas muy fundamentales en
        las matemáticas; si existe un elemento que cumpla la propiedad y si
        todos los elementos cumplen una propiedad.
      </p>

      <h4>Predicado</h4>

      <p>
        Un predicado es una propiedad que objetos matemáticos pueden satisfacer
        según el universo. El universo de referencia tiene que ser establecido
        de antemano para definir un predicado. Cuando un predicado es{' '}
        <i>evaluado</i>, puede ser tomado como una proposición.
      </p>

      <h6>Notación</h6>

      <p>
        El universo de referencia lo denoraremos con una letra u mayúscula: U.
        Y para los predicados utilizaremos letras de nuestro alfabeto en
        mayúscula.
      </p>

      <h6>Ejemplos de Predicados</h6>

      <p>
        El predicado <code>P(x) := &quot;x<sup>2</sup> + 1 = 0&quot;</code>. En
        el universo de los números naturales <code>U = ℕ</code> no hay ningún
        elemento que, reemplazando <code>x</code> en <code>P</code> haga que
        {' '}<code>P</code> sea verdadero.
      </p>

      <p>
        El predicado <code>M(x,y) := &quot;x es padre de y&quot;</code> en el
        universo U = Una colección de seres humanos.
        M(&quot;Oscar&quot;, &quot;Pepe&quot;) sería equivalente a decir en el
        idioma español a &quot;Oscar es padre de Pepe&quot;.
      </p>

      <h6>Evaluación de Predicado</h6>

      <p>
        Dado un predicado <code>P(x)</code> y un universo de referencia{' '}
        <code>U</code>, cuando reemplazamos <code>x</code> por un elemento{' '}
        <code>a</code> tal que <code>a ∈ U</code>, obtenemos la proposición
        {' '}<code>P(a)</code>.
      </p>

      <h4>Cuantificadores</h4>

      <p>
        Sea <code>P(x)</code> un predicado y <code>U</code> su universo de
        referencia. Cuando hablamos de cuantificadores tenemos dos preguntas
        que escencialmente nos motivan:
      </p>

      <ul>
        <li>
          Nos gustaría saber si todos los objetos de <code>U</code> satisfacen
          el predicado <code>P(x)</code>.
        </li>
        <li>
          También es interesante saber si existe algún elemento de{' '}
          <code>U</code> que satisface el predicado <code>P(x)</code>.
        </li>
      </ul>

      <h6>Ejemplos de Cuantificadores</h6>

      <ul>
        <li>
          <code>U = ℝ. P(x) = |sin(x)| ≤ 1</code> para <b>todo</b> número real
          x.
        </li>
        <li>
          <code>U = ℝ. P(x) = |sin(x)| ≤ 1</code> para <b>algún</b> número real
          x.
        </li>
      </ul>

      <p>En ambos casos es verdadero.</p>

      <h6>Notación del cuantificador universal</h6>

      <p>
        Sea <code>U</code> un universo fijo y <code>P(x)</code> un predicado.
        Consideraremos afirmaciones de la forma:
      </p>

      <ul>
        <li>
          Para todo <code>x ∈ U</code> se cumple <code>P(x)</code>.
        </li>
        <li>
          Para todo <code>x ∈ U</code>, <code>P(x)</code> es verdadera.
        </li>
        <li>
          La afirmación <code>P(x)</code> es verdadera para todo
          <code>x ∈ U</code>.
        </li>
        <li>
          Todos los posibles reemplazos de <code>x</code> por objetos de{' '}
          <code>U</code> satisfacen <code>P(x)</code>.
        </li>
      </ul>

      <p>Estas expresiones se denotan por</p>
      <p>
        <code>∀xP(x)</code>
      </p>
      <p>
        Y es verdadera si y solo si para cada <code>a ∈ U</code>,{' '}
        <code>P(a)</code> es verdadera.
      </p>

      <h6>Notación del cuantificador existencial</h6>

      <p>
        Sea <code>U</code> un universo fijo y <code>P(x)</code> un predicado.
        Consideraremos afimaciones de la forma:
      </p>

      <ul>
        <li>
          Existe <code>x</code> en <code>U</code> que satisface{' '}
          <code>P(x)</code>.
        </li>
        <li>
          Para algún <code>x</code> en <code>U</code>, <code>P(x)</code>{' '}
          es verdadera.
        </li>
        <li>
          Existe al menos un reemplazo para el cual <code>P(x)</code> ocurre.
        </li>
      </ul>

      <p>Estas expresiones se denotan por <code>∃xP(x)</code> y es verdadera si
        y solo si existe algún reemplazo <code>a ∈ U</code>, <code>P(a)</code>
        es verdadera.
      </p>

      <h6>Ejemplo de la notación de cuantificadores</h6>

      <p>Estudiemos la siguiente preposición:</p>
      <p>
        <code>U = &quot;la colección de smartphones en el planeta&quot;</code>
      </p>
      <p>
        <code>I(x) = &quot;x se puede conectar a internet&quot;</code>
      </p>
      <p>
        <code>∀xP(x) = &quot;Todo smartphone en el planeta se puede conectar a
          internet&quot;</code>
      </p>
      <p>
        <code>
          ∃xP(x) = &quot;Existe algún smartphone en el planeta que se puede
          conectar a internet&quot;
        </code>
      </p>
    </>
  ),
};
export default post;
