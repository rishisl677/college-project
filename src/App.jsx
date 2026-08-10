import { useState } from "react";
import Home from "./pages/Home.jsx";

function App() {
  const [num, setnum] = useState(0);

  const increasenum = () => {
    setnum((prev) => prev + 1);
  };

  const decreasenum = () => {
    setnum((prev) => prev - 1);
  };

  return (
    <Home
      cart={num}
      increase={increasenum}
      decrease={decreasenum}
    />
  );
}

export default App;