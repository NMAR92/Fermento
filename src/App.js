import { NavBar } from "./components/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CategoryPage from "./pages/CategoryPage";
import ItemDetailPage from "./pages/ItemDetailPage";
import CartPage from "./pages/CartPage";
import { CartProvider } from "./context/CartContext";
import ThankyouPage from "./pages/TankyouPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <div>
      <CartProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/">
              <Route index element={<HomePage />} />
              <Route path="item">
                <Route path=":productId" element={<ItemDetailPage />} />
              </Route>
              <Route path="cart" element={<CartPage />}></Route>
              <Route path="category">
                <Route path=":categoryId" element={<CategoryPage />} />
              </Route>
              <Route path="thanks/:orderId" element={<ThankyouPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
