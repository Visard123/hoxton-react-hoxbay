import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Basket from "./pages/Basket";
import Categories from "./pages/Categories";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Category from "./pages/Category";
import { useEffect, useState } from "react";
function App() {
  const [basket, setBasket] = useState([]);

  function addToBasket(product) {
    const newProduct = { ...product, amount: 1 };
    const newBasket = [...basket];

    const findFunction = basket.findIndex((item) => item.id === product.id);
    if (findFunction !== -1) {
      newBasket[findFunction].amount++;
      setBasket(newBasket);
    } else {
      setBasket([...basket, newProduct]);
    }
  }

  return (
    <>
      <Header />
      <main>
        {
          <Routes>
            <Route path="/home" element={<Home />} />

            <Route
              path="/product/:id"
              element={<Product addToBasket={addToBasket} />}
            />
            <Route
              path="/basket"
              element={<Basket basket={basket} setBasket={setBasket} />}
            />
            <Route path="/categories" element={<Categories />} />
            <Route path="/category" element={<Category />} />
          </Routes>
        }
      </main>
    </>
  );
}

export default App;
