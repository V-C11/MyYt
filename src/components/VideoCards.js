const VideoCard = ({ info }) => {
  if (!info || !info.snippet) {
    return null;
  }
  //   console.log(info);
  const { snippet } = info;
  const { channelTitle, title, thumbnails } = snippet;
  return (
    <div className="p-2 m-2 w-72 h-64 shadow-lg">
      <img className="rounded-lg " src={thumbnails.medium.url} alt="video" />
      <ul>
        <li className="font-bold py-2 text-sm">{title}</li>
        <li className="text-sm">{channelTitle}</li>
        {/* <li>{statistics.viewCount}</li> */}
      </ul>
    </div>
  );
};

export const AdVideoCard = ({info}) => {
    //this is an high order function
    return(
        <div className="p-1 m-1 border border-red-800">
            <VideoCard info={info}/>
        </div>
    )
}

export default VideoCard;
