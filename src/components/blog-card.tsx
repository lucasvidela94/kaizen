import { BlogPost } from '@/types/blog';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Calendar, Clock, User, Tag } from 'lucide-react';
import { format } from 'date-fns';
import { Link } from 'react-router-dom';

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
}

export const BlogCard = ({ post, featured = false }: BlogCardProps) => {
  const formatDate = (dateString: string) => {
    return format(new Date(dateString), 'MMM dd, yyyy');
  };

  return (
    <Link to={`/blog/${post.slug}`}>
      <Card className={`group hover:shadow-lg transition-all duration-300 border-portfolio-border hover:border-portfolio-accent/50 ${
        featured ? 'ring-2 ring-portfolio-accent/20' : ''
      }`}>
        <CardHeader className="pb-3">
          <div className="flex items-start justify-between mb-2">
            <div className="flex items-center gap-2 text-sm text-portfolio-muted">
              <Calendar className="w-4 h-4" />
              <span>{formatDate(post.publishedAt)}</span>
            </div>
            <div className="flex items-center gap-2">
              {featured && (
                <Badge variant="secondary" className="bg-portfolio-accent/10 text-portfolio-accent text-xs">
                  Featured
                </Badge>
              )}
              <Badge variant="outline" className="text-xs">
                {post.status === 'published' ? 'Published' : 'Coming Soon'}
              </Badge>
            </div>
          </div>
          
          <h3 className="text-xl font-semibold text-portfolio-primary group-hover:text-portfolio-accent transition-colors line-clamp-2">
            {post.title}
          </h3>
        </CardHeader>
        
        <CardContent className="pt-0">
          <p className="text-portfolio-secondary mb-4 line-clamp-3">
            {post.excerpt}
          </p>
          
          <div className="flex items-center justify-between text-sm text-portfolio-muted">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <User className="w-4 h-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>{post.readTime} min read</span>
              </div>
            </div>
            
            <div className="flex items-center gap-1">
              <Tag className="w-4 h-4" />
              <span>{post.category}</span>
            </div>
          </div>
          
          {post.tags.length > 0 && (
            <div className="flex flex-wrap gap-1 mt-3">
              {post.tags.slice(0, 3).map((tag) => (
                <Badge 
                  key={tag} 
                  variant="outline" 
                  className="text-xs bg-portfolio-card/50 hover:bg-portfolio-accent/10"
                >
                  {tag}
                </Badge>
              ))}
              {post.tags.length > 3 && (
                <Badge variant="outline" className="text-xs">
                  +{post.tags.length - 3}
                </Badge>
              )}
            </div>
          )}
        </CardContent>
      </Card>
    </Link>
  );
};
