import React from 'react';
import './post.css';
import Card from 'react-bootstrap/Card';

import Lsblk from './images/lsblk.webp';

const post = {
  title: 'Fstab',
  subtitle: 'Un mapa en forma de archivo, los tesoros que oculta: la información de dónde y a qué deben apuntar los dispositivos del sistema',
  short_content:
    'El fstab, también conocido como "File System Table" ("Table del sistema de archivos"), es como el directorio de viajes de un sistema ' + 
    'operativo Linux. Es un archivo especial que contiene una lista de montajes y particiones, indicando al sistema cómo acceder y ' + 
    'gestionar diferentes dispositivos de almacenamiento. Es como la brújula que guía al sistema hacia el camino correcto, asegurando ' + 
    'que cada unidad y recurso esté correctamente enlazado y disponible para su uso. En resumen, el fstab es el maestro de ceremonias ' + 
    'detrás del escenario, orquestando la danza fluida y eficiente de los sistemas de archivos en Linux.',
  updated_on: 'Julio 8, 2023, 9:44 p.m.',
  reading_time: '1 hour',
  slug: 'fstab',
  content: (
    <>
      <p>
        Fstab es un archivo especial que define cómo los <i>dispositivos de bloques</i> o
        sistemas de archivos remotos deben ser montados en el sistema de archivos
        raíz <b>(/)</b> de Linux. Éste es normalmente localizado en <code>/etc/fstab</code> y
        puede ser consultado con el comando <code>cat /etc/fstab</code>.
      </p>
      <Card.Img className="float-end img-float-way-bigger" src={Lsblk} />
      <p>
        Cada sistema de archivos se describe en una línea separada. Estas definiciones
        se convertirán en unidades de montaje de <b>systemd</b> de forma dinámica al realizar el
        proceso de boot. La configuración predeterminada realizará automáticamente fsck y montará
        los sistemas de archivos antes de iniciar los servicios que los necesiten montados.
        Por ejemplo, <b>systemd</b> se asegura automáticamente de que los montajes de sistemas de
        archivos remotos como NFS o Samba solo se inicien después de que se haya establecido la red.
        Por lo tanto, los montajes de sistemas de archivos locales y remotos especificados
        en <code>/etc/fstab</code> deberían funcionar sin problemas.
      </p>
      <p>
        El comando <code>mount</code> utilizará el archivo fstab para conocer ya sea el punto de montaje
        de un block device o el block device al que corresponde una ruta determinada en el sistema de archivos.
      </p>
    </>
  ),
};

export default post;
