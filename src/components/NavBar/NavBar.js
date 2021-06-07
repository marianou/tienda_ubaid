import React from 'react'
import { Nav, Navbar,Form, FormControl, Button } from 'react-bootstrap'
import CardWidget from '../CardWidget/CardWidget'


const NavBar = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#incio">Tienda Salim</Navbar.Brand>
            <Nav className="mr-auto ml-auto">
                <Nav.Link href="#productos">Productos</Nav.Link>
                <Nav.Link href="#Info">Info</Nav.Link>
                <Nav.Link href="#contacto">Contacto</Nav.Link>
                <Nav.Link href="#carrito"><CardWidget /></Nav.Link>
            </Nav>
            <Form inline>
                <FormControl type="text" placeholder="Buscar producto" className="mr-sm-2" />
                <Button variant="outline-info">Buscar</Button>
            </Form>
        </Navbar>    
    )
}

export default NavBar
