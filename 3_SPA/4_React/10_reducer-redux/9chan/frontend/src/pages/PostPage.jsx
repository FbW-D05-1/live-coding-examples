import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  Row,
  Col,
  Image,
  ListGroup,
  Button,
  Card,
  Form,
} from "react-bootstrap";
import axios from "axios";
import Rating from "../components/Rating";
import { listPostDetails, createPostReview } from "../actions/postActions";
import { POST_CREATE_REVIEW_RESET } from "../constants/postConstants";

function PostPage({ match, history }) {
  const [save, setSave] = useState(false);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const dispatch = useDispatch();

  const postDetails = useSelector((state) => state.postDetails);
  const { loading, error, post } = postDetails;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const postReviewCreate = useSelector((state) => state.postReviewCreate);
  const {
    loading: loadingReview,
    error: errorReview,
    success,
  } = postReviewCreate;

  useEffect(() => {
    if (success) {
      setRating(0);
      setComment("");
      dispatch({ type: POST_CREATE_REVIEW_RESET });
    }
    dispatch(listPostDetails(match.params.id));
  }, [dispatch, match, success]);

  const savedHandler = () => {
    console.log("added to saved", match.params.id);
    setSave(true);
    history.push(`/saved/${match.params.id}`);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(createPostReview(match.params.id, { rating, comment }));
  };
  return (
    <div>
      <Link to="/" className="btn btn-light my-3">
        Return Back
      </Link>

      {loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h3>{error}</h3>
      ) : (
        <div>
          <Row>
            <Col md={9}>
              <Image src={post.imgurl} alt={post.name} fluid />
            </Col>
            <Col md={3}>
              <ListGroup>
                <ListGroup.Item>
                  <h3>{post.name}</h3>
                </ListGroup.Item>

                <ListGroup.Item>Description: {post.description}</ListGroup.Item>
              </ListGroup>
              <ListGroup>
                <ListGroup.Item>
                  <Rating
                    value={post.rating}
                    text={`${post.numReviews} ratings`}
                    color={"#f8e825"}
                  />
                </ListGroup.Item>
              </ListGroup>
              <ListGroup>
                <ListGroup.Item>
                  <Row>
                    <Col>Tags:</Col>
                    <Col>
                      <strong>{post.tags}</strong>
                    </Col>
                  </Row>
                </ListGroup.Item>
              </ListGroup>
              <ListGroup>
                <ListGroup.Item>
                  <Button
                    onClick={savedHandler}
                    className="btn-block"
                    disabled={save}
                    type="button"
                    style={{ width: "100%" }}
                  >
                    Save
                  </Button>
                </ListGroup.Item>
              </ListGroup>
            </Col>

            <Row className="my-5">
              <Col md={6}>
                <h2 className="text-center">Comments:</h2>
                {loadingReview && <h2>Loading...</h2>}
                {success && <h3>Comment Added</h3>}
                {errorReview && <h3>{errorReview}</h3>}

                {post.reviews.length == 0 && (
                  <h5 className="my-5">No Comments Yet</h5>
                )}
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    {userInfo ? (
                      <Form onSubmit={submitHandler}>
                        <Form.Group controlId="rating">
                          <Form.Control
                            as="select"
                            value={rating}
                            onChange={(e) => setRating(e.target.value)}
                          >
                            <option value="" readOnly>
                              Select
                            </option>
                            <option value="1">Meh</option>
                            <option value="2">Nah</option>
                            <option value="3">Mid</option>
                            <option value="4">Sheesh</option>
                            <option value="5">Dank!</option>
                          </Form.Control>
                        </Form.Group>

                        <Form.Group controlId="comment" className="mt-5">
                          <Form.Label>Comment</Form.Label>
                          <Form.Control
                            as="textarea"
                            row="6"
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                          ></Form.Control>
                        </Form.Group>
                        <Button
                          disabled={loadingReview}
                          type="submit"
                          variant="primary"
                          style={{ width: "100%", marginTop: "10px" }}
                        >
                          Submit
                        </Button>
                      </Form>
                    ) : (
                      <h5>
                        <Link to="/login">LogIn</Link> to leave a comment
                      </h5>
                    )}
                  </ListGroup.Item>
                  {post.reviews.map((review) => (
                    <ListGroup.Item key={review._id}>
                      <strong>{review.name}</strong>
                      <Rating value={review.rating} color="#f8e825" />
                      <p>{review.createdAt.substring(0, 10)}</p>
                      <p>{review.comment}</p>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </Col>
            </Row>
          </Row>
        </div>
      )}
    </div>
  );
}

export default PostPage;
