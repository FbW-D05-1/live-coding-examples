
import React, {useContext, useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink as RsNavLink } from 'reactstrap';
import AuthContext from '../context/auth/AuthContext';

const AppNavbar = () => {
  const { state , loadUser,logout} = useContext(AuthContext);
  const onlogOut = ()=>{
  logout();
  //document.cookie = "token"+'=;Max-Age=-99999';

  }
  useEffect(()=>{
    if(!state.isAuthenticated){
     loadUser();
    }
   
  }, []);
  const userLinks = <>
   <NavItem>
          <NavLink to="/upload" className="nav-link" activeClassName="active">
            Upload
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/dashboard" className="nav-link" activeClassName="active">
            Dashboard
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink onClick={onlogOut} to="/login" className="nav-link" activeClassName="active">
            Logout
          </NavLink>
        </NavItem>
  </>
  const guestLinks = <>
  <NavItem>
          <NavLink to="/login" className="nav-link" activeClassName="active">
            Login
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/register" className="nav-link" activeClassName="active">
            Register
          </NavLink>
  </NavItem>
  </>
  return (
    <Navbar color="dark" dark expand="md">
      <NavbarBrand href="/">My App</NavbarBrand>
      <Nav className="mr-auto" navbar>
        <NavItem>
          <NavLink exact to="/" className="nav-link" activeClassName="active">
            Home
          </NavLink>
        </NavItem>
        { state.isAuthenticated &&
         userLinks
        }
        { !state.isAuthenticated &&
         guestLinks
        }

      </Nav>
      <Nav navbar>
        <NavItem>
          <RsNavLink href="https://github.com" target="_blank">
            GitHub
          </RsNavLink>
        </NavItem>
      </Nav>
    </Navbar>
  );
};

export default AppNavbar;
