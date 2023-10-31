import React from 'react';
import './post.css';

import Form from 'react-bootstrap/Form';

function Metadata({ state }) {
  let metadata_list = [];
  for (const [key, value] of Object.entries(state.metadata)) {
    metadata_list.push(<p key={key}>{key}: {value}</p>)
  }
  return <div>{metadata_list}</div>;
}

class ExifMetadataPostContent extends React.Component {

  constructor() {
    super();
    this.state = {
      metadata: {},
    };
  }

  render() {
    return (
      <>
        <p>
          EXIF metadata es una de las características de los archivos de imagenes
          que permiten almacenar y recuperar información sobre la imagen. Datos que
          pueden ser encontrados en la metadata de la imagen son tales como la
          ubicación de la imagen, el día y hora de creación, el tamaño de la imagen,
          etc.
        </p>
        <Form.Group controlId="formImage" className="mb-3">
          <Form.Label>Ejemplo. EXIF metadata. Upload an image to get metadata information.</Form.Label>
          <Form.Control type="file" onChange={(event) => {
            const formData = new FormData();
            formData.append('image', event.target.files[0]);
            fetch(
              'https://process-image-7t7oq3uqiq-uc.a.run.app/fortich-dev/us-central1/process_image',
              {
                headers: {
                  'Access-Control-Allow-Origin': 'http://fortich.dev',
                },
                method: 'POST',
                body: formData,
              }
            ).then(
              response => {
                if (response.ok) {
                  response.json().then(
                    data => {
                      this.setState({ metadata: data });
                      console.log(data);
                    }
                  )
                }
                else {
                  response.text().then(
                    error => this.setState({ metadata: { error: error.toString()} })
                  )
                }
              }
            ).catch(
              error => this.setState({ metadata: { error: error.toString() } })
            )
          }} />
        </Form.Group>
        <Metadata state={this.state} />
      </>
    );
  }
}

const post = {
  title: 'EXIF metadata',
  subtitle: 'Metadata para obtener información adicional de una imagen',
  short_content: 'EXIF metadata es una de las características de los archivos ' +
    'de imagenes que permiten almacenar y recuperar información sobre la imagen. ' +
    'Datos que pueden ser encontrados en la metadata de la imagen son tales como ' +
    'la ubicación de la imagen, el día y hora de creación, el tamaño de la imagen' +
    ',  etc.',
  updated_on: 'Octubre 31, 2023, 1:29 p.m.',
  reading_time: '1 hour',
  slug: 'exif',
  content: <ExifMetadataPostContent />,
};

export default post;
