import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

import { useEffect, useState } from "react";
import { YOUTUBE_SEARCH } from "../utils/constans";
import { cacheResults } from "../utils/seachSlice";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const [suggestion, setSuggestion] = useState([]);
  const [showFocus, setShowFocus] = useState(false);

  const seachCache = useSelector((store) => store.search);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(searchQuery);
    // make an api call after every key press
    // but if the difference between 2 API call is <200ms
    // decline the api call
    const timer = setTimeout(() => {
      //if seach has already match work or something then it will not call but whn new seach appear which is not present in then it will appear
      if (seachCache[searchQuery]) {
        setSuggestion(seachCache[searchQuery]);
      } else {
        getSearchSuggestion();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestion = async () => {
    const data = await fetch(YOUTUBE_SEARCH + searchQuery);
    const json = await data.json();
    console.log(json[1]);
    setSuggestion(json[1]);

    //update cache
    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };

  const toggleHandel = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg items-center justify-between">
      <div className="flex items-center col-span-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="size-12 cursor-pointer"
          onClick={() => toggleHandel()}
        >
          <path
            fillRule="evenodd"
            d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
            clipRule="evenodd"
          />
        </svg>

        <img
          alt="tylogo"
          className="h-7 mx-4 cursor-pointer"
          src="https://logodownload.org/wp-content/uploads/2014/10/youtube-logo-9.png"
        />
      </div>
      <div className="flex col-span-10 px-10 ">
        <div className="w-full">
          <input
            type="text"
            className="w-1/2 rounded-l-full px-4 border border-gray-400 p-2 outline-none"
            placeholder="Search Whatever You Like...."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowFocus(true)}
            onBlur={() => setShowFocus(false)}
          />
          <button className="border border-gray-400 bg-gray-200 py-2 px-5 rounded-r-full ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-5"
            >
              <path
                fillRule="evenodd"
                d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        {showFocus && (
          <div className="absolute fixed bg-white py-2 px-5 my-12 w-[31rem]  -lg rounded-lg">
            <ul>
              {suggestion.map((sug) => (
                <li
                  key={sug}
                  className="flex items-center shadow-sm py-2 hover:bg-gray-100"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-4 mx-1"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
                      clipRule="evenodd"
                    />
                  </svg>{" "}
                  {sug}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="col-span-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="size-9"
        >
          <path
            fillRule="evenodd"
            d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </div>
  );
};

export default Header;
