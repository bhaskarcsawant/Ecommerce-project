import React from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import './checkbox.css';

const checkVariants = {
  initial: {
    color: '#fff',
  },
  checked: {
    pathLength: 1,
  },
  unchecked: {
    pathLength: 0,
  },
};
const boxVariants = {
  checked: {
    background: 'var(--black)',
    transition: { duration: 0.1 },
  },
  unchecked: {
    background: 'var(--white)',
    transition: { duration: 0.1 },
  },
};

function Checkbox({ checked, handleCheck }) {
  const pathLength = useMotionValue(0);
  const opacity = useTransform(pathLength, [0.01, 0.15], [0, 1]);
  return (
    <motion.div
      variants={boxVariants}
      className='svgBox'
      animate={checked ? 'checked' : 'unchecked'}
      onClick={() => {
        handleCheck();
      }}
    >
      <motion.svg
        className='svg'
        viewBox="0 0 53 38"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          variants={checkVariants}
          style={{ pathLength, opacity }}
          animate={checked ? 'checked' : 'unchecked'}
          fill="none"
          strokeMiterlimit="10"
          strokeWidth="6"
          d="M1.5 22L16 36.5L51.5 1"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
      </motion.svg>
    </motion.div>
  );
}

export default Checkbox;
