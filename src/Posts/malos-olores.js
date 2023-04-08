import React from 'react';
import './post.css';
import Card from 'react-bootstrap/Card';

import GetSerious from './images/get-serious.jpeg';
import CannotSee from './images/cannot-see.jpeg';
import DuplicatedCode from './images/duplicated-code.jpeg';
import Long from './images/longo.jpeg';

const post = {
  title: 'Malos olores en el código',
  subtitle: 'Si huele mal, hay que revisar',
  short_content:
    '"Malos Olores en el Código" es el tercer capítulo del vigente libro ' +
    'sobre refactorización de Martin Fowler, "Mejorar el Diseño de Código ' +
    'Existente". Es aquí donde revisamos y exploramos esas pistas en el ' +
    'código de programación que nos sugieren que las cosas podrían estar ' +
    'diseñadas de mejor manera o podríamos reemplazarlas para mejorar ' +
    'nuestro código.',
  updated_on: 'March 18, 2023, 10:47 p.m.',
  reading_time: '1 hour',
  slug: 'malos-olores',
  content: (
    <>
      <p>
        A veces, escribiendo código de programación, nos podemos dejar llevar,
        más de lo conveniente, en las refactorizaciones y mejoras del código, no
        en todas las ocaciones nos vamos a encontrar con código en el que es
        imperativo preparar un cambio de cientos de líneas. Distinguir esos
        lugares donde necesitamos cambios es fundamental para hacer una buena
        labor de refactorización.
      </p>
      <p>
        Los patrones en la programación, por lo general, son sencillos de
        explicar, basta con introducir un problema, una serie de pasos y un
        resultado final. Sin embargo, tener certeza de <i>cuándo</i> aplicar
        estos cambios es lo que podría marcar la diferencia en una tarde
        completa de trabajo de reescritura de código desperdiciado, o una
        mala priorización de tareas. Además, tener en cuenta estos malos olores
        a la hora de crear nuevo código nos puede ahorrar valioso tiempo para
        implementar nuevas y mejores <i>features</i>.
      </p>
      <Card.Img className="float-start img-float" src={GetSerious} />
      <p>
        Pero no me mal entiendan, la babor de mejorar el code base siempre es
        importente y valioso considerarlo en nuestras tareas. Ahora, puede que
        un <i>mal olor</i> no parezca necesariamente la mejor de las
        estadísticas para empezar a realizar un <i>refactor</i> que nos cueste
        toda la tarde, sin embargo, hay ocaciones en las que, al revisar una
        pequeña sección, encontramos un par de líneas que nos gritan:{' '}
        <i>cámbiame</i>, y nosotros debemos proceder a realizar lo propio.
      </p>
      <p>
        A continuación, se expondrán una colección de malos olores que se pueden
        encontrar comúnmente en la literatura, más otro par que ha sido
        comúnmente visto en mi corta vida de desarrollo:
      </p>
      <h5>Nombres oscurecidos</h5>
      <p>
        No sé si se han dado cuenta, revisando libros, leyendo blogs y
        viendo videos sobre cómo mejorar la calidad del código producido,
        que <b>dar un buen nombre</b> a nuestras variables, clases, módulos y
        demás, normalmente se encuentra en las primeras secciones y más
        importantes recomendaciones; pues, esta entrada sobre malos olores
        no va a ser la excepción. Darles buen nombre a los elementos de
        nuestro código, no solo es todo un arte, sino también es bastante
        necesario para comunicar de forma clara nuestra <i>intención</i>
        a la hora de programar una solución, y mantener una base de código
        claro y limpio.
      </p>
      <Card.Img className="float-end img-float" src={CannotSee} />
      <p>
        Y es que estoy seguro de que más de una vez se han envuelto en
        una maratón de descifrado del comportamiento de un trozo de código
        siendo potenciado el alcance del misterio de lo leemos con
        variables del estilo <code>x = calculated_days + 15</code>.
        Para luego ver cómo se retorna esta variable con otra por el
        estilo de: <code>return x * y_recalculated</code>. ¿Qué demonios
        quería hacer el autor original con x? ¿Por qué lo suma con 15?
        y, peor aún, ¿qué hizo <code>y</code> para tener que ser
        recalculada?
      </p>
      <p>
        Este estilo de nombramiento oscurecido en el código solo lleva a que el
        lector (o incluso nosotros en un par de meses) tengamos que gastar
        tiempo de más intentando encontrar la intención de las variables,
        métodos, clases y demás. Y es que es eso lo que tienen que transmitir
        los nombres, las intenciones. Con esto no quiero decir que sea una
        tarea fácil, pero una fracción de nuestro tiempo debe estar destinada
        a encontrar los mejores nombres que asignamos para las cosas. Además,
        uno de los tipos de <i>refactor</i> más comúnes y que más beneficio
        podemos obtener por poco tiempo es mejorar los nombres de nuestras
        variables por unos nombres que dejen los conceptos más claros.
      </p>
      <p>
        Un buen nombre nos puede ahorrar horas de redacción de código. No hay
        que subestimarlo. Si nos cuesta demasiado escoger un buen nombre para
        nuestro componente de código, puede que estemos enfrentándonos a una
        pieza que puede ser rediseñada para cumplir mejor su objetivo.
      </p>
      <h5>Código duplicado</h5>
      <p>
        Oh por Dios, ¡estas 5 líneas de código las he visto ya 3 veces
        explorando el código! ¿Tienen recuerdos de algo así?, los compredo.
      </p>
      <Card.Img className="float-start img-float" src={DuplicatedCode} />
      <p>
        Encontrar código duplicado se puede presentar de muchas maneras, a
        veces tan explícito como descrito más arriba, y otras de una forma
        más intrincada y no tan explícita, como veer llamar a objetos
        similares, nombres de métodos similares y hacen cosas muy similares.
        Recordemos que encontrar código duplicado nace, comúnmente de una
        mala abstracción, encontrar dónde se realiza esta mala abstracción
        nos podría ayudar bastante a mejorar nuestro código. Nuestro código
        es más sano, claro y limpio cuando unificamos los sitios donde es
        duplicado el código.
      </p>
      <p>
        En cambio, cuando tenemos código duplicado y no lo refactorizamos,
        tenemos que leerlo muy cuidadosamente para encontrar los pequeños
        detalles donde varían, cosa que puede resultar desgastante.
      </p>
      <h5>Funciones muy largas</h5>
      <p>
        Mientras más larga es una función, también es más difícil de
        entender. Una función larga nos puede llevar a hacerla crecer
        aún más cuando un requerimiento es solicitado, lo que hace que
        esta, a su vez, crezca más y más. Una función larga normalmente
        está acompañada de demasiadas estructuras de control, o incluso
        varias anidaciones de éstas.
      </p>
      <Card.Img className="float-end img-float" src={Long} />
      <p>
        A mi parecer, no es práctico fijar un límite de cuán grande debería
        ser una función. Definitivamente menos de 100 líneas, seguramente
        menos de 50. A partir de a aquí el límite puede variar por muchas
        razones, el problema a solucionar, el lenguaje que se está usando
        para implementar la solución y demás. Personalmente intento fijar
        un límite entre 15 y 25 líneas. Algo más largo que eso, en mi opinión,
        está gritando <i>¡refactorízame!</i>
      </p>
      <p>
        Otra forma de saber cuándo una función es demasiado grande es cuando
        sentimos la necesidad de crear un comentario para explicar por qué
        estamos tomando una decisión en una función. En este momento, la
        función tal vez es demasiado grande y podríamos extraer est lógica
        y colocarla en otra función cuyo nombre deje en claro la intención
        que querías colocar en el comentario. La clave así no es el largo de
        la función, sino que se cumpla de forma clara el objetivo de existir
        de ésta.
      </p>
      <h5>Lista muy larga de parámetros</h5>
      <p>
        Es aquí donde la cosa se pone bien debatible. En <b>Clean Code</b> del
        {' '}<b>Tío Bob</b>, él nos recomienda que tengamos funciones de cero,
        uno o como máximo, en el peor de los casos, dos parámetros. Esto me ha
        parecido algo exagerado, sin embargo es muy útil mantener el número de
        parámetros de una función reducido, para así disminuir la carga
        cognitiva al leer la función. Pero esto tiene sus matices.
      </p>
      <p>
        Algo importante para notar es que una lista de parámetros demasiado
        larga puede evidenciar una función que está haciendo muchas cosas, y
        es buena idea dividir esta función en varias pequeñas funciones que
        tengan menos responsabilidades, y lograr así que la función que era en
        un principio grande, tenga solo la responsabilidad de{' '}
        <b>orquestar</b> estas pequeñas funciones. Para mantener la lista de
        parámetros corta, es útil recordar la <i>S</i> de <i>SOLID</i>:{' '}
        <i>single responsability</i>. Nuestras funciones deben tener una y
        solo una responsabilidad, o uno y solo un motivo para cambiar.
      </p>
      <p>
        Un ejemplo, de parámetro que hace crecer de forma cuestionable nuestra
        lista de parámetros es cuando una función está usando un parámetro
        como <b>bandera</b> para cambiar su comportamiento, estaríamos frente
        a una función que tiene por lo menos dos responsabilidades, su
        responsabilidad principal y su responsabilidad alterna cuando
        esta <b>bandera</b> cambia, así que vale la pena revisarlo.
      </p>
    </>
  ),
};

export default post;
