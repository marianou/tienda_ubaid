import React, {useState} from "react";
import ItemListContainer from "./components/Container/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import ItemDetailContainer from "./components/Container/ItemDetailContainer";
import {BrowserRouter, Switch, Route } from 'react-router-dom'
import { CartProvider } from "./components/Context/CarContext.js";

function App() {


  
  const [items, setItems]=useState([]);
    
  return (
    
  <div className="container">
    <CartProvider>
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

                  <Route exact path='/category/:category_id'>
                    <ItemListContainer 
                      prodnom="Lista de productos"                      
                      setItems={setItems}
                    />
                  </Route>  
                    
                
              </Switch> 
        </BrowserRouter>    
    </CartProvider>
  </div>
   
    
  );
}

export default App;
