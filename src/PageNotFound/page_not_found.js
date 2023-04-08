import React from 'react';
import './page_not_found.css';

import NotFoundImage from './404.jpg';

/**
 * Post detail.
 * @return {JSX} Post detail component.
 */
export default function PostDetail() {
  return (
    <>
      <p>Not found &apos;{window.location.pathname}&apos; in server</p>
      <img className='missing-img' src={NotFoundImage} alt='Missing cat'></img>
    </>
  );
}
