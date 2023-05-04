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
  updated_on: <>Mayo 4, 2023, 9:30 a.m.</>,
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
      <h4>¿Qué es una llave ssh?</h4>
      <p>
        Una llave SSH es un par de llaves criptográficas que se utilizan para
        autenticar usuarios en un servidor remoto y cifrar la comunicación entre
        el cliente y el servidor. El par de llaves es una llave pública y una
        llave privada. La llave pública comúnmente se puede compartir libremente,
        mientras que la llave privada se mantiene en secreto.
      </p>
      <p>
        La llave pública comúnmente se agrega al servidor remoto al que se desea acceder
        por medio del directorio <code>~/.ssh/authorized_keys</code>. De esta forma,
        cuando el servidor recibe una petición de acceso, verifica que la llave
        pública que se envía sea la misma que la que se encuentra en el archivo.
      </p>
      <h4>¿Cómo generar un par de llaves ssh?</h4>
      <p>
        Existen diferentes tipos de llaves ssh, aquí se muestra como generar un
        par de llaves RSA de tamaño 4096 bits con los siguientes pasos.
      </p>
      <oi>
        <li>Abre una terminal o consola en tu computadora.</li>
        <li>
          Ejecuta el siguiente comando para generar un par de claves SSH: <br></br>
          <code>ssh-keygen -t rsa -b 4096</code> <br></br>
          Este comando generará un par de claves RSA de 4096 bits, que es la longitud
          recomendada actualmente para una mayor seguridad.
          <code>ssh-keygen</code> genera, administra y convierte claves de autenticación
          para ssh y hace parte de la suir OpenSSH.
        </li>
        <li>
          Se te pedirá que ingreses una ubicación para guardar el archivo de clave privada.
          Si no deseas especificar una ubicación personalizada, simplemente presiona Enter
          para guardarla en el directorio predeterminado de tu usuario.
        </li>
        <li>
          Se te pedirá que ingreses una contraseña para proteger tu clave privada. Si
          deseas agregar una contraseña, escríbela y presiona Enter. Si no deseas agregar
          una contraseña, simplemente presiona Enter.
        </li>
        <li>
          La clave pública se guarda automáticamente en el archivo <code>~/.ssh/id_rsa.pub`</code>
          o en el especificado.
        </li>
      </oi>
      <p>
        Ahora tienes un par de claves SSH generadas. La clave pública se puede agregar al archivo
        authorized_keys en el servidor al que deseas conectarte para autenticar tu conexión. La clave
        privada debe mantenerse en secreto y solo debe estar en tu computadora.
      </p>
      <h4>¿Cómo utilizo mi par de llaves ssh para compartir archivos de forma segura?</h4>
      <p>
        no c
      </p>
    </>
  ),
};

export default post;
