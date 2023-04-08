import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const post = {
  title: 'Lógica de Proposiciones',
  subtitle: 'Que sea lógico no es suficiente para que tenga sentido',
  short_content:
    'La lógica es una rama de diversas áreas de estudio, conectan a la ' +
    'filosofía con las matemáticas y crean un espacio para intentar ' +
    'encontrar la verdad. Suponiendo, claro está, que la verdad sí existe.',
  updated_on: 'March 6, 2023, 7:48 p.m.',
  reading_time: '30 min',
  slug: 'logica-de-proposiciones',
  content: (
    <>
      <p>
        La lógica es una rama de diversas áreas de estudio, conectan a la
        filosofía con las matemáticas y crean un espacio para intentar
        encontrar la <b>verdad</b>. Suponiendo, claro está, que la
        <b>verdad</b> sí existe.
      </p>

      <h4>Proposiciones</h4>

      <p>
        Una proposición es una afirmación tomada del lenguaje natural (como en
        nuestro caso, el español), del cual se puede obtener su valor de
        verdad. Es decir, podemos decir si es verdadera o falsa.
      </p>

      <h6>Notación</h6>

      <p>
        Utilizaremos letras minúsculas tanto del alfabeto español y como del
        alfabeto griego para denotar las proposiciones. Elementos tales como
        <code>p, q, r, s, α, β, γ, λ</code> son buenos ejemplos de letras
        comúnmente utilizadas para denotar proposiciones.
      </p>

      <h6>Ejemplos</h6>
      <ul>
        <li>
          <p>
            <code>α = &quot;Está lloviendo&quot;</code>. 🌧
          </p>
          <p>
            <code>α</code> es una proposición que nos está afirmando que está
            lloviendo. Esto bien puede ser cierto si en este momento está
            lloviendo, o bien falso como ahora mismo, cuando estoy escribiendo
            esta entrada, que es falso. A <code>α</code> le asignamos un valor
            de verdad.
          </p>
        </li>
        <li>
          <p>
            <code>β = &quot;1 + 2 = 3&quot;</code> 🔢
          </p>
          <p>
            Si bien acá estamos asumiendo muchas cosas, como la existencia de
            números, su relación de suma y su relación de igualdad; este es
            otro ejemplo de una proposición. En el universo de los números
            naturales, es verdad que la suma del número <code>1</code> y el
            número <code>2</code> es igual al número <code>3</code>. En este
            caso, la asignamos el valor de verdad a <code>β</code> de verdad.
          </p>
        </li>
      </ul>

      <h6>Contra ejemplos</h6>
      <ul>
        <li>
          <p>
            <code>γ = &quot;¿Está lloviendo?&quot; 🌧️</code>
          </p>
          <p>
            En este caso, nos encontramos con un elemento que no es una
            proposición. γ es un elemento del lenguaje natural que no está
            afirmando nada, está haciendo una <b>pregunta</b> y las preguntas
            no hacen parte de las proposiciones.
          </p>
        </li>
        <li>
          <p>
            <code>λ = &quot;¡Ordena tu cuarto!&quot; 🥴</code>
          </p>
          <p>
            Con λ tenemos otro caso de un elemento del lenguaje natural que no
            es una proposición. <code>λ</code> no nos está haciendo ninguna
            afirmación, más bien está dando una órden imperativa.
          </p>
        </li>
      </ul>

      <h4>Tablas de verdad</h4>

      <p>
        Las tablas de verdad son herramientas visuales que nos permiten conocer
        los posibles valores de verdad de las diversas proposiciones y sus
        operaciones entre ellas.
      </p>

      <h6>Ejemplo</h6>

      <p>
        Nota: En este ejemplo de tabla de verdad se hará uso de unos operadores
        que se explorarán más adelante en esta entrada de blog.
      </p>

      <div className="row">
        <div className="col"></div>
        <div className="col">
          <table className="table table-striped text-center">
            <thead>
              <tr>
                <th>
                  <code>α</code>
                </th>
                <th>
                  <code>β</code>
                </th>
                <th>
                  <code>¬ α</code>
                </th>
                <th>
                  <code>α ∧ β</code>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>T</th>
                <td>T</td>
                <td>F</td>
                <td>T</td>
              </tr>
              <tr>
                <th>T</th>
                <td>F</td>
                <td>F</td>
                <td>F</td>
              </tr>
              <tr>
                <th>F</th>
                <td>T</td>
                <td>T</td>
                <td>F</td>
              </tr>
              <tr>
                <th>F</th>
                <td>F</td>
                <td>T</td>
                <td>F</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="col"></div>
      </div>

      <h4>Conectores lógicos</h4>

      <p>
        Un conector lógico es un operador que nos servirá para unir oraciones,
        usualmente son operadores unitarios y binarios.
      </p>

      <h5>Negación</h5>

      <p>
        La conjunción es un operador unitario que, haciendo un simil del
        lenguaje natural, tenemos un valor de verdad <b>verdadero</b> cuando α
        tenga un valor de verdad falso y tenemos un valor de verdad
        <b>falso</b> cuando α tenga un valor de verdad verdadero.
      </p>

      <p>
        Dadas la proposiciones α, la negación de α corresponde a las siguientes
        proposiciones en lenguaje natural:
      </p>

      <ul>
        <li>
          No <code>α</code>.
        </li>
        <li>
          No pasa que <code>α</code>.
        </li>
        <li>
          No es el caso que <code>α</code>.
        </li>
      </ul>

      <h6>Notación</h6>

      <p>
        Para denotar la conjunción, utilizaremos el símbolo tilde
        (<code>¬</code>) como prefijo de la proposición: <code>¬ α</code>.
      </p>

      <h6>Tabla de verdad de la negación</h6>

      <Row>
        <Col/>
        <Col>
          <table className="table table-striped text-center">
            <thead>
              <tr>
                <th>
                  <code>α</code>
                </th>
                <th>
                  <code>¬ α</code>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>T</th>
                <td>F</td>
              </tr>
              <tr>
                <th>F</th>
                <td>T</td>
              </tr>
            </tbody>
          </table>
        </Col>
        <Col/>
      </Row>

      <h6>Ejemplos de la negación en el lenguaje natural</h6>

      <ul>
        <li>
          <p>
            <code>γ = &quot;Esta entrada es sobre lógica&quot;</code>. 🧠
          </p>
          <p>
            <code>¬ γ</code> correspondería a &quot;Esta entrada no es sobre
            lógica&quot; en el lenguaje español.
          </p>
        </li>
        <li>
          <p>
            <code>β = &quot;El símbolo de PARE es rojo&quot;</code>. 🛑
          </p>
          <p>
            <code>¬ β</code> correspondería a &quot;El símbolo de PARE no es
            rojo&quot; en el lenguaje español.
          </p>
        </li>
      </ul>

      <h5>Conjunción</h5>

      <p>
        La conjunción es un operador que, tal como en el lenguaje natural,
        tenemos un valor de verdad <b>verdadero</b> cuando tanto <code>α</code>
        como <code>β</code> tengan valor de verdad verdadero. En cualquier otro
        caso, la conjunción será falsa.
      </p>

      <p>
        Dadas dos proposiciones <code>α</code> y <code>β</code>, la conjunción
        de <code>α</code> y <code>β</code> corresponde a las siguientes
        proposiciones en lenguaje natural:
      </p>

      <ul>
        <li>
          <code>α</code> y <code>β</code>.
        </li>
        <li>
          Es el caso que <code>α</code> y <code>β</code>.
        </li>
        <li>
          Se tiene que <code>α</code> y <code>β</code>.
        </li>
      </ul>

      <h6>Notación</h6>

      <p>
        Para denotar la conjunción, utilizaremos el símbolo circunflejo
        (<code>^</code>) entre ambas proposiciones:
        <code>α ^ β</code>.
      </p>

      <h6>Tabla de verdad de la conjunción</h6>

      <div className="row">
        <div className="col"></div>
        <div className="col">
          <table className="table table-striped text-center">
            <thead>
              <tr>
                <th>
                  <code>α</code>
                </th>
                <th>
                  <code>β</code>
                </th>
                <th>
                  <code>α ^ β</code>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>T</th>
                <td>T</td>
                <td>T</td>
              </tr>
              <tr>
                <th>T</th>
                <td>F</td>
                <td>F</td>
              </tr>
              <tr>
                <th>F</th>
                <td>T</td>
                <td>F</td>
              </tr>
              <tr>
                <th>F</th>
                <td>F</td>
                <td>F</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="col"></div>
      </div>

      <h6>Ejemplos de la conjunción en el lenguaje natural</h6>

      <ul>
        <li>
          <p>
            <code>π = &quot;Sonreír es saludable&quot;</code>. 😊
          </p>
          <p>
            <code>ψ = &quot;Comer vegetales es saludable&quot;</code>. 🍆
          </p>
          <p>
            <code>π ^ ψ</code> correspondería a <code>&quot;Sonreír es
              saludable y comer vegetales es saludable&quot;</code> en el
            lenguaje español.
          </p>
        </li>
        <li>
          <p>
            <code>β = &quot;La lógica es interesante&quot;</code>. 🧠
          </p>
          <p>
            <code>ω = &quot;La lógica es fundamental para las matemáticas&quot;
            </code>. 📚
          </p>
          <p>
            <code>β ^ ω</code> correspondería a
            <code>&quot;La lógica es interesante y fundamental para las
              matemáticas&quot;</code> en el lenguaje español.
          </p>
        </li>
      </ul>

      <h5>Disyunción</h5>

      <p>
        La disyución es un operador que varía un poco en su versión del
        lenguaje natural español: tenemos un valor de verdad <b>verdadero</b>
        cuando alguno de los dos <code>α</code> o <code>β</code> tengan valor de
        verdad verdadero. En el caso en el que ambos <code>α</code> y
        <code>β</code> sean falsos al mismo tiempo, la disyunción será falsa.
      </p>
      <p>
        La disyunción es ligeramente diferente en el español ya que
        <i>a veces</i> la disyunción intenta dar a entender una exclusividad.
        Este operador en lógica será diferente y se tratará del <b>o exclusivo
        </b>, operador del que hablaremos más adelante.
      </p>
      <p>
        Dadas dos proposiciones <code>α</code> y <code>β</code>, la disyunción
        de <code>α</code> y<code>β</code> corresponde a las siguientes
        proposiciones en lenguaje natural:
      </p>

      <ul>
        <li>
          Es el caso que <code>α</code> o <code>β</code>.
        </li>
        <li>
          Se tiene que <code>α</code> o <code>β</code>.
        </li>
        <li>
          O bien <code>α</code> o bien <code>β</code>.
        </li>
      </ul>

      <h6>Notación</h6>

      <p>
        Para denotar la disyunción, utilizaremos el símbolo carón,
        anticircunflejo o cuña hacia abajo (<code>v</code>) entre ambas
        proposiciones: <code>α v β</code>.
      </p>

      <h6>Tabla de verdad de la disyunción</h6>

      <div className="row">
        <div className="col"></div>
        <div className="col">
          <table className="table table-striped text-center">
            <thead>
              <tr>
                <th>
                  <code>α</code>
                </th>
                <th>
                  <code>β</code>
                </th>
                <th>
                  <code>α v β</code>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>T</th>
                <td>T</td>
                <td>T</td>
              </tr>
              <tr>
                <th>T</th>
                <td>F</td>
                <td>T</td>
              </tr>
              <tr>
                <th>F</th>
                <td>T</td>
                <td>T</td>
              </tr>
              <tr>
                <th>F</th>
                <td>F</td>
                <td>F</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="col"></div>
      </div>

      <h6>Ejemplos de la disyunción en el lenguaje natural</h6>

      <ul>
        <li>
          <p>
            <code>φ = &quot;Para el corazón es bueno correr&quot;</code>. 🏃
          </p>
          <p>
            <code>δ = &quot;Para el corazón es bueno caminar rápido&quot;
            </code>. 💪
          </p>
          <p>
            <code>φ v δ</code> correspondería a <code>&quot;Para el corazón es
              bueno correr o caminar rápido&quot;</code>en el lenguaje español.
          </p>
        </li>
        <li>
          <p>
            <code>ξ = &quot;Para aprender un lenguaje debes practicarlo todos
              los días&quot;</code>. 🈶️
          </p>
          <p>
            <code>ρ = &quot;Para aprender un lenguaje debes hacer ejercicios de
              forma frecuente&quot;</code>.
            🉑️
          </p>
          <p>
            <code>ξ v ρ</code> correspondería a <code> &quot;Para aprender un
              lenguaje debes practicarlo todos los días o hacer ejercicios de
              forma frecuente&quot;
            </code> en el lenguaje español.
          </p>
        </li>
      </ul>

      <h5>Condicional</h5>

      <p>
        El condicional es un operador que refleja una <b>implicación</b> o una
        <b>consecuencia</b>. Como en el lenguaje natural, tenemos un
        antecedente y un consecuente. En el condicional, todos sus valores de
        verdad son verdad a<b>excepción</b> de un caso; y es el caso en el que
        el antecedente es una proposición con valor de verdad verdadero y el
        consecuente es una proposición con valor de verdad falso. En ese caso,
        todo el condicional es falso.
      </p>
      <p>
        Dadas dos proposiciones <code>α</code> y <code>β</code>, el condicional
        de <code>α</code> y<code>β</code> corresponde a las siguientes
        proposiciones en lenguaje natural:
      </p>

      <ul>
        <li>
          <code>α</code> implica <code>β</code>.
        </li>
        <li>
          <code>β</code> si <code>α</code>.
        </li>
        <li>
          <code>α</code> es condición suficiente para <code>β</code>.
        </li>
        <li>
          Si <code>α</code>, entonces <code>β</code>.
        </li>
        <li>
          <code>β</code> solo si <code>α</code>.
        </li>
      </ul>

      <h6>Notación</h6>

      <p>
        Para denotar el condicional, utilizaremos el símbolo de flecha con una
        única línea hacia la derecha entre ambas proposiciones, de forma que el
        antecedente esté en la izquierda y el consecuente en la derecha:
        <code>α → β</code>.
      </p>

      <h6>Tabla de verdad del condicional</h6>

      <div className="row">
        <div className="col"></div>
        <div className="col">
          <table className="table table-striped text-center">
            <thead>
              <tr>
                <th>
                  <code>α</code>
                </th>
                <th>
                  <code>β</code>
                </th>
                <th>
                  <code>α → β</code>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>T</th>
                <td>T</td>
                <td>T</td>
              </tr>
              <tr>
                <th>T</th>
                <td>F</td>
                <td>F</td>
              </tr>
              <tr>
                <th>F</th>
                <td>T</td>
                <td>T</td>
              </tr>
              <tr>
                <th>F</th>
                <td>F</td>
                <td>T</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="col"></div>
      </div>

      <h6>Ejemplos de la disyunción en el lenguaje natural</h6>

      <ul>
        <li>
          <p>
            <code>φ = &quot;Hago ejercicio en el parque de día&quot;</code>. 🏋️
          </p>
          <p>
            <code>ω = &quot;Recibo sol&quot;</code>. 🌤
          </p>
          <p>
            <code>φ → ω</code> correspondería a <code>&quot;Si hago ejercicio
              en el parque de día, entonces recibo sol&quot;</code> en el
            lenguaje español.
          </p>
        </li>
        <li>
          <p>
            <code>ε = &quot;Estudio mucho para el examen&quot;</code>. 🤓
          </p>
          <p>
            <code>κ = &quot;Obtengo una buena nota en el examen&quot;</code>. 💯
          </p>
          <p>
            <code>ε → κ</code> correspondería a <code>&quot;Si estudio mucho
              para el examen, obtendré una buena nota&quot;</code> en el
            lenguaje español.
          </p>
        </li>
      </ul>

      <h5>Bicondicional</h5>

      <p>
        El condicional doble o bicondicional es un operador que refleja una
        <b>implicación</b> que funciona en ambas direcciones. En el lenguaje
        natural, el bicondicional sería similar a una implicación donde ambos
        elementos son antecedentes y consecuentes. En el bicondicional, sus
        valores de verdad son verdad en el caso en el que ambas proposiciones
        son equivalentes, o tienen el mismo valor de verdad; en caso contrario,
        el doble condicional o bicondicional será falso.
      </p>
      <p>
        Dadas dos proposiciones <code>α</code> y <code>β</code>, el
        bicondicional de <code>α</code> y <code>β</code> corresponde a las
        siguientes proposiciones en lenguaje natural:
      </p>

      <ul>
        <li>
          <code>α</code> si y solo si <code>β</code>.
        </li>
        <li>
          <code>α</code> es equivalente a <code>β</code>.
        </li>
        <li>
          Si <code>α</code> entonces <code>β</code> y si <code>β</code>
          entonces <code>α</code>.
        </li>
      </ul>

      <h6>Notación</h6>

      <p>
        Para denotar el bicondicional, utilizaremos el símbolo de flecha con
        una única línea hacia la derecha y hacia la izquierda entre ambas
        proposiciones: <code>α ↔ β</code>.
      </p>

      <h6>Tabla de verdad del bicondicional</h6>

      <div className="row">
        <div className="col"></div>
        <div className="col">
          <table className="table table-striped text-center">
            <thead>
              <tr>
                <th>
                  <code>α</code>
                </th>
                <th>
                  <code>β</code>
                </th>
                <th>
                  <code>α ↔ β</code>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>T</th>
                <td>T</td>
                <td>T</td>
              </tr>
              <tr>
                <th>T</th>
                <td>F</td>
                <td>F</td>
              </tr>
              <tr>
                <th>F</th>
                <td>T</td>
                <td>F</td>
              </tr>
              <tr>
                <th>F</th>
                <td>F</td>
                <td>T</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="col"></div>
      </div>

      <h6>Ejemplos del bicondicional en el lenguaje natural</h6>

      <ul>
        <li>
          <p>
            <code>γ = &quot;Hoy es sábado&quot;</code>. 📅
          </p>
          <p>
            <code>ρ = &quot;Mañana es domingo&quot;</code>. ➡️
          </p>
          <p>
            <code>γ ↔ ρ</code> correspondería a <code>&quot;Hoy es sábado si y
              solo si mañana es domingo&quot;</code> en el lenguaje español.
          </p>
        </li>
        <li>
          <p>
            <code>ς = &quot;La planta está creciendo&quot;</code>. 🌱
          </p>
          <p>
            <code>τ = &quot;La planta está viva&quot;</code>. 🪴
          </p>
          <p>
            <code>ς ↔ τ</code> correspondería a <code> &quot;La planta está
              creciendo si está viva y la planta está viva si está
              creciendo&quot; </code> en el lenguaje español.
          </p>
        </li>
      </ul>

      <h5>O exclusivo</h5>

      <p>
        Un &quot;o&quot; diferente, que está muy presente en nuestro idioma
        pero que a veces puede parecer ambigüo, es el &quot;o&quot; exclusivo.
        Es un &quot;o&quot; que es similar al &quot;o&quot; inclusivo, pero que
        excluye el caso en el que ambas proposiciones son verdaderas. También
        es reconocido por ser la <b>negación</b> del bicondicional.
      </p>
      <p>
        Dadas dos proposiciones <code>α</code> y <code>β</code>, el
        &quot;o&quot; exclusivo de <code>α</code> y <code>β</code>
        corresponde a las siguientes proposiciones en lenguaje natural:
      </p>

      <ul>
        <li>
          <code>α</code> o <code>β</code>, pero no ambas al mismo tiempo.
        </li>
      </ul>

      <h6>Notación</h6>

      <p>
        Para denotar el &quot;o&quot; exclusivo, utilizaremos el símbolo de
        círculo con una cruz en el medio: <code>α ⊕ β</code>.
      </p>

      <h6>Tabla de verdad del &quot;o&quot; exclusivo</h6>

      <div className="row">
        <div className="col"></div>
        <div className="col">
          <table className="table table-striped text-center">
            <thead>
              <tr>
                <th>
                  <code>α</code>
                </th>
                <th>
                  <code>β</code>
                </th>
                <th>
                  <code>α ⊕ β</code>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>T</th>
                <td>T</td>
                <td>F</td>
              </tr>
              <tr>
                <th>T</th>
                <td>F</td>
                <td>T</td>
              </tr>
              <tr>
                <th>F</th>
                <td>T</td>
                <td>T</td>
              </tr>
              <tr>
                <th>F</th>
                <td>F</td>
                <td>F</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="col"></div>
      </div>

      <h6>Ejemplos del &quot;o&quot; exclusivo en el lenguaje natural</h6>

      <ul>
        <li>
          <p>
            <code>η = &quot;Quiero jugo de naranja&quot;</code>. 🍊
          </p>
          <p>
            <code>θ = &quot;Quiero jugo de mora&quot;</code>. 🍇
          </p>
          <p>
            <code>η ⊕ θ</code> correspondería a <code>&quot;Quiero jugo de
              naranja o jugo de mora, pero no ambos&quot;</code> en el lenguaje
            español.
          </p>
        </li>
      </ul>

      <h4>Lenguaje lógico</h4>

      <p>
        Llamaremos lenguaje lógico a las sentencias, oraciones o estructuras
        que surgen a partir de unir proposiciones con conectores lógicos. Así,
        una proposición estará expresada en lenguaje lógico, si y solo sí, esta
        está contruida con proposiciones <code>(p,q,α,β,...)</code> y símbolos
        lógicos <code>(¬, ∧, ∨, →, ↔, ⊕)</code>.
      </p>

      <h5>Traducción de lenguaje natural a lenguaje lógico</h5>

      <p>
        Traducir una oración que está expresado en lenguaje natural, no siempre
        es una tarea sencilla; es por esto por lo que se proponen los
        siguientes pasos para lograrlo:
      </p>

      <ul>
        <li> Identificar las proposiciones atómicas.</li>
        <li> Identificar los operadores lógicos utilizados.</li>
        <li> Utilizar los operadores lógicos para unir las proposiciones
          atómicas</li>
        <li>Encontrar el valor de verdad de la proposición (si es que
          tiene).</li>
      </ul>

      <h6>Ejemplo de traducción del lenguaje natural al lenguaje lógico</h6>

      <p>
        Yo soy feliz si y solo si esta noche es una noche mágica, las estrellas
        se ven en el cielo y cometas pasan; entonces así, una sonrisa o una
        mirada recibiré de ti.
      </p>

      <p>Para traducir esta proposición utilizaremos los pasos mencionados
        anteriormente:</p>
      <ul>
        <li>
          {' '}
          Identificar las proposiciones atómicas:
          <ul>
            <li>
              <code>ς = &quot;Yo soy feliz&quot;</code>.
            </li>
            <li>
              <code>τ = &quot;Esta noche es mágica&quot;</code>.
            </li>
            <li>
              <code>θ = &quot;Las estrellas se ven en el cielo&quot;</code>.
            </li>
            <li>
              <code>γ = &quot;Los cometas pasan&quot;</code>.
            </li>
            <li>
              <code>ρ = &quot;Una sonrisa recibiré de ti&quot;</code>.
            </li>
            <li>
              <code>β = &quot;Una mirada recibiré de ti&quot;</code>.
            </li>
          </ul>
        </li>
        <li>
          Identificar los operadores lógicos utilizados.
          <ul>
            <li>
              El bicondicional <code>↔</code>.
            </li>
            <li>
              La conjunción <code>∧</code>.
            </li>
            <li>
              El condicional <code>→</code>.
            </li>
            <li>
              La disyunción <code>∨</code>.
            </li>
          </ul>
        </li>
        <li>
          Utilizar los operadores lógicos para unir las proposiciones atómicas:
          <ul>
            <li>
              <code>ς ↔ ( ( (τ ∧ θ ) ∧ γ ) → ( ρ ∨ β ) )</code>
            </li>
          </ul>
        </li>
        <li>
          Encontrar el valor de verdad de la proposición (si es que tiene).
          <ul>
            <li>Es verdad.</li>
          </ul>
        </li>
      </ul>

      <h4>Tautologías</h4>

      <p>
        Las tautologías son proposiciones α, tales que, en cualquier caso, al
        analizar sus valores de verdad, siempre es verdad.
      </p>

      <h6>Notación</h6>

      <p>
        Para denotar una tautología, utilizaremos la letra T en mayúscula, por
        la palabra &quot;true&quot; en inglés que significa verdadero.
      </p>

      <h6>Tabla de verdad de la tautología</h6>

      <div className="row">
        <div className="col"></div>
        <div className="col">
          <table className="table table-striped text-center">
            <thead>
              <tr>
                <th>
                  <code>α</code>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>T</th>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="col"></div>
      </div>

      <h6>Ejemplo de una tautología</h6>

      <p>Un ejemplo de una tautología es la disyunción de una proposición y su
        negación.</p>
      <div className="row">
        <div className="col"></div>
        <div className="col">
          <table className="table table-striped text-center">
            <thead>
              <tr>
                <th>
                  <code>α</code>
                </th>
                <th>
                  <code>¬ α</code>
                </th>
                <th>
                  <code>α ∨ ¬ α</code>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>T</th>
                <th>F</th>
                <th>T</th>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <th>F</th>
                <th>T</th>
                <th>T</th>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="col"></div>
      </div>

      <h4>Contradicción</h4>

      <p>
        Contradicción es una proposición <code>α</code>, tal que, en cualquier
        caso, al analizar sus valores de verdad, siempre es falso.
      </p>

      <h6>Notación</h6>

      <p>
        Para denotar una contradicción, utilizaremos la letra F en mayúscula,
        por la palabra &quot;false&quot; en inglés que significa falso.
      </p>

      <h6>Tabla de verdad de la contradicción</h6>

      <div className="row">
        <div className="col"></div>
        <div className="col">
          <table className="table table-striped text-center">
            <thead>
              <tr>
                <th>
                  <code>α</code>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>F</th>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="col"></div>
      </div>

      <h6>Ejemplo de una contradicción</h6>

      <p>Un ejemplo de una contradicción es la conjunción de una proposición y
        su negación.</p>
      <div className="row">
        <div className="col"></div>
        <div className="col">
          <table className="table table-striped text-center">
            <thead>
              <tr>
                <th>
                  <code>α</code>
                </th>
                <th>
                  <code>¬ α</code>
                </th>
                <th>
                  <code>α ∧ ¬ α</code>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>T</th>
                <th>F</th>
                <th>F</th>
              </tr>
              <tr>
                <th>F</th>
                <th>T</th>
                <th>F</th>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="col"></div>
      </div>

      <h4>Contingencia</h4>

      <p>
        Una contingencia es una proposición α, tal que, al analizar sus valores
        de verdad, encontramos que no es ni una tautología, ni una
        contradicción.
      </p>

      <h6>Ejemplo de una Contingencia</h6>

      <p>
        Un ejemplo de una contingencia es la proposición
        <code>(α ∧ β) → ¬ α</code>.
      </p>
      <div className="row">
        <div className="col-md-1"></div>
        <div className="col">
          <table className="table table-striped text-center">
            <thead>
              <tr>
                <th>
                  <code>α</code>
                </th>
                <th>
                  <code>β</code>
                </th>
                <th>
                  <code>α ∧ β</code>
                </th>
                <th>
                  <code>¬ α</code>
                </th>
                <th>
                  <code>( α ∧ β ) → ¬ α</code>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>T</th>
                <th>T</th>
                <th>T</th>
                <th>F</th>
                <th>F</th>
              </tr>
              <tr>
                <th>T</th>
                <th>F</th>
                <th>F</th>
                <th>F</th>
                <th>T</th>
              </tr>
              <tr>
                <th>F</th>
                <th>T</th>
                <th>F</th>
                <th>T</th>
                <th>T</th>
              </tr>
              <tr>
                <th>F</th>
                <th>F</th>
                <th>F</th>
                <th>T</th>
                <th>T</th>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="col-md-1"></div>
      </div>

      <h4>Equivalencia Semántica</h4>

      <p>
        Tendremos ante nosotros una equivalencia semántica cuando, teniendo
        <code>α</code> y <code>β</code>, proposiciones arbitrarias,
        <code>α ↔ β</code> es una <b>tautología</b>. Siendo así, las
        proposiciones <code>α</code> y<code>β</code> son <b>equivalentes
        </b> y <b>representan la misma proposición</b>.
      </p>

      <h6>Notación</h6>

      <p>
        Para denotar una equivalencia semántica, utilizaremos el símbolo de
        <b>triple barra</b>: <code>≡</code>.
      </p>

      <h6>Ejemplo de una Equivalencia Semántica</h6>

      <p>
        La doble negación es comúnmente equivalente a la proposición original
        en un lenguaje natural. En lógica, también son equivalentes:
      </p>

      <div className="row">
        <div className="col-md-1"></div>
        <div className="col">
          <table className="table table-striped text-center">
            <thead>
              <tr>
                <th>
                  <code>α</code>
                </th>
                <th>
                  <code>¬ α</code>
                </th>
                <th>
                  <code>¬ ( ¬ α )</code>
                </th>
                <th>
                  <code>α ↔ ¬ ( ¬ α )</code>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>T</th>
                <th>F</th>
                <th>T</th>
                <th>T</th>
              </tr>
              <tr>
                <th>F</th>
                <th>T</th>
                <th>F</th>
                <th>T</th>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="col-md-1"></div>
      </div>

      <p>
        Como es evidenciado en la tabla de verdad anterior, <code>α</code> y
        <code>α ↔ ¬ ( ¬ α )</code> tienen los mismos valores de verdad, lo que
        hace que el bicondicional entre ellas <code>α ↔ ¬ ( ¬ α )</code> sea
        una tautología; y es así como encontramos que <b> la doble negación de
          α es equivalente semánticamente a <code>α</code></b>.
      </p>

      <h4>Implicación Semántica</h4>

      <p>Una implicación semántica lo definimos de la siguiente forma:</p>
      <p>
        Sean{' '}
        <code>
          α, α<sub>1</sub>, ..., α<sub>n</sub>
        </code>{' '}
        y <code>β</code> proposiciones.
        <code>
          α, α<sub>1</sub>, ..., α<sub>n</sub>
        </code>{' '}
        implican semánticamente a <code>β</code> si y solo si
        <code>
          (α<sub>1</sub> ∧ ... ∧ α<sub>n</sub>)→β
        </code>{' '}
        es una tautología.
      </p>

      <h6>Notación</h6>

      <p>
        Para denotar una implicación semántica, utilizaremos el símbolo de
        doble barra horizontal y una barra vertical al lado del antecedente
        semántico: <code>⊨</code>.
      </p>

      <h6>Ejemplo de una Implicación Semántica</h6>

      <p>
        <i>Modus ponendo ponens</i>: este argumento es un ejemplo de una
        implicación semántica en el que tenemos una implicaión
        <code>α → β</code> y en el que nos es dado que α ocurre; de esta
        manera podemos deducir <code>β</code>; o de otra manera:
        <code>α → β</code>, <code>α</code> implica semánticamente
        <code>β</code>. Dicho con nuestra notación:
      </p>
      <p>
        <code>α→β, α ⊨ β</code>
      </p>
      <p>
        Para demostrar <code>α→β, α ⊨ β</code>, vamos a utilizar una tabla de
        verdad para encontrar que <code>(((α→β) ∧ α) → β)</code> es una
        tautología:
      </p>
      <div className="row">
        <div className="col-md-1"></div>
        <div className="col">
          <table className="table table-striped text-center">
            <thead>
              <tr>
                <th>
                  <code>α</code>
                </th>
                <th>
                  <code>β</code>
                </th>
                <th>
                  <code>α → β</code>
                </th>
                <th>
                  <code>(α → β) ∧ α</code>
                </th>
                <th>
                  <code>(((α→β) ∧ α) → β)</code>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>T</th>
                <th>T</th>
                <th>T</th>
                <th>T</th>
                <th>T</th>
              </tr>
              <tr>
                <th>T</th>
                <th>F</th>
                <th>F</th>
                <th>F</th>
                <th>T</th>
              </tr>
              <tr>
                <th>F</th>
                <th>T</th>
                <th>T</th>
                <th>F</th>
                <th>T</th>
              </tr>
              <tr>
                <th>F</th>
                <th>F</th>
                <th>T</th>
                <th>F</th>
                <th>T</th>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="col-md-1"></div>
      </div>
    </>
  ),
};

export default post;
