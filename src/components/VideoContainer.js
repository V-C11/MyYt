import { useEffect, useState } from "react";
import { YT_API } from "../utils/constans";
import VideoCard, { AdVideoCard } from "./VideoCards";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YT_API);
    const json = await data.json();
    // console.log(json.items);
    setVideos(json.items);
  };
  return (
    <div className="flex flex-wrap justify-center items-start w-[100%] h-[100%] p-4">
      {<AdVideoCard info={videos[0]}/>} 
      {videos.map((video) => (
        <Link
          key={video.id} 
          to={"/watch?v=" + video.id}
          className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2"
        >
          <VideoCard info={video} />
        </Link>
      ))}
    </div>
  );
};
export default VideoContainer;
