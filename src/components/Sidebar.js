import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOen = useSelector((store) => store.app.isMenuOppen);

  // early return call(pattern)
  if (isMenuOen) return null;
  return (
    <div className="p-5 shadow-lg w-48 ">
      <ul className="py-4 flex flex-col font-bold ">
        <button className="py-2 hover:bg-gray-100 rounded-lg">
          <Link to="/">Home</Link>
        </button>
        <button className="py-2 hover:bg-gray-100 rounded-lg">Shorts</button>
        <button className="py-2 hover:bg-gray-100 rounded-lg">Videos</button>
        <button className="py-2 hover:bg-gray-100 rounded-lg">Live</button>
      </ul>
      <h1 className="font-bold text-center mb-1">Subscriptions</h1>
      <ul className="text-center">
        <li className="py-2 hover:bg-gray-100 rounded-lg">Music</li>
        <li className="py-2 hover:bg-gray-100 rounded-lg">Sports</li>
        <li className="py-2 hover:bg-gray-100 rounded-lg">Gaming</li>
        <li className="py-2 hover:bg-gray-100 rounded-lg">Movies</li>
      </ul>
      <h1 className="font-bold pt-4 text-center mb-1">Watch Later</h1>
      <ul className="text-center">
        <li className="py-2 hover:bg-gray-100 rounded-lg">Music</li>
        <li className="py-2 hover:bg-gray-100 rounded-lg">Sports</li>
        <li className="py-2 hover:bg-gray-100 rounded-lg">Gaming</li>
        <li className="py-2 hover:bg-gray-100 rounded-lg">Movies</li>
      </ul>
    </div>
  );
};

export default Sidebar;
