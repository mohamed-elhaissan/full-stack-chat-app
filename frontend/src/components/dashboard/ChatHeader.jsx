import { useEffect, useState } from "react";
import axiosInstance from "../required-componants/axios-Instance";
import { CiSearch } from "react-icons/ci";
import { BiDotsVerticalRounded } from "react-icons/bi";
import pfp from "../../../public/pfp.png";
const ChatHeader = ({ userId }) => {
  const [userData, setUserData] = useState(null);
  const [showSettings, setShowSettings] = useState(false);

  // Function to fetch user data based on userId
  const fetchUserID = async () => {
    axiosInstance
      .get(`/users/${userId}`)
      .then((response) => {
        setUserData(response.data);
        console.log("User data fetched:", userData);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  };

  useEffect(() => {
    fetchUserID();
  }, [userId]);
  return (
    <div>
      {userData && (
        <div className="p-6 flex items-center justify-between w-screen  gap-2 bg-white shadow-sm">
          <div className="flex items-center gap-3">
            <div className="bg-[#B2B2B2] relative w-16   h-16 rounded-full flex items-center justify-center">
              <h2 className="text-3xl text-white">
                {userData.data.name.split("")[0]}
              </h2>
              <h2 className="text-3xl text-white">
                {userData.data.name.split(" ")[1][0].toLowerCase()}
              </h2>
              
            </div>
            <div>
              <h1 className="font-semibold text-xl">
                {userData.data.name.toLowerCase()}
              </h1>
              <p className="text-sm text-red-500">
                {userData.data.isOnline == 0 ? "Offline " : "Online"}
              </p>
            </div>
          </div>
          <div className="flex gap-3 relative">
            <CiSearch className="text-3xl text-black cursor-pointer" />
            <BiDotsVerticalRounded
              className="text-3xl text-black cursor-pointer"
              onClick={() => setShowSettings(!showSettings)}
            />

            {showSettings && (
              <div className="absolute top-16 right-6 bg-white shadow-lg rounded-lg p-4">
                <ul className="space-y-2">
                  <li className="text-sm text-gray-700 cursor-pointer">
                    Settings
                  </li>
                  <li className="text-sm text-gray-700 cursor-pointer">
                    Logout
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatHeader;
