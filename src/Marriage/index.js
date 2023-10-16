import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Photo1 from './photo1.jpg';
import Photo2 from './photo2.png';
import Photo3 from './photo3.jpeg';
import './index.css'
/**
 * Post detail.
 * @return {JSX} Post detail component.
 */
export default function Marriage() {
  return (
    <>
      <div className="bg-image font">
        <Container>
          <Row>
            <Col md="2" />
            <Col>
              <Row className='padding-top'>
                <Col md="2" />
                <Col>
                  <img src={Photo1} alt="Antonio and Laura" class="img-thumbnail img-photo-1" />
                </Col>
                <Col md="2" />
              </Row>
              <Row className='padding-top'>
                <img src={Photo2} alt="Information of marriage" class="img-fluid" />
              </Row>
              <Row className='padding-top'>
                <h1>Capilla Universidad Nacional</h1>
                <img src={Photo3} alt="Church where event will be placed" class="img-fluid padding-top" />
              </Row>
              <Row className='padding-top'>
                <iframe title="Chuch's map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.782389066324!2d-74.08151188720714!3d4.632873261917421!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9bd3c3fe0f65%3A0x2fee6581815c9abd!2sCapilla%20Universidad%20Nacional!5e0!3m2!1sen!2sco!4v1697487796357!5m2!1sen!2sco" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              </Row>
              <Row className='padding-top'>
                <h1>Entrada vehicular</h1>
                <iframe title="Chuch's car entrance map" src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d7953.503661674276!2d-74.08918945826703!3d4.638303131345852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e0!4m3!3m2!1d4.6437199!2d-74.0831263!4m5!1s0x8e3f9bd3c3fe0f65%3A0x2fee6581815c9abd!2sCapilla%20Universidad%20Nacional%2C%20Bogot%C3%A1!3m2!1d4.6328818!2d-74.0814967!5e0!3m2!1sen!2sco!4v1697488842106!5m2!1sen!2sco" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              </Row>
              <Row className='padding-top'>
                <h1>Entradas peatonales</h1>
                <Col>
                  <h2>Calle 26</h2>
                  <iframe title="Chuch's car entrance map2" src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d3976.780327202011!2d-74.08485104669487!3d4.633239832841271!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e2!4m3!3m2!1d4.6321854!2d-74.0840666!4m5!1s0x8e3f9bd3c3fe0f65%3A0x2fee6581815c9abd!2sCapilla%20Universidad%20Nacional%2C%20Bogot%C3%A1!3m2!1d4.6328818!2d-74.0814967!5e0!3m2!1sen!2sco!4v1697488959490!5m2!1sen!2sco"  height="450" width="100%" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </Col>
                <Col>
                  <h2>Carrera 45 con 30</h2>
                  <iframe title="Chuch's car entrance map2" src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d3976.7752532089326!2d-74.08331747489314!3d4.634141795340615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e2!4m3!3m2!1d4.635224099999999!2d-74.0797477!4m5!1s0x8e3f9bd3c3fe0f65%3A0x2fee6581815c9abd!2sCapilla%20Universidad%20Nacional%2C%20Bogot%C3%A1!3m2!1d4.6328818!2d-74.0814967!5e0!3m2!1sen!2sco!4v1697489130226!5m2!1sen!2sco" height="450" width="100%" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </Col>
              </Row>
            </Col>
            <Col md="2" />
          </Row>
        </Container>
      </div>
    </>
  );
}
