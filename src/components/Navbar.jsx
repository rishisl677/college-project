

// The Navbar is the top strip of the website: logo on the left, links on the right.
// Two changes today:
//   1. <a href> becomes <Link to> so the page changes without reloading.
//   2. The cart number is no longer 0 forever - it arrives as a prop from App.
import { Link, NavLink } from "react-router-dom";
function Navbar(props) {
  return (
    <header className="navbar">
      <div className="navbar-inner">
        {/* Left side - our brand name */}
        <Link className="logo" to="/">
          <span className="logo-mark">F</span>
          <span className="logo-text">
            Foodie<span className="logo-accent">Hub</span>
          </span>
        </Link>
        {/* Middle - the menu links.
            NavLink is the same as Link, but it also marks the current page. */}
        <nav className="nav-links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/menu">Menu</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
        {/* Right side - the cart button. It is a Link now, so clicking it
            opens the /cart page. props.cartCount is the total from App. */}
        <Link className="cart-button" to="/cart">
          Cart <span className="cart-count">{props.cartCount}</span>
        </Link>
      </div>
    </header>
  );
}
export default Navbar;