import { useState } from "react";
import DropDown from "../models/DropDown";
import Button from "../models/Button";
import BlogsItem from "./BlogsItem";

const BlogsModel = (props) => {
  const [itemsToShow, setItemsToShow] = useState(4);
  const clickHandler = () => {
    setItemsToShow(itemsToShow + 6);
  };
  return (
    <div className="mb-8 w-screen">
      <div className="blog-header w-8/12 flex justify-between mx-auto header-section text-center">
        <div>
          <h1 className="text-3xl font-black">{props.title}</h1>
          <div className="text-left font-black blogs">
            ({props.data.length} Blogs, Showing{" "}
            {itemsToShow < props.data.length ? itemsToShow : props.data.length}{" "}
            of {props.data.length} Blogs)
          </div>
        </div>
        <div className="flex header-section">
          <DropDown title="Filter By Category" />
          <DropDown title="Sort By" />
        </div>
      </div>
      <div className="blog-container w-8/12 mx-auto grid grid-cols-blog my-8 gap-4">
        {props.data.slice(0, itemsToShow).map((item, index) => (
          //   <h1>Blog</h1>
          <BlogsItem key={index} data={item} />
        ))}
      </div>
      <div className="flex justify-center">
        <Button onClick={clickHandler}>Load More</Button>
      </div>
    </div>
  );
};
export default BlogsModel;
