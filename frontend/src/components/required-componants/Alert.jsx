import {IoClose} from "react-icons/io5";
import { motion} from "framer-motion";
import {useEffect} from "react";
/* eslint-disable react/prop-types */
const Alert = ({type, content,onCancel}) => {
    useEffect(() => {
        const AlertTimeOut = setTimeout(() => {
            onCancel(false);
        },1000)
        return () => {clearTimeout(AlertTimeOut);}
    }, []);
    return (
        <motion.div
            initial={{y: -15, scale: 0}}
            animate={{y: 0, scale: 1}}
            exit={{x: "100%", opacity: 0}}
            transition={{duration: 0.1, ease: "easeOut"}}
            className='fixed flex flex-col gap-1 w-72  right-10 top-10'>
            <div
                className={`p-2 flex items-start rounded gap-2 text-xs font-medium shadow-lg text-white `} style={{
                background: type === 'error' ? '#ef4444' : '#22c55e',
            }}>
                {content}
                <button className='mt-0.5 ml-auto' onClick={() => onCancel(false)}>
                    <IoClose/>
                </button>
            </div>
        </motion.div>
    )
}
export default Alert;