import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [cssMode, setCssMode] = useState(false);
  const [name, setName] = useState();

  return (
    <>
      <div style={{ backgroundColor: cssMode ? "pink" : "white" }}>
        <h1>hello {name}</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            console.log(e);
            setName("jame");
          }}
        >
          <input
            type="text"
            onChange={(event) => setName(event.target.value)}
          />
          <input type="submit" />
        </form>
      </div>
      <br />
      <br />

      <button onClick={() => setCssMode(!cssMode)}>Change the css state</button>
      <div>
        <h3>hello state,my css state is {cssMode ? "true" : "false"}</h3>
      </div>
      <button>
        <a href="#">count:{count}</a>
      </button>
      <br />
      <br />

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
      <br />
    </>
  );
};

export default Counter;
