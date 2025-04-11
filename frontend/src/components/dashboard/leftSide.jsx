import { CiSearch } from "react-icons/ci";
import axiosInstance from "../required-componants/axios-Instance.jsx";

import { motion } from "framer-motion";

import { useEffect, useState } from "react";
import { NavLink } from "react-router";
const LeftSide = () => {
  const [user, setUser] = useState([]);
  

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
    <div className=" bg-white py-4 shadow-lg flex sticky flex-col items-center gap-5 rounded-lg  ">
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
                  <div className="bg-[#B2B2B2] relative w-14   h-14 rounded-full flex items-center justify-center">
                    <h2 className="text-2xl text-white">
                      {item.name.split("")[0]}
                    </h2>
                    <h2 className="text-2xl text-white">
                      {item.name.split(" ")[1][0].toLowerCase()}
                    </h2>
                  </div>
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
