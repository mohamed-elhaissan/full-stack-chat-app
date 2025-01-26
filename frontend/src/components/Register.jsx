import { Link, useNavigate } from "react-router";
import { motion } from "framer-motion";
import { LiaEyeSolid } from "react-icons/lia";
import { useContext, useState } from "react";
import { FaRegEyeSlash } from "react-icons/fa";
import Alert from "./required-componants/Alert.jsx";
import axiosInstance from "./required-componants/axios-Instance.jsx";
<<<<<<< HEAD
import { LoaderCtx } from "../context/LoaderProvider.jsx";
=======
>>>>>>> de5e21857a991ebbd97596cc0a758c60ea1cbd7e

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
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    setIsLoading(true);
    e.preventDefault();
    if (!email || !password || !name || !confirmPassword) {
      setAllfieldAreRequired("fields are required!");
      setIsLoading(false);
      setTimeout(() => {
        setAllfieldAreRequired(false);
      }, 1500);
    } else {
      axiosInstance
        .post("Register", {
          name: name,
          email: email,
          password: password,
          password_confirmation: confirmPassword,
        })
        .then(() => {
          setIsLoading(false);
          setSuccessAlert("You have successfully registered"),
            setTimeout(() => {
              navigate('/login')
            }, 1500);
        })
        .catch((err) => {
          setError(err);
          console.log(err);
          
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
<<<<<<< HEAD
    <div className="w-full h-[100vh] flex flex-col items-center justify-center">
      {allfieldareRequired && (
        <Alert type={"error"} content={allfieldareRequired} />
      )}
      {succesAlert && (
        <Alert type={"success"} content={succesAlert} />
      )}
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
            onFocus={()=>handleShowAlert(false)}
          />
        </div>
        <motion.p 
        initial = {{y : -10,opacity : 0}}
        animate = {{y  :0,opacity : 1}}
        transition={{
          
        }}
        className="mb-5 text-red-500 text-sm">
          {error.response?.data.errors?.name?.[0]}
        </motion.p>
        <div className="flex flex-col mt-1">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="outline-none   border-b-2"
            onChange={(e) => setEmail(e.target.value)}
            onFocus={()=>handleShowAlert(false)}
          />
        </div>
        <motion.p 
        initial = {{y : -10,opacity : 0}}
        animate = {{y  :0,opacity : 1}}
        transition={{
          
        }}
        className="mb-5 text-red-500 text-sm">
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
        initial = {{y : -10,opacity : 0}}
        animate = {{y  :0,opacity : 1}}
        transition={{
          
        }}
        className="mb-5 text-red-500 text-sm">
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
          className="relative hover:text-[#4F46E5] overflow-hidden hover:bg-[#EEF2FF] w-full mt-3 border  border-black py-2 rounded-full"
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
=======
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
            <Link to="/login" className="text-black">
              Register
            </Link>
          </p>
        </form>
      </div>
>>>>>>> de5e21857a991ebbd97596cc0a758c60ea1cbd7e
  );
};
export default Register;
