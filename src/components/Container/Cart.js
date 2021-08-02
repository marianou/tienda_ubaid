import React, { useContext } from 'react';
import { CartContext} from '../Context/CarContext';
import {Table, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import { getFirestore } from '../../firebase';
import firebase from 'firebase/app';
import '@firebase/firestore';


const Cart = () => {
    
    const saveOrder = () => {
        const db = getFirestore();
        const order = db.collection('orders');
        const newOrder = {
        buyer: {
            email: 'pperez@gmail.com',
            name: 'Pedro Perez',
            phone: '+5491135678912'
        },
        date: firebase.firestore.Timestamp.fromDate(new Date()),
        total: total,
        items: [
            items.map(it=>(                                                                                                                                                 
                key=it.id
                id: it.id,
                title: it.title,
                price: it.price    
                )
            )
        ]
        };

        order
        .add(newOrder)
        .then(({ id }) => {
            console.log(`Orden creada. Id: ${id}`);
        })
        .catch(error => {
            console.log(error);
        });
  };

    const { items } = useContext(CartContext);
    const { removeItem } = useContext(CartContext);
    const { total } = useContext(CartContext);

    
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

                        {items.map(it=>(                                                                                                                                                 
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
                                     onClick={ () => removeItem(it.id,it.price*it.quantity)}>Eliminar</Button>
                                </th>                                
                            </tr>  
                        )    
                        
                    )
                    }
                </tbody>
            </Table>
                <h3 align="right">Total: {total} </h3>
                <Button variant="outline-secondary" className="mx-auto" size="sm" 
                onClick={ () => saveOrder()}>Confirmar Compra</Button>

            </>
        ):

        (
            <>
                <br/>
                <h3 align="center">No hay productos en el Carrito...</h3>
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

