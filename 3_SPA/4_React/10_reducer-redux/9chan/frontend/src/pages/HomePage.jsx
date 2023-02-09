import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col } from "react-bootstrap";
import Post from "../components/Post";
import { listPosts } from "../actions/postActions";

function HomePage() {
  const dispatch = useDispatch();
  const postList = useSelector((state) => state.postList);
  const { error, loading, posts } = postList;

  useEffect(() => {
    dispatch(listPosts());
  }, [dispatch]);

  return (
    <div>
      <h1>Latest Posts</h1>

      {loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h3>{error}</h3>
      ) : (
        <Row>
          {posts.map((post) => (
            <Col key={post._id} sm={12} md={6} lg={4} xl={3}>
              <Post post={post} />
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
}

export default HomePage;
