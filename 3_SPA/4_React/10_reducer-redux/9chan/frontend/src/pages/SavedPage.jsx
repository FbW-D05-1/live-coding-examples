import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, ListGroup, Image, Button, Card } from "react-bootstrap";
import { addToSave } from "../actions/saveActions";

function SavedPage({ match }) {
  const postId = match.params.id;
  console.log(postId);
  //const tags = location.search.split(',')

  const dispatch = useDispatch();

  const save = useSelector((state) => state.save);
  const { saveItems } = save;
  console.log(saveItems);

  useEffect(() => {
    if (postId) {
      dispatch(addToSave(postId));
    }
  }, [dispatch, postId]);

  const removeFromSavedHandler = (id) => {
    console.log(id);
  };
  return (
    <Row>
      <Col>
        <h1>Saved Images</h1>
        {saveItems.length === 0 ? (
          <h2>
            Empty :c <Link to="/">Go back</Link>
          </h2>
        ) : (
          <ListGroup variant="flush">
            {saveItems.map((item) => (
              <ListGroup.Item key={item.post}>
                <Row>
                  <Col md={3}>
                    <Image src={item.imgurl} alt={item.name} fluid rounded />
                  </Col>
                  <Col md={4}>
                    <Link to={`/post/${item.post}`}>{item.name}</Link>
                  </Col>

                  <Col md={1}>
                    <Button
                      type="button"
                      variant="light"
                      onClick={() => removeFromSavedHandler(item.post)}
                    >
                      <i className="fas fa-trash"></i>
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}
      </Col>
    </Row>
  );
}

export default SavedPage;
