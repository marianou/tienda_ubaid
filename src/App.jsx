import ItemListContainer from "./components/Container/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";


function App() {
  return (
    
    <div className="container-fluid">
        <NavBar />
        <br/>
        <ItemListContainer 
          prodnom="Lista de productos"
        />
        <br/>
        
    </div>
  );
}

export default App;
