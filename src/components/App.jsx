import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  let Counter = () => {
    return <h1>{count}</h1>;
  };

  let Button = () => {
    return (
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +
      </button>
    );
  };
  return (
    <div>
      <Button />
      <Counter />
    </div>
  );
}

export default App;
