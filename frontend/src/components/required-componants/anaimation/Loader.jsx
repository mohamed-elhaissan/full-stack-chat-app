import { AnimatePresence, motion } from "framer-motion";
const Loader = () => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: '-100%' }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: '-100%' }}
        transition={{
          ease: "easeInOut",
        }}
        className="fixed flex justify-center items-center bg-[#dedde2] z-50 left-0 top-0 w-full h-full"
      >
        <div className="flex gap-1">
          <span className="relative">
            <div className="absolute bg-blue-400 rounded-full w-10 h-10  animate-ping"></div>
            <div className="absolute  bg-indigo-500 animate-ping rounded-full w-10 h-10 size-1"></div>
          </span>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Loader;
