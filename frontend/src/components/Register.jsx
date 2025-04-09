import { Link, useNavigate } from "react-router";

import { motion } from "framer-motion";
import { LiaEyeSolid } from "react-icons/lia";
import { useContext, useState } from "react";
import {  FaRegEyeSlash } from "react-icons/fa";
import Alert from "./required-componants/Alert.jsx";
import axiosInstance from "./required-componants/axios-Instance.jsx";

import { LoaderCtx } from "../context/LoaderProvider.jsx";

const Register = () => {
  const { setIsLoading } = useContext(LoaderCtx);
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [allfieldareRequired, setAllfieldAreRequired] = useState(false);
  const [succesAlert, setSuccessAlert] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    setIsLoading(true);
    e.preventDefault();
    if (!email || !password || !name || !confirmPassword) {
      setError(["Fields are required!"]);
      setIsLoading(false);
      setTimeout(() => {
        setAllfieldAreRequired(false);
      }, 1500);
    } else {
      axiosInstance
        .post("register", {
          name: name,
          email: email,
          password: password,
          password_confirmation: confirmPassword,
        })
        .then(() => {
          setIsLoading(false);
          setSuccessAlert("You have successfully registered"),
            setTimeout(() => {
              navigate("/login");
            }, 1500);
        })
        .catch((err) => {
          const destructuredArray = Object.values(
            err.response?.data.errors
          ).flat();
          setError(destructuredArray);
          console.log('this is new Array ! ');
          console.log(error);
          
          
          // setError(err);
          // console.log(err.response?.data.errors?.password?.[0]);

          // console.log(typeof err.response.data.errors);
          // // err.response.data.errors.map((item) => {
          // //   console.log(item);
          // // });
          // Object.values(err.response.data)
          //   .flat()
          //   .map((item) => console.log(item));
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  };

  const HandlePassword = () => {
    setShowPassword(!showPassword);
  };
  const handleShowAlert = () => {
    setError(false);
  };

  return (
    <div>
      <div className="w-full h-[100vh] flex flex-col items-center justify-center">
        

        {error && (
          <div className="flex flex-col gap-1">
            {error.map((item, index) => (
              <div key={index} className="">
                <Alert type={"error"} content={item} />
                
              </div>
            ))}
          </div>
        )}
       
        {succesAlert && <Alert type={"success"} content={succesAlert} />}
        <form
          className="bg-white rounded-lg p-8 shadow-lg w-full px-10 sm:w-[80%] md:w-[70%] lg:w-1/3 "
          onSubmit={handleSubmit}
        >
          <h1 className="text-3xl text-center font-semibold">Welcome Sir !</h1>
          <p className="text-sm text-slate-500 text-center  mb-5">
            Enter The required details
          </p>
          <div className="flex flex-col">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="outline-none   border-b-2"
              onChange={(e) => setName(e.target.value)}
              onFocus={() => handleShowAlert(false)}
            />
          </div>
          <motion.p
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{}}
            className="mb-5 text-red-500 text-sm"
          >
            {error.response?.data.errors?.name?.[0]}
          </motion.p>
          <div className="flex flex-col mt-1">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="outline-none   border-b-2"
              onChange={(e) => setEmail(e.target.value)}
              onFocus={() => handleShowAlert(false)}
            />
          </div>
          <motion.p
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{}}
            className="mb-5 text-red-500 text-sm"
          >
            {error.response?.data.errors?.email?.[0]}
          </motion.p>
          <div className="flex flex-col mt-1 relative">
            <label htmlFor="password">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              onFocus={handleShowAlert}
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
          <motion.p
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{}}
            className="mb-5 text-red-500 text-sm"
          >
            {error.response?.data.errors?.password?.[0]}
          </motion.p>
          <div className="flex flex-col mt-1 relative">
            <label htmlFor="password">Confirm Password</label>
            <input
              type={showPassword ? "text" : "password"}
              onFocus={handleShowAlert}
              className="outline-none   border-b-2"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <motion.button
            whileTap={{
              scale: 0.95,
            }}
            className="relative text-white rounded bg-black overflow-hidden  w-full mt-3 border  border-black py-3 "
          >
            Register
          </motion.button>
          <p className="flex justify-center text-sm mt-4 text-slate-500">
            Already have an account?
            <Link to="/login" className="text-black">
              Login
            </Link>
          </p>
        </form>
      </div>

     
    </div>
  );
};
export default Register;



