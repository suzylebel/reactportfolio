import React from "react";
import "./NavBar.css"
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';






function NavBar() {
  return (


    <Navbar className="navbar" variant="dark" expand="lg">
      <Navbar.Brand href="https://suzylebel.github.io/reactportfolio/"><h2 className="suzy">Suzy Le Bel</h2></Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="float-right mr-auto align-right">
          <Nav.Link target="_blank" href="https://github.com/suzylebel">
            <i className="navicon navbar-brand fab fa-github-square" ></i>

          </Nav.Link>
          <Nav.Link target="_blank" href="https://www.linkedin.com/in/suzanne-le-bel-b24032125/">
            <i className="navicon navbar-brand fab fa-linkedin" ></i>

          </Nav.Link>

          <Nav.Link className="float-right mr-auto align-right" href="https://suzylebel.github.io/reactportfolio/contact">Contact Suzy <span class=" text-right navbar-brand material-icons ">
            face
</span> </Nav.Link>
          <Nav.Link href="https://suzylebel.github.io/reactportfolio/projects"> Projects <span className=" text-right navbar-brand material-icons ">important_devices</span> </Nav.Link>


      

        </Nav>
      </Navbar.Collapse>

    </Navbar>


  );
}

export default NavBar;