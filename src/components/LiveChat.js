import { useEffect, useState } from "react";
import ChatMsg from "./ChatMsg";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName, getrandomMessage } from "../utils/helper";

const LiveChat = () => {
  const [liveMsg, setLiveMsg] =  useState("");

  const chatmessages = useSelector((store) => store.chat.messages);
  const dispatch = useDispatch();
  useEffect(() => {
    const i = setInterval(() => {
      console.log("API Polling");
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: getrandomMessage(30),
        })
      );
    }, 1000);

    return () => clearInterval(i);
  });
  return (
    <>
      <div className="w-[93%] h-[620px] ml-2 p-2 border border-black bg-slate-100 rounded overflow-y-scroll overflow-x-hidden flex flex-col-reverse">
        <div>
          {chatmessages.map((c, index) => (
            <ChatMsg key={index} name={c.name} message={c.message} />
          ))}
        </div>
      </div>
      <form
        className="w-[93%] mt-2 p-2 ml-2 border border-black flex rounded"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({
              name: "Luffytaro",
              message: liveMsg,
            })
          );
          setLiveMsg("")
        }}
      >
        <input
          className="w-96 px-2 bg-gray-100 outline-none"
          value={liveMsg}
          onChange={(e) => setLiveMsg(e.target.value)}
          type="text"
          placeholder="Want to Type.."
        />
        <button className="ml-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-8  "
          >
            <path
              fillRule="evenodd"
              d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm4.28 10.28a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 1 0-1.06 1.06l1.72 1.72H8.25a.75.75 0 0 0 0 1.5h5.69l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3Z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </form>
    </>
  );
};

export default LiveChat;
