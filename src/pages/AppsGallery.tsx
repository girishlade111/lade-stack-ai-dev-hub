import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  Clock, 
  Zap, 
  Github, 
  ExternalLink, 
  Filter, 
  X, 
  ChevronDown, 
  ArrowRight, 
  Star,
  Grid,
  List,
  SlidersHorizontal
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger 
} from '@/components/ui/dialog';
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
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-gray-300 to-gray-400 bg-clip-text text-transparent">
            Apps Gallery
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Discover our collection of lifetime-free tools designed to enhance your development workflow.
          </p>
        </motion.div>

        {/* Search and Filters */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-10"
        >
          <div className="flex flex-col lg:flex-row gap-6 items-center">
            {/* Search Input */}
            <div className="relative flex-1 w-full">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-500" />
              </div>
              <Input
                type="text"
                placeholder="Search apps, features, or keywords..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-gray-800/70 border-gray-700 text-white placeholder:text-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent h-14 pl-12 text-lg rounded-xl"
              />
            </div>

            {/* Sort and View Controls */}
            <div className="flex items-center gap-4">
              {/* Sort Dropdown */}
              <Select value={sortBy} onValueChange={(value: 'relevance' | 'newest' | 'az') => setSortBy(value)}>
                <SelectTrigger className="w-[180px] bg-gray-800/70 border-gray-700 text-white h-14 text-base rounded-xl">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent className="bg-gray-800/90 border-gray-700 text-white backdrop-blur-sm">
                  <SelectItem value="relevance">Most Relevant</SelectItem>
                  <SelectItem value="newest">Newest</SelectItem>
                  <SelectItem value="az">A to Z</SelectItem>
                </SelectContent>
              </Select>

              {/* View Toggle */}
              <div className="flex bg-gray-800/70 rounded-xl p-1 border border-gray-700">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setViewMode('grid')}
                  className={`rounded-lg p-3 ${viewMode === 'grid' ? 'bg-gray-700/50 text-white' : 'text-gray-400 hover:text-white'}`}
                >
                  <Grid className="h-5 w-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setViewMode('list')}
                  className={`rounded-lg p-3 ${viewMode === 'list' ? 'bg-gray-700/50 text-white' : 'text-gray-400 hover:text-white'}`}
                >
                  <List className="h-5 w-5" />
                </Button>
              </div>

              {/* Mobile Filter Button */}
              <Dialog open={isMobileFilterOpen} onOpenChange={setIsMobileFilterOpen}>
                <DialogTrigger asChild>
                  <Button 
                    variant="outline" 
                    className="lg:hidden flex items-center gap-2 bg-gray-800/70 border-gray-700 text-white hover:bg-gray-700/50 h-14 px-4 rounded-xl"
                  >
                    <SlidersHorizontal className="w-5 h-5" />
                    Filters
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md bg-gray-900/95 backdrop-blur-xl border-gray-800">
                  <DialogHeader>
                    <DialogTitle className="text-white">Filters</DialogTitle>
                  </DialogHeader>
                  <div className="grid gap-6 py-4">
                    <div>
                      <h3 className="text-sm font-medium text-gray-300 mb-3">Categories</h3>
                      <div className="flex flex-wrap gap-2">
                        {categories.map(category => (
                          <div key={category} className="flex items-center space-x-2">
                            <Checkbox
                              id={`cat-${category}`}
                              checked={selectedCategories.includes(category)}
                              onCheckedChange={() => toggleCategory(category)}
                              className="border-gray-600 data-[state=checked]:bg-blue-600 data-[state=checked]:text-white"
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
                    
                    <Separator className="bg-gray-800" />
                    
                    <div>
                      <h3 className="text-sm font-medium text-gray-300 mb-3">Special Filters</h3>
                      <div className="flex flex-col gap-3">
                        <div className="flex items-center space-x-3">
                          <Checkbox
                            id="popular"
                            checked={isPopular}
                            onCheckedChange={(checked) => setIsPopular(!!checked)}
                            className="border-gray-600 data-[state=checked]:bg-purple-600 data-[state=checked]:text-white"
                          />
                          <label 
                            htmlFor="popular" 
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-300"
                          >
                            Popular
                          </label>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Checkbox
                            id="new"
                            checked={isNew}
                            onCheckedChange={(checked) => setIsNew(!!checked)}
                            className="border-gray-600 data-[state=checked]:bg-green-600 data-[state=checked]:text-white"
                          />
                          <label 
                            htmlFor="new" 
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-300"
                          >
                            New
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>

          {/* Category Chips - Desktop */}
          <div className="hidden lg:flex flex-wrap gap-3 mt-6">
            {categories.map(category => (
              <Badge
                key={category}
                variant="outline"
                className={`cursor-pointer transition-all h-9 px-4 text-sm rounded-full ${
                  selectedCategories.includes(category)
                    ? 'bg-blue-600 border-blue-600 text-white'
                    : 'bg-gray-800/50 border-gray-700 text-gray-300 hover:bg-gray-700/50'
                }`}
                onClick={() => toggleCategory(category)}
              >
                {category}
                {selectedCategories.includes(category) && (
                  <X className="ml-2 h-4 w-4" />
                )}
              </Badge>
            ))}
            
            <Badge
              variant="outline"
              className={`cursor-pointer transition-all h-9 px-4 text-sm rounded-full ${
                isPopular
                  ? 'bg-purple-600 border-purple-600 text-white'
                  : 'bg-gray-800/50 border-gray-700 text-gray-300 hover:bg-gray-700/50'
              }`}
              onClick={() => setIsPopular(!isPopular)}
            >
              Popular
              {isPopular && <X className="ml-2 h-4 w-4" />}
            </Badge>
            
            <Badge
              variant="outline"
              className={`cursor-pointer transition-all h-9 px-4 text-sm rounded-full ${
                isNew
                  ? 'bg-green-600 border-green-600 text-white'
                  : 'bg-gray-800/50 border-gray-700 text-gray-300 hover:bg-gray-700/50'
              }`}
              onClick={() => setIsNew(!isNew)}
            >
              New
              {isNew && <X className="ml-2 h-4 w-4" />}
            </Badge>
          </div>

          {/* Active Filters */}
          {hasActiveFilters && (
            <div className="flex flex-wrap items-center gap-3 mt-6 p-4 bg-gray-800/30 rounded-xl border border-gray-700/50">
              <span className="text-sm text-gray-400">Active filters:</span>
              {searchQuery && (
                <Badge variant="secondary" className="bg-blue-900/30 text-blue-300 h-8 px-3 rounded-full">
                  Search: "{searchQuery}"
                  <button 
                    onClick={() => setSearchQuery('')} 
                    className="ml-2 text-blue-400 hover:text-white"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </Badge>
              )}
              {selectedCategories.map(category => (
                <Badge key={category} variant="secondary" className="bg-blue-900/30 text-blue-300 h-8 px-3 rounded-full">
                  {category}
                  <button 
                    onClick={() => toggleCategory(category)} 
                    className="ml-2 text-blue-400 hover:text-white"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </Badge>
              ))}
              {isPopular && (
                <Badge variant="secondary" className="bg-purple-900/30 text-purple-300 h-8 px-3 rounded-full">
                  Popular
                  <button 
                    onClick={() => setIsPopular(false)} 
                    className="ml-2 text-purple-400 hover:text-white"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </Badge>
              )}
              {isNew && (
                <Badge variant="secondary" className="bg-green-900/30 text-green-300 h-8 px-3 rounded-full">
                  New
                  <button 
                    onClick={() => setIsNew(false)} 
                    className="ml-2 text-green-400 hover:text-white"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </Badge>
              )}
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={clearFilters}
                className="text-xs text-gray-400 hover:text-white hover:bg-gray-700/50 h-8 px-3 rounded-full"
              >
                Clear all
              </Button>
            </div>
          )}
        </motion.div>

        {/* Results Count */}
        <div className="mb-6 flex justify-between items-center">
          <p className="text-gray-400">
            Showing <span className="text-white font-medium">{filteredApps.length}</span> {filteredApps.length === 1 ? 'app' : 'apps'}
          </p>
        </div>

        {/* Apps Grid/List */}
        {filteredApps.length > 0 ? (
          <motion.div 
            layout
            className={
              viewMode === 'grid' 
                ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
                : "grid grid-cols-1 gap-6"
            }
          >
            <AnimatePresence>
              {filteredApps.map((app, index) => (
                <motion.div
                  key={app.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  whileHover={{ y: -8 }}
                  className="cursor-pointer"
                >
                  <Link to={app.landingUrl} className="block h-full">
                    <Card 
                      className="h-full flex flex-col bg-gradient-to-b from-gray-800/40 to-gray-900/50 border border-gray-700/50 hover:border-gray-600/70 transition-all duration-300 overflow-hidden group rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-blue-500/10"
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
                      <CardContent className="p-6 flex flex-col h-full">
                        <div className="flex items-start gap-5 mb-5">
                          <div className="bg-gradient-to-br from-gray-700 to-gray-800 rounded-2xl p-3 flex-shrink-0 shadow-inner">
                            <img 
                              src={app.icon} 
                              alt={app.iconAlt} 
                              className="w-16 h-16 object-contain"
                              loading="lazy"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-3 mb-2">
                              <h3 className="font-bold text-xl text-white truncate">{app.title}</h3>
                              {new Date(app.createdAt) > new Date(Date.now() - 30 * 24 * 60 * 1000) && (
                                <Badge variant="secondary" className="bg-green-900/30 text-green-400 text-xs h-6 px-2 rounded-full">
                                  New
                                </Badge>
                              )}
                            </div>
                            <p className="text-gray-400 text-sm leading-relaxed">{app.tagline}</p>
                          </div>
                        </div>
                        
                        <p className="text-gray-300 text-base mb-5 leading-relaxed flex-grow">
                          {app.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-2 mb-5">
                          {app.lifetimeFree && (
                            <Badge className="bg-gradient-to-r from-green-700 to-emerald-700 text-green-100 text-xs h-6 px-2 rounded-full">
                              Lifetime Free
                            </Badge>
                          )}
                          <Badge variant="secondary" className="bg-blue-900/30 text-blue-400 text-xs h-6 px-2 rounded-full">
                            {app.category}
                          </Badge>
                        </div>
                        
                        <div className="flex items-center justify-between text-sm text-gray-500 mb-5 pb-3 border-b border-gray-800/50">
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4" />
                            <span>{app.timeToValue}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            {app.integrations.slice(0, 2).map((integration, idx) => (
                              <div key={idx} className="flex items-center gap-1">
                                {idx > 0 && <span>•</span>}
                                <span className="text-xs">{integration}</span>
                              </div>
                            ))}
                            {app.integrations.length > 2 && (
                              <span className="text-xs">+{app.integrations.length - 2}</span>
                            )}
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between mt-auto pt-3">
                          <div className="flex items-center gap-2 text-gray-400">
                            <Star className="w-4 h-4 fill-current" />
                            <span>{app.popularityScore}</span>
                          </div>
                          <div className="flex items-center text-blue-400 group-hover:text-blue-300 transition-colors">
                            <span className="text-sm mr-1">Open</span>
                            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
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
            <div className="text-gray-600 text-8xl mb-6">🔍</div>
            <h3 className="text-2xl font-medium text-gray-300 mb-3">No apps found</h3>
            <p className="text-gray-500 mb-8 max-w-md mx-auto">
              We couldn't find any apps matching your search. Try adjusting your filters or search terms.
            </p>
            <Button 
              variant="outline" 
              onClick={clearFilters}
              className="border-gray-700 text-gray-300 hover:bg-gray-800/50 hover:border-gray-600 text-base h-12 px-6 rounded-xl"
            >
              Clear all filters
            </Button>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default AppsGallery;
