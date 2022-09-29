import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./nav.css"
function Navbar1() {
  return (
    <Navbar bg="light"  expand="lg">
    <Container>
      <Navbar.Brand href="#home">Blog</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
          <NavDropdown title="More" id="basic-nav-dropdown">
           <Link to="/?cat=art"> <NavDropdown.Item >Art</NavDropdown.Item></Link>
           <Link to="/?cat=science"> <NavDropdown.Item >Science</NavDropdown.Item></Link>
           <Link to="/?cat=technology"> <NavDropdown.Item >Technology</NavDropdown.Item></Link>
           <Link to="/?cat=cinema"> <NavDropdown.Item >Cinema</NavDropdown.Item></Link>
           <Link to="/?cat=code"> <NavDropdown.Item >Coding</NavDropdown.Item></Link>

            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
     {/* <Link to="/write"><Nav.Link href="#home">Write</Nav.Link></Link>  */}
     <span>John</span>
     <NavDropdown.Divider />
     <span className='btn btn-danger'>Logout</span>
     <NavDropdown.Divider />
     <span>
      <Link to="/write"><button className="btn btn-primary">Write</button></Link>
     </span>
    </Container>
  </Navbar>
   
  )
}

export default Navbar1