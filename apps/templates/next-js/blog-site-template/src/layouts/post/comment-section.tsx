import { useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { motion } from 'framer-motion';
import FadeInView from '@/components/animations/fade-in-view';

interface Comment {
  id: string;
  authorName: string;
  authorAvatar?: string;
  content: string;
  date: string;
}

// Sample comments for demo
const sampleComments: Comment[] = [
  {
    id: '1',
    authorName: 'Jamie Wilson',
    authorAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    content: 'This article really opened my eyes to new perspectives. I appreciate the in-depth analysis and thoughtful approach to the topic.',
    date: '3 days ago'
  },
  {
    id: '2',
    authorName: 'Michael Lee',
    authorAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    content: 'Great read! I would love to see a follow-up piece exploring some of the tangential points mentioned here.',
    date: '1 week ago'
  }
];

interface CommentSectionProps {
  postId: string;
}

const CommentSection: React.FC<CommentSectionProps> = ({ postId }) => {
  const [comments, setComments] = useState<Comment[]>(sampleComments);
  const [newComment, setNewComment] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmitComment = () => {
    if (!newComment.trim()) return;
    
    setIsSubmitting(true);
    
    // Simulate API call delay
    setTimeout(() => {
      const comment: Comment = {
        id: Date.now().toString(),
        authorName: 'Guest User', // In a real app, this would be the logged-in user
        content: newComment,
        date: 'Just now'
      };
      
      setComments([comment, ...comments]);
      setNewComment('');
      setIsSubmitting(false);
    }, 500);
  };

  return (
    <div className="mt-10">
      <FadeInView>
        <h3 className="text-2xl font-bold mb-6">Comments ({comments.length})</h3>
        
        <div className="mb-8">
          <Textarea
            placeholder="Share your thoughts..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            className="resize-none min-h-[100px] mb-3"
          />
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button 
              onClick={handleSubmitComment} 
              disabled={!newComment.trim() || isSubmitting}
              className="rounded-full"
            >
              {isSubmitting ? 'Posting...' : 'Post Comment'}
            </Button>
          </motion.div>
        </div>
      </FadeInView>
      
      <div className="space-y-6">
        {comments.map((comment, index) => (
          <FadeInView key={comment.id} delay={0.1 * index}>
            <div className="flex gap-4">
              <Avatar>
                {comment.authorAvatar ? (
                  <AvatarImage src={comment.authorAvatar} alt={comment.authorName} />
                ) : null}
                <AvatarFallback>{comment.authorName.charAt(0)}</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-medium">{comment.authorName}</h4>
                  <span className="text-xs text-gray-500">{comment.date}</span>
                </div>
                <p className="text-gray-700">{comment.content}</p>
              </div>
            </div>
          </FadeInView>
        ))}
      </div>
    </div>
  );
};

export default CommentSection;