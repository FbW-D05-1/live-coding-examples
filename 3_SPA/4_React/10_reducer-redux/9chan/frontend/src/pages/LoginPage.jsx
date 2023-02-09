import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../actions/userActions";
import FormContainer from "../components/FormContainer";

function LoginPage({location, history}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const redirect = location.search ? location.search.split('=')[1] : '/';

  const userLogin = useSelector(state => state.userLogin);
  const {error, loading, userInfo} = userLogin;

  useEffect(() =>{
    if(userInfo){
      history.push(redirect)
    }
  }, [history, userInfo, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(username, password))
  };

  return (
    <FormContainer>
      <h1>Sign In</h1>
      {loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h4>{error}</h4>
      ): ''}
      <Form onSubmit={submitHandler}>
        <Form.Group controlId="username">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Button className="my-3"type="submit" variant="primary" style={{width: '100%'}}>
          Sign In
        </Button>
      </Form>

      <Row className="py-3">
        <Col>
        No Account? <Link to={redirect ? `/register?redirect=${redirect}` : '/register'}>Register</Link>
        </Col>
      </Row>
      
    </FormContainer>
    
  );
}

export default LoginPage;
