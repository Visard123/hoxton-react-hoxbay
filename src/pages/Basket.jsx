function Basket(props) {
  let totalValue = 0;
  for (let product of props.basket) {
    totalValue += product.price * product.amount;
  }

  return (
    <main>
      <section className="basket-container">
        <h2>Your Basket</h2>
        <ul>
          {/*<!-- Basket Item -->*/}
          {props.basket.map((product) => (
            <li>
              <article className="basket-container__item">
                <img src={product.image} alt={product.title} width="90" />
                <p>{product.title}</p>
                <p>
                  Qty:
                  <select
                    value={product.amount}
                    onChange={(event) => {
                      let newBasket = [...props.basket];
                      const productIndex = props.basket.findIndex(
                        (item) => item.id === product.id
                      );
                      newBasket[productIndex].amount = event.target.value;
                      props.setBasket(newBasket);
                    }}
                  >
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select>
                </p>
                {/*<!-- The item total is calculated using the Qty selected value -->*/}
                <p>Item total: £{product.price * product.amount}</p>
              </article>
            </li>
          ))}
          {/*<!--  -->*/}
        </ul>
        {/*<!-- Basket total is calculated using each item's total from above -->*/}
        <h3>Your total:£{totalValue}</h3>
      </section>
    </main>
  );
}
export default Basket;
