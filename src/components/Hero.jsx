

// The Hero is the big welcome banner at the top of the home page.
// Today the two buttons become real links that move to the Menu page.
import { Link } from "react-router-dom";
function Hero() {
  return (
    <section className="hero" id="home">
      {/* Left half - the words */}
      <div className="hero-text">
        <p className="hero-tag">Fresh - Fast - Delivered</p>
        <h1 className="hero-title">
          Hungry? Your favourite food is
          <span className="hero-accent"> 30 minutes </span>
          away.
        </h1>
        <p className="hero-sub">
          Order from the best kitchens in your city. Hot food, honest prices,
          and no waiting on phone calls.
        </p>
        <div className="hero-buttons">
          <Link className="btn btn-primary" to="/menu">Order Now</Link>
          <Link className="btn btn-ghost" to="/menu">See Menu</Link>
        </div>
      </div>
      {/* Right half - the picture */}
      <div className="hero-art">
        <img className="hero-image" src="Images/paneer.jpg" alt="Soft paneer cubes in a creamy tomato gravy" />
      </div>
    </section>
  );
}
export default Hero;