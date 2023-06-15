import Header from "./components/header/Header";

import "./App.css";
import Carousel from "./components/categories/Carousel";
import Blogs from "./components/Blogs/Blogs";
import BlogsModel from "./components/MostRead/BlogsModel";
import Recommended from "./components/Blogs/Recommended";
import CardContainer from "./components/Profile/CardContainer";

const BlogData = [
  {
    image: "/images/most-read.jfif",
    category: "Food & Beverages",
    date: "16 March 2023",
    title: "Delicious Food",
    description:
      "Homemade hot cross burns that are so soft, fluffy + slightly sweet. An absolute must for Easter - they'll disappear so fast!",
    name: "Author's Name",
  },
  {
    image: "/images/most-read.jfif",
    category: "Food & Beverages",
    date: "16 March 2023",
    title: "Delicious Food",
    description:
      "Homemade hot cross burns that are so soft, fluffy + slightly sweet. An absolute must for Easter - they'll disappear so fast!",
    name: "Author's Name",
  },
  {
    image: "/images/most-read.jfif",
    category: "Food & Beverages",
    date: "16 March 2023",
    title: "Delicious Food",
    description:
      "Homemade hot cross burns that are so soft, fluffy + slightly sweet. An absolute must for Easter - they'll disappear so fast!",
    name: "Author's Name",
  },
  {
    image: "/images/most-read.jfif",
    category: "Food & Beverages",
    date: "16 March 2023",
    title: "Delicious Food",
    description:
      "Homemade hot cross burns that are so soft, fluffy + slightly sweet. An absolute must for Easter - they'll disappear so fast!",
    name: "Author's Name",
  },
  {
    image: "/images/most-read.jfif",
    category: "Food & Beverages",
    date: "16 March 2023",
    title: "Delicious Food",
    description:
      "Homemade hot cross burns that are so soft, fluffy + slightly sweet. An absolute must for Easter - they'll disappear so fast!",
    name: "Author's Name",
  },
  {
    image: "/images/most-read.jfif",
    category: "Food & Beverages",
    date: "16 March 2023",
    title: "Delicious Food",
    description:
      "Homemade hot cross burns that are so soft, fluffy + slightly sweet. An absolute must for Easter - they'll disappear so fast!",
    name: "Author's Name",
  },
];

function App() {
  return (
    <div className="overflow-hidden">
      <Header />
      <Carousel />
      <Blogs />
      <BlogsModel data={BlogData} title="Most Read Blogs" />
      <BlogsModel data={BlogData} title="Trending Blogs" />
      <Recommended />
      <CardContainer />
    </div>
  );
}

export default App;
