import { NavBar } from "./components/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CervezaPage from "./pages/CervezaPage";
import ProbioticoPage from "./pages/ProbioticoPage";
import ItemDetailPage from "./pages/ItemDetailPage";


function App() {
  return (
    <div>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/">
           <Route index element={<HomePage />} /> 
           <Route path="category">
            <Route path="1" element={<CervezaPage />} />
            <Route path="2" element={<ProbioticoPage />} />
          </Route>
          <Route path="item">
            <Route path=":productId" element={<ItemDetailPage />} />
          </Route> 
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
