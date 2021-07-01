import React, {useState} from "react";
import ItemListContainer from "./components/Container/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import ItemDetailContainer from "./components/Container/ItemDetailContainer";
import {BrowserRouter, Switch, Route } from 'react-router-dom'

function App() {


  
  const [items, setItems]=useState([]);
    
  return (
    
    <div className="container">
      <BrowserRouter>
            <NavBar />
                <br/>
              <Switch>
                  
                  <Route path="/item/:id">
                    <ItemDetailContainer                        
                        itemsel={items}
                    /> 
                  </Route>  
                                        
                  <Route exact path="/">                    
                    <ItemListContainer 
                      prodnom="Lista de productos"                      
                      setItems={setItems}
                    />
                  </Route>  
                
              </Switch> 
    </BrowserRouter>    
    </div>
    
  );
}

export default App;
