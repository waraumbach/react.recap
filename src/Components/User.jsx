const User = (props) => {
  console.log(props);

  return (
    <>
      <h3>
        {props.name} {props.age}
      </h3>
    </>
  );
};

export default User;
