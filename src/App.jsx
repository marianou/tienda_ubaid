import ItemListContainer from "./components/Container/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";


function App() {
  return (
    
    <div className="container-fluid">
        <NavBar />
        
        <ItemListContainer 
          prodnom="Tela Polar"
        />
    </div>
  );
}

export default App;
