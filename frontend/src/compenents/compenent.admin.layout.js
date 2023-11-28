import { Outlet } from "react-router-dom";
import { NavLink } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import './navbar.css';
export function AdminLayout(){

    return(
        <>
            

            <Navbar className="custom-navbar" expand="lg" variant="dark">
      <Navbar.Brand href="#home">My App</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/products">Product</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
            <Outlet />
        </>
    )
}