import ItemListContainer from "./components/Container/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";


function App() {
  return (
    
    <div className="container-fluid">
        <NavBar />
        
        <ItemListContainer 
          prodnom="Lista de productos"
        />
        
    </div>
  );
}

export default App;
