import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, User, Tag, Share2 } from 'lucide-react';
import { format } from 'date-fns';
import { getPostBySlug, getAllPosts, renderMarkdown } from '@/lib/markdown';
import Navigation from '@/components/navigation';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Card, CardContent } from '@/components/ui/card';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : null;

  if (!post) {
    return (
      <div className="min-h-screen bg-gradient-hero">
        <Navigation />
        <section className="pt-32 pb-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-portfolio-primary mb-4">
              Post not found
            </h1>
            <p className="text-portfolio-secondary mb-8">
              The blog post you're looking for doesn't exist.
            </p>
            <Link to="/blog">
              <Button>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blog
              </Button>
            </Link>
          </div>
        </section>
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    return format(new Date(dateString), 'MMMM dd, yyyy');
  };

  const renderContent = (content: string) => {
    return (
      <div 
        className="prose prose-invert max-w-none [&>h1]:text-3xl [&>h1]:font-bold [&>h1]:text-portfolio-primary [&>h1]:mt-8 [&>h1]:mb-4 [&>h2]:text-2xl [&>h2]:font-bold [&>h2]:text-portfolio-primary [&>h2]:mt-6 [&>h2]:mb-3 [&>h3]:text-xl [&>h3]:font-semibold [&>h3]:text-portfolio-primary [&>h3]:mt-4 [&>h3]:mb-2 [&>p]:text-portfolio-secondary [&>p]:mb-4 [&>p]:leading-relaxed [&>li]:text-portfolio-secondary [&>li]:ml-4 [&>li]:mb-1 [&>code]:bg-portfolio-card [&>code]:border [&>code]:border-portfolio-border [&>code]:rounded [&>code]:px-2 [&>code]:py-1 [&>code]:font-mono [&>code]:text-sm [&>strong]:text-portfolio-primary [&>em]:text-portfolio-accent"
        dangerouslySetInnerHTML={{ __html: renderMarkdown(content) }}
      />
    );
  };

  const sharePost = () => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.description,
        url: window.location.href,
      });
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-hero">
      <Navigation />
      
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <Link to="/blog" className="inline-flex items-center text-portfolio-accent hover:text-portfolio-primary transition-colors mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>

          {/* Post Header */}
          <article className="bg-portfolio-card border border-portfolio-border rounded-lg p-8 mb-8">
            <header className="mb-8">
              {/* Status Badge */}
              <div className="flex items-center justify-between mb-4">
                <Badge variant={post.status === 'published' ? 'default' : 'secondary'}>
                  {post.status === 'published' ? 'Published' : 'Coming Soon'}
                </Badge>
                <Button variant="ghost" size="sm" onClick={sharePost}>
                  <Share2 className="w-4 h-4" />
                </Button>
              </div>

              {/* Title */}
              <h1 className="text-4xl font-bold text-portfolio-primary mb-4">
                {post.title}
              </h1>

              {/* Description */}
              <p className="text-xl text-portfolio-secondary mb-6">
                {post.description}
              </p>

              {/* Meta Information */}
              <div className="flex flex-wrap items-center gap-6 text-sm text-portfolio-muted">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{formatDate(post.publishedAt)}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{post.readTime} min read</span>
                </div>
                <div className="flex items-center gap-2">
                  <Tag className="w-4 h-4" />
                  <span>{post.category}</span>
                </div>
              </div>

              {/* Tags */}
              {post.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-4">
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              )}
            </header>

            <Separator className="my-8" />

            {/* Content */}
            {renderContent(post.content)}
          </article>

          {/* Related Posts */}
          <div className="bg-portfolio-card border border-portfolio-border rounded-lg p-8">
            <h3 className="text-2xl font-bold text-portfolio-primary mb-6">
              Related Posts
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {getAllPosts()
                .filter(p => p.id !== post.id && p.status === 'published')
                .slice(0, 2)
                .map((relatedPost) => (
                  <Card key={relatedPost.id} className="border-portfolio-border hover:border-portfolio-accent/50 transition-colors">
                    <CardContent className="p-6">
                      <Link to={`/blog/${relatedPost.slug}`}>
                        <h4 className="text-lg font-semibold text-portfolio-primary mb-2 hover:text-portfolio-accent transition-colors">
                          {relatedPost.title}
                        </h4>
                        <p className="text-portfolio-secondary text-sm mb-3">
                          {relatedPost.excerpt.substring(0, 120)}...
                        </p>
                        <div className="flex items-center justify-between text-xs text-portfolio-muted">
                          <span>{formatDate(relatedPost.publishedAt)}</span>
                          <span>{relatedPost.readTime} min read</span>
                        </div>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;
