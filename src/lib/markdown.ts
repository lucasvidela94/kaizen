import { BlogPost } from '@/types/blog';
import { blogPosts } from '@/data/blog-posts';

const postsData: BlogPost[] = blogPosts;

  
export const getAllPosts = (): BlogPost[] => {
  return postsData.sort((a, b) => 
    new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
};

export const getPostBySlug = (slug: string): BlogPost | null => {
  const posts = getAllPosts();
  return posts.find(post => post.slug === slug) || null;
};

export const getPostsByCategory = (category: string): BlogPost[] => {
  const posts = getAllPosts();
  return posts.filter(post => 
    post.category.toLowerCase() === category.toLowerCase()
  );
};

export const getPostsByTag = (tag: string): BlogPost[] => {
  const posts = getAllPosts();
  return posts.filter(post => 
    post.tags.some(postTag => 
      postTag.toLowerCase() === tag.toLowerCase()
    )
  );
};

export const searchPosts = (query: string): BlogPost[] => {
  const posts = getAllPosts();
  const searchLower = query.toLowerCase();
  
  return posts.filter(post => 
    post.title.toLowerCase().includes(searchLower) ||
    post.description.toLowerCase().includes(searchLower) ||
    post.excerpt.toLowerCase().includes(searchLower) ||
    post.tags.some(tag => tag.toLowerCase().includes(searchLower)) ||
    post.category.toLowerCase().includes(searchLower)
  );
};

export const getFeaturedPosts = (): BlogPost[] => {
  const posts = getAllPosts();
  return posts.filter(post => post.featured);
};

export const getPublishedPosts = (): BlogPost[] => {
  const posts = getAllPosts();
  return posts.filter(post => post.status === 'published');
};

const estimateReadTime = (content: string): number => {
  const wordsPerMinute = 200;
  const words = content.split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
};

export const getAllCategories = () => {
  const posts = getAllPosts();
  const categoryCount: Record<string, number> = {};
  
  posts.forEach(post => {
    categoryCount[post.category] = (categoryCount[post.category] || 0) + 1;
  });
  
  return Object.entries(categoryCount).map(([name, count]) => ({
    id: name.toLowerCase().replace(/\s+/g, '-'),
    name,
    slug: name.toLowerCase().replace(/\s+/g, '-'),
    description: `Posts about ${name}`,
    postCount: count
  }));
};

export const getAllTags = () => {
  const posts = getAllPosts();
  const tagCount: Record<string, number> = {};
  
  posts.forEach(post => {
    post.tags.forEach(tag => {
      tagCount[tag] = (tagCount[tag] || 0) + 1;
    });
  });
  
  return Object.entries(tagCount).map(([name, count]) => ({
    id: name,
    name,
    slug: name,
    postCount: count
  }));
};

export const renderMarkdown = (content: string): string => {
  return content
    .replace(/^# (.*$)/gm, '<h1>$1</h1>')
    .replace(/^## (.*$)/gm, '<h2>$1</h2>')
    .replace(/^### (.*$)/gm, '<h3>$1</h3>')
    .replace(/^\- (.*$)/gm, '<li>$1</li>')
    .replace(/^\d+\. (.*$)/gm, '<li>$1</li>')
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    .replace(/`(.*?)`/g, '<code>$1</code>')
    .replace(/```(\w+)?\n([\s\S]*?)```/g, '<pre><code>$2</code></pre>')
    .replace(/\n\n/g, '</p><p>')
    .replace(/^(?!<h|<li|<\/p|<pre)(.+)$/gm, '<p>$1</p>')
    .replace(/<p><\/p>/g, '');
};
