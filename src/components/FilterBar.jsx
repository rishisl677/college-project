

// FilterBar shows the three Veg / Non-Veg buttons and the price slider.
// Like SearchBar, it remembers nothing. It reports every click to the Menu page.
function FilterBar(props) {
  // A small helper that decides if a button should look "switched on".
  function buttonClass(name) {
    if (props.foodType === name) {
      return "filter-button filter-button-active";
    }
    return "filter-button";
  }
  function handlePriceChange(event) {
    props.onPriceChange(Number(event.target.value));
  }
  return (
    <div className="filter-bar">
      <div className="filter-group">
        <button
          className={buttonClass("all")}
          onClick={function () {
            props.onTypeChange("all");
          }}
        >
          All
        </button>
        <button
          className={buttonClass("veg")}
          onClick={function () {
            props.onTypeChange("veg");
          }}
        >
          Veg
        </button>
        <button
          className={buttonClass("nonveg")}
          onClick={function () {
            props.onTypeChange("nonveg");
          }}
        >
          Non-Veg
        </button>
      </div>
      <div className="filter-group">
        <label className="filter-label" htmlFor="price">
          Up to Rs. {props.maxPrice}
           </label>
        <input
          className="filter-range"
          id="price"
          type="range"
          min="90"
          max="300"
          step="10"
          value={props.maxPrice}
          onChange={handlePriceChange}
        />
      </div>
    </div>
  );
}
export default FilterBar;