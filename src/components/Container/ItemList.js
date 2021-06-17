import Item from './Item'
import {Row, Col} from 'react-bootstrap'

const ItemList = ({items}) => {
    
    return (
      <div>
      <Row>
            {items.map(it=>
            <Col>    
              <Item 
                    item={it} 
              />
            </Col>
          )}
      </Row>
      </div>
    )
 }
export default ItemList
