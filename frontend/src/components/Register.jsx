import { Link } from "react-router";
import { motion } from "framer-motion";
import { LiaEyeSolid } from "react-icons/lia";
import { useState } from "react";
import { FaRegEyeSlash } from "react-icons/fa";
import Alert from "./required-componants/Alert.jsx";
import axiosInstance from "./required-componants/axios-Instance.jsx";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password || !name || !confirmPassword) {
      setError("fields are required!");
      setTimeout(() => {
        setError(false);
      }, 1500);
    } else {
      axiosInstance
        .post("/Register", {
          name: name,
          email: email,
          password: password,
          password_confirmation: confirmPassword,
        })
        .then((data) => console.log(data))
        .catch((err) => console.log(err));
    }
  };

  const HandlePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="w-full h-[100vh] flex flex-col items-center justify-center">
      {error && <Alert type={"error"} content={error} />}
      <form
        className=" w-full px-10 sm:w-[80%] md:w-[70%] lg:w-1/3 "
        onSubmit={handleSubmit}
      >
        <h1 className="text-3xl text-center font-semibold">Welcome Sir !</h1>
        <p className="text-sm text-slate-500 text-center  mb-5">
          Please The required details
        </p>
        <div className="flex flex-col">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="outline-none   border-b-2"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="flex flex-col mt-1">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="outline-none   border-b-2"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex flex-col mt-1 relative">
          <label htmlFor="password">Password</label>
          <input
            type={showPassword ? "text" : "password"}
            className="outline-none   border-b-2"
            onChange={(e) => setPassword(e.target.value)}
          />
          {showPassword ? (
            <LiaEyeSolid
              onClick={HandlePassword}
              className="absolute right-0  top-1/2 cursor-pointer"
            />
          ) : (
            <FaRegEyeSlash
              onClick={HandlePassword}
              className="absolute right-0  top-1/2 cursor-pointer"
            />
          )}
        </div>
        <div className="flex flex-col mt-1 relative">
          <label htmlFor="password">Confirm Password</label>
          <input
            type={showPassword ? "text" : "password"}
            className="outline-none   border-b-2"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <motion.button
          whileTap={{
            scale: 0.95,
          }}
          className="relative hover:text-[#4F46E5] overflow-hidden hover:bg-[#EEF2FF] w-full mt-3 border  border-black py-2 rounded-full"
        >
          Register
        </motion.button>
        <p className="flex justify-center text-sm mt-4 text-slate-500">
          Already have an account?
          <Link to="/" className="text-black">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};
export default Login;
