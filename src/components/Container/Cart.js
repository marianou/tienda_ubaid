import React, { useContext } from 'react';
import { CartContext} from '../Context/CarContext';
import {Table, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';


const Cart = () => {
    
    const[total, setTotal]=(0);
    const { items } = useContext(CartContext);
    const { removeItem } = useContext(CartContext);

    const terminar = (it) =>{
        console.log(it.id);
        removeItem(it.id);
        return(
            <div>
            <h3 align="center">Resumen del Carrito</h3>
            <br/>
            <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                        <th>Id</th>
                        <th>Producto</th>
                        <th>Cantidad</th>
                        <th>Precio</th>
                        </tr>
                    </thead>
                    <tbody>

                        {items.map(it=> (
                            <tr key={it.id}>
                                <th>    
                                    {it.id}
                                </th>
                                <th>
                                    {it.title}
                                </th>
                                <th>
                                    {it.quantity}
                                </th>
                                <th>
                                    {it.price}
                                </th>
                                <th>
                                    <Button variant="outline-secondary" className="mx-auto" size="sm" 
                                    onClick={()=>terminar(it.id)}>Eliminar</Button>
                                </th>
                            </tr>
                                )
                    )
                        
                    }
                </tbody>
            </Table>
            </div>
        );
    }

    
    return (
        <div>
            <h3 align="center">Resumen del Carrito</h3>
        {items.length>0 ?(    
           <>
           <br/>
            
            <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                        <th>Id</th>
                        <th>Producto</th>
                        <th>Cantidad</th>
                        <th>Precio</th>
                        <th>Total</th>
                        <th>Eliminar Ítem</th>
                        </tr>
                    </thead>
                    <tbody>

                        {items.map(it=> (
                            
                            <tr>
                                <th key={it.id}>    
                                    {it.id}
                                </th>
                                <th>
                                    {it.title}
                                </th>
                                <th>
                                    {it.quantity}
                                </th>
                                <th>
                                    {it.price}
                                </th>
                                <th>
                                     {it.price*it.quantity}
                                </th>
                                <th>
                                    <Button variant="outline-secondary" className="mx-auto" size="sm" 
                                    onClick={ () => terminar(it.id)}>Eliminar</Button>
                                </th>
                            </tr>
                                )
                    )}
                </tbody>
            </Table>
            </>
        ):

        (
            <>
                <br/>
                <h3 align="center">No hay porductos en el Carrito...</h3>
                <br/>
                <div className="text-center">
                    <Link to={'/'}><Button variant="primary">Ir a Comprar</Button></Link>
                </div>    
            </>
        
        )}
        </div>
    )
}

export default Cart

