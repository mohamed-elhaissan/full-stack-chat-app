/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { useLocation } from "react-router";
export default function Stairs({ children }) {
  const {pathname} = useLocation();
  console.log(pathname);
  
  const variants = {
    initial: {
      top: 0,
    },
    enter: {
      top: "100vh",
      transition: {
        duration: 0.4,
        delay: 0.4,
        ease: [0.215, 0.61, 0.355, 1],
      },
    },
    exit: {
      height: "100vh",
      transition: {
        duration: 0.4,
        delay: 0.4,
        ease: [0.215, 0.61, 0.355, 1],
      },
    },
  };
  return (
    <>
      <motion.div
        className="w-full h-full bg-black fixed left-0 top-0 flex items-center justify-center"
        initial="initial"
        animate="enter"
        exit="exit"
        variants={variants}
      >
        {pathname}
      </motion.div>
      {children}
    </>
  );
}
