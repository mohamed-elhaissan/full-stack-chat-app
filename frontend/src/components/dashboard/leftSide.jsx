import { IoChatbubbleOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";

const LeftSide = () => {
  return (
    <div className="w-[20%]  p-4 shadow-lg rounded-lg">
      <div className="border-b border-gray-200 pb-4">
        <h1 className="flex items-center gap-2 font-bold text-2xl tracking-tighter">
          <IoChatbubbleOutline />
          My Chat
        </h1>

        <div className="mt-4  rounded-lg border border-gray-200 p-2 flex items-center gap-2">
          <CiSearch className="text-gray-500 text-xl" />
          <input
            type="text"
            className="border-none outline-none text-gray-500 w-full h-full bg-transparent"
            placeholder="Search"
          />
        </div>
      </div>
    </div>
  );
};
export default LeftSide;
