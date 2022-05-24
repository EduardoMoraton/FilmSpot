import React, {useEffect, useState} from 'react';
import {Button,Container, Navbar,Nav,Form,FormControl,NavDropdown} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const Header = ({childToParent}) =>
{
    function handleSearch(event) {
        console.log(event);
        childToParent("home")
        childToParent(event.target.value)
       
    }
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
                    <Nav.Link href="#Home" onClick={()=>childToParent("home")}>Home</Nav.Link>
                    <Nav.Link href="#Peliculas" onClick={()=>childToParent("movies")}>Peliculas</Nav.Link>
                    <Nav.Link href="#Series" onClick={()=>childToParent("tv")}>
                    Series
                    </Nav.Link>
                </Nav>
                <Form className="d-flex">
                    <FormControl
                    type="search"
                    placeholder="Buscar"
                    className="me-2"
                    aria-label="Search"
                    onChange={handleSearch}
                    />
                    <Button variant="outline-success">Buscar</Button>
                </Form>
                </Navbar.Collapse>
            </Container>
            </Navbar>
    )
}
export default Header;