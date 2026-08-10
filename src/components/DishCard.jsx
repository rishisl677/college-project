// DishCard draws ONE dish box.
// It does not know any dish by itself. The details are handed to it as props.

function DishCard(props) {

let vegLabel = "Non-Veg";
  let vegClass = "badge badge-nonveg";

  if (props.isVeg === true) {
    vegLabel = "Veg";
    vegClass = "badge badge-veg";
  }

  return (
    <div className="dish-card">

      {/* Picture area */}
      <div className="dish-image">
        <img src={props.image} alt={props.name} />
        <span className={vegClass}>{vegLabel}</span>
      </div>

      {/* Text area */}
      <div className="dish-info">
        <h3>{props.name}</h3>
        <p>{props.rating} / 5</p>
        <p>{props.description}</p>
        <p>Rs. {props.price}</p>

        <button className="cart " onClick={props.increaseitem} >Add to Cart</button>
      </div>

    </div>
  );
}

export default DishCard;