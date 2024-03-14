const User = (props) => {
  console.log(props);

  return (
    <>
      <h3>
        Hi my name is{props.name} age{props.age}
      </h3>
    </>
  );
};

export default User;
