import React, {useState} from "react";
import ItemListContainer from "./components/Container/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import ItemDetailContainer from "./components/Container/ItemDetailContainer";


function App() {


  const [detalle, mostrarDetalle] = useState(false);

  //if(detalle){
  //  mostrarDetalle(false);
  //  return;
  //}
  console.log({detalle});
  return (
    
    <div className="container-fluid">
        <NavBar />
        <br/>
        { detalle ?  
          <ItemDetailContainer
              mostrarDetalle={mostrarDetalle}
            /> :
          
          <ItemListContainer 
            prodnom="Lista de productos"
            mostrarDetalle={mostrarDetalle}
          />
      }
        
        
        

        
        
    </div>
  );
}

export default App;
