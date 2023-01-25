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
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
        >
            <div className='relative -left-1/2 bg-white px-6 py-2 rounded-md'>Destination</div>
        </motion.li>
        <motion.li
            variants={variants2}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
        >
            <div className='relative -left-1/2 bg-white px-6 py-2 rounded-md'>Hotels</div>
        </motion.li>
        <motion.li
            variants={variants2}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
        >
            <div className='relative -left-1/2 bg-white px-6 py-2 rounded-md'>Flight</div>
        </motion.li>
        <motion.li
            variants={variants2}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
        >
            <div className='relative -left-1/2 bg-white px-6 py-2 rounded-md'>Bookings</div>
        </motion.li>
        <motion.li
            variants={variants2}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
        >
            <div className='relative -left-1/2 bg-white px-6 py-2 rounded-md'>Login</div>
        </motion.li>
        <motion.li
            variants={variants2}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
        >
            <div className='relative -left-1/2 bg-white px-3 py-2 rounded-md'>Sign Up</div>
        </motion.li>
        <motion.li
            variants={variants2}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
        >
            <div className='relative -left-1/2 bg-white px-6 py-2 rounded-md'>EN</div>
        </motion.li>
    </motion.ul>
)

export default Navigation