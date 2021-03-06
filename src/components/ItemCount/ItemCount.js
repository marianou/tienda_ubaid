import React, { useState, useContext } from 'react'
import { Button } from 'react-bootstrap'
import { CartContext} from '../Context/CarContext';

const ItemCount = ({stock, inicial,onAdd,item}) => {
    
    const [cantidad, setCantidad] = useState(inicial)
    const { addToCart } = useContext(CartContext);

    const sumar=()=>{
        if(cantidad<stock)
         setCantidad(cantidad+1)
        
    }

    const restar=()=>{
        if(cantidad>1)
         setCantidad(cantidad-1)
    }

    const terminar = () =>{
        onAdd(true);
        addToCart({id:item.id,title:item.title,quantity:cantidad,price:item.price});
        console.log(item.title);
    }


    return (

            
            <>
                <p>                        
                    <Button variant="outline-secondary" size="sm" onClick={()=>restar()}>-</Button>
                    <Button variant="secondary" size="sm">{cantidad}</Button>
                    <Button variant="outline-secondary" size="sm" onClick={()=>sumar()}>+</Button>
                </p>
                <p> <Button variant="outline-secondary" className="mx-auto" size="sm" 
                    onClick={ () => terminar()}>Agregar al carrito</Button></p>
            </>    
    )
}

export default ItemCount
