import React,{Fragment} from 'react'
import {Card,Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
//import ItemDetailContainer from './ItemDetailContainer'


const Item = ({item,setItems}) => {
    //console.log(item)
    //mostrarDetalle(true)


    const mostrarDetalleItem = e =>{
        //e.preventDefault();
        setItems(item);
    }
    
    console.log("Item id: ",item.id);
    return (
        <Fragment>
           <form
            
           > 
            <div className="text-center">
                <Card style={{ width: '16rem'}}>
                
                    <Card.Img variant="top" src={item.imageId} height="150px" width="100px" />
               
                        <Card.Body>
                            <Card.Title>{item.title}</Card.Title>
                            <Card.Text>
                                <p><h4>Precio: ${item.price}</h4></p>
                            </Card.Text>
                            <Card.Text>

                            <p><Link to={`/item/${item.id}`}><Button size="sm" onClick={mostrarDetalleItem} variant="outline-secondary">Ver Detalle</Button></Link></p>  
                            
                               
                                    
                            </Card.Text>
                        </Card.Body>
                </Card>
            
        
            </div>
           </form>
        </Fragment>        
        
    )
}

export default Item
