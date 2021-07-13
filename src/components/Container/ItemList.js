import React from 'react'
import Item from './Item'
import {Row, Col} from 'react-bootstrap'


const ItemList = ({items,setItems}) => {
    
    return (
      
      <div>
        
        <Row>
        
            {items.map(it=> (
                 
            <Col key={it.id}>    
              <Item 
                    
                    item={it}                     
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
