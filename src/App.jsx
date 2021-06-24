import React, {useState} from "react";
import ItemListContainer from "./components/Container/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import ItemDetailContainer from "./components/Container/ItemDetailContainer";


function App() {


  const [detalle, setDetalle] = useState(false);
  const [items, setItems]=useState([]);
  //if(detalle){
  //  mostrarDetalle(false);
  //  return;
  //}

  return (
    
    <div className="container-fluid">
        <NavBar />
        <br/>
        {detalle ? 
          <ItemDetailContainer
              setDetalle={setDetalle}
              itemsel={items}
            /> :
          
          <ItemListContainer 
            prodnom="Lista de productos"
            setDetalle={setDetalle}
            setItems={setItems}
          />
        }
        
    </div>
  );
}

export default App;
