const Card = () => {
  return (
    <div className="rounded-lg border-2 border-gray-600 min-w-100 flex flex-col">
      <div className="min-h-50 bg-gradient-to-b from-indigo-500 to-green-500"></div>
      <img
        src="/images/profile.jfif"
        className="rounded-full max-w-50 display-block mx-auto -mt-16 mb-8"
      />
      <h1 className="text-2xl font-bold text-center">John Smith</h1>
      <p className="mt-4 text-center text-lg font-medium">Senior Writer</p>
      <p className="-mt-1 text-center text-md font-medium">
        Head of Organization
      </p>
      <hr className="my-2 w-9/12 mx-auto border-2 border-cyan-600" />
      <p className="text-center px-2 font-medium">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse
        asperiores non delectus iste accusantium incidunt excepturi illum magnam
        minus repellat!
      </p>
      <div className="social-handles my-4 text-center">
        <i
          className="fa-brands fa-linkedin fa-2xl border-2 rounded-full px-2 py-6 mx-1 border-gray-600 cursor-pointer"
          style={{ color: "blue" }}
        ></i>
        <i
          className="fa-brands fa-facebook fa-2xl border-2 rounded-full px-2 py-6 mx-1 border-gray-600 cursor-pointer"
          style={{ color: "#050dff" }}
        ></i>
        <i
          className="fa-brands fa-twitter fa-2xl border-2 rounded-full px-2 py-6 mx-1 border-gray-600 cursor-pointer"
          style={{ color: "#33ccff" }}
        ></i>
        <i
          className="fa-brands fa-instagram fa-2xl border-2 rounded-full px-2 py-6 mx-1 border-gray-600 cursor-pointer"
          style={{ color: "#ea39a0" }}
        ></i>
      </div>
    </div>
  );
};
export default Card;
