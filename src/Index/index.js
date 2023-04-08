
import {Children, React} from 'react';

import PropTypes from 'prop-types';
import IndexNavBar from './IndexNavBar/index_nav_bar';
import IndexFooterBar from './IndexFooterBar/index_footer_bar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MainContainer from './MainContainer/main_container';
import MainSideCard from './MainSideCard';

/**
 * Index container.
 * @return {JSX} Index container component.
 */
export default function Index({children}) {
  return (
    <>
      <IndexNavBar />
      <Container className="padding-top">
        <Row>
          <Col md="1"/>
          <Col md="7">
            <MainContainer>
              {Children.map(children, (child) =>
                <>
                  {child}
                </>,
              )}
            </MainContainer>
          </Col>
          <Col md="3">
            <MainSideCard/>
          </Col>
        </Row>
      </Container>
      <IndexFooterBar />
    </>
  );
}

Index.propTypes = {
  children: PropTypes.any,
};
