import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './post_list.css';

/**
 * Post list.
 * @param {Any} posts Posts to be rendered
 * @return {JSX} Post list component.
 */
export default function PostList({posts}) {
  return (
    <>
      {
        posts.map((post, index) => {
          return <Card className='margin-bottom-list' key={index}>
            <Card.Body>
              <Card.Title>{post.title}</Card.Title>
              <Card.Subtitle className='mb-2 text-muted'>
                {post.subtitle}
              </Card.Subtitle>
              <hr />
              <Card.Text>{post.short_content}</Card.Text>
              <Card.Text>
                📅 {post.updated_on} | 📖 {post.reading_time}
              </Card.Text>
              <Button href={post.slug} className='btn btn-primary'>
                Leer más
              </Button>
            </Card.Body>
          </Card>;
        },
        )
      }
    </>
  );
}

PostList.propTypes = {
  posts: PropTypes.any,
};
