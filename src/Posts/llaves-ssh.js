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
        Es muy común utilizar nuestras llaves SSH para crear conexiones seguras a
        servidores, un ejemplo claro de cuando hacemos esto es al comunicarnos
        con un servidor git o una instancia EC2, sin embargo, estas llaves
        también son útiles para compartir archivos cifrados y así establecer con
        nuestro interlocutor una llave sincrónica segura para tener una comunicación
        segura. Comunicación segura en medios en los que no confiamos (como puede ser
        nuestro correo electrónico o atravez de una página web antigua que aún
        utilice el protocolo HTTP en lugar de HTTPS). En este post se explicaremos
        como generar un par de llaves SSH y como utilizarlas para compartir archivos cifrados.
      </p>
      <h4>¿Qué es par de llaves SSH?</h4>
      <p>
        Una par de llaves SSH es un par de llaves criptográficas que se utilizan para
        autenticar usuarios en un servidor remoto y cifrar la comunicación entre
        el cliente y el servidor. El par de llaves es una llave pública y una
        llave privada. La llave pública comúnmente se puede compartir libremente,
        mientras que la llave privada se mantiene en secreto. Siempre que se
        cifre un mensaje con la llave pública, solo la llave privada correspondiente
        puede descifrarlo. Esto permite que cualquiera pueda cifrar un mensaje
        utilizando la llave pública, pero solo el propietario de la llave privada
        puede descifrarlo. Este tipo de cifrado también es llamado cifrado asinctrónico.
      </p>
      <p>
        La llave pública comúnmente se agrega al servidor remoto al que se desea acceder
        por medio del archivo <code>~/.ssh/authorized_keys</code>. De esta forma,
        cuando el servidor recibe una petición de acceso, verifica que la llave
        pública que se envía sea la misma que la que se encuentra en el archivo.
      </p>
      <h4>¿Cómo generar un par de llaves SSH?</h4>
      <p>
        Existen diferentes tipos de llaves SSH, aquí se muestra como generar un
        par de llaves RSA de tamaño 4096 bits con los siguientes pasos.
      </p>
      <ol>
        <li>
          Abre una terminal o consola en tu computadora.
        </li>
        <li>
          Ejecuta el siguiente comando: <code>ssh-keygen -t rsa -b 4096</code>
          <ul>
            <li>
              Este comando generará un par de claves RSA de 4096 bits, que es la longitud
              recomendada actualmente para una mayor seguridad.
            </li>
            <li>
              <code>ssh-keygen</code> genera, administra y convierte claves de autenticación
              para ssh y hace parte de la suir OpenSSH.
            </li>
          </ul>
        </li>
        <li>
          Se solicitará que ingreses una ubicación para guardar los archivos correspondientes
          a las llaves. Si no deseas especificar una ubicación personalizada, simplemente
          presiona Enter para guardarla en el directorio predeterminado de tu usuario que
          es <code>~/.ssh</code>.
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
      </ol>
      <p>
        Ahora tienes un par de claves SSH generadas. La clave pública se puede agregar al archivo
        authorized_keys en el servidor al que deseas conectarte para autenticar tu conexión. La clave
        privada debe mantenerse en secreto y solo debe estar en tu computadora.
      </p>
      <h4>¿Cómo utilizo mi par de llaves ssh para compartir archivos de forma segura?</h4>
      <p>
        Para compartir archivos de forma segura, utilizaremos el programa <code>OpenSSL</code> para
        cifrar y descifrar archivos. OpenSSL es una biblioteca de código abierto que proporciona
        herramientas y bibliotecas criptográficas utilizadas para cifrar y descifrar archivos.

        El programa <code>OpenSSL</code> utiliza un formato de archivo llamado <code>PEM</code> para
        almacenar claves públicas. El formato <code>PEM</code> es un formato de archivo base64 que
        contiene una clave pública o privada en formato ASCII. El formato <code>PEM</code>
        es el formato predeterminado para OpenSSL y muchas otras herramientas criptográficas.

        Para covertir nuestro par de llaves SSH a formato <code>PEM</code>, utilizaremos los siguientes
        comando:
        
        <ul>
          <li>
            <code>
              ssh-keygen -f ~/.ssh/id_rsa.pub -e -m PKCS8 &gt; ~/.ssh/id_rsa.pem.pub
            </code>
          </li>
          <li>
            <code>
              ssh-keygen -p -f .ssh/id_rsa -m PEM
            </code>
          </li>
        </ul>

        Ahora, para ilustrar cómo utilizar nuestra llame transformada a formato <code>PEM</code> en
        OpenSSL, crearemos un archivo de texto plano y lo cifraremos utilizando nuestra llave pública.
        Luego, descifraremos el archivo cifrado utilizando nuestra llave privada.

        <ol>
          <li>
            Crea un archivo de texto plano con el siguiente comando: <br/>
            <code>echo "Hola mundo" &gt; archivo.txt</code>
          </li>
          <li>
            Cifra el archivo utilizando el siguiente comando: <br/>
            <code>openssl rsautl -encrypt -pubin -inkey ~/.ssh/id_rsa.pem.pub -in archivo.txt -out archivo.txt.enc</code>
          </li>
          <li>
            Descifra el archivo utilizando el siguiente comando: <br/>
            <code>openssl rsautl -decrypt -inkey ~/.ssh/id_rsa -in archivo.txt.enc -out archivo_descifrado.txt</code>
          </li>
        </ol>
      </p>
    </>
  ),
};

export default post;
