import Navbar from "../components/Navbar.jsx";
import Hero from "../components/Hero.jsx";
import DishCard from "../components/DishCard.jsx";
import Footer from "../components/Footer.jsx";
import dishes from "../data/dishes.js";

function Home(props) {
  return (
    <div className="page">

      <Navbar
        cart={props.cart}
        increase={props.increase}
        decrease={props.decrease}
      />

      <Hero />

      <section className="menu-section" id="menu">

        <h2 className="section-title">
          Today's Popular Dishes
        </h2>

        <p className="section-sub">
          Six dishes our customers order again and again.
        </p>

        <div className="dish-grid">

          {dishes.map(function (dish) {
            return (
              <DishCard
                key={dish.id}
                name={dish.name}
                description={dish.description}
                price={dish.price}
                image={dish.image}
                isVeg={dish.isVeg}
                rating={dish.rating}
                increaseitem={props.increase}
              />
            );
          })}

        </div>

      </section>

      <Footer />

    </div>
  );
}

export default Home;