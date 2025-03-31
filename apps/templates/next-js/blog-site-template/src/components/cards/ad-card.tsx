
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import { motion } from 'motion/react';

interface AdCardProps {
  title: string;
  subtitle: string;
  className?: string;
}

const AnimatedAdCard: React.FC<AdCardProps> = ({ 
  title, 
  subtitle,
  className = ""
}) => {
  return (
    <motion.div 
      className={`relative bg-blue-100 rounded-3xl p-6 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
    >
      <div className="flex justify-between items-start">
        <Badge variant="outline" className="bg-white/60 backdrop-blur-sm border-0">
          ADS
        </Badge>
        
        <motion.div whileHover={{ rotate: 90 }} transition={{ duration: 0.2 }}>
          <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
            <Plus className="h-4 w-4" />
          </Button>
        </motion.div>
      </div>
      
      <motion.div 
        className="mt-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <h2 className="text-xl font-bold">
          {title}
        </h2>
        
        <p className="text-xl font-bold mt-2">
          {subtitle}
        </p>
        
        <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
          <Button variant="link" className="mt-4 p-0 h-auto text-black">
            Learn more
          </Button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default AnimatedAdCard;