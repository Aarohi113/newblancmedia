import React from 'react';
import { motion } from 'framer-motion';

export default function SpinningBadge() {
  return (
    <motion.a
      href="#work"
      className="spin-badge"
      aria-label="Check the project"
      layoutId="spinning-badge"
      transition={{
        type: 'spring',
        stiffness: 70,
        damping: 18,
        mass: 0.9,
      }}
    >
      <svg className="ring" viewBox="0 0 200 200">
        <defs>
          <path id="badgeCirclePath" d="M100,100 m-78,0 a78,78 0 1,1 156,0 a78,78 0 1,1 -156,0" />
        </defs>
        <text>
          <textPath href="#badgeCirclePath" startOffset="0%">
            CHECK THE PROJECT&#160;&#160;•&#160;&#160;CHECK THE SERVICES&#160;&#160;•&#160;&#160;CHECK THE WORK&#160;&#160;•&#160;&#160;
          </textPath>
        </text>
      </svg>
      <span className="center">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 17L17 7M17 7H8M17 7V16" stroke="#111112" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    </motion.a>
  );
}
