import { useState, useMemo } from 'react';
import { BlogPost, BlogFilters } from '@/types/blog';

export const useBlogFilters = (posts: BlogPost[]) => {
  const [filters, setFilters] = useState<BlogFilters>({});

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      if (filters.search) {
        const searchLower = filters.search.toLowerCase();
        const matchesSearch = 
          post.title.toLowerCase().includes(searchLower) ||
          post.description.toLowerCase().includes(searchLower) ||
          post.excerpt.toLowerCase().includes(searchLower) ||
          post.tags.some(tag => tag.toLowerCase().includes(searchLower)) ||
          post.category.toLowerCase().includes(searchLower);
        
        if (!matchesSearch) return false;
      }

      if (filters.category) {
        if (post.category.toLowerCase() !== filters.category.toLowerCase()) {
          return false;
        }
      }

      if (filters.status) {
        if (post.status !== filters.status) {
          return false;
        }
      }
    
      if (filters.tags && filters.tags.length > 0) {
        const hasMatchingTag = filters.tags.some(filterTag =>
          post.tags.some(postTag => postTag.toLowerCase() === filterTag.toLowerCase())
        );
        if (!hasMatchingTag) return false;
      }

      return true;
    });
  }, [posts, filters]);

  const featuredPosts = useMemo(() => {
    return filteredPosts.filter(post => post.featured);
  }, [filteredPosts]);

  const publishedPosts = useMemo(() => {
    return filteredPosts.filter(post => post.status === 'published');
  }, [filteredPosts]);

  const comingSoonPosts = useMemo(() => {
    return filteredPosts.filter(post => post.status === 'coming-soon');
  }, [filteredPosts]);

  const updateFilters = (newFilters: BlogFilters) => {
    setFilters(newFilters);
  };

  const clearFilters = () => {
    setFilters({});
  };

  return {
    filters,
    filteredPosts,
    featuredPosts,
    publishedPosts,
    comingSoonPosts,
    updateFilters,
    clearFilters
  };
};
