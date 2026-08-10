

// SearchBar is only a text box. It keeps nothing by itself.
// The typed words live in the Menu page, and are passed in as props.value.
// When the user types, we tell the Menu page through props.onChange.
// A box like this is called a "controlled input": React owns the text.
function SearchBar(props) {
  function handleTyping(event) {
    // event.target.value is whatever is inside the box right now.
    props.onChange(event.target.value);
  }
  return (
    <div className="search-box">
      <input
        className="search-input"
        type="text"
        value={props.value}
        onChange={handleTyping}
        placeholder="Search for a dish, e.g. biryani"
      />
    </div>
  );
}
export default SearchBar;