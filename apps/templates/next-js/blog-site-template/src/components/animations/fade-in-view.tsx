import React from 'react';
import { motion } from 'motion/react';

interface FadeInViewProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

const FadeInView: React.FC<FadeInViewProps> = ({ 
  children, 
  delay = 0.2,
  className = ""
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.43, 0.13, 0.23, 0.96]
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default FadeInView;
