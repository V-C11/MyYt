const ChatMsg = ({name, message}) => {
  return (
    <div  className="flex items-center shadow-sm p-2">
      <img
        className="w-8 h-8"
        alt="user"
        src="https://www.nicepng.com/png/full/128-1280406_user-icon-png.png"
      />
      <span className="font-bold px-4">{name}</span>
      <span className="">{message}</span>
    </div>
  );
};
export default ChatMsg;
