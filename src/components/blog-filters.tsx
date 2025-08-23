import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, Filter, X } from 'lucide-react';
import { BlogCategory, BlogTag, BlogFilters } from '@/types/blog';

interface BlogFiltersProps {
  categories: BlogCategory[];
  tags: BlogTag[];
  filters: BlogFilters;
  onFiltersChange: (filters: BlogFilters) => void;
}

export const BlogFiltersComponent = ({ 
  categories, 
  tags, 
  filters, 
  onFiltersChange 
}: BlogFiltersProps) => {
  const [searchValue, setSearchValue] = useState(filters.search || '');

  const handleSearch = (value: string) => {
    setSearchValue(value);
    onFiltersChange({ ...filters, search: value });
  };

  const handleCategoryChange = (category: string) => {
    onFiltersChange({ ...filters, category: category === 'all' ? undefined : category });
  };

  const handleTagToggle = (tag: string) => {
    const currentTags = filters.tags || [];
    const newTags = currentTags.includes(tag)
      ? currentTags.filter(t => t !== tag)
      : [...currentTags, tag];
    
    onFiltersChange({ ...filters, tags: newTags.length > 0 ? newTags : undefined });
  };

  const handleStatusChange = (status: string) => {
    onFiltersChange({ 
      ...filters, 
      status: status === 'all' ? undefined : status as 'published' | 'coming-soon' 
    });
  };

  const clearFilters = () => {
    setSearchValue('');
    onFiltersChange({});
  };

  const hasActiveFilters = filters.search || filters.category || filters.tags?.length || filters.status;

  return (
    <div className="space-y-6">
      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-portfolio-muted w-4 h-4" />
        <Input
          placeholder="Search posts..."
          value={searchValue}
          onChange={(e) => handleSearch(e.target.value)}
          className="pl-10 bg-portfolio-card border-portfolio-border focus:border-portfolio-accent"
        />
      </div>

      {/* Filters Row */}
      <div className="flex flex-wrap items-center gap-4">
        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4 text-portfolio-muted" />
          <span className="text-sm font-medium text-portfolio-primary">Filters:</span>
        </div>

        {/* Category Filter */}
        <Select value={filters.category || 'all'} onValueChange={handleCategoryChange}>
          <SelectTrigger className="w-40 bg-portfolio-card border-portfolio-border">
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            {categories.map((category) => (
              <SelectItem key={category.id} value={category.slug}>
                {category.name} ({category.postCount})
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {/* Status Filter */}
        <Select value={filters.status || 'all'} onValueChange={handleStatusChange}>
          <SelectTrigger className="w-40 bg-portfolio-card border-portfolio-border">
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Status</SelectItem>
            <SelectItem value="published">Published</SelectItem>
            <SelectItem value="coming-soon">Coming Soon</SelectItem>
          </SelectContent>
        </Select>

        {/* Clear Filters */}
        {hasActiveFilters && (
          <Button
            variant="outline"
            size="sm"
            onClick={clearFilters}
            className="text-portfolio-muted hover:text-portfolio-primary"
          >
            <X className="w-4 h-4 mr-1" />
            Clear
          </Button>
        )}
      </div>

      {/* Active Filters Display */}
      {hasActiveFilters && (
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-sm text-portfolio-muted">Active filters:</span>
          
          {filters.search && (
            <Badge variant="secondary" className="bg-portfolio-accent/10 text-portfolio-accent">
              Search: "{filters.search}"
            </Badge>
          )}
          
          {filters.category && (
            <Badge variant="secondary" className="bg-portfolio-accent/10 text-portfolio-accent">
              Category: {categories.find(c => c.slug === filters.category)?.name}
            </Badge>
          )}
          
          {filters.status && (
            <Badge variant="secondary" className="bg-portfolio-accent/10 text-portfolio-accent">
              Status: {filters.status}
            </Badge>
          )}
          
          {filters.tags?.map((tag) => (
            <Badge key={tag} variant="secondary" className="bg-portfolio-accent/10 text-portfolio-accent">
              Tag: {tag}
            </Badge>
          ))}
        </div>
      )}

      {/* Tags Filter */}
      <div className="space-y-3">
        <h4 className="text-sm font-medium text-portfolio-primary">Filter by tags:</h4>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge
              key={tag.id}
              variant={filters.tags?.includes(tag.slug) ? "default" : "outline"}
              className={`cursor-pointer transition-colors ${
                filters.tags?.includes(tag.slug)
                  ? 'bg-portfolio-accent text-white'
                  : 'bg-portfolio-card hover:bg-portfolio-accent/10'
              }`}
              onClick={() => handleTagToggle(tag.slug)}
            >
              {tag.name} ({tag.postCount})
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
};
