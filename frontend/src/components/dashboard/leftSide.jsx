import { CiSearch } from "react-icons/ci";
import axiosInstance from "../required-componants/axios-Instance.jsx";
import useravatar from "../../assets/../../public/27.svg";
import friendavatar from "../../assets/../../public/useravatar.svg";
import { useEffect, useState } from "react";
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
  }, []);

  return (
    <div className="w-[20%] h-[100vh]  py-4 shadow-lg flex flex-col items-center gap-5 rounded-lg ">
      <div className="w-full px-4 flex items-center gap-2">
        <img src={useravatar} className="w-20 h-20 rounded-full" alt="" />
        <div>
          <h2 className="text-xl font-bold">
            {window.localStorage.getItem("userName")}
          </h2>
          <p className="text-sm">{window.localStorage.getItem("userEmail")}</p>
        </div>
      </div>
      <hr className="w-full" />
      <div className="w-full px-4">
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
        <div className="w-full   flex flex-col">
          {user.map((item) => (
            <div key={item.id} className=" hover:scale-105 hover:bg-[#F8FAFC] shadow-sm hover:shadow-custom-shadow duration-200">
              <div className="flex items-center cursor-pointer  gap-2 w-full mx-4 my-1 py-2">
                <img
                  src={friendavatar}
                  className="w-10 h-10 rounded-full"
                  alt=""
                />
                <div>
                  <p className="text-lg">{item.name}</p>
                </div>
              </div>
              <hr />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default LeftSide;
