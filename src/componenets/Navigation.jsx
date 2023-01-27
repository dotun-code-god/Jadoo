import React from 'react';
import { motion } from 'framer-motion';

const variants = {
    open: {
        transition: {staggerChildren: 0.07, delayChildren: 0.2}
    },
    closed: {
        transition: {staggerChildren: 0.05, staggerDirection: -1}
    }
}

const variants2 = {
    open: {
        y: 100,
        opacity: 1,
        transition: {
            y: { stiffness: 1000, velocity: -100 }
        }
    },
    closed: {
        y: 150,
        opacity: 0,
        transition: {
            y: { stiffness: 1000 }
        }
    }
}

const Navigation = () => (
    <motion.ul variants={variants} className='font-Google_Sans flex flex-col gap-3'>
        <motion.li
            variants={variants2}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        >
            <a href="/">
            <div className='relative -left-1/2 bg-[#D5AEE4]/80 text-black font-medium sm:w-28 w-[120px] py-2 rounded-md shadow-lg text-center'>Destination</div>
            </a>
        </motion.li>
        <motion.li
            variants={variants2}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        >
            <a href="/">
            <div className='relative -left-1/2 bg-[#D5AEE4]/80 text-black font-medium sm:w-28 w-[120px] py-2 rounded-md shadow-lg text-center'>Hotels</div>
            </a>
        </motion.li>
        <motion.li
            variants={variants2}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        >
            <a href="/">
            <div className='relative -left-1/2 bg-[#D5AEE4]/80 text-black font-medium sm:w-28 w-[120px] py-2 rounded-md shadow-lg text-center'>Flight</div>
            </a>
        </motion.li>
        <motion.li
            variants={variants2}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        >
            <a href="/">
            <div className='relative -left-1/2 bg-[#D5AEE4]/80 text-black font-medium sm:w-28 w-[120px] py-2 rounded-md shadow-lg text-center'>Bookings</div>
            </a>
        </motion.li>
        <motion.li
            variants={variants2}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        >
            <a href="/">
            <div className='relative -left-1/2 bg-[#D5AEE4]/80 text-black font-medium sm:w-28 w-[120px] py-2 rounded-md shadow-lg text-center'>Login</div>
            </a>
        </motion.li>
        <motion.li
            variants={variants2}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        >
            <a href="/">
            <div className='relative -left-1/2 bg-[#D5AEE4]/80 text-black font-medium sm:w-28 w-[120px] py-2 rounded-md shadow-lg text-center'>Sign Up</div>
            </a>
        </motion.li>
        <motion.li
            variants={variants2}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        >
            <a href="/">
            <div className='relative -left-1/2 bg-[#D5AEE4]/80 text-black font-medium sm:w-28 w-[120px] py-2 rounded-md shadow-lg text-center'>EN</div>
            </a>
        </motion.li>
    </motion.ul>
)

export default Navigation