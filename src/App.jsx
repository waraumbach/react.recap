import "./App.css";
import User from "./Components/User";

function App() {
  let appName = "Wara";
  let myGreeting = "Sawasdee ka";
  let home = "thailand";
  return (
    <>
      <h1> I am {appName}</h1>
      <h2>{myGreeting}</h2>
      <p> i am from {home}</p>
      <img
        src="https://cdn.pixabay.com/photo/2022/06/18/16/55/cute-7270285_1280.png"
        alt="cat"
      />
      <br />
      <button>
        <a href="#">Click me</a>
      </button>

      <User name="John" age="20" />
      <User name="Jame" age="25" />
      <User name="Jane" age="27" />
    </>
  );
}

export default App;
