import React, {useState} from "react";
import ItemListContainer from "./components/Container/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import ItemDetailContainer from "./components/Container/ItemDetailContainer";
import {BrowserRouter, Switch, Route } from 'react-router-dom'
import { CartProvider } from "./components/Context/CarContext.js";
import Cart from "./components/Container/Cart";

function App() {


  
  const [items, setItems]=useState([]);
  const titulo="Bienvenidos";

  return (
    
  <div className="container">
    <CartProvider>
        <BrowserRouter>
            <NavBar />
                <br/>
              <Switch>
                  <Route exact path="/item/:itemid">
                    <ItemDetailContainer                        
                        itemsel={items}
                    /> 
                  </Route>  
                                        
                  <Route exact path="/">                    
                    <ItemListContainer 
                      prodnom={titulo}                      
                      setItems={setItems}
                    />
                  </Route>

                  <Route exact path='/category/:category_id'>
                    <ItemListContainer 
                      prodnom={titulo}
                      setItems={setItems}
                    />
                  </Route>  

                  <Route exact path="/cart">                    
                    <Cart
                    />
                  </Route>  
                
              </Switch> 
        </BrowserRouter>    
    </CartProvider>
  </div>
   
    
  );
}

export default App;
