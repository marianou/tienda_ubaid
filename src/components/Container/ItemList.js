import React from 'react'
import Item from './Item'
import {Row, Col} from 'react-bootstrap'

const ItemList = ({items},{mostrarDetalle}) => {
    
    return (
      
      <div>
        
        <Row>
        
            {items.map((it)=> 
                 
            <Col>    
              <Item 
                    key={it.id}
                    item={it} 
                    mostrarDetalle={mostrarDetalle}
              />
            </Col>
            
          )}
      </Row>
      
      </div>
      
    )
 }
export default ItemList
