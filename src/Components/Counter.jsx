import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <h4>
        <button>
          <a href="#">count:{count}</a>
        </button>
      </h4>
      <button onClick={() => setCount(count + 1)}>decrement+ </button>
      <br />
      <br />

      <button onClick={() => setCount(count - 1)}>increment- </button>
      <br />
    </>
  );
};

export default Counter;
