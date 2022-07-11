import { useState } from "react";
import "./App.css";
import { Button } from "./Components/Button";
import { Pagination } from "./Components/Pagination";
import { useCounter } from "./hooks/useCounter";

function App() {
  const [colorScheme, setColorScheme] = useState("white");
  const [variant, setVariant] = useState(["solid", "ghost", "outline"]);

  const [total,setTotal] = useState([1, 2, 3, 4, 5, 6, 7]);
  const [page, setPage] = useState(5);

  const onPageChange = () => {
    console.log("click");
    setPage((prev) => prev + 1);
  };
  /* 
  1. Implement only the hook functionality inside hooks/useCounter.js
  2. Create the custom components, inside the respective files of Button.jsx and Pagination.jsx
  3. The application should function properly after the implimentation of hooks and Custom components
  */
  const { count, incCount, decCount } = useCounter({
    initialValue: 10,
    minValue: 5,
    maxValue: 15,
  });
  console.log(decCount);
  return (
    <div className="App">
      
      {/* <h3>Value: {count}</h3>
      <button onClick={() => incCount()}>Increment</button>
      <button onClick={() => incCount(3)}>Increment 3</button>
      <button onClick={() => decCount(2)}>Decrement 2</button>
      <button onClick={() => decCount(4)}>Decrement 4</button> */}

      <br />
      {/* You can pass the required props as mentioned in the questions to
      check if the components are working properly */}
      <Button colorScheme={colorScheme} variant={variant} size="md" />
      <br />
      <Pagination total={total} onPageChange={onPageChange} />
    </div>
  );
}

export default App;
