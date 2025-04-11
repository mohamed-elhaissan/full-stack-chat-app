/* eslint-disable react/prop-types */
import ChatHeader from "./ChatHeader";
import ChatBody from "./ChatBody";
const MiddleSide = ({ userId }) => {
  return (
    <div className="bg-[#F8FAFC] border  w-[58%] flex flex-col h-screen">
      <ChatHeader userId={userId} />
      <ChatBody userId={userId} />
    </div>
  );
};
export default MiddleSide;
