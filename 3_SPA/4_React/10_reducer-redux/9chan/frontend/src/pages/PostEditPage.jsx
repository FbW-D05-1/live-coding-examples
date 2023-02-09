import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import FormContainer from "../components/FormContainer";
import { listPostDetails, updatePost } from "../actions/postActions";
import { POST_UPDATE_RESET } from "../constants/postConstants";

function PostEditPage({ match, history }) {
  const postId = match.params.id;

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [imgurl, setImgurl] = useState("");
  const [uploading, setUploading] = useState(false);

  const dispatch = useDispatch();

  const postDetails = useSelector((state) => state.postDetails);
  const { error, loading, post } = postDetails;

  const postUpdate = useSelector((state) => state.postUpdate);
  const {
    message: messageUpdate,
    error: errorUpdate,
    loading: loadingUpdate,
    success: successUpdate,
  } = postUpdate;

  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: POST_UPDATE_RESET });
      history.push("/");
    } else {
      if (!post.name || post._id !== Number(postId)) {
        dispatch(listPostDetails(postId));
      } else {
        setName(post.name);
        setDescription(post.description);
        setImgurl(post.imgurl);
      }
    }
  }, [dispatch, post, postId, history, successUpdate]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(updatePost({ _id: postId, name, description, imgurl }));
  };

  const uploadFileHandler = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();

    formData.append("imgurl", file);
    formData.append("post_id", postId);
    setUploading(true);

    try {
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };

      const { data } = await axios.post("/api/posts/upload/", formData, config);

      setImgurl(data);
      setUploading(false);
    } catch (error) {
      setUploading(false);
    }
  };

  return (
    <div>
      <Link to="/postlist">Go Back</Link>

      <FormContainer>
        <h1 className="text-center">Your Post</h1>

        {messageUpdate && (
          <h2 className="text-center" style={{ color: "#ff0800" }}>
            {messageUpdate}
          </h2>
        )}
        {loadingUpdate ? (
          <h2 className="text-center">Loading...</h2>
        ) : errorUpdate ? (
          <h4>{errorUpdate}</h4>
        ) : (
          ""
        )}

        {loading ? (
          <h2>Loading...</h2>
        ) : error ? (
          <h3>{error}</h3>
        ) : (
          <Form onSubmit={submitHandler}>
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="name"
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="description">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="imgurl">
              <Form.Label>Image</Form.Label>

              <Form.Control type="file" onChange={uploadFileHandler} />

              {uploading && <h2>Loading Please Wait...</h2>}
            </Form.Group>

            <Button
              className="my-3"
              type="submit"
              variant="primary"
              style={{ width: "100%" }}
            >
              Upload
            </Button>
          </Form>
        )}
      </FormContainer>
    </div>
  );
}

export default PostEditPage;
