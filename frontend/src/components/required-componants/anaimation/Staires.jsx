/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { useLocation } from "react-router";
export default function Stairs({ children }) {
  const { pathname } = useLocation();
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
      <div className="flex fixed left-0 top-0 w-[100vw] h-[100vh] pointer-events-none z-50">
        {[...Array(8)].map((_, i) => {
          return (
            <motion.div
              key={i}
              className="w-full h-full relative bg-black"
              initial="initial"
              animate={{ top: "100vh" }}
              exit={{ height: "100vh" }}
              transition={{
                duration: 0.4,
                delay: 0.1 * i,
                ease: [0.215, 0.61, 0.355, 1],
              }}
              variants={variants}
            />
          );
        })}
      </div>
      {children}
    </>
  );
}
