const Button = (props) => {
  return (
    <button
      className="bg-cyan-700 px-3 py-1 rounded-lg mx-auto max-w-xs mb-8"
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};
export default Button;
