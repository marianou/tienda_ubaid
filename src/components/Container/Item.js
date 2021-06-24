import React,{Fragment} from 'react'
import {Card,Button} from 'react-bootstrap'
import ItemCount from '../ItemCount/ItemCount'
//import ItemDetailContainer from './ItemDetailContainer'


const Item = ({item,setDetalle,setItems}) => {
    //console.log(item)
    //mostrarDetalle(true)


    const mostrarDetalleItem = e =>{
        e.preventDefault();

        setDetalle(true);
        setItems(item);
    }

    //<p><Button size="sm" onClick={mostrarDetalleItem} variant="outline-secondary">Ver Detalle</Button></p>
    return (
        <Fragment>
           <form
            
           > 
            <div className="text-center">
                <Card style={{ width: '16rem'}}>
                
                    <Card.Img variant="top" src={item.pictureUrl} height="150px" width="100px" />
               
                        <Card.Body>
                            <Card.Title>{item.title}</Card.Title>
                            <Card.Text>
                                <p><h4>Precio: ${item.price}</h4></p>
                                <p><Button size="sm" onClick={mostrarDetalleItem} variant="outline-secondary">Ver Detalle</Button></p>
                                    <ItemCount
                                        stock={5}
                                        inicial={1}
                                    />
                            </Card.Text>
                        </Card.Body>
                </Card>
            
        
            </div>
           </form>
        </Fragment>        
        
    )
}

export default Item
