import React from 'react';
import {Button,Container, Navbar,Nav,Form,FormControl,NavDropdown} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const Header = () =>
{
    return (
        <Navbar bg="dark" expand="lg" variant="dark">
            <Container fluid>
                <Navbar.Brand href="#">FilmSpot</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                    <Nav.Link href="#Home">Home</Nav.Link>
                    <Nav.Link href="#Peliculas">Peliculas</Nav.Link>
                    <Nav.Link href="#Series" >
                    Series
                    </Nav.Link>
                </Nav>
                <Form className="d-flex">
                    <FormControl
                    type="search"
                    placeholder="Buscar"
                    className="me-2"
                    aria-label="Search"
                    />
                    <Button variant="outline-success">Buscar</Button>
                </Form>
                </Navbar.Collapse>
            </Container>
            </Navbar>
    )
}
export default Header;