"use client"

import React, { useEffect, useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft } from 'lucide-react';
import { BlogPost, getPostsByCategory } from '@/utils/data/blog-posts';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import FadeInView from '@/components/animations/fade-in-view';
import StaggerContainer, { StaggerItem } from '@/components/animations/stagger-container';
import AnimatedArticleCard from '@/components/cards/animated-article-card';


const CategoryDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [categoryName, setCategoryName] = useState('');
  
  useEffect(() => {
    if (slug) {
      // Capitalize first letter for display
      setCategoryName(slug.charAt(0).toUpperCase() + slug.slice(1));
      
      const categoryPosts = getPostsByCategory(slug);
      setPosts(categoryPosts);
    }
  }, [slug]);
  
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <main className="py-8">
          <Link href="/categories" className="inline-flex items-center text-sm mb-6 hover:underline">
            <ArrowLeft className="mr-1 h-4 w-4" /> All Categories
          </Link>
          
          <FadeInView>
            <div className="mb-10">
              <Badge className="mb-2">{posts.length} posts</Badge>
              <h1 className="text-4xl font-bold">{categoryName}</h1>
            </div>
          </FadeInView>
          
          {posts.length > 0 ? (
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map(post => (
                <StaggerItem key={post.id}>
                  <AnimatedArticleCard 
                    image={post.featuredImage}
                    title={post.title}
                    category={post.category}
                    date={post.date}
                    slug={post.slug}
                    className="h-[350px]"
                  />
                </StaggerItem>
              ))}
            </StaggerContainer>
          ) : (
            <FadeInView className="text-center py-16">
              <h2 className="text-2xl font-medium mb-4">No posts found</h2>
              <p className="text-gray-600">
                There are no posts in the {categoryName} category yet.
              </p>
            </FadeInView>
          )}
        </main>
      </div>
    </div>
  );
};

export default CategoryDetail;
