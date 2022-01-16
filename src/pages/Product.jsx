import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Product(props) {
  const params = useParams();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3003/products/${params.id}`)
      .then((resp) => resp.json())
      .then((product) => setProduct(product));
  }, []);

  return (
    <main>
      <section className="product-detail main-wrapper">
        <img src={product.image} alt={product.title} />
        <div className="product-detail__side">
          {" "}
          {/* (style="border-color: var(--yellow);") */}
          <h3></h3>
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <p>{product.price}</p>
          {/*<!-- Once you click in this button, the user should be redirected to the Basket page -->*/}
          <button onClick={() => props.addToBasket(product)}>
            Add to basket
          </button>
        </div>
      </section>
    </main>
  );
}
export default Product;
