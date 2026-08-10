

// The About section tells visitors who we are.
// It is a normal component, exactly like Hero - only the words are different.
// The id="about" is important: the Navbar link href="#about" jumps here.
function About() {
  return (
    <section className="about-section" id="about">
      <h2 className="section-title">Why People Order From Us</h2>
      <p className="section-sub">
        FoodieHub started in one small kitchen. Today we work with 40 kitchens
        across the city and deliver around 1,200 meals every day.
      </p>
      {/* Three simple boxes. Later we can build these from a list too. */}
      <div className="about-grid">
        <div className="about-card">
          <div className="about-icon">30</div>
          <h3 className="about-heading">Minutes average</h3>
          <p className="about-text">
            Food leaves the kitchen the moment it is ready, not when the driver
            feels like it.
          </p>
        </div>
        <div className="about-card">
          <div className="about-icon">40</div>
          <h3 className="about-heading">Partner kitchens</h3>
          <p className="about-text">
            Every kitchen is visited by our team before it goes live on the app.
          </p>
        </div>
        <div className="about-card">
          <div className="about-icon">4.8</div>
          <h3 className="about-heading">Average rating</h3>
          <p className="about-text">
            Collected from more than 9,000 orders in the last six months.
          </p>
        </div>
      </div>
    </section>
  );
}
export default About;