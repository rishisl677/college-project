

// The Menu page is the busiest page of the day.
// It remembers two things: the words typed in the search box,
// and which filters are switched on. Both are kept with useState.
import { useState } from "react";
import SearchBar from "../components/SearchBar.jsx";
import FilterBar from "../components/FilterBar.jsx";
import DishCard from "../components/DishCard.jsx";
import dishes from "../data/dishes.js";
function Menu(props) {
const [searchText, setSearchText] = useState("");
const [foodType, setFoodType] = useState("all");
const [maxPrice, setMaxPrice] = useState(300);
  // We start with the full list and remove the dishes that do not match.
  // A plain for-loop is used on purpose: it is easy to read out loud in class.
const visibleDishes = [];
for (let i = 0; i < dishes.length; i = i + 1) {
    const dish = dishes[i];
    // Rule 1 - the typed words must appear in the dish name.
    const nameInSmallLetters = dish.name.toLowerCase();
    const typedInSmallLetters = searchText.toLowerCase();
    let matchesSearch = false;
    if (nameInSmallLetters.includes(typedInSmallLetters)) {
matchesSearch = true;
    }
    // Rule 2 - veg / non-veg button.
    let matchesType = false;
    if (foodType === "all") {
      matchesType = true;
    }
    if (foodType === "veg" && dish.isVeg === true) {
      matchesType = true;
    }
    if (foodType === "nonveg" && dish.isVeg === false) {
      matchesType = true;
    }
    // Rule 3 - the price slider.
    let matchesPrice = false;
    if (dish.price <= maxPrice) {
      matchesPrice = true;
    }
     if (matchesSearch === true && matchesType === true && matchesPrice === true) {
      visibleDishes.push(dish);
    }
  }
  function handleReset() {
    setSearchText("");
    setFoodType("all");
    setMaxPrice(300);
  }
  return (
    <main className="menu-page">
      <section className="menu-section">
        <h2 className="section-title">Our Full Menu</h2>
        <p className="section-sub">
          Type a name, or use the buttons to narrow the list.
        </p>
        <SearchBar value={searchText} onChange={setSearchText} />
        <FilterBar
          foodType={foodType}
          maxPrice={maxPrice}
          onTypeChange={setFoodType}
          onPriceChange={setMaxPrice}
        />
        <p className="result-count">
          Showing {visibleDishes.length} of {dishes.length} dishes
        </p>
        <div className="dish-grid">
          {visibleDishes.map(function (dish) {
            return (
              <DishCard
                key={dish.id}
                dish={dish}
                name={dish.name}
                description={dish.description}
                price={dish.price}
                image={dish.image}
                isVeg={dish.isVeg}
                rating={dish.rating}
                onAddToCart={props.onAddToCart}
              />
            );
          })}
        </div>
        {/* When nothing matches we show a friendly line instead of an empty page. */}
        {visibleDishes.length === 0 && (
          <div className="empty-box">
            <p className="empty-title">No dish matched that.</p>
            <p className="empty-text">Try a shorter word, or clear the filters.</p>
            <button className="btn btn-ghost" onClick={handleReset}>
              Clear filters
            </button>
          </div>
        )}
      </section>
    </main>
  );
}
export default Menu;