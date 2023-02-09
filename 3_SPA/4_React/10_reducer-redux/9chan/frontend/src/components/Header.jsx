import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Navbar, Nav, NavDropdown, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { logout } from "../actions/userActions";

import { createPost } from "../actions/postActions";
import { POST_CREATE_RESET } from '../constants/postConstants';



function Header() {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logout());
  };
  return (
    <header>
      <Navbar bg="light" expand="lg" collapseOnSelect>
        <Container>
          <Navbar.Brand as={Link} to="/" style={{zIndex: '10'}}>
            Yeet
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link as={Link} to="/saved" style={{zIndex: '10'}}>
                <i className="fas fa-save"></i> Saved
              </Nav.Link>

              {userInfo ? (
                
                <NavDropdown title={userInfo.username} id="basic-nav-dropdown" style={{zIndex: '10'}}>
                  <NavDropdown.Item as={Link} to="/profile" >
                    Profile
                  </NavDropdown.Item>

                  <NavDropdown.Item onClick={logoutHandler}>
                    LogOut
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <Nav.Link as={Link} to="/login">
                  <i className="fas fa-user"></i> Login
                </Nav.Link>
              )}
              
                <Link as={Link} to="/postlist">
                <i className="fas fa-plus-square fa-2x uploadBtn"  id="centeredUpload"></i>
              </Link>
                
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
