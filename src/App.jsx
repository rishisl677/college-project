import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import Menu from "./pages/Menu.jsx";
import Cart from "./pages/Cart.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
// This helper runs once, before the first screen is drawn.
// It reads the cart we saved in the browser's little notebook (localStorage).
// If nothing was saved, it gives back an empty list.
function readSavedCart() {
  const saved = localStorage.getItem("foodiehub-cart-items");
  if (saved === null) {
    return [];
  }
  const parsed = JSON.parse(saved);
  if (Array.isArray(parsed) === false) {
    return [];
  }
  return parsed;
}
function App() {
  // cartItems is a LIST. Every item looks like:
  // { id: 1, name: "Paneer Butter Masala", price: 220, image: "...", quantity: 2 }
  const [cartItems, setCartItems] = useState(readSavedCart);
  // After the screen is drawn, save the list. Runs again whenever the list changes.
  useEffect(
    function () {
      localStorage.setItem("foodiehub-cart-items", JSON.stringify(cartItems));
    },
    [cartItems]
  );
  // Total number of plates, used by the cart badge in the Navbar
   let cartCount = 0;
  for (let i = 0; i < cartItems.length; i = i + 1) {
    cartCount = cartCount + cartItems[i].quantity;
  }
  // A dish card calls this. If the dish is already in the cart we only
  // raise its quantity, otherwise we add a fresh line.
  function handleAddToCart(dish) {
    const newItems = [];
    let alreadyInCart = false;
    for (let i = 0; i < cartItems.length; i = i + 1) {
      const item = cartItems[i];
      if (item.id === dish.id) {
        alreadyInCart = true;
        newItems.push({
          id: item.id,
          name: item.name,
          price: item.price,
          image: item.image,
          quantity: item.quantity + 1,
        });
      } else {
        newItems.push(item);
      }
    }
    if (alreadyInCart === false) {
      newItems.push({
        id: dish.id,
        name: dish.name,
        price: dish.price,
        image: dish.image,
        quantity: 1,
      });
    }
    setCartItems(newItems);
  }
  // The + and - buttons on the Cart page both come here.
  // change is +1 or -1. When a quantity reaches 0 the line is dropped.
  function handleChangeQuantity(dishId, change) {
    const newItems = [];
    for (let i = 0; i < cartItems.length; i = i + 1) {
      const item = cartItems[i];
      if (item.id === dishId) {
        const newQuantity = item.quantity + change;
        if (newQuantity > 0) {
          newItems.push({
            id: item.id,
            name: item.name,
            price: item.price,
            image: item.image,
            quantity: newQuantity,
          });
        }
      } else {
        newItems.push(item);
      }
    }
    setCartItems(newItems);
  }
  // The Remove link on a cart line.
  function handleRemoveItem(dishId) {
    const newItems = [];
    for (let i = 0; i < cartItems.length; i = i + 1) {
      if (cartItems[i].id !== dishId) {
        newItems.push(cartItems[i]);
         }
    }
    setCartItems(newItems);
  }
  function handleClearCart() {
    setCartItems([]);
  }
  return (
    <div className="page">
      {/* The Navbar sits outside Routes, so it stays on every page. */}
      <Navbar cartCount={cartCount} />
      {/* Only ONE of these lines is shown at a time - whichever matches the address. */}
      <Routes>
        <Route path="/" element={<Home onAddToCart={handleAddToCart} />} />
        <Route path="/menu" element={<Menu onAddToCart={handleAddToCart} />} />
        <Route
          path="/cart"
          element={
            <Cart
              cartItems={cartItems}
              onChangeQuantity={handleChangeQuantity}
              onRemoveItem={handleRemoveItem}
              onClearCart={handleClearCart}
            />
          }
        />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </div>
  );
}
export default App;