"use client";

import React, { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import SlideInView from '@/components/animations/slide-in-view';
import FadeInView from '@/components/animations/fade-in-view';
import StaggerContainer, { StaggerItem } from '@/components/animations/stagger-container';
import TextCard from '@/components/cards/text-card';
import AnimatedArticleCard from '@/components/cards/animated-article-card';
import Link from 'next/link';
import CategoryHeader from '@/components/typography/category-header';
import { getFeaturedPosts, getPostsByCategory } from '@/utils/data/blog-posts';

const Index = () => {
  const [fashionPosts] = useState(getPostsByCategory('Fashion'));
  const [featuredPosts] = useState(getFeaturedPosts());
  
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4">
        
        <main className="py-8">
          <SlideInView className="mb-16">
            <CategoryHeader title="Read, Explore, And So Much More!" />
            
            <div className="relative ml-auto w-fit mb-4">
              <Badge variant="outline" className="text-xs">
                Category
              </Badge>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Left Article */}
              <FadeInView className="lg:col-span-1" delay={0.1}>
                <AnimatedArticleCard 
                  image={fashionPosts[0].featuredImage}
                  title={fashionPosts[0].title}
                  category={fashionPosts[0].category}
                  slug={fashionPosts[0].slug}
                  className="h-[500px]"
                />
                <TextCard 
                  title={fashionPosts[0].title} 
                  category={fashionPosts[0].category} 
                  className="mt-4"
                />
              </FadeInView>

              {/* Center Article */}
              <FadeInView className="lg:col-span-1" delay={0.2}>
                <div className="relative mb-4">
                  <h2 className="text-3xl font-bold">
                    Representing brands as the source for inspiration
                  </h2>
                </div>
                
                <AnimatedArticleCard 
                  image={fashionPosts[1].featuredImage}
                  title={fashionPosts[1].title}
                  category={fashionPosts[1].category}
                  date={fashionPosts[1].date}
                  slug={fashionPosts[1].slug}
                  className="h-[600px] mt-8"
                />
              </FadeInView>

              {/* Right Article */}
              <FadeInView className="lg:col-span-1" delay={0.3}>
                <AnimatedArticleCard 
                  image={fashionPosts[2].featuredImage}
                  title={fashionPosts[2].title}
                  category={fashionPosts[2].category}
                  slug={fashionPosts[2].slug}
                  className="h-[500px]"
                />
                <TextCard 
                  title={fashionPosts[2].title} 
                  category={fashionPosts[2].category} 
                  className="mt-4"
                />
              </FadeInView>
            </div>
          </SlideInView>
          
          <div className="mt-20 mb-8">
            <SlideInView direction="right">
              <Link href="/best-of-week" className="no-underline">
                <CategoryHeader title="Best of the week" showLink={true} linkText="See all posts" linkUrl="/best-of-week" />
              </Link>
              
              <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                {featuredPosts.map((post) => (
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
            </SlideInView>
          </div>
          
          <FadeInView className="mt-20 text-center py-16" delay={0.4}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Subscribe to our newsletter</h2>
            <p className="text-gray-600 max-w-md mx-auto mb-8">
              Stay updated with our latest articles, news, and special features.
            </p>
            <form className="flex flex-col sm:flex-row max-w-md mx-auto gap-3">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                required
              />
              <button type="submit" className="h-10 px-4 py-2 bg-black text-white rounded-md text-sm font-medium">
                Subscribe
              </button>
            </form>
          </FadeInView>
        </main>
      </div>
    </div>
  );
}

export default Index;