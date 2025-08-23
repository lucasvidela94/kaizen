export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  description: string;
  content: string;
  excerpt: string;
  author: string;
  publishedAt: string;
  updatedAt?: string;
  status: 'draft' | 'published' | 'coming-soon';
  category: string;
  tags: string[];
  readTime: number;
  featured?: boolean;
  coverImage?: string;
}

export interface BlogCategory {
  id: string;
  name: string;
  slug: string;
  description: string;
  postCount: number;
}

export interface BlogTag {
  id: string;
  name: string;
  slug: string;
  postCount: number;
}

export interface BlogFilters {
  category?: string;
  tags?: string[];
  search?: string;
  status?: 'published' | 'coming-soon';
}
