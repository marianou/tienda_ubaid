import React, { useState } from 'react'
import {Card,Button} from 'react-bootstrap'
import ItemCount from '../ItemCount/ItemCount'
import {Link} from 'react-router-dom'


const ItemDetail = ({localItem}) => {

    
    const[isClicker, setIsClicker]=useState(false);  
    

    const volver = e =>{
        setIsClicker(false);
    }

    
    return (
        <div className="text-center">
                
            <Card style={{ width: '25rem'}}>
                <Card.Header><h4>{localItem.title}</h4></Card.Header>
                <Card.Body>
                    
                    <Card.Img variant="top" src={localItem.pictureUrl} height="150px" width="40px" />
                    <Card.Text>
                    <p>{localItem.description}</p>
                    <p>Precio:$ {localItem.price}</p>            

                    {isClicker===true ? (  
                        
                                
                        
                            <p><Link to={'/cart'}><Button variant="primary">Terminar compra</Button></Link></p>
                        
                        )
                      :
                        (
                            <p>
                            <ItemCount 
                                stock={5}
                                inicial={1}
                                onAdd={setIsClicker}
                                item={localItem}
                            />
                            </p>
                        )
                    }                                                           
                    
                    </Card.Text>
                    <Link to={'/'}><Button variant="primary" onClick={volver}>Volver</Button></Link>
                </Card.Body>
            </Card>
            
        
        </div>
    )
}


export default ItemDetail
