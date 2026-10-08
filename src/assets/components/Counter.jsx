import { useState } from "react";

function Counter() {

  const [count, setCount] = useState(0);

  function dodac() {
    setCount(count + 1);
  }
  function dodacpiec() {
    setCount(count + 5)
  }
  function odjacpiec()
  {
    setCount(count - 5)
  }
  function odjac() {
    setCount(count - 1);
  }

  function reset() {
    setCount(0);
  }
  

  return (
    <div>
      <p>Licznik: {count}</p>

      <button onClick={dodac}>+</button>
      <button onClick={dodacpiec}>+5</button>
      <button onClick={odjac}>-</button>
      <button onClick={odjacpiec}>-5</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default Counter;