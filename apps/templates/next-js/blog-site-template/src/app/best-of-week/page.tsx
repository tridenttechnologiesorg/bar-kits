"use client";

import React from 'react';
import { motion } from 'motion/react';
import { getFeaturedPosts, getRecentPosts } from '@/utils/data/blog-posts';
import SlideInView from '@/components/animations/slide-in-view';
import CategoryHeader from '@/components/typography/category-header';
import AnimatedArticleCard from '@/components/cards/animated-article-card';
import FadeInView from '@/components/animations/fade-in-view';
import { Button } from '@/components/ui/button';
import StaggerContainer, { StaggerItem } from '@/components/animations/stagger-container';
import AnimatedAdCard from '@/components/cards/ad-card';

const BestOfWeek = () => {
  const featuredPosts = getFeaturedPosts();
  const recentPosts = getRecentPosts(6);
  
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <main className="py-8">
          <SlideInView>
            <CategoryHeader title="Best of the week" showLink={true} />
          </SlideInView>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Main featured article */}
            <SlideInView className="lg:col-span-2 rounded-3xl overflow-hidden" delay={0.2}>
              <AnimatedArticleCard 
                image={featuredPosts[0].featuredImage}
                title={featuredPosts[0].title}
                category={featuredPosts[0].category}
                date={featuredPosts[0].date}
                slug={featuredPosts[0].slug}
                className="h-[500px] rounded-3xl"
                large
              />
            </SlideInView>
            
            {/* Right side content */}
            <div className="lg:col-span-1 space-y-8">
              {/* Ad Card */}
              <FadeInView delay={0.3}>
                <AnimatedAdCard 
                  title="Become A BROADCAST MEMBER"
                  subtitle="Real talk in a corporate world"
                  className="h-[250px]"
                />
              </FadeInView>
              
              {/* Featured person */}
              <FadeInView delay={0.4}>
                <motion.div 
                  className="relative rounded-3xl overflow-hidden h-[250px] bg-green-100"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auhref=format&fit=crop&w=687&q=80"
                    alt="Featured person"
                    className="w-full h-full object-cover"
                  />
                  
                  <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm rounded-full p-2">
                    <span className="text-sm font-medium">24</span>
                  </div>
                  
                  <div className="absolute bottom-6 right-6">
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button variant="secondary" className="rounded-full bg-white">
                        See all picks →
                      </Button>
                    </motion.div>
                  </div>
                </motion.div>
              </FadeInView>
            </div>
          </div>
          
          <div className="mt-20">
            <SlideInView direction="right">
              <h2 className="text-3xl font-bold mb-8">More great reads</h2>
            </SlideInView>
            
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recentPosts.map((post) => (
                <StaggerItem key={post.id}>
                  <AnimatedArticleCard 
                    image={post.featuredImage}
                    title={post.title}
                    category={post.category}
                    date={post.date}
                    slug={post.slug}
                    className="h-[400px]"
                  />
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </main>
      </div>
    </div>
  );
}

export default BestOfWeek;