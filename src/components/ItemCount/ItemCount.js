import React, { useState } from 'react'
import { Button, Card } from 'react-bootstrap'


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
            <Card border="primary" style={{ width: '18rem' }}>
                <Card.Body>
                <Card.Text className="text-center">
                   <Button variant="outline-secondary" onClick={()=>restar()}>-</Button>
                   <Button variant="secondary">{cantidad}</Button>
                   <Button variant="outline-secondary" onClick={()=>sumar()}>+</Button>
                </Card.Text>
                </Card.Body>
                <Button variant="outline-secondary" className="mx-auto">Agregar al carrito</Button>
                <br />
            </Card>
    )
}

export default ItemCount
