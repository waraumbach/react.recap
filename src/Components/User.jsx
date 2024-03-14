const User = (props) => {
  console.log(props);
  const myUsers = [
    {
      name: "John",
      age: 20,
    },
    {
      name: "Jame",
      age: 25,
    },

    {
      name: "Jane",
      age: 27,
    },
  ];

  return (
    <>
      <h3>
        Hi my name is{props.name} age{props.age}
      </h3>
      {myUsers.map((user) => {
        return <user name={user.name} age={user.age} />;
      })}
    </>
  );
};

export default User;
