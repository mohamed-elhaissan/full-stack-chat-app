import { Link } from "react-router";
import { motion } from "framer-motion";
import Stairs from "./required-componants/anaimation/Staires";
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
    <Stairs>
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
          <div className="flex flex-col mt-1">
            <label htmlFor="password">Password</label>
            <input type="password" className="outline-none   border-b-2" />
          </div>
          <p className="flex justify-end mt-1 text-slate-500">
            <Link to="/register">Forget Password ?</Link>
          </p>
          <motion.button
            whileTap={{
              scale: 0.98,
            }}
            whileHover={{
              scale: 1.01,
            }}
            transition={{
              duration: 0.1,
              ease: "easeIn",
            }}
            className="relative hover:text-[#4F46E5]  overflow-hidden hover:bg-[#EEF2FF] w-full mt-3 border  border-black py-2 rounded-full"
          >
            Login
          </motion.button>
          <p className="flex justify-center text-sm mt-4 text-slate-500">
            Don&#39;t Have an Account ?
            <Link to="/register" className="text-black">
              {" "}
              Register
            </Link>
          </p>
        </form>
      </div>
    </Stairs>
  );
};
export default Login;
