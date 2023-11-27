import React from 'react';


const vida = {
  title: 'Estudio para entrevista de python #1',
  subtitle: '¿Qué es Python?',
  short_content: 'Python es un lenguaje de programación de alto nivel de abstracción, fácil de aprender por su sintaxis semejante al lenguaje natural inglés; claro y facil de entender. Lo que baja la dificultad de su aplicación en sistemas de variados tamaños y escalas, con diferentes cantidades de programadores. Fue creado originalmente por Guido van Rossum en 1991.',
  updated_on: 'Nov 27, 2023, 3:34 p.m.',
  reading_time: '10 min',
  slug: 'python-1',
  content:
    <>
      <p>
        Python es un lenguaje de programación de alto nivel de abstracción, fácil de aprender
        por su sintaxis semejante al lenguaje natural inglés; claro y facil de entender.
        Lo que baja la dificultad de su aplicación en sistemas de variados tamaños y escalas,
        con diferentes cantidades de programadores. Fue creado originalmente por Guido van Rossum
        en 1991.
      </p>

      <p>La sintaxis de python es claramente enfocada a ser legible y clara, lo que facilita que nosotros,
        los desarrolladores, utilicemos menos nuestro tiempo en descifrar el lenguaje y más en cuál es el
        propósito del código descrito.
      </p>

      <p>Python es un <b>lenguaje interpretado</b>. Es decir que no hay proceso de complicación a
        lenguaje de máquina de forma global, antes de ser ejecutado el código. En su lugar, ocurre la
        interpretación de cada línea de código. Esto vuelve disponible a python para ser un lenguaje de
        "scripting", además de habilitar una consola de comandos "interactiva".
      </p>

      <p>Python es un lenguaje de programación fuertemente tipado y de tipado dinámico. Que sea
        un lenguaje fuertemente tipado quiere decir que todas las variables en momento de ejecución tienen
        asociado un <b>tipo de objeto o dato</b>. Dicho tipo define entre otras cosas, cuáles son las operaciones
        disponibles a ese tipo de objeto o dato. Tipado dinámico hace referencia a que una variable puede ser asignada
        a un objeto o dato de un tipo diferente. Es por esto por lo que al intentar utilizar el operando de división
        "/" entre dos cadenas, obtendremos un <b>TypeError: unsupported operand type(s) for /: 'str' and 'str'</b>.
        Esto se debe a que la división no está definido en la clase str de python.
      </p>

      <p>Python es también un lenguaje de programación orientado a objetos. Recordemos que un lenguaje de
        programación orientado a objetos es aquel que organiza la lógica del programa en torno a "objetos",
        que son instancias de clases que contienen datos y funciones. Estas clases permiten la encapsulación
        de datos y comportamientos relacionados, facilitando la modularidad y el reuso del código.
        Además, el paradigma orientado a objetos incorpora conceptos como la herencia y el polimorfismo,
        que permiten la creación de jerarquías y la capacidad de tratar objetos de distintas clases
        de manera uniforme.
      </p>

      <p>PEP8 es una guía de estilo de Python. Significa Python Enhancement Proposal e intenta establecer
        pautas de estilo para escribir códig. Estas directrices están diseñadas para mejorar la legibilidad
        del código y promover prácticas de codificación consistentes en la comunidad de desarrolladores de
        Python. Algunas de las recomendaciones incluyen el uso de cuatro espacios en los archivos de python,
        la limitación de la longitud de línea a 79 caracteres y la preferencia por nombres descriptivos
        de variables y funciones. Adherirse a las convenciones de PEP-8 ayuda a mantener un código más
        limpio y comprensible. Existen también otras guías de estilo de Python que pueden ser consideradas.
        Por ejemplo, una guía ampliamente usada es la <a href="https://google.github.io/styleguide/pyguide.html">Google Style Guide</a>.
      </p>

      <p>Python define múltiles "scopes". Scope se refiere al ámbito de una variable en un programa de Python.
        Los scopes principales de python son los locales, globales, de módulo y el "outhermost scope"
        que define los build-in names.</p>

      <p>En Python, las listas y las tuplas son dos tipos de estructuras de datos que permiten almacenar colecciones de elementos.
        Sin embargo, hay algunas diferencias clave entre ellas: Las listas son mutables, es decir, es una colección a la que podemos
        agregar, eliminar y mover elementos. Por esto, se implementan diversos métodos para modificarlas, tales como append, extend,
        remove y pop. Las tuplas en cambio, son inmutables, es decir, no se pueden modificar. Su definición es una y solo una, no cambia.
        Esto puede hacer que usarlas sea más eficiente dependiendo del contexto y uso.</p>

      <p>Existen diversos tipos de datos build-in. None, numeric (int, float, complex, bool), sequence (list, tuple, range, string), mapping (dict), sets (set, frozenset), modules y callables.</p>

      <p>En Python, pass es una instrucción nula. No realiza ninguna operación y simplemente actúa como un marcador de posición en situaciones donde la sintaxis requiere
        una declaración, pero no se necesita realizar ninguna acción. Por lo tanto, se utiliza cuando la sintaxis exige que haya al menos una declaración
        en un bloque, pero no se desea ejecutar ningún código.
      </p>

    </>,
};
export default vida;
