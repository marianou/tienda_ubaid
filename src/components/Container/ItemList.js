import Item from './Item'
import {Row, Col} from 'react-bootstrap'

const ItemList = ({items}) => {
    
    return (
      <Row>
            {items.map(it=>
            <Col>    
              <Item 
                    item={it} 
              />
            </Col>
          )}
      </Row>
    )
 }
export default ItemList
