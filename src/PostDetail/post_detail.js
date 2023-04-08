import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import './post_detail.css';

/**
 * Post detail.
 * @return {JSX} Post detail component.
 */
export default function PostDetail({post}) {
  return (
    <>
      <Card className='margin-bottom'>
        <Card.Body>
          <Card.Title>{post.title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {post.subtitle}
          </Card.Subtitle>
          <hr />
          {post.content}
        </Card.Body>
      </Card>
    </>
  );
}

PostDetail.propTypes = {
  post: PropTypes.any,
};
