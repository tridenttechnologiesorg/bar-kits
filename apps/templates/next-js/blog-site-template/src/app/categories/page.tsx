"use client";

import React from 'react';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import FadeInView from '@/components/animations/fade-in-view';
import StaggerContainer, { StaggerItem } from '@/components/animations/stagger-container';
import { categories, getPostsByCategory, tags } from '@/utils/data/blog-posts';
import Link from 'next/link';

export default function Page(){
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <main className="py-8">
          <FadeInView>
            <h1 className="text-4xl font-bold mb-12">Categories & Tags</h1>
          </FadeInView>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            <FadeInView delay={0.2}>
              <h2 className="text-2xl font-bold mb-6">Categories</h2>
              <StaggerContainer className="space-y-4">
                {categories.map(category => {
                  const postCount = getPostsByCategory(category).length;
                  
                  return (
                    <StaggerItem key={category}>
                      <Link href={`/categories/${category.toLowerCase()}`}>
                        <motion.div 
                          className="flex justify-between items-center p-4 rounded-lg border hover:bg-gray-50"
                          whileHover={{ x: 5 }}
                          transition={{ duration: 0.2 }}
                        >
                          <span className="font-medium">{category}</span>
                          <Badge variant="outline">{postCount} {postCount === 1 ? 'post' : 'posts'}</Badge>
                        </motion.div>
                      </Link>
                    </StaggerItem>
                  );
                })}
              </StaggerContainer>
            </FadeInView>
            
            <FadeInView delay={0.3}>
              <h2 className="text-2xl font-bold mb-6">Popular Tags</h2>
              <div className="flex flex-wrap gap-2">
                {tags.map(tag => (
                  <Link key={tag} href={`/tag/${tag.toLowerCase()}`}>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Badge className="capitalize py-2 px-3">{tag}</Badge>
                    </motion.div>
                  </Link>
                ))}
              </div>
            </FadeInView>
          </div>
        </main>
      </div>
    </div>
  );
};
