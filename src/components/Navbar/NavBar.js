import React from "react";
import "./NavBar.css"
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, useLocation } from "react-router-dom";

// function NavBar() {

//     const location = useLocation();

//     return (
//         <ul className="nav justify-content-end">

//             <li className="nav-item">
//                 <Link
//                     to="/reactportfolio/"
//                     className={location.pathname === "/reactportfolio/" ? "nav-link active" : "nav-link"}
//                 >
//                     Home
//         </Link>
//             </li>
        //     <li className="nav-item">
        //         <Link
                   
        //             className={location.pathname === "/reactportfolio/projects" ? "nav-link active" : "nav-link"}
        //         >
        //             Projects
        // </Link>
            // </li>
        //     <li className="nav-item">
        //         <Link
        //             to="/reactportfolio/contact"
        //             className={location.pathname === "/portfolio-react/contact" ? "nav-link active" : "nav-link"}
        //         >
        //             Contact
        // </Link>
        //     </li>
//         </ul>
//     );
// }





// rewrote nav bar function above to help it work for gh pages

function NavBar() {
  const location = useLocation();
  return (


    <Navbar className="navbar" variant="dark" expand="lg">
      <Navbar.Brand to="/" as={Link}><h2 className="suzy">Suzy Le Bel</h2></Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="float-right mr-auto align-right">
          <Nav.Link target="_blank" href="https://github.com/suzylebel">
            <i className="navicon navbar-brand fab fa-github-square" ></i>

          </Nav.Link>
          <Nav.Link target="_blank" href="https://www.linkedin.com/in/suzanne-le-bel-b24032125/">
            <i className="navicon navbar-brand fab fa-linkedin" ></i>

          </Nav.Link>

          <Nav.Link className="float-right mr-auto align-right" as={Link}
                    to="/contact"
                >
                    Contact Suzy <span class=" text-right navbar-brand material-icons">
            face
</span> </Nav.Link>
          <Nav.Link to="/projects" as={Link}> Projects <span className=" text-right navbar-brand material-icons ">important_devices</span> </Nav.Link>

        </Nav>
      </Navbar.Collapse>

    </Navbar>


  );
}

export default NavBar;