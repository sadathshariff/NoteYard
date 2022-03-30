export const Button = (props) => {
  const { name, btnclass } = props;
  const btnClassName = "btn " + btnclass;
  return (
    <>
      <button className={btnClassName} {...props}>
        {name}
      </button>
    </>
  );
};
