import React from 'react'
import Item from './Item'
import {Row, Col} from 'react-bootstrap'

const ItemList = ({items,mostrarDetalle,itemSeleccionado}) => {
    
    return (
      
      <div>
        
        <Row>
        
            {items.map(it=> (
                 
            <Col>    
              <Item 
                    key={it.id}
                    item={it} 
                    mostrarDetalle={mostrarDetalle}
                    itemSeleccionado={itemSeleccionado}
              />
            </Col>
            )
          )}
      </Row>
      
      </div>
      
    )
 }
export default ItemList
