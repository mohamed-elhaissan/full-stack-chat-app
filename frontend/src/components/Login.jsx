import { Link } from "react-router";
import { motion } from "framer-motion";

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="w-full h-[100vh] flex flex-col items-center justify-center">
      <form
        className="w-full px-10 sm:w-[80%] md:w-[70%] lg:w-1/3"
        onSubmit={handleSubmit}
      >
        <h1 className="text-3xl text-center font-semibold">Welcome Back !</h1>
        <p className="text-sm text-slate-500 text-center  mb-5">
          Please enter your details
        </p>
        <div className="flex flex-col">
          <label htmlFor="email">Email</label>
          <input type="email" className="outline-none   border-b-2" />
        </div>
        <div className="flex flex-col mt-4">
          <label htmlFor="password">Password</label>
          <input type="password" className="outline-none   border-b-2" />
        </div>
        <p className="flex justify-end mt-4 text-slate-500">
          <Link to="/register">Forget Password ?</Link>
        </p>
        <motion.button
          whileTap={{
            scale: 0.98,
          }}
          whileHover={{
            scale : 1.01
          }}
          transition={{
            duration : 0.1,
            ease : 'easeIn'
          }}
          className="relative hover:text-[#4F46E5]  overflow-hidden hover:bg-[#EEF2FF] w-full mt-3 border  border-black py-2 rounded-full"
        >
          Login
        </motion.button>
      </form>
    </div>
  );
};
export default Login;
