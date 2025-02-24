import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentContainer from "./CoomentsContainer";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  //   console.log(searchParams.get("v"));

  const dispath = useDispatch();

  useEffect(() => {
    dispath(closeMenu());
  }, []);
  return (
    <>
    <div className="flex flex-col w-full">
      <div className="px-5 flex w-full">
        <div>
        <iframe
          width="1050"
          height="620"
          src={"https://www.youtube.com/embed/" + searchParams.get("v")}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        </div>
        <div className="w-full">
            <LiveChat/>
        </div>
      </div>
      <CommentContainer/>
      </div>
    </>
  );
};
export default WatchPage;
