import React from 'react';
import './post.css';
import Card from 'react-bootstrap/Card';

import Frontera from './images/frontera.jpeg';

const post = {
  title: 'Fronteras en software',
  subtitle: 'Colocar fronteras para reforzar la responsabilidad única en nuestro sistema',
  short_content: 'Establecer fronteras en nuestra arquitectura de software es importante para ' +
  'establecer cómo, dónde y por qué se comunican nuestros componentes. Seleccionar ' +
  'estas fronteras es parte de las decisiones que se toman y moldean la ' +
  'arquitectura de nuestro sistema.',
  updated_on: 'Octubre 19, 2023, 12:40 a.m.',
  reading_time: '1 hour',
  slug: 'fronteras',
  content: (
    <>
      <p>
        Definir fronteras en la arquitectura de software es esencial para determinar
        cómo, dónde y por qué nuestros componentes se comunican. Estas fronteras
        constituyen una parte fundamental de las decisiones que configurarán y
        darán forma a la arquitectura de nuestro sistema, contribuyendo así a una
        arquitectura limpia.
      </p>
      <Card.Img className="float-end img-float" src={Frontera} />
      <p>
        Debemos tener presente que las reglas de negocio de nuestro sistema no deberían
        verse afectadas por la interfaz gráfica o la base de datos. Cada componente debe
        tener un propósito específico y no debe interferir en las responsabilidades de
        otros. Esto no solo facilita el desarrollo y la mantenibilidad del software,
        sino que también mejora la escalabilidad y la modularidad del sistema.
      </p>
      <p>
        Debemos tener presente que es importante resolver los conflictos relacionados
        con el negocio antes que los relacionados con la tecnología. Esto significa
        que debemos comprender las necesidades del negocio; un ejemplo es conocer la
        frecuencia con la que debe ejecutarse un proceso batch, antes de tomar decisiones
        técnicas tales como en qué base de datos vamos a almacenar los datos relacionados
        a este proceso batch. La decisión de qué base de datos vamos a usar debe depender
        de las necesidades del negocio en el proceso batch. Incluso puede que no sea necesaria
        una base de datos.
      </p>
      <p>
        Un objetivo clave al establecer fronteras en la arquitectura de software
        es crear una relación asimétrica; como lo sugiere Robert C. Martin en Clean Architecture.
        Esto significa que nuestro sistema no debe verse afectado por otros sistemas o
        componentes externos. Los componentes externos deben depender de componentes más internos.
        De vuelta con las bases de datos, vemos que éstas son herramientas que
        la lógica del negocio puede utilizar, pero no deben ser el punto focal de la
        arquitectura. Más bien, las bases de datos deben estar claramente definidas
        como un componente que sirve a las necesidades de administrar la fuente de datos
        de la lógica del negocio. Es por esto por lo que existe el patrón repositorio.
      </p>
      <p>
        La asimetría en las relaciones entre componentes es fundamental para garantizar que
        nuestro sistema sea robusto y resistente a cambios externos. Al diseñar fronteras
        asimétricas, podemos garantizar que los cambios en otros sistemas o componentes no
        tengan un impacto negativo en nuestra aplicación. Esto mejora la estabilidad y
        la capacidad de adaptación de nuestro software.
      </p>
      <p>
        En última instancia, la calidad y el éxito de un proyecto de desarrollo de software
        dependen en gran medida de la arquitectura subyacente y de las decisiones que se
        toman al establecer las fronteras que definen cómo interactúan sus componentes.
        Por lo tanto, es esencial invertir tiempo y esfuerzo en la planificación y diseño
        de una arquitectura sólida desde el principio.
      </p>
    </>
  ),
};

export default post;
