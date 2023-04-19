import React from 'react';
import { Container } from 'reactstrap';
import AppNavbar from './Navbar';

const Header = () => {
  return (
    <header>
      <AppNavbar />
      {/* <Container fluid className="text-center p-5">
        <h1>Welcome to my app!</h1>
      </Container> */}
    </header>
  );
};

export default Header;
