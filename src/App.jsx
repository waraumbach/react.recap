import "./App.css";
import User from "./Components/User";

function App() {
  let appName = "Wara";
  let myGreeting = "Sawasdee ka";
  let home = "thailand";

  const myUsers = [
    {
      name: "John",
      age: "20 years",
    },
    {
      name: "Jame",
      age: "25 years",
    },

    {
      name: "Jane",
      age: "27 years",
    },
  ];

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
        <a href="#" target="_blank">
          Click me
        </a>
      </button>
      <User />

      {myUsers.map((user) => {
        return <User name={user.name} age={user.age} />;
      })}
    </>
  );
}

export default App;
