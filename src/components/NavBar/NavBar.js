import React, { useContext } from 'react';
import { CartContext} from '../Context/CarContext';
import { Nav, Navbar,Form, FormControl, Button } from 'react-bootstrap'
import CardWidget from '../CardWidget/CardWidget'
import {Link} from 'react-router-dom'


const NavBar = () => {

    const { cantItems } = useContext(CartContext);
    

    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#incio">Tienda Salim</Navbar.Brand>
            <Nav className="mr-auto ml-auto">
                <Nav.Link><Link to={'/'}>Productos</Link></Nav.Link>
                <Nav.Link><Link to={'/'}>Info</Link></Nav.Link>
                <Nav.Link><Link to={'/'}>Contacto</Link></Nav.Link>
                { cantItems>0 ?(
                    <>
                        <Nav.Link><Link to={'/cart'}><CardWidget /></Link></Nav.Link>                
                        <Button variant="outline-info">{cantItems}</Button>
                    </>    
                    )
                    :
                    (<Nav.Link><Link to={'/cart'}><CardWidget /></Link></Nav.Link>)
                    }                
            </Nav>
            <Form inline>
                <FormControl type="text" placeholder="Buscar producto" className="mr-sm-2" />
                <Button variant="outline-info">Buscar</Button>
            </Form>
        </Navbar>    
    )
}

export default NavBar
