

// The Cart page shows every dish the user picked, with a small
// minus / plus counter, a subtotal, and the Checkout button.
// It keeps NOTHING of its own except the "order placed" message.
// The real cart list lives in App.jsx and arrives here as a prop.
import { useState } from "react";
import { Link } from "react-router-dom";
function Cart(props) {
  const [orderPlaced, setOrderPlaced] = useState(false);
  // Work out the money above the return, so the JSX stays readable.
  let subtotal = 0;
  let totalPlates = 0;
  for (let i = 0; i < props.cartItems.length; i = i + 1) {
    const item = props.cartItems[i];
    subtotal = subtotal + item.price * item.quantity;
    totalPlates = totalPlates + item.quantity;
  }
  const deliveryFee = 40;
  let grandTotal = subtotal;
  if (subtotal > 0) {
    grandTotal = subtotal + deliveryFee;
  }
  function handleCheckout() {
    setOrderPlaced(true);
    props.onClearCart();
  }
  // Screen 1 - the order was just placed.
  if (orderPlaced === true) {
    return (
      <main className="cart-page">
        <div className="empty-box">
          <p className="empty-title">Order placed. Thank you!</p>
          <p className="empty-text">
            Your food is being prepared and will reach you in about 30 minutes.
          </p>
          <Link className="btn btn-primary" to="/menu">
            Order something else
          </Link>
        </div>
      </main>
    );
  }
   // Screen 2 - the cart is empty.
  if (props.cartItems.length === 0) {
    return (
      <main className="cart-page">
        <h2 className="section-title">Your Cart</h2>
        <div className="empty-box">
          <p className="empty-title">Your cart is empty.</p>
          <p className="empty-text">Add a dish from the menu and it will show up here.</p>
          <Link className="btn btn-primary" to="/menu">
            Go to the menu
          </Link>
        </div>
      </main>
    );
  }
  // Screen 3 - the normal cart.
  return (
    <main className="cart-page">
      <h2 className="section-title">Your Cart</h2>
      <p className="section-sub">
        {totalPlates} plate(s) from {props.cartItems.length} dish(es).
      </p>
      <div className="cart-layout">
        <div className="cart-lines">
          {props.cartItems.map(function (item) {
            return (
              <div className="cart-line" key={item.id}>
                <img className="cart-thumb" src={item.image} alt={item.name} />
                <div className="cart-info">
                  <h3 className="cart-name">{item.name}</h3>
                  <p className="cart-unit">Rs. {item.price} each</p>
                  <button
                    className="cart-remove"
                    onClick={function () {
                      props.onRemoveItem(item.id);
                    }}
                  >
                    Remove
                  </button>
                </div>
                {/* The minus / plus counter. Each button calls the same
                    function in App, once with -1 and once with +1. */}
                <div className="qty-box">
                  <button
                    className="qty-btn"
                    aria-label={"Decrease " + item.name}
                    onClick={function () {
                      props.onChangeQuantity(item.id, -1);
                    }}
                  >
                    
                  </button>
                  <span className="qty-value">{item.quantity}</span>
                  <button
                    className="qty-btn"
                    aria-label={"Increase " + item.name}
                    onClick={function () {
                      props.onChangeQuantity(item.id, 1);
                    }}
                  >
                    +
                  </button>
                </div>
                <div className="cart-line-total">Rs. {item.price * item.quantity}</div>
              </div>
            );
             })}
          <button className="btn btn-ghost" onClick={props.onClearCart}>
            Clear cart
          </button>
        </div>
        {/* The money box on the right. */}
        <aside className="cart-summary">
          <h3 className="summary-title">Bill Details</h3>
          <div className="summary-row">
            <span>Item subtotal</span>
            <span className="summary-value">Rs. {subtotal}</span>
          </div>
          <div className="summary-row">
            <span>Delivery</span>
            <span className="summary-value">Rs. {deliveryFee}</span>
          </div>
          <div className="summary-row summary-total">
            <span>To pay</span>
            <span className="summary-value">Rs. {grandTotal}</span>
          </div>
          <button className="btn btn-primary btn-block" onClick={handleCheckout}>
            Proceed to Checkout
          </button>
          <Link className="summary-link" to="/menu">
            Add more dishes
          </Link>
        </aside>
      </div>
    </main>
  );
}
export default Cart;