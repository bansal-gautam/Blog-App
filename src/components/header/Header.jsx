// import image from "../../assets/images/main.jpg";

const Header = () => {
  return (
    <div className="h-100 w-screen bg-cover bg-center bg-no-repeat main-background flex justify-center items-end header-section">
      <div className="search-field w-4/6 flex items-center">
        <input
          type="text"
          className="block w-full h-10 mb-16 pl-12 rounded-full"
          placeholder="Search The Blog Here You Want to Read..."
        />
        <div className="mb-16 absolute pl-4 icon">
          <i className="fa-solid fa-magnifying-glass fa-xl absolute"></i>
        </div>
      </div>
      <button className="mb-16 ml-4 bg-amber-500 px-10 py-2 rounded-full">
        Search
      </button>
    </div>
  );
};
export default Header;
