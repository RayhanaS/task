import React from 'react';
import {Navbar,Container} from 'react-bootstrap';
function NavBar(props) {
    console.log(props)
    return (
        <div>
            <Navbar>
  <Container>
    <Navbar.Brand href="#home">Navbar with text</Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
      <Navbar.Text>
        Signed in as: <a href="#login">{props.age} {props.adresse} </a>
      </Navbar.Text>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    )
}

export default NavBar

