import React from "react";
import { Card } from "react-bootstrap";
import Rating from "./Rating";
import { Link } from 'react-router-dom'

function Post({ post }) {
  return (
    <Card className="my-3 p-3 rounded">
      <Link to={`/posts/${post._id}`}>
        <Card.Img src={post.imgurl} />
      </Link>

      <Card.Body>
        <Link to={`/posts/${post.id}`}>
          <Card.Title as="div">
            <strong>{post.name}</strong>
          </Card.Title>
        </Link>
        <Card.Text as="div">
          <div className="my-3">
            <Rating
              value={post.rating}
              text={`${post.numReviews} ratings`}
              color={"#f8e825"}
            />
          </div>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Post;
