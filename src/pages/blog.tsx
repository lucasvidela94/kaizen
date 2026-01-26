import { useState, useEffect } from 'react';
import Navigation from "@/components/navigation";
import { BlogCard } from "@/components/blog-card";
import { BlogFiltersComponent } from "@/components/blog-filters";
import { useBlogFilters } from "@/hooks/use-blog-filters";
import { getAllPosts, getAllCategories, getAllTags } from "@/lib/markdown";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const Blog = () => {
  const [posts, setPosts] = useState<any[]>([]);
  const [categories, setCategories] = useState<any[]>([]);
  const [tags, setTags] = useState<any[]>([]);
  
  const {
    filters,
    filteredPosts,
    featuredPosts,
    publishedPosts,
    comingSoonPosts,
    updateFilters,
    clearFilters
  } = useBlogFilters(posts);

  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    // Cargar posts desde markdown
    const markdownPosts = getAllPosts();
    const markdownCategories = getAllCategories();
    const markdownTags = getAllTags();
    
    setPosts(markdownPosts);
    setCategories(markdownCategories);
    setTags(markdownTags);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-hero">
      <Navigation />
      
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-portfolio-primary mb-4">
              Blog
            </h1>
            <p className="text-lg text-portfolio-secondary max-w-2xl mx-auto">
              Notes on engineering, product decisions, and what I learn while building and maintaining software.
            </p>
          </div>


          {/* Filters Toggle */}
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-2xl font-bold text-portfolio-primary">
                {filters.search ? `Search results for "${filters.search}"` : 'All Posts'}
              </h2>
              <p className="text-portfolio-secondary">
                {filteredPosts.length} post{filteredPosts.length !== 1 ? 's' : ''} found
              </p>
            </div>
            <Button
              variant="outline"
              onClick={() => setShowFilters(!showFilters)}
              className="border-portfolio-border hover:border-portfolio-accent"
            >
              {showFilters ? 'Hide' : 'Show'} Filters
            </Button>
          </div>

          {/* Filters */}
          {showFilters && (
            <div className="bg-portfolio-card border border-portfolio-border rounded-lg p-6 mb-8">
              <BlogFiltersComponent
                categories={categories}
                tags={tags}
                filters={filters}
                onFiltersChange={updateFilters}
              />
            </div>
          )}

          {/* Featured Posts */}
          {featuredPosts.length > 0 && !filters.search && (
            <div className="mb-12">
              <h3 className="text-xl font-semibold text-portfolio-primary mb-6">
                Featured Posts
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {featuredPosts.map((post) => (
                  <BlogCard key={post.id} post={post} featured={true} />
                ))}
              </div>
            </div>
          )}

          {/* All Posts */}
          <div className="space-y-6">
            {filteredPosts.length > 0 ? (
              filteredPosts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))
            ) : (
              <div className="text-center py-12">
                <div className="text-portfolio-muted mb-4">
                  No posts found matching your criteria.
                </div>
                <Button onClick={clearFilters} variant="outline">
                  Clear Filters
                </Button>
              </div>
            )}
          </div>

          <Separator className="my-12" />

          {/* Progress Reports Section */}
          <div className="bg-portfolio-card border border-portfolio-border rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-portfolio-primary mb-4">
              Progress Reports
            </h2>
            <p className="text-portfolio-secondary mb-4">
              Short updates on what I'm working on
            </p>
            <div className="text-portfolio-muted font-mono text-sm">
              Periodic updates on projects, delivery notes, and lessons learned.
            </div>
          </div>
          
          {/* Subscribe Section */}
           <div className="text-center">
             <div className="bg-portfolio-card border border-portfolio-accent/30 rounded-lg p-8">
               <h3 className="text-lg font-semibold text-portfolio-accent mb-4">
                Updates
               </h3>
               <p className="text-portfolio-secondary mb-6">
                If you'd like to hear about new posts, send me an email.
               </p>
               <div className="text-portfolio-muted font-mono text-sm">
                lucasan.videla@gmail.com
               </div>
             </div>
           </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
