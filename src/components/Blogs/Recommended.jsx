import DropDown from "../models/DropDown";
import BlogItem from "./BlogItem";
import blogData from "./data";

const Recommended = () => {
  return (
    <div className="w-9/12 mx-auto mb-8">
      <div className="flex justify-between mb-8">
        <h1 className="text-3xl font-black">Recommended Blogs</h1>
        <div className="flex header-section flex-1 justify-around">
          <DropDown title="Filter By Category" />
          <DropDown title="Sort By" />
        </div>
      </div>
      <div className="flex overflow-x-scroll scrollable-element gap-4">
        {blogData.map((item, index) => (
          <BlogItem data={item} key={index} className="recommended" />
        ))}
      </div>
    </div>
  );
};
export default Recommended;
