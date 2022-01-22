import "./components/ItemDetailContainer/ItemDetailContainer.css";
import { NavBar } from "./components/NavBar";
import ItemDetailContainer from "./components/ItemDetailContainer"
// import { Itemlistcontainer } from "./components/Itemlistcontainer";


function App() {
  return (
    <div className="Itemlistcontainer">
      <NavBar />
      <br></br>
      <ItemDetailContainer/>
      {/* <Itemlistcontainer/> */}
      <br></br>
    </div>
  );
}

export default App;
