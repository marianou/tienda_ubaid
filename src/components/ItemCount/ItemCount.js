import React, { useState } from 'react'
import { Button } from 'react-bootstrap'


const ItemCount = ({stock, inicial}) => {
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
                   
                   <Button variant="outline-secondary" onClick={()=>restar()}>-</Button>
                   <Button variant="secondary">{cantidad}</Button>
                   <Button variant="outline-secondary" onClick={()=>sumar()}>+</Button>
                   <br/>
                   <br/>
                    <Button variant="outline-secondary" className="mx-auto">Agregar al carrito</Button>
            </>    
    )
}

export default ItemCount
