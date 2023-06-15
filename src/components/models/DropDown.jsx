const DropDown = (props) => {
  return (
    <select
      className="mx-2 pl-2 pr-4 border-2 rounded-lg border-gray-600 w-44 max-h-8"
      defaultValue={props.title}
    >
      <option value={props.title} disabled>
        {props.title}
      </option>
      {props.data &&
        props.data.map((item, index) => {
          return <option>{item.title}</option>;
        })}
    </select>
  );
};
export default DropDown;
