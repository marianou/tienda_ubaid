import React from 'react'
import {Card, Button} from 'react-bootstrap'
import ItemCount from '../ItemCount/ItemCount'
//import ItemDetailContainer from './ItemDetailContainer'


const Item = ({item},{mostrarDetalle}) => {
    console.log(item);
    //mostrarDetalle(true)


    const verDetalle = () =>{
        mostrarDetalle=true;
    }

    return (
        
        <div className="text-center">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={item.pictureUrl} height="150px" width="100px" />
                
                    <Card.Body>
                            <Card.Title>{item.title}</Card.Title>
                        <Card.Text>
                            
                            <Button onClick={verDetalle} variant="outline-secondary">Ver Detalle</Button>
                            <br/>
                            <br/>
                            Precio: ${item.price}
                            <br/>
                            <br/>
                                <ItemCount
                                    stock={5}
                                    inicial={1}
                                />
                        </Card.Text>
                    </Card.Body>
                    
            </Card>
            
        </div>
        
        
    )
}

export default Item
