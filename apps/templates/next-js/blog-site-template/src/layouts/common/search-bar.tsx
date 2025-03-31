
import { useState } from 'react';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';

interface SearchBarProps {
  className?: string;
  inNavbar?: boolean;
}

const SearchBar: React.FC<SearchBarProps> = ({ className = "", inNavbar = false }) => {
  const [query, setQuery] = useState('');
  const [isExpanded, setIsExpanded] = useState(!inNavbar);
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query.trim())}`);
      setQuery('');
      if (inNavbar) setIsExpanded(false);
    }
  };

  // If in navbar, show just the icon that expands to a search field on click
  if (inNavbar) {
    return (
      <div className={`relative ${className}`}>
        <AnimatePresence>
          {isExpanded ? (
            <motion.form 
              onSubmit={handleSearch}
              initial={{ width: 40, opacity: 0 }}
              animate={{ width: 200, opacity: 1 }}
              exit={{ width: 40, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="flex items-center"
            >
              <Input
                type="text"
                placeholder="Search..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full rounded-full"
                autoFocus
                onBlur={() => !query && setIsExpanded(false)}
              />
              <Button 
                type="submit" 
                variant="ghost" 
                size="icon" 
                className="absolute right-0 rounded-full"
              >
                <Search className="h-4 w-4" />
              </Button>
            </motion.form>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <Button 
                variant="ghost" 
                size="icon" 
                className="rounded-full bg-black text-white"
                onClick={() => setIsExpanded(true)}
              >
                <Search className="h-5 w-5" />
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }

  // Regular search bar for search page
  return (
    <form onSubmit={handleSearch} className={`relative ${className}`}>
      <Input
        type="text"
        placeholder="Search articles, topics, authors..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full rounded-full pr-10"
      />
      <Button 
        type="submit" 
        variant="ghost" 
        size="icon" 
        className="absolute right-0 top-0 rounded-full"
      >
        <Search className="h-4 w-4" />
      </Button>
    </form>
  );
};

export default SearchBar;
