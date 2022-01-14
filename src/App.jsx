import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Basket from "./pages/Basket";
import Categories from "./pages/Categories";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Category from "./pages/Category";
function App() {
  return (
    <>
      <Header />
      <main>
        {
          <Routes>
            <Route path="Home" element={<Home />} />

            <Route path="Product" element={<Product />} />
            <Route path="Basket" element={<Basket />} />
            <Route path="Categories" element={<Categories />} />
            <Route path="Category" element={<Category />} />
          </Routes>
        }
      </main>
    </>
  );
}

export default App;
