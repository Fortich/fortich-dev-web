import React from 'react';

import Card from 'react-bootstrap/Card';

/**
 * Post detail.
 * @return {JSX} Post detail component.
 */
export default function PostDetail() {
  return (
    <>
      <Card className='margin-bottom'>
        <Card.Body>
          <Card.Title>Sobre Antonio Fortich</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Un poco sobre mi vida
          </Card.Subtitle>
          <hr />
          <p>
            Hola, buenos días, tardes, noches o lo que sea en el momento en el
            que estés leyendo esto, amigo desconocido de internet. Soy Toño,
            las personas más cercanas a mí me llaman Toñito, aunque en mi
            cédula de ciudadanía colombiana y en mi registro de nacimiento, que
            demuestra queefectivamente nací, figuro como Antonio.
          </p>
          <p>
            En el camino en el que me encuentro actualmente caminando, soy un
            Software Engineer (nombre rimbombante para programador,
            desarrollador o diseñador de algoritmos) en Bold C.F., estudiante
            en la Universidad Nacional de Colombia y un portador de vida, desde
            que tengo memoria.
          </p>
          <p>
            Durante mi carreara académica y profesional he explorado varios
            tipos de conocimiento relacionados con la computación, mis
            favoritos han sido los relacionados con la conectividad, la
            comunidad y la ingeniería de software. También temas sobre la
            construcción de código limpio, arquitecturas de software y los
            algoritmos me llaman la atención. Encuentro muy interesante
            explorar distribuciones de Linux y el software libre en general.
          </p>
          <p>
            Ahora, en mis ratos libres y hablando de cosas menos relacionadas
            a la computación, soy un humano que ha tenido profundas crisis
            existenciales; así que se puede decir que estoy viviendo la vida
            que quiero vivir, una en la que constantemente encuentro
            significados diferentes a vivir y los exprimo para ver a dónde
            puedo llegar y qué puedo hacer en estos tiempos donde cada vez que
            me acuesto a dormir, vuelvo a levantarme con energías de seguir
            haciendo cosas, explorando y aprendiendo.
          </p>
          <hr />
          <h4>Experiencia</h4>
          <h5>Senior Software Engineer en Bold S.A.S. y Bold C.F.</h5>
          <p>
            Durante mi estadía en Bold he adelantado procesos de diseño,
            planeación y construcción de software. He sido parte del equipo
            de Cuenta Depósito, donde he tenido la oportunidad de trabajar
            en la creación y mantenimiento de un sistema de financiero de
            alto impacto para pequeños y medianos comercios de Colombia.
          </p>
          <p>
            Parte de mi trabajo ha sido diseñar la integración con el Banco
            de la República de Colombia, un sistema de alto valor agregado
            para el país, que permite a los usuarios hacer transferencias y
            consolidación de cuentas.
          </p>
          <p>
            He participado en procesos de refactorización y rediseño de
            procesos y software existente para aumentar la capacidad de
            expandir funcionalidad en nuestro código. Nos hemos enfocado en
            DDD para habilitar una base de código dirigida en el negocio
            y que pueda ser escalada por varios equipos de desarrollo.
          </p>
          <h5>Junior Software Engineer en PayU</h5>
          <p>
            En PayU tuve la oportunidad de trabajar en proyectos de
            integración y orquestación de procesamiento de transacciones en
            diferentes redes de pago de diferentes países en latinoamérica.
          </p>
          <h5>Junior Engineer en Xphera Group</h5>
          <h5>
            Estudiante auxiliar - Junior Python Developer en la Facultad de
            Ingeniería de la Universidad Nacional de Colombia
          </h5>
          <hr />
          <h4>Educación</h4>
          <h5>
            Matemáticas - Universidad Nacional de Colombia
          </h5>
          <p>
            Estudiar matemáticas es un reto y desafío personal, me gustan mucho
            las matemáticas, pero aprenderlas a profundidad, aprender a
            demostrar, teoremas y propiedades es un logro que espero conseguir.
          </p>
          <h5>
            Maestría en Ingeniería de Sistemas y Computación - Universidad
            Nacional de Colombia
          </h5>
          <p>
            Durante mis estudios de posgrado he investigado sobre la
            interoperabilidad como atributo de calidad. Mis planes son
            mostrar cómo un sistema distribuído, enfrentándose a ciertos
            problemas, funciona mejor que un sistema que se comporta como
            un individuo, tal como nosotros, los seres humanos.
          </p>
          <h5>
            Ingeniería de Sistemas y Computación - Universidad Nacional
            de Colombia
          </h5>
          <p>
            Aprendí mucho durante mi paso por la Universidad Nacional. Me
            gradué con un promedio de 4.4/5.0 y con un título de Ingeniero de
            Sistemas y Computación. Durante mi estadía en la universidad
            tuve la oportunidad de trabajar en proyectos académicos de 
            diferentes asignaturas como Inteligencia Artificial, Programación,
            Estructuras de Datos, Arquitecturas de Software, entre otras.
          </p>
          <hr />
          <h4>Certificados</h4>
          <p>Scrum Master Professional Certification</p>
          <p>Domain Driven Design: Complete Software Architecture Course</p>
          <p>Microservices Software Architecture: Patterns and Techniques</p>
          <hr />
          <h4>Logros</h4>
          <p>
            Thanks Awards - PayU
          </p>
          <p>
            Scrum Master Professional Certification Programme - PayU
          </p>
          <p>
            Facebook Colombia Hack 2020 - Third Place
          </p>
          <p>
            2nd Cybersecurity Day National University - JCUN 2019
          </p>
          <p>
            Algorithm Programming Competition - Second Place
          </p>
          <p>
            Object Oriented Programming Competition - IEEE - First place
          </p>
          <hr />
          <h4>Hobbies</h4>
          <h5>Linux y el Software Libre</h5>
          <p>
            Jugar con diferentes distribuciones de Linux es un hobbie bastante
            divertido con el que puedo probar diferentes soluciones a los
            mismos problemas mientras experimento en mi "caja de arena".
          </p>
          <h5>Videojuegos</h5>
          <p>
            Varios videojuegos han marcado mi vida, mi forma de pensar y
            mi forma de ver el mundo. Algunos de ellos son:
            <ul>
              <li> The legend of Zelda: Ocarina of Time </li>
              <li> The legend of Zelda: Majora's Mask </li>
              <li> The legend of Zelda: Breath of the Wild </li>
              <li> Megaman X 1, 2 y 3 </li>
            </ul>
            Como se puede apreciar, soy un fan de la saga The Legend of Zelda.
          </p>
          <h5>Programación</h5>
          <p>
            Esta página es un hobbie para mí, con ella espero escribir sobre
            los temas que me inspiran y llaman la atención, mientras creo una
            especie de cuaderno digital, comparto con el mundo mis sentimientos
            y pensamientos.
          </p>
          <h5>Definición sobre mi vida</h5>
          <a href="https://www.youtube.com/watch?v=QH2-TGUlwu4">Mi vida</a>
        </Card.Body>
      </Card>
    </>
  );
}
