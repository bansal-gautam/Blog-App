const BlogsItem = ({ data }) => {
  return (
    <div className="border-2 border-gray-600 rounded-lg cursor-pointer flex">
      <img src={data.image} className="w-4/12" />
      <div className="px-2">
        <div className="flex mt-2 items-center justify-between">
          <div className="flex items-center">
            <p className="mr-3 bg-yellow-400 py-1 px-1 rounded text-sm">
              {data.category}
            </p>
            <p className="py-1 font-medium">{data.date}</p>
          </div>
          <img src="/images/share.png" className="w-6 h-6" />
        </div>
        <h1 className="text-2xl font-bold text-cyan-600 my-3">{data.title}</h1>
        <p className="font-medium">{data.description}</p>
        <div className="my-4 flex justify-between items-center">
          <p className="font-bold">{data.name}</p>
        </div>
      </div>
    </div>
  );
};
export default BlogsItem;
