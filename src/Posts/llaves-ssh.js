import React from 'react';
import './post.css';

const post = {
  title: <>Uso de llaves SSH para compartir archivos cifrados</>,
  subtitle: <>Cifrar es no confiar en el medio</>,
  short_content:
    <>
      Es muy común utilizar nuestras llaves SSH para crear coneciones seguras a
      servidores, un ejemplo claro de cuando hacemos esto es al comunicarnos
      con un servidor git o una instancia EC2, sin embargo, estas llaves
      también son útiles para compartir archivos cifrados y así tener una
      comunicación segura en medios en los que no confiamos (como puede ser
      nuestro correo electrónico).
    </>,
  updated_on: <>Abril 10, 2023, 9:30 a.m.</>,
  reading_time: <>30 min</>,
  slug: 'llaves-ssh',
  content: (
    <>
      <p>
        Es muy común utilizar nuestras llaves SSH para crear coneciones seguras a
        servidores, un ejemplo claro de cuando hacemos esto es al comunicarnos
        con un servidor git o una instancia EC2, sin embargo, estas llaves
        también son útiles para compartir archivos cifrados y así tener una
        comunicación segura en medios en los que no confiamos (como puede ser
        nuestro correo electrónico).
      </p>
    </>
  ),
};

export default post;
