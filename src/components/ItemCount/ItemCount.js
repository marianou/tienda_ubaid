import React, { useState } from 'react'
import { Button } from 'react-bootstrap'


const ItemCount = ({stock, inicial,onAdd}) => {
    console.log(stock, inicial)
    const [cantidad, setCantidad] = useState(inicial)

    const sumar=()=>{
        if(cantidad<stock)
         setCantidad(cantidad+1)
        
    }

    const restar=()=>{
        if(cantidad>1)
         setCantidad(cantidad-1)
    }

    return (

            
            <>
                   <p>
                   <Button variant="outline-secondary" size="sm" onClick={()=>restar()}>-</Button>
                   <Button variant="secondary" size="sm">{cantidad}</Button>
                   <Button variant="outline-secondary" size="sm" onClick={()=>sumar()}>+</Button>
                   </p>
                   <p> <Button variant="outline-secondary" className="mx-auto" size="sm" onClick={()=>
                         onAdd({cantidad})}>Agregar al carrito</Button></p>
            </>    
    )
}

export default ItemCount
