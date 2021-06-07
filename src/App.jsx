import ItemListContainer from "./components/Container/ItemListContainer";
import ItemCount from "./components/ItemCount/ItemCount";
import NavBar from "./components/NavBar/NavBar";


function App() {
  return (
    
    <div className="container-fluid">
        <NavBar />
        
        <ItemListContainer 
          prodnom="Tela Polar"
        />

        <ItemCount 
          stock={5}
          inicial={1}
        />
    </div>
  );
}

export default App;
