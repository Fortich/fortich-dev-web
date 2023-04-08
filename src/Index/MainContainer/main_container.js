import {Children, React} from 'react';

import './index.css';
import PropTypes from 'prop-types';

/**
 * Main container.
 * @return {JSX} Main container component.
 */
export default function MainContainer({children}) {
  return (
    <>
      {Children.map(children, (child) =>
        <>
          {child}
        </>,
      )}
    </>
  );
}

MainContainer.propTypes = {
  children: PropTypes.any,
};

