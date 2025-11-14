import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Clock, Zap, Github, ExternalLink, Filter, X, ChevronDown, ArrowRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Separator } from '@/components/ui/separator';
import { useLocation, useNavigate, Link } from 'react-router-dom';

// Types
interface AppData {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  description: string;
  icon: string;
  category: string;
  features: string[];
  timeToValue: string;
 integrations: string[];
  lifetimeFree: boolean;
  landingUrl: string;
  createdAt: string;
  popularityScore: number;
  iconAlt: string;
}

// Import the apps data
import appsData from '@/data/apps.json';

const AppsGallery: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  // State
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState<'relevance' | 'newest' | 'az'>('relevance');
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
 const [isPopular, setIsPopular] = useState(false);
  const [isNew, setIsNew] = useState(false);

  // Extract categories from apps data
  const categories = useMemo(() => {
    const uniqueCategories = Array.from(new Set(appsData.map(app => app.category)));
    return uniqueCategories.sort();
  }, []);

  // Parse URL params on initial load
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const search = params.get('search') || '';
    const category = params.get('category');
    const sort = params.get('sort') as 'relevance' | 'newest' | 'az' || 'relevance';
    
    setSearchQuery(search);
    
    if (category) {
      setSelectedCategories([category]);
    }
    
    setSortBy(sort);
  }, [location.search]);

  // Update URL params when filters change
  useEffect(() => {
    const params = new URLSearchParams();
    
    if (searchQuery) params.set('search', searchQuery);
    if (selectedCategories.length > 0) params.set('category', selectedCategories[0]);
    if (sortBy !== 'relevance') params.set('sort', sortBy);
    
    navigate(`/apps?${params.toString()}`, { replace: true });
  }, [searchQuery, selectedCategories, sortBy, navigate]);

  // Filter and sort apps
  const filteredApps = useMemo(() => {
    let result = [...appsData];
    
    // Apply search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(app => 
        app.title.toLowerCase().includes(query) ||
        app.tagline.toLowerCase().includes(query) ||
        app.description.toLowerCase().includes(query) ||
        app.features.some(feature => feature.toLowerCase().includes(query)) ||
        app.integrations.some(integration => integration.toLowerCase().includes(query))
      );
    }
    
    // Apply category filter
    if (selectedCategories.length > 0) {
      result = result.filter(app => selectedCategories.includes(app.category));
    }
    
    // Apply popular filter
    if (isPopular) {
      result = result.filter(app => app.popularityScore > 80);
    }
    
    // Apply new filter
    if (isNew) {
      const thirtyDaysAgo = new Date();
      thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
      result = result.filter(app => new Date(app.createdAt) > thirtyDaysAgo);
    }
    
    // Apply sorting
    switch (sortBy) {
      case 'newest':
        result.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
        break;
      case 'az':
        result.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case 'relevance':
      default:
        // For relevance, sort by popularity score if there's a search term
        if (searchQuery) {
          result.sort((a, b) => {
            const aMatches = [
              a.title,
              a.tagline,
              a.description,
              ...a.features,
              ...a.integrations
            ].filter(item => 
              item.toLowerCase().includes(searchQuery.toLowerCase())
            ).length;
            
            const bMatches = [
              b.title,
              b.tagline,
              b.description,
              ...b.features,
              ...b.integrations
            ].filter(item => 
              item.toLowerCase().includes(searchQuery.toLowerCase())
            ).length;
            
            return bMatches - aMatches || b.popularityScore - a.popularityScore;
          });
        } else {
          result.sort((a, b) => b.popularityScore - a.popularityScore);
        }
        break;
    }
    
    return result;
 }, [searchQuery, selectedCategories, sortBy, isPopular, isNew]);

  // Handle category toggle
  const toggleCategory = (category: string) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter(c => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  // Handle clear filters
  const clearFilters = () => {
    setSearchQuery('');
    setSelectedCategories([]);
    setSortBy('relevance');
    setIsPopular(false);
    setIsNew(false);
  };

  // Check if filters are active
  const hasActiveFilters = searchQuery || selectedCategories.length > 0 || isPopular || isNew;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-950 to-black text-white">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 text-center"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Explore our apps — lifetime free
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            All tools are forever free — try anything, no signup required.
          </p>
        </motion.div>

        {/* Search and Filters */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-8"
        >
          <div className="flex flex-col md:flex-row gap-4 items-center">
            {/* Search Input */}
            <div className="relative flex-1 w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-4 h-4" />
              <Input
                type="text"
                placeholder="Search apps, features, keywords..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 w-full bg-gray-800 border-gray-700 text-white placeholder:text-gray-500 focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Sort Dropdown - Desktop */}
            <div className="hidden md:block">
              <Select value={sortBy} onValueChange={(value: 'relevance' | 'newest' | 'az') => setSortBy(value)}>
                <SelectTrigger className="w-[180px] bg-gray-800 border-gray-700 text-white">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent className="bg-gray-800 border-gray-70 text-white">
                  <SelectItem value="relevance">Relevance</SelectItem>
                  <SelectItem value="newest">Newest</SelectItem>
                  <SelectItem value="az">A to Z</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Mobile Filter Button */}
            <Dialog open={isMobileFilterOpen} onOpenChange={setIsMobileFilterOpen}>
              <DialogTrigger asChild>
                <Button 
                  variant="outline" 
                  className="md:hidden flex items-center gap-2 bg-gray-800 border-gray-700 text-white hover:bg-gray-700"
                >
                  <Filter className="w-4 h-4" />
                  Filters
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md bg-gray-900 border-gray-800">
                <DialogHeader>
                  <DialogTitle className="text-white">Filters</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div>
                    <h3 className="text-sm font-medium text-gray-300 mb-2">Categories</h3>
                    <div className="flex flex-wrap gap-2">
                      {categories.map(category => (
                        <div key={category} className="flex items-center space-x-2">
                          <Checkbox
                            id={`cat-${category}`}
                            checked={selectedCategories.includes(category)}
                            onCheckedChange={() => toggleCategory(category)}
                          />
                          <label 
                            htmlFor={`cat-${category}`} 
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-300"
                          >
                            {category}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div>
                    <h3 className="text-sm font-medium text-gray-300 mb-2">Sort By</h3>
                    <div className="flex flex-col gap-2">
                      {(['relevance', 'newest', 'az'] as const).map(option => (
                        <div key={option} className="flex items-center space-x-2">
                          <Checkbox
                            id={`sort-${option}`}
                            checked={sortBy === option}
                            onCheckedChange={() => {
                              setSortBy(option);
                              setIsMobileFilterOpen(false);
                            }}
                          />
                          <label 
                            htmlFor={`sort-${option}`} 
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-300 capitalize"
                          >
                            {option === 'az' ? 'A to Z' : option}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div>
                    <h3 className="text-sm font-medium text-gray-300 mb-2">Toggles</h3>
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="popular"
                          checked={isPopular}
                          onCheckedChange={(checked) => setIsPopular(!!checked)}
                        />
                        <label 
                          htmlFor="popular" 
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-30"
                        >
                          Popular
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="new"
                          checked={isNew}
                          onCheckedChange={(checked) => setIsNew(!!checked)}
                        />
                        <label 
                          htmlFor="new" 
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-30"
                        >
                          New
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>

            {/* Sort Dropdown - Mobile */}
            <div className="md:hidden w-full">
              <Select value={sortBy} onValueChange={(value: 'relevance' | 'newest' | 'az') => setSortBy(value)}>
                <SelectTrigger className="w-full bg-gray-800 border-gray-700 text-white">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent className="bg-gray-800 border-gray-70 text-white">
                  <SelectItem value="relevance">Relevance</SelectItem>
                  <SelectItem value="newest">Newest</SelectItem>
                  <SelectItem value="az">A to Z</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Category Chips - Desktop */}
          <div className="hidden md:flex flex-wrap gap-2 mt-4">
            {categories.map(category => (
              <Badge
                key={category}
                variant="outline"
                className={`cursor-pointer transition-all ${
                  selectedCategories.includes(category)
                    ? 'bg-blue-600 border-blue-600 text-white'
                    : 'bg-gray-800 border-gray-700 text-gray-300 hover:bg-gray-700'
                }`}
                onClick={() => toggleCategory(category)}
              >
                {category}
                {selectedCategories.includes(category) && (
                  <X className="ml-1 h-3 w-3" />
                )}
              </Badge>
            ))}
            
            <Badge
              variant="outline"
              className={`cursor-pointer transition-all ${
                isPopular
                  ? 'bg-purple-600 border-purple-600 text-white'
                  : 'bg-gray-800 border-gray-700 text-gray-300 hover:bg-gray-700'
              }`}
              onClick={() => setIsPopular(!isPopular)}
            >
              Popular
              {isPopular && <X className="ml-1 h-3 w-3" />}
            </Badge>
            
            <Badge
              variant="outline"
              className={`cursor-pointer transition-all ${
                isNew
                  ? 'bg-green-600 border-green-600 text-white'
                  : 'bg-gray-800 border-gray-700 text-gray-300 hover:bg-gray-700'
              }`}
              onClick={() => setIsNew(!isNew)}
            >
              New
              {isNew && <X className="ml-1 h-3 w-3" />}
            </Badge>
          </div>

          {/* Active Filters */}
          {hasActiveFilters && (
            <div className="flex flex-wrap items-center gap-2 mt-4 p-3 bg-gray-800/50 rounded-lg">
              <span className="text-sm text-gray-400">Active filters:</span>
              {searchQuery && (
                <Badge variant="secondary" className="bg-blue-900/30 text-blue-300">
                  Search: {searchQuery}
                  <button 
                    onClick={() => setSearchQuery('')} 
                    className="ml-2 text-blue-400 hover:text-white"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </Badge>
              )}
              {selectedCategories.map(category => (
                <Badge key={category} variant="secondary" className="bg-blue-900/30 text-blue-300">
                  {category}
                  <button 
                    onClick={() => toggleCategory(category)} 
                    className="ml-2 text-blue-400 hover:text-white"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </Badge>
              ))}
              {isPopular && (
                <Badge variant="secondary" className="bg-purple-900/30 text-purple-300">
                  Popular
                  <button 
                    onClick={() => setIsPopular(false)} 
                    className="ml-2 text-purple-400 hover:text-white"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </Badge>
              )}
              {isNew && (
                <Badge variant="secondary" className="bg-green-900/30 text-green-300">
                  New
                  <button 
                    onClick={() => setIsNew(false)} 
                    className="ml-2 text-green-400 hover:text-white"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </Badge>
              )}
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={clearFilters}
                className="text-xs text-gray-400 hover:text-white hover:bg-gray-700/50"
              >
                Clear all
              </Button>
            </div>
          )}
        </motion.div>

        {/* Results Count */}
        <div className="mb-6 flex justify-between items-center">
          <p className="text-gray-400">
            {filteredApps.length} {filteredApps.length === 1 ? 'app' : 'apps'} found
          </p>
        </div>

        {/* Apps Grid */}
        {filteredApps.length > 0 ? (
          <motion.div 
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            <AnimatePresence>
              {filteredApps.map((app, index) => (
                <motion.div
                  key={app.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  whileHover={{ y: -6 }}
                  className="cursor-pointer"
                >
                  <Link to={app.landingUrl} className="block h-full">
                    <Card 
                      className="h-full flex-col bg-gray-800/50 border-gray-700 hover:border-gray-60 transition-all duration-300 overflow-hidden group"
                      role="button"
                      tabIndex={0}
                      aria-label={`Open ${app.title} — ${app.tagline}`}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          console.log('App opened:', { 
                            app_id: app.id, 
                            title: app.title, 
                            category: app.category 
                          });
                        }
                      }}
                    >
                      <CardContent className="p-5 flex flex-col h-full">
                        <div className="flex items-start gap-4 mb-4">
                          <div className="bg-gray-700 rounded-lg p-2 flex-shrink-0">
                            <img 
                              src={app.icon} 
                              alt={app.iconAlt} 
                              className="w-12 h-12 object-contain"
                              loading="lazy"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-1">
                              <h3 className="font-bold text-lg text-white truncate">{app.title}</h3>
                              {new Date(app.createdAt) > new Date(Date.now() - 30 * 24 * 60 * 1000) && (
                                <Badge variant="secondary" className="bg-green-900/30 text-green-400 text-xs">
                                  New
                                </Badge>
                              )}
                            </div>
                            <p className="text-sm text-gray-400 mb-2">{app.tagline}</p>
                          </div>
                        </div>
                        
                        <p className="text-gray-300 text-sm mb-4 line-clamp-2 flex-grow">
                          {app.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-1 mb-4">
                          {app.lifetimeFree && (
                            <Badge className="bg-green-900/30 text-green-400 text-xs">
                              Lifetime Free
                            </Badge>
                          )}
                          <Badge variant="secondary" className="bg-blue-900/30 text-blue-400 text-xs">
                            {app.category}
                          </Badge>
                        </div>
                        
                        <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                          <div className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            <span>{app.timeToValue}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            {app.integrations.slice(0, 2).map((integration, idx) => (
                              <div key={idx} className="flex items-center gap-1">
                                {idx > 0 && <span>•</span>}
                                <span>{integration}</span>
                              </div>
                            ))}
                            {app.integrations.length > 2 && (
                              <span>+{app.integrations.length - 2}</span>
                            )}
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between mt-auto pt-3 border-t border-gray-700">
                          <div className="flex items-center gap-1 text-gray-50">
                            <Star className="w-3 h-3 fill-current" />
                            <span>{app.popularityScore}</span>
                          </div>
                          <div className="opacity-0 group-hover:opacity-100 transition-opacity flex items-center text-blue-400">
                            <span className="text-sm mr-1">Open</span>
                            <ArrowRight className="w-4 h-4" />
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        ) : (
          // Empty state
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <div className="text-gray-500 text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-medium text-gray-300 mb-2">No apps match that search</h3>
            <p className="text-gray-500 mb-6">Try different keywords or clear filters</p>
            <Button 
              variant="outline" 
              onClick={clearFilters}
              className="border-gray-700 text-gray-300 hover:bg-gray-800"
            >
              Clear filters
            </Button>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default AppsGallery;
