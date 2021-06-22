import React, {useState} from "react";
import ItemListContainer from "./components/Container/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import ItemDetailContainer from "./components/Container/ItemDetailContainer";


function App() {


  const [detalle, mostrarDetalle] = useState(false);
  const [items, itemSeleccionado]=useState([]);
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
              mostrarDetalle={mostrarDetalle}
              itemsel={items}
            /> :
          
          <ItemListContainer 
            prodnom="Lista de productos"
            mostrarDetalle={mostrarDetalle}
            itemSeleccionado={itemSeleccionado}
          />
        }
        
        
        

        
        
    </div>
  );
}

export default App;
