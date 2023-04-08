import {React} from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import todoroki from './todoroki.jpg';
import {RiLinkedinBoxFill, RiMailStarFill, RiGithubFill} from 'react-icons/ri';

/**
 * Main side card.
 * @return {JSX} Main side card.
 */
export default function MainSideCard() {
  return (
    <Card>
      <Card.Body>
        <Container>
          <Row>
            <Col className="align-self-center">
              <Card.Title>Fortich</Card.Title>
              <Card.Subtitle>Software Engineer</Card.Subtitle>
            </Col>
            <Col md="5">
              <Card.Img src={todoroki} />
            </Col>
          </Row>
        </Container>
        <hr />
        <Card.Text className="text-muted">
          <RiLinkedinBoxFill /> -{' '}
          <a target="_blank"
            rel="noreferrer"
            className="text-muted no-a-edited"
            href="https://www.linkedin.com/in/antonio-fortich-42a317195/">
            linked.in/fortich
          </a><br />
          <RiGithubFill /> -{' '}
          <a target="_blank"
            rel="noreferrer"
            className="text-muted no-a-edited"
            href="https://github.com/Fortich">
            github.com/Fortich
          </a><br />
          <RiMailStarFill /> -{' '}
          <a target="_blank"
            rel="noreferrer"
            className="text-muted no-a-edited"
            href="mailto:antonio@fortich.dev">
            antonio@fortich.dev
          </a><br />
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
