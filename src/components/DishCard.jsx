

// DishCard draws ONE dish box.
// It does not know any dish by itself. The details are handed to it as props.
// New today: props.onAddToCart is a FUNCTION handed down from App.
// The card does not know what the function does - it only calls it on click.
function DishCard(props) {
  // The card does not know what happens to the dish. It only hands the
  // whole dish object back to App through the function it was given.
  function handleAddClick() {
    props.onAddToCart(props.dish);
  }
  // We work out the green / red label here, above the return,
  // so that the JSX below stays easy to read.
  let vegLabel = "Non-Veg";
  let vegClass = "badge badge-nonveg";
  if (props.isVeg === true) {
    vegLabel = "Veg";
    vegClass = "badge badge-veg";
  }
  return (
    <article className="dish-card">
      {/* Picture area */}
      <div className="dish-image">
        <img src={props.image} alt={props.name} />
        <span className={vegClass}>{vegLabel}</span>
      </div>
      {/* Text area */}
      <div className="dish-body">
        <div className="dish-top">
          <h3 className="dish-name">{props.name}</h3>
          <span className="dish-rating">{props.rating} / 5</span>
        </div>
        <p className="dish-desc">{props.description}</p>
        <div className="dish-bottom">
          <span className="dish-price">Rs. {props.price}</span>
          {/* onClick needs the NAME of a function, not a call.
           onClick={handleAddClick}  is right.
              onClick={handleAddClick()} would run it immediately - wrong. */}
          <button className="btn-small" onClick={handleAddClick}>
            Add to Cart
          </button>
        </div>
      </div>
    </article>
  );
}
export default DishCard;