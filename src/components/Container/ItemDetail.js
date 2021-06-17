import React from 'react'
import {Card} from 'react-bootstrap'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({item}) => {


    return (
         <>

        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={item.pictureUrl} height="150px" width="100px" />
            <div Class="text-center">
                <Card.Body>
                    <Card.Title>{item.title}</Card.Title>      
                    <Card.Text>
                        Precio: ${item.price}
                        <br/>
                        <br/>
                            <ItemCount
                                stock={5}
                                inicial={1}
                            />
                    </Card.Text>
                </Card.Body>
            </div>    
        </Card>
        
        </>
    )
}

export default ItemDetail
