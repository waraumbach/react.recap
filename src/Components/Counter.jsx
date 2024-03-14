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
      <button onClick={() => setCount(count + 1)}>decrement+1 </button>
      <br />
      <br />
      <button onClick={() => setCount(count + 10)}>decrement+10 </button>
      <br />
      <br />
      <button onClick={() => setCount(count - 1)}>increment-1 </button>
      <br />
      <br />
      <button onClick={() => setCount(count - 10)}>increment-10 </button>
    </>
  );
};

export default Counter;
