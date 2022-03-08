import { NavBar } from "./components/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CategoryPage from "./pages/CategoryPage";
import ItemDetailPage from "./pages/ItemDetailPage";
import CartPage from "./pages/CartPage";
import { CartProvider } from "./context/CartContext";
import ThankyouPage from "./pages/TankyouPage";
import NotFoundPage from "./pages/NotFoundPage";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="html">
        <CartProvider>
          <BrowserRouter>
            <NavBar />
            <Routes>npm
              <Route path="/fermento">
                <Route index element={<HomePage />} />
                <Route path="/fermento/item">
                  <Route path=":productId" element={<ItemDetailPage />} />
                </Route>
                <Route path="/fermento/cart" element={<CartPage />}></Route>
                <Route path="/fermento/category">
                  <Route path=":categoryId" element={<CategoryPage />} />
                </Route>
                <Route path="/fermento/thanks/:orderId" element={<ThankyouPage />} />
                <Route path="*" element={<NotFoundPage />} />
              </Route>
            </Routes>
            <Footer />
          </BrowserRouter>
        </CartProvider>
    </div>
  );
}

export default App;
