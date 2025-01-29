import { useState } from "react";
import { IoIosMenu } from "react-icons/io";
import { LuExternalLink } from "react-icons/lu";
import { IoCloseOutline } from "react-icons/io5";
import { Link } from "react-router";
import phone1 from "../../public/phone-1.svg";
import phone2 from "../../public/phone-2.svg";
import { motion } from "framer-motion";
import message1 from "../../public/Bubble - Person.svg";
import message2 from "../../public/Bubble - Friend.svg";
const TalkZone = () => {
  const variants = {
    start: {
      y: -10,
      opacity: 0,
    },
    end: {
      y: 0,
      opacity: 1,
    },
  };
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <header className="fixed left-0 right-0 top-0 m-6 flex justify-between items-center  ">
        <h1 className="text-3xl font-bold text-sky-500">Talkzone</h1>
        <IoIosMenu
          onClick={() => setIsOpen(!isOpen)}
          className="text-4xl hover:bg-black rounded-full w-10 h-10 hover:text-white p-1 cursor-pointer "
        />

        {isOpen && (
          <motion.div
            variants={variants}
            initial="start"
            animate="end"
            className="absolute w-[20%] p-1 bg-white shadow-custom-shadow right-0 top-10"
          >
            <motion.div
              variants={variants}
              initial="start"
              animate="end"
              transition={{
                delay: 0.1,
              }}
              className="flex items-center justify-end border-b py-2"
            >
              <IoCloseOutline
                onClick={() => setIsOpen(false)}
                className="hover:bg-red-500 rounded-full hover:text-white cursor-pointer"
              />
            </motion.div>
            <motion.div
              variants={variants}
              initial="start"
              animate="end"
              transition={{
                delay: 0.2,
              }}
            >
              <Link
                to={"/login"}
                className="hover:bg-black text-sm hover:text-white  rounded-lg flex justify-between items-center py-2 px-1 border-b"
              >
                Log in <LuExternalLink />
              </Link>
            </motion.div>

            <motion.div
              variants={variants}
              initial="start"
              animate="end"
              transition={{
                delay: 0.3,
              }}
            >
              <Link
                to={"/register"}
                className="hover:bg-black text-sm  hover:text-white  rounded-lg flex justify-between items-center py-2 px-1 border-b"
              >
                Sign up <LuExternalLink />
              </Link>
            </motion.div>
            <motion.div
              variants={variants}
              initial="start"
              animate="end"
              transition={{
                delay: 0.4,
              }}
              className="hover:bg-black text-sm hover:text-white rounded-lg flex justify-between items-center py-2 px-1"
            >
              Dark Mode
            </motion.div>
          </motion.div>
        )}
      </header>

      <Hero />
      <Animated2ndSection />
      <section className="h-screen overflow-hidden bg-red-50 mt-10"></section>
      <section className="h-screen overflow-hidden bg-red-50 mt-10"></section>
      <section className="h-screen overflow-hidden bg-red-50 mt-10"></section>
      <section className="h-screen overflow-hidden bg-red-50 mt-10"></section>
      <section className="h-screen overflow-hidden bg-red-50 mt-10"></section>
    </div>
  );
};
export default TalkZone;

const Hero = () => {
  return (
    <section className="h-screen overflow-hidden">
      <div className="mainDiv my-16 mx-3 h-[90%]">
        <div className="flex items-center justify-center h-full">
          <motion.img
            initial={{
              x: "-100%",
              opacity: 0,
            }}
            animate={{
              x: 0,
              opacity: 1,
            }}
            transition={{
              type: "spring",
              mass: 3,
              stiffness: 500,
              damping: 150,
            }}
            src={phone1}
            alt=""
          />
          <motion.h2
            variants={variants}
            initial="start"
            animate="end"
            transition={{
              type: "spring",
              mass: 3,
              stiffness: 400,
              damping: 150,
            }}
            className="font-bold text-7xl  text-center"
          >
            One app for all{" "}
            <span className="relative ">
              Needs
              <svg
                viewBox="0 0 286 73"
                fill="none"
                className="absolute -left-6 -right-6 top-0 -bottom-4 translate-y-1 "
              >
                <motion.path
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{
                    duration: 1.25,
                    ease: "easeInOut",
                  }}
                  d="M142.293 1C106.854 16.8908 6.08202 7.17705 1.23654 43.3756C-2.10604 68.3466 29.5633 73.2652 122.688 71.7518C215.814 70.2384 316.298 70.689 275.761 38.0785C230.14 1.37835 97.0503 24.4575 52.9384 1"
                  stroke="#FACC15"
                  strokeWidth="3"
                />
              </svg>
            </span>
          </motion.h2>
          <motion.img
            initial={{
              x: "100%",
              opacity: 0,
            }}
            animate={{
              x: 0,
              opacity: 1,
            }}
            transition={{
              type: "spring",
              mass: 3,
              stiffness: 400,
              damping: 150,
            }}
            src={phone2}
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

const Animated2ndSection = () => {
  return (
    <section className="h-screen overflow-hidden ">
      <div className="flex h-full justify-center items-center relative">
        <motion.h2
          initial={{ scale: 1 }}
          whileInView={{ scale: 0.1 }}
          className="text-9xl"
        >
          Unify Your Talk Zone
        </motion.h2>
        <img className="absolute  left-0 bottom-0" src={message1} alt="" />
        <img
          className="absolute  left-0 top-0"
          src="https://www.jeton.com/_ipx/q_90&w_425/cms/633e0fd8c443a6124a232d42ad11c20cc078d65c-600x500.png"
          alt=""
        />
        <img className="absolute  right-0 top-0" src={message2} alt="" />
        <img
          className="absolute  right-0 bottom-0"
          src="https://www.jeton.com/_ipx/q_90&w_425/cms/58416ce3a15f3a122d9b24cfafefb57b77c3c104-720x720.png"
          alt=""
        />
      </div>
    </section>
  );
};
