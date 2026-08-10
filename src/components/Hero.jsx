
// The Hero is the big welcome banner at the top of the home page.
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
          <a className="btn btn-primary" href="#menu">Order Now</a>
          <a className="btn btn-ghost" href="#menu">See Menu</a>
        </div>
      </div>
      {/* Right half - the picture */}
      <div className="hero-art">
        <img className="hero-icmage" src="/public/paneer.jpg" alt="Soft paneer cubes in a creamy tomato gravy" />
      </div>
    </section>
  );
}
export default Hero;