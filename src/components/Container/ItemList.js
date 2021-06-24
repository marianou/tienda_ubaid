import React from 'react'
import Item from './Item'
import {Row, Col} from 'react-bootstrap'

const ItemList = ({items,setDetalle,setItems}) => {
    
    return (
      
      <div>
        
        <Row>
        
            {items.map(it=> (
                 
            <Col>    
              <Item 
                    key={it.id}
                    item={it} 
                    setDetalle={setDetalle}
                    setItems={setItems}
              />
            </Col>
            )
          )}
      </Row>
      
      </div>
      
    )
 }
export default ItemList
