const BlogItem = ({ data, className }) => {
  return (
    <div
      className={`border-2 border-gray-600 rounded-lg cursor-pointer ${
        className === "recommended" ? "min-w-100" : ""
      }`}
    >
      <img src={data.image} className={`w-full`} />
      <div className="px-2">
        <div className="flex mt-2">
          <p className="mr-3 bg-yellow-400 py-1 px-2 rounded">
            {data.category}
          </p>
          <p className="py-1 font-medium">{data.date}</p>
        </div>
        <h1 className="text-2xl font-bold text-cyan-600 my-3">{data.title}</h1>
        <p className="font-medium">{data.description}</p>
        <div className="my-4 flex justify-between items-center">
          <p className="font-bold">{data.name}</p>
          <img src="/images/share.png" />
        </div>
      </div>
    </div>
  );
};
export default BlogItem;
