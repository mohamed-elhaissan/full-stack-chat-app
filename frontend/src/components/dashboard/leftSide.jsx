import { CiSearch } from "react-icons/ci";
import axiosInstance from "../required-componants/axios-Instance.jsx";
import images_1 from "../../assets/../../public/usersProfiles/1.svg";
import images_2 from "../../assets/../../public/usersProfiles/2.svg";
import images_3 from "../../assets/../../public/usersProfiles/3.svg";
import images_4 from "../../assets/../../public/usersProfiles/4.svg";
import images_5 from "../../assets/../../public/usersProfiles/5.svg";
import images_6 from "../../assets/../../public/usersProfiles/7.svg";
import images_7 from "../../assets/../../public/usersProfiles/9.svg";
import images_8 from "../../assets/../../public/usersProfiles/11 (1).svg";
import images_9 from "../../assets/../../public/usersProfiles/12.svg";
import { motion } from "framer-motion";

import { useEffect, useState } from "react";
import { NavLink } from "react-router";
const LeftSide = () => {
  const [user, setUser] = useState([]);
  const images = [
    images_1,
    images_2,
    images_3,
    images_4,
    images_5,
    images_6,
    images_7,
    images_8,
    images_9,
  ];

  // function to fetch all users
  // this function will be used to fetch all users from the server
  const fetchAllUsers = async () => {
    axiosInstance
      .get("/users")
      .then(({ data }) => {
        data.data ? setUser(data.data) : console.log("we have a trouble");
        console.log(user);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchAllUsers();

    console.log(Math.floor(Math.random() * 9) + 1);
  }, []);

  return (
    <div className=" bg-white py-4 shadow-lg flex  sticky flex-col items-center gap-5 rounded-lg  ">
      <div className="w-full  px-4">
        <h2 className="text-4xl font-bold mb-5 flex items-center  gap-5">
          Messages{" "}
          <span className="text-sm text-[#4F46E5] bg-[#EEF2FF] rounded-full p-1">
            {user.length}
          </span>
        </h2>
        <form className="relative">
          <input
            type="text"
            placeholder="Search message"
            className="p-3  rounded-full pl-6 outline-none border w-full"
          />
          <CiSearch className="absolute top-[25%] right-[5%] text-2xl  " />
        </form>
      </div>
      <hr className="w-full" />
      <div className="w-full">
        <div className="w-full mr-5   flex flex-col overflow-y-scroll overflow-x-hidden flex-1 h-screen">
          {user.map((item) => (
            <NavLink to={`/dashboard/${item.id}`} key={item.id}>
              <motion.div
                initial={{ y: -10, scale: 0.9, opacity: 0 }}
                animate={{ y: 0, scale: 1, opacity: 1 }}
                transition={{
                  delay: 0.1 * item.id,
                  type: "spring",
                  stiffness: 200,
                  damping: 15,
                  duration: 0.1,
                }}
                className=" hover:scale-105 hover:bg-[#F8FAFC] shadow-sm hover:shadow-custom-shadow duration-200"
              >
                <div className="flex items-center cursor-pointer  gap-2 w-full mx-4 my-1 py-2">
                  <img
                    src={images[Math.floor(Math.random() * 8) + 1]}
                    className="w-10 h-10 rounded-full"
                    alt=""
                  />
                  <div>
                    <p className="text-lg text-[#1E293B]">
                      {item.name.toLowerCase()}
                    </p>
                  </div>
                </div>
                <hr />
              </motion.div>
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};
export default LeftSide;
