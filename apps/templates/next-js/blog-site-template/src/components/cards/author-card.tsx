import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Twitter, Instagram, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';
import { Author } from '@/utils/data/blog-posts';

interface AuthorCardProps {
  author: Author;
  large?: boolean;
  className?: string;
}

const AuthorCard: React.FC<AuthorCardProps> = ({ 
  author,
  large = false,
  className = ""
}) => {
  const { name, avatar, bio, socialLinks } = author;
  
  return (
    <motion.div 
      className={`p-6 rounded-2xl border ${large ? 'flex items-center gap-6' : ''} ${className}`}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <div className={`${large ? 'flex-shrink-0' : 'mb-4 flex justify-center'}`}>
        <Avatar className={large ? 'h-20 w-20' : 'h-16 w-16'}>
          <AvatarImage src={avatar} alt={name} />
          <AvatarFallback>{name.charAt(0)}</AvatarFallback>
        </Avatar>
      </div>
      
      <div className={large ? 'flex-1' : ''}>
        <h3 className={`font-bold ${large ? 'text-xl mb-2' : 'text-center text-lg mb-3'}`}>{name}</h3>
        
        {bio && <p className={`text-gray-600 ${large ? 'mb-4' : 'text-center mb-3 text-sm'}`}>{bio}</p>}
        
        <div className={`flex ${large ? 'justify-start' : 'justify-center'} space-x-3 mt-2`}>
          {socialLinks.twitter && (
            <motion.a 
              href={socialLinks.twitter} 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ y: -3, color: '#1DA1F2' }}
              transition={{ duration: 0.2 }}
            >
              <Twitter size={18} />
            </motion.a>
          )}
          
          {socialLinks.instagram && (
            <motion.a 
              href={socialLinks.instagram} 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ y: -3, color: '#E1306C' }}
              transition={{ duration: 0.2 }}
            >
              <Instagram size={18} />
            </motion.a>
          )}
          
          {socialLinks.linkedin && (
            <motion.a 
              href={socialLinks.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ y: -3, color: '#0077B5' }}
              transition={{ duration: 0.2 }}
            >
              <Linkedin size={18} />
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default AuthorCard;