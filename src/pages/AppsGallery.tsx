import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SEO from "@/components/SEO";
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
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowLeft } from 'lucide-react';

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
    <>
      <SEO
        title="Apps Gallery – Free Developer Tools Collection | Lade Stack"
        description="Discover Lade Stack's collection of lifetime-free developer tools. AI code editors, API testers, file managers, and more — all free, forever."
        keywords="free developer tools, apps gallery, AI tools collection, open source developer apps, web development tools, Lade Stack free apps"
        ogTitle="Apps Gallery – Free Tools by Lade Stack"
        ogDescription="Lifetime-free developer tools: AI code editors, API testers, file managers, and more."
        structuredData={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "name": "Lade Stack Apps Gallery",
          "url": "https://ladestack.in/apps",
          "description": "Collection of free developer tools by Lade Stack."
        }}
      />
      <Header />
      <main className="min-h-screen bg-background pt-14 sm:pt-16 lg:pt-20 relative overflow-hidden">
        {/* Dark theme gradient overlays */}
        <div className="absolute inset-0 hidden dark:block pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[radial-gradient(ellipse_at_center,_rgba(110,143,106,0.11),_transparent_60%)]" />
          <div className="absolute top-[45%] right-0 w-[500px] h-[400px] bg-[radial-gradient(ellipse_at_center,_rgba(139,175,135,0.06),_transparent_55%)]" />
          <div className="absolute bottom-0 left-[10%] w-[500px] h-[350px] bg-[radial-gradient(ellipse_at_center,_rgba(110,143,106,0.05),_transparent_50%)]" />
        </div>
        <div className="container mx-auto px-5 sm:px-6 lg:px-8 py-8 relative z-10">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-10 text-center"
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4 leading-tight">
              Apps Gallery
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Discover our collection of lifetime-free tools designed to enhance your development workflow.
            </p>
          </motion.div>

          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="mb-6"
          >
            <Button
              variant="ghost"
              size="sm"
              onClick={() => window.history.back()}
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all duration-200 h-10 px-4 rounded-lg"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm font-medium">Back</span>
            </Button>
          </motion.div>

          {/* Search and Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-10"
          >
            <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 items-center">
              {/* Search Input */}
              <div className="relative flex-1 w-full">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-4 w-4 sm:h-5 sm:w-5 text-muted-foreground" />
                </div>
                <Input
                  type="text"
                  placeholder="Search apps, features, or keywords..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full h-10 sm:h-12 lg:h-14 pl-10 sm:pl-12 text-sm sm:text-base rounded-lg border-border bg-background text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary/20 focus:border-primary"
                />
              </div>

              {/* Sort and View Controls */}
              <div className="flex items-center gap-2 sm:gap-3 lg:gap-4">
                {/* Sort Dropdown */}
                <Select value={sortBy} onValueChange={(value: 'relevance' | 'newest' | 'az') => setSortBy(value)}>
                  <SelectTrigger className="w-[140px] sm:w-[160px] lg:w-[180px] h-10 sm:h-12 lg:h-14 text-sm sm:text-base rounded-lg border-border bg-background text-foreground">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent className="bg-background border-border">
                    <SelectItem value="relevance">Most Relevant</SelectItem>
                    <SelectItem value="newest">Newest</SelectItem>
                    <SelectItem value="az">A to Z</SelectItem>
                  </SelectContent>
                </Select>

                {/* View Toggle */}
                <div className="flex bg-muted rounded-lg p-1 border border-border">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setViewMode('grid')}
                    className={`h-8 sm:h-10 lg:h-12 w-8 sm:w-10 lg:w-12 rounded-md transition-fast ${viewMode === 'grid' ? 'bg-background text-foreground shadow-sm' : 'text-muted-foreground hover:text-foreground'
                      }`}
                  >
                    <Grid className="h-4 w-4 sm:h-5 sm:w-5" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setViewMode('list')}
                    className={`h-8 sm:h-10 lg:h-12 w-8 sm:w-10 lg:w-12 rounded-md transition-fast ${viewMode === 'list' ? 'bg-background text-foreground shadow-sm' : 'text-muted-foreground hover:text-foreground'
                      }`}
                  >
                    <List className="h-4 w-4 sm:h-5 sm:w-5" />
                  </Button>
                </div>

                {/* Mobile Filter Button */}
                <Dialog open={isMobileFilterOpen} onOpenChange={setIsMobileFilterOpen}>
                  <DialogTrigger asChild>
                    <Button
                      variant="outline"
                      className="lg:hidden flex items-center gap-2 h-10 sm:h-12 lg:h-14 px-3 sm:px-4 rounded-lg border-border bg-background text-foreground hover:bg-muted"
                    >
                      <SlidersHorizontal className="w-4 h-4 sm:w-5 sm:h-5" />
                      <span className="text-sm sm:text-base">Filters</span>
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-md bg-background border-border">
                    <DialogHeader>
                      <DialogTitle className="text-foreground">Filters</DialogTitle>
                    </DialogHeader>
                    <div className="grid gap-6 py-4">
                      <div>
                        <h3 className="text-sm font-medium text-foreground mb-3">Categories</h3>
                        <div className="flex flex-wrap gap-2">
                          {categories.map(category => (
                            <div key={category} className="flex items-center space-x-2">
                              <Checkbox
                                id={`cat-${category}`}
                                checked={selectedCategories.includes(category)}
                                onCheckedChange={() => toggleCategory(category)}
                                className="border-border data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
                              />
                              <label
                                htmlFor={`cat-${category}`}
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-foreground"
                              >
                                {category}
                              </label>
                            </div>
                          ))}
                        </div>
                      </div>

                      <Separator className="bg-border" />

                      <div>
                        <h3 className="text-sm font-medium text-foreground mb-3">Special Filters</h3>
                        <div className="flex flex-col gap-3">
                          <div className="flex items-center space-x-3">
                            <Checkbox
                              id="popular"
                              checked={isPopular}
                              onCheckedChange={(checked) => setIsPopular(!!checked)}
                              className="border-border data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
                            />
                            <label
                              htmlFor="popular"
                              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-foreground"
                            >
                              Popular
                            </label>
                          </div>
                          <div className="flex items-center space-x-3">
                            <Checkbox
                              id="new"
                              checked={isNew}
                              onCheckedChange={(checked) => setIsNew(!!checked)}
                              className="border-border data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
                            />
                            <label
                              htmlFor="new"
                              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-foreground"
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
                  className={`cursor-pointer transition-all h-9 px-4 text-sm rounded-full border ${selectedCategories.includes(category)
                    ? 'bg-primary border-primary text-primary-foreground'
                    : 'bg-background border-border text-foreground hover:bg-muted'
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
                className={`cursor-pointer transition-all h-9 px-4 text-sm rounded-full border ${isPopular
                  ? 'bg-primary border-primary text-primary-foreground'
                  : 'bg-background border-border text-foreground hover:bg-muted'
                  }`}
                onClick={() => setIsPopular(!isPopular)}
              >
                Popular
                {isPopular && <X className="ml-2 h-4 w-4" />}
              </Badge>

              <Badge
                variant="outline"
                className={`cursor-pointer transition-all h-9 px-4 text-sm rounded-full border ${isNew
                  ? 'bg-primary border-primary text-primary-foreground'
                  : 'bg-background border-border text-foreground hover:bg-muted'
                  }`}
                onClick={() => setIsNew(!isNew)}
              >
                New
                {isNew && <X className="ml-2 h-4 w-4" />}
              </Badge>
            </div>

            {/* Active Filters */}
            {hasActiveFilters && (
              <div className="flex flex-wrap items-center gap-3 mt-6 p-4 bg-muted/50 rounded-lg border border-border">
                <span className="text-sm text-muted-foreground">Active filters:</span>
                {searchQuery && (
                  <Badge variant="secondary" className="bg-primary/10 text-primary h-8 px-3 rounded-full">
                    Search: "{searchQuery}"
                    <button
                      onClick={() => setSearchQuery('')}
                      className="ml-2 text-primary hover:text-primary/80"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </Badge>
                )}
                {selectedCategories.map(category => (
                  <Badge key={category} variant="secondary" className="bg-primary/10 text-primary h-8 px-3 rounded-full">
                    {category}
                    <button
                      onClick={() => toggleCategory(category)}
                      className="ml-2 text-primary hover:text-primary/80"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </Badge>
                ))}
                {isPopular && (
                  <Badge variant="secondary" className="bg-primary/10 text-primary h-8 px-3 rounded-full">
                    Popular
                    <button
                      onClick={() => setIsPopular(false)}
                      className="ml-2 text-primary hover:text-primary/80"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </Badge>
                )}
                {isNew && (
                  <Badge variant="secondary" className="bg-primary/10 text-primary h-8 px-3 rounded-full">
                    New
                    <button
                      onClick={() => setIsNew(false)}
                      className="ml-2 text-primary hover:text-primary/80"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </Badge>
                )}
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={clearFilters}
                  className="text-xs text-muted-foreground hover:text-foreground hover:bg-muted h-8 px-3 rounded-full"
                >
                  Clear all
                </Button>
              </div>
            )}
          </motion.div>

          {/* Results Count */}
          <div className="mb-6 flex justify-between items-center">
            <p className="text-sm sm:text-base text-muted-foreground">
              Showing <span className="text-foreground font-medium">{filteredApps.length}</span> {filteredApps.length === 1 ? 'app' : 'apps'}
            </p>
          </div>

          {/* Apps Grid/List */}
          {filteredApps.length > 0 ? (
            <motion.div
              layout
              className={
                viewMode === 'grid'
                  ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8"
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
                    whileHover={{ y: -4 }}
                    className="cursor-pointer"
                  >
                    <Link to={app.landingUrl} className="block h-full">
                      <Card
                        className="h-full flex flex-col bg-background border-border hover:border-primary/50 transition-all duration-300 overflow-hidden group rounded-lg shadow-sm hover:shadow-md"
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
                          <div className="flex items-start gap-4 mb-4">
                            <div className="bg-muted rounded-lg p-2.5 flex-shrink-0">
                              <img
                                src={app.icon}
                                alt={app.iconAlt}
                                className="w-12 h-12 object-contain"
                                loading="lazy"
                              />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2 mb-1">
                                <h3 className="font-semibold text-lg text-foreground truncate">{app.title}</h3>
                                {new Date(app.createdAt) > new Date(Date.now() - 30 * 24 * 60 * 1000) && (
                                  <Badge variant="secondary" className="bg-green-100 text-green-700 text-xs h-5 px-1.5 rounded-full">
                                    New
                                  </Badge>
                                )}
                              </div>
                              <p className="text-sm text-muted-foreground leading-relaxed">{app.tagline}</p>
                            </div>
                          </div>

                          <p className="text-sm text-muted-foreground mb-4 leading-relaxed flex-grow line-clamp-3">
                            {app.description}
                          </p>

                          <div className="flex flex-wrap gap-2 mb-4">
                            {app.lifetimeFree && (
                              <Badge className="bg-green-100 text-green-700 text-xs h-6 px-2 rounded-full">
                                Lifetime Free
                              </Badge>
                            )}
                            <Badge variant="secondary" className="bg-primary/10 text-primary text-xs h-6 px-2 rounded-full">
                              {app.category}
                            </Badge>
                          </div>

                          <div className="flex items-center justify-between text-xs text-muted-foreground mb-4 pb-3 border-b border-border">
                            <div className="flex items-center gap-1.5">
                              <Clock className="w-3.5 h-3.5" />
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

                          <div className="flex items-center justify-between mt-auto pt-2">
                            <div className="flex items-center gap-1.5 text-muted-foreground">
                              <Star className="w-4 h-4 fill-current text-yellow-400" />
                              <span className="text-sm">{app.popularityScore}</span>
                            </div>
                            <div className="flex items-center text-primary group-hover:text-primary/80 transition-colors">
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
              <div className="text-muted-foreground text-6xl mb-6">🔍</div>
              <h3 className="text-xl font-medium text-foreground mb-3">No apps found</h3>
              <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                We couldn't find any apps matching your search. Try adjusting your filters or search terms.
              </p>
              <Button
                variant="outline"
                onClick={clearFilters}
                className="border-border text-foreground hover:bg-muted h-10 px-6 rounded-lg"
              >
                Clear all filters
              </Button>
            </motion.div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default AppsGallery;
