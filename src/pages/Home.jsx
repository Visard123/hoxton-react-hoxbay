import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((resp) => resp.json())
      .then((products) => setProducts(products));
    console.log(products);
  }, []);
  console.log(products);
  return (
    <main>
      <section className="products-container main-wrapper">
        <ul className="products-container__list">
          {/*<!-- Single item -->*/}

          {products.map((products) => (
            <li key={products.id}>
              <Link to={`/product/${products.id}`}>
                <article className="product-item">
                  <img src={products.image} alt={products.title} />
                  <h3>{products.title}</h3>
                </article>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
export default Home;
