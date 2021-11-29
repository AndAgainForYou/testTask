import React, {useHistory} from 'react';
import {Navbar, Container, Nav, Col, Image, Dropdown } from 'react-bootstrap'
import {Link, Routes, Route, Redirect, useNavigate } from 'react-router-dom';
import Login from './Login';



const Header = (props) => {

  return (
    <header >
        <Navbar bg="dark" variant="dark">
          <Container>
              <Nav className="me-auto">
              <Navbar.Brand><Link to="/One"><a>☰ Navbar</a></Link></Navbar.Brand>
                <Link to="/One"></Link>
                <Link to="/Two"></Link>
              </Nav>
                            <Navbar.Text>
                                {props.status.map( name => <p className="userName">{name.userName}</p> )}
                            </Navbar.Text>
                <Col xs={4} md={2}>
                  <Dropdown>
                      <Dropdown.Toggle variant="dark">
                        <Image src="https://img.icons8.com/emoji/48/ffffff/thinking-face.png" roundedCircle />
                      </Dropdown.Toggle>
                    
                      <Nav className="colorik">
                      <Dropdown.Menu>
                        <Dropdown.Item><a>Current role:{props.status.map( status => <p>{status.userRole}</p> )}</a></Dropdown.Item>
                        <Dropdown.Item><Link to="/Two"><a>Change role</a></Link></Dropdown.Item>
                        <Dropdown.Item><a>Login</a></Dropdown.Item>
                      </Dropdown.Menu>
                      </Nav>
                    
                  </Dropdown>
                </Col>
          </Container>
    </Navbar>
    </header>
  );
}

export default Header;
