import React, { useState } from 'react'
import {Card,Button} from 'react-bootstrap'
import ItemCount from '../ItemCount/ItemCount'


const ItemDetail = ({itemd,setDetalle}) => {


    const[isPress, setIsPress]=useState(false);

    const onAdd = (cantidad) =>{
        setIsPress(true)
    }

    const volver = e =>{
        setDetalle(false);
    }

    
    return (
        <div className="text-center">
                
            <Card style={{ width: '25rem'}}>
                <Card.Header><h4>{itemd.title}</h4></Card.Header>
                <Card.Body>
                    
                    <Card.Img variant="top" src={itemd.pictureUrl} height="150px" width="40px" />
                    <Card.Text>
                    <p>{itemd.description}</p>
                    <p>Precio:$ {itemd.price}</p>
                    <p>
                        <ItemCount
                            stock={5}
                            inicial={1}
                        />
                    </p>
                    </Card.Text>
                    <Button variant="primary"onClick={volver}>Volver</Button>
                </Card.Body>
            </Card>
            <p>
            {
                (isPress && <button>Terminar compra</button>)
                //(isPress && <ItemCount onAdd={onAdd} />)
            }
            </p>
        </div>
    )
}


export default ItemDetail
