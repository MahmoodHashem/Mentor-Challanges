import { motion } from 'framer-motion';
import { useState } from 'react';

const AnimatedNavLink = ({ href, children }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.a
      href={href}
      className="relative text-darkGrayishBlue hover:text-veryDarkBlue py-8"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {children}
      <motion.div
        className="absolute -bottom-8 left-0 origin-left right-0 h-1 bg-Orange"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isHovered ? 1 : 0 }}
        transition={{ duration: 0.1 }}
      />
    </motion.a>
  );
};

export default AnimatedNavLink;
