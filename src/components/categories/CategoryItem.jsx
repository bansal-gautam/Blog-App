const CategoryItem = (props) => {
  return (
    <div className="rounded border-2 border-gray-400 min-w-max mx-2">
      <img src={props.src} />
      <h2 className="py-1 text-center">{props.title}</h2>
    </div>
  );
};
export default CategoryItem;
