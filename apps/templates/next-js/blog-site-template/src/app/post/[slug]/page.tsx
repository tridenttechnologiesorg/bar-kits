"use client";

import React, { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Share, Twitter, Facebook, Bookmark, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import {
  Author,
  BlogPost,
  getAuthorById,
  getPostBySlug,
  getRecentPosts,
} from "@/utils/data/blog-posts";
import { useParams } from "next/navigation";
import Link from "next/link";
import SlideInView from "@/components/animations/slide-in-view";
import FadeInView from "@/components/animations/fade-in-view";
import StaggerContainer, {
  StaggerItem,
} from "@/components/animations/stagger-container";
import AnimatedArticleCard from "@/components/cards/animated-article-card";
import CommentSection from "@/layouts/post/comment-section";
import AuthorCard from "@/components/cards/author-card";

const SinglePost = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [author, setAuthor] = useState<Author | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    if (slug) {
      const foundPost = getPostBySlug(slug);

      if (foundPost) {
        setPost(foundPost);

        const postAuthor = getAuthorById(foundPost.authorId) as Author;
        setAuthor(postAuthor);

        // Get related posts (for demo, just use recent posts)
        const recent = getRecentPosts(3).filter((p) => p.id !== foundPost.id);
        setRelatedPosts(recent);
      }

      // Scroll to top when post changes
      window.scrollTo(0, 0);
    }
  }, [slug]);

  if (!post || !author) {
    return (
      <div className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-center items-center h-[70vh]">
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-4">Post not found</h2>
              <Link href="/">
                <Button>Return to Homepage</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <main className="py-8">
          <Link
            href="/"
            className="inline-flex items-center text-sm mb-6 hover:underline"
          >
            <ArrowLeft className="mr-1 h-4 w-4" /> Back to Home
          </Link>

          <article className="max-w-4xl mx-auto">
            <SlideInView>
              <Badge className="mb-4">{post.category}</Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                {post.title}
              </h1>
            </SlideInView>

            <div className="flex flex-wrap justify-between items-center mb-8">
              <FadeInView className="flex items-center" delay={0.2}>
                <div className="text-sm text-gray-600">{post.date}</div>
              </FadeInView>

              <FadeInView className="flex space-x-2" delay={0.3}>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full"
                  >
                    <Twitter className="h-4 w-4" />
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full"
                  >
                    <Facebook className="h-4 w-4" />
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full"
                  >
                    <Share className="h-4 w-4" />
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full"
                  >
                    <Bookmark className="h-4 w-4" />
                  </Button>
                </motion.div>
              </FadeInView>
            </div>

            <FadeInView delay={0.4}>
              <div className="rounded-2xl overflow-hidden mb-10">
                <img
                  src={post.featuredImage}
                  alt={post.title}
                  className="w-full h-full object-cover aspect-[16/9]"
                />
              </div>
            </FadeInView>

            <FadeInView delay={0.5}>
              <div
                className="prose prose-lg max-w-none mb-12"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </FadeInView>

            <div className="flex flex-wrap gap-2 mb-8">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="outline" className="capitalize">
                  {tag}
                </Badge>
              ))}
            </div>

            <FadeInView className="mt-12 mb-16" delay={0.6}>
              <h3 className="text-2xl font-bold mb-6">About the author</h3>
              <AuthorCard author={author} large />
            </FadeInView>

            <FadeInView delay={0.7}>
              <CommentSection postId={post.id} />
            </FadeInView>

            <div className="mt-20">
              <SlideInView direction="right">
                <h2 className="text-2xl font-bold mb-8">You might also like</h2>
              </SlideInView>

              <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedPosts.map((relatedPost) => (
                  <StaggerItem key={relatedPost.id}>
                    <AnimatedArticleCard
                      image={relatedPost.featuredImage}
                      title={relatedPost.title}
                      category={relatedPost.category}
                      date={relatedPost.date}
                      slug={relatedPost.slug}
                      className="h-[300px]"
                    />
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </article>
        </main>
      </div>
    </div>
  );
};

export default SinglePost;
