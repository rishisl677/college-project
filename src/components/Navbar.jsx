// The Navbar is the top strip of the website: logo on the left, links on the right.
// It looks the same on every page, so we keep it in its own file and reuse it.
function Navbar(props) {
  return (
    <header className="navbar">
      <div className="navbar-inner">
        {/* Left side - our brand name */}
        <a className="logo" href="#home">
          <span className="logo-mark">F</span>
          <span className="logo-text">
            Foodie<span className="logo-accent">Hub</span>
          </span>
        </a>
        {/* Middle - the menu links */}
        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#menu">Menu</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>

        {/* Right side - the cart button.
            On Day 6 this number will start changing when we click Add to Cart. */}
        <button className="cart-button">
          Cart <span className="cart-count">{props.cart}</span>
        </button>
      </div>
    </header>
  );
}
export default Navbar;