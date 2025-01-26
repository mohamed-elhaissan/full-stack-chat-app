import { Link } from "react-router";
import { motion } from "framer-motion";
import { useState } from "react";
const Login = () => {
  //state to mange data 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");



  // functiom to add A user
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(password);
    console.log(email);
    
  };

  const variatns = {
    start: { y: "-20px", opacity: 0 },
    end: { y: "0px", opacity: 1 },
  };

  return (
    <div className="w-full h-[100vh] flex flex-col items-center justify-center">
      <form
        className="w-full px-10 sm:w-[80%] md:w-[70%] lg:w-1/3"
        onSubmit={handleSubmit}
      >
        <motion.h1
          initial="start"
          animate="end"
          exit="start"
          variants={variatns}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="text-3xl text-center font-semibold"
        >
          Welcome Back !
        </motion.h1>
        <motion.p
          initial="start"
          animate="end"
          exit="start"
          variants={variatns}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 20,
            delay: 0.1,
          }}
          className="text-sm text-slate-500 text-center  mb-5"
        >
          Please enter your details
        </motion.p>
        <motion.div
          initial="start"
          animate="end"
          exit="start"
          variants={variatns}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 20,
            delay: 0.2,
          }}
          className="flex flex-col"
        >
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="outline-none   border-b-2"
            onChange={(e) => setEmail(e.target.value)}
          />
        </motion.div>
        <motion.div
          initial="start"
          animate="end"
          exit="start"
          variants={variatns}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 20,
            delay: 0.3,
          }}
          className="flex flex-col mt-1"
        >
          <label htmlFor="password">Password</label>
          <input type="password" className="outline-none   border-b-2" onChange={(e)=>setPassword(e.target.value)} />
        </motion.div>
        <motion.p
          initial="start"
          animate="end"
          exit="start"
          variants={variatns}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 20,
            delay: 0.4,
          }}
          className="flex justify-end mt-1 text-slate-500"
        >
          <Link to="/">Forget Password ?</Link>
        </motion.p>
        <motion.button
          whileTap={{
            scale: 0.98,
          }}
          whileHover={{
            scale: 1.01,
          }}
          initial="start"
          animate="end"
          exit="start"
          variants={variatns}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 20,
            delay: 0.5,
          }}
          className="relative hover:text-[#4F46E5]  overflow-hidden hover:bg-[#EEF2FF] w-full mt-3 border  border-black py-2 rounded-full"
        >
          Login
        </motion.button>
        <motion.p
          initial="start"
          animate="end"
          exit="start"
          variants={variatns}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 20,
            delay: 0.6,
          }}
          className="flex justify-center text-sm mt-4 text-slate-500"
        >
          Don&#39;t Have an Account ?
          <Link to="/register" className="text-black">
            {" "}
            Register
          </Link>
        </motion.p>
      </form>
    </div>
  );
};
export default Login;
