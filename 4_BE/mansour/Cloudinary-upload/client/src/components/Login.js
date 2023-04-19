import React, { useState ,useContext,useEffect} from 'react';
import AuthContext from '../context/auth/AuthContext';

import { Navigate } from 'react-router-dom';

import {Container, Form, FormGroup, Label, Input, Button } from 'reactstrap';


const Login = (props) => {
  const { state , login} = useContext(AuthContext);
 
    const [user,setUser] = useState({
        email:"",
        password:""
    });
    const handleSubmit = async(e)=>{
        e.preventDefault();
        login(user)

    }

    if (state.isAuthenticated) return <Navigate to='/' />;

  return (
      <Container fluid >
             <h3 className="p-5 text-center">Login page!</h3>
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label for="email">Email</Label>
        <Input type="email" name="email" id="email" placeholder="Enter email" onChange={e=> setUser({...user,email:e.target.value})} value={user.email} required />
      </FormGroup>
      <FormGroup>
        <Label for="password">Password</Label>
        <Input type="password" name="password" id="password" placeholder="Enter password" onChange={e=> setUser({...user,password:e.target.value})} value={user.password} required />
      </FormGroup>
      <Button type="submit" color="primary">Login</Button>
    </Form>
    </Container>
  );
}

export default Login;
