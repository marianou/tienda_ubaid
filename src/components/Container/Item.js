import React from 'react'
import {Card} from 'react-bootstrap'
import ItemCount from '../ItemCount/ItemCount'



const Item = ({item}) => {
    
    return (
        <>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={item.pictureUrl} height="150px" width="100px" />
                <Card.Body>
                    <Card.Title>{item.description}</Card.Title>
                    <Card.Text>
                        {item.price}
                    </Card.Text>
                </Card.Body>
        </Card>
        
        
            <ItemCount
                stock={5}
                inicial={1}
            />
        </>
        
        
    )
}

export default Item
