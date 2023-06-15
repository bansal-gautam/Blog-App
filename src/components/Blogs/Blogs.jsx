import Button from "../models/Button";
import DropDown from "../models/DropDown";
import BlogItem from "./BlogItem";
import blogData from "./data";
import { useState } from "react";

const Blogs = () => {
  const [itemsToShow, setItemsToShow] = useState(6);
  const clickHandler = () => {
    setItemsToShow(itemsToShow + 6);
  };

  return (
    <div className="mb-8 w-screen">
      <div className="blog-header w-9/12 flex justify-between mx-auto header-section text-center">
        <div>
          <h1 className="text-3xl font-black">LATEST BLOGS - ALL CATEGORIES</h1>
          <div className="text-left font-black blogs">
            ({blogData.length} Blogs)
          </div>
        </div>
        <div className="flex header-section">
          <DropDown title="Filter By Author" />
          <DropDown title="Filter By Category" />
          <DropDown title="Sort By" />
        </div>
      </div>
      <div className="w-9/12 mx-auto grid grid-cols-3 my-2">
        <div className="mx-auto font-semibold text-lg">Filter By Author: All</div>
        <div className="mx-auto font-semibold text-lg">Filter By Category: All</div>
        <div className="mx-auto font-semibold text-lg">Sort Applied: Show All</div>
      </div>
      <div className="blog-container w-9/12 mx-auto grid grid-cols-blogs my-8 gap-4">
        {blogData.slice(0, itemsToShow).map((item, index) => (
          <BlogItem key={index} data={item} />
        ))}
      </div>
      <div className="flex justify-center">
        <Button onClick={clickHandler}>Load More</Button>
      </div>
    </div>
  );
};
export default Blogs;
