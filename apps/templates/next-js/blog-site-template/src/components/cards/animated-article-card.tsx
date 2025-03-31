import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface ArticleCardProps {
  image: string;
  title: string;
  category: string;
  date?: string;
  large?: boolean;
  className?: string;
  slug: string;
}

const AnimatedArticleCard: React.FC<ArticleCardProps> = ({ 
  image, 
  title, 
  category, 
  date, 
  large = false,
  className = "",
  slug
}) => {
  return (
    <motion.div 
      className={`relative rounded-3xl overflow-hidden group ${className}`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.3 }}
    >
      <Link href={`/post/${slug}`}>
        <img 
          src={image} 
          alt={title} 
          className={`w-full h-full object-cover ${large ? 'aspect-[4/5]' : 'aspect-[3/4]'}`}
        />
        
        <div className="absolute inset-0 flex flex-col justify-between p-6">
          <div>
            {date && (
              <motion.div 
                className="bg-white text-black text-xs font-medium py-1 px-3 rounded-full inline-block mb-2"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                {date}
              </motion.div>
            )}
            
            <Badge variant="outline" className="bg-white text-black border-0 mb-2">
              {category}
            </Badge>
          </div>
          
          <div>
            {large ? (
              <h2 className="text-xl md:text-2xl font-bold text-white drop-shadow-md bg-black/20 p-4 rounded-2xl backdrop-blur-sm">
                {title}
              </h2>
            ) : (
              <h3 className="text-lg font-bold text-white drop-shadow-md">
                {title}
              </h3>
            )}
          </div>
        </div>
        
        <motion.div 
          className="absolute top-4 right-4 bg-white rounded-full p-2 opacity-80 hover:opacity-100 transition-opacity"
          whileHover={{ rotate: 45 }}
          transition={{ duration: 0.2 }}
        >
          <ArrowUpRight className="w-4 h-4" />
        </motion.div>
      </Link>
    </motion.div>
  );
}

export default AnimatedArticleCard;