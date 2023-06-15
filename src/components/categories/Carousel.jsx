import Button from "../models/Button";
import CategoryItem from "./CategoryItem";
import data from "./data";

const Carousel = () => {
  return (
    <div className="flex flex-col">
      <div className="flex w-9/12 mx-auto overflow-x-scroll my-8 scrollable-element">
        {data.map((item, index) => (
          <CategoryItem key={index} title={item.title} src={item.image} />
        ))}
      </div>
      <Button>Explore All Blog Categories</Button>
    </div>
  );
};
export default Carousel;
