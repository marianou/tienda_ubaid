import React, {useState} from "react";
import ItemListContainer from "./components/Container/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import ItemDetailContainer from "./components/Container/ItemDetailContainer";
import {BrowserRouter, Switch, Route } from 'react-router-dom'

function App() {


  const [detalle, setDetalle] = useState(false);
  const [items, setItems]=useState([]);
  //if(detalle){
  //  mostrarDetalle(false);
  //  return;
  //}
  
  return (
    
    <div className="container">
      <BrowserRouter>
            <NavBar />
                <br/>
              <Switch>
                { 
                  detalle ? 
                  
                  <Route path="/item/:id">
                    <ItemDetailContainer
                        setDetalle={setDetalle}
                        itemsel={items}
                      /> 
                  </Route>  
                    :
                    
                  <Route exact path="/">
                    
                    <ItemListContainer 
                      prodnom="Lista de productos"
                      setDetalle={setDetalle}
                      setItems={setItems}
                    />
                  </Route>  
                }
              </Switch> 
    </BrowserRouter>    
    </div>
    
  );
}

export default App;
