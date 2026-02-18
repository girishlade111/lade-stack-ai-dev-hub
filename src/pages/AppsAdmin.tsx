import React, { useState } from 'react';
import SEO from "@/components/SEO";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Plus, Trash2, Save, Upload } from 'lucide-react';
import appsData from '@/data/apps.json';

const AppsAdmin: React.FC = () => {
  const [apps, setApps] = useState(appsData);
  const [currentApp, setCurrentApp] = useState({
    id: '',
    slug: '',
    title: '',
    tagline: '',
    description: '',
    icon: '',
    category: '',
    features: [] as string[],
    timeToValue: '',
    integrations: [] as string[],
    lifetimeFree: true,
    landingUrl: '',
    createdAt: new Date().toISOString().split('T')[0],
    popularityScore: 50,
    iconAlt: ''
  });
  const [newFeature, setNewFeature] = useState('');
  const [newIntegration, setNewIntegration] = useState('');
  const [message, setMessage] = useState('');

  // Handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setCurrentApp(prev => ({ ...prev, [name]: value }));
  };

  // Handle checkbox changes
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setCurrentApp(prev => ({ ...prev, [name]: checked }));
  };

  // Add a new feature
  const addFeature = () => {
    if (newFeature.trim() && !currentApp.features.includes(newFeature.trim())) {
      setCurrentApp(prev => ({
        ...prev,
        features: [...prev.features, newFeature.trim()]
      }));
      setNewFeature('');
    }
  };

  // Remove a feature
  const removeFeature = (index: number) => {
    setCurrentApp(prev => ({
      ...prev,
      features: prev.features.filter((_, i) => i !== index)
    }));
  };

  // Add a new integration
  const addIntegration = () => {
    if (newIntegration.trim() && !currentApp.integrations.includes(newIntegration.trim())) {
      setCurrentApp(prev => ({
        ...prev,
        integrations: [...prev.integrations, newIntegration.trim()]
      }));
      setNewIntegration('');
    }
  };

  // Remove an integration
  const removeIntegration = (index: number) => {
    setCurrentApp(prev => ({
      ...prev,
      integrations: prev.integrations.filter((_, i) => i !== index)
    }));
  };

  // Add the current app to the list
  const addApp = () => {
    if (!currentApp.title || !currentApp.slug) {
      setMessage('Title and slug are required');
      return;
    }

    // Generate ID if not provided
    const newApp = {
      ...currentApp,
      id: currentApp.id || `app-${Date.now()}`
    };

    setApps(prev => [...prev, newApp]);
    setMessage('App added successfully');

    // Reset form
    setCurrentApp({
      id: '',
      slug: '',
      title: '',
      tagline: '',
      description: '',
      icon: '',
      category: '',
      features: [],
      timeToValue: '',
      integrations: [],
      lifetimeFree: true,
      landingUrl: '',
      createdAt: new Date().toISOString().split('T')[0],
      popularityScore: 50,
      iconAlt: ''
    });
  };

  // Save all apps to JSON (in a real app, this would be an API call)
  const saveApps = () => {
    // In a real implementation, this would save to a backend API
    // For now, we'll just show a message
    setMessage('Apps saved successfully! (In a real app, this would save to a database)');

    // Create a downloadable JSON file
    const dataStr = JSON.stringify(apps, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,' + encodeURIComponent(dataStr);

    const exportFileDefaultName = 'apps.json';

    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
  };

  // Remove an app
  const removeApp = (index: number) => {
    setApps(prev => prev.filter((_, i) => i !== index));
    setMessage('App removed successfully');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-950 to-black text-white p-6 relative overflow-hidden">
      {/* Gradient overlays */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-[20%] w-[600px] h-[450px] bg-[radial-gradient(ellipse_at_center,_rgba(110,143,106,0.10),_transparent_60%)]" />
        <div className="absolute top-[50%] right-0 w-[500px] h-[400px] bg-[radial-gradient(ellipse_at_center,_rgba(139,175,135,0.06),_transparent_55%)]" />
      </div>
      <SEO title="Apps Admin Dashboard - Lade Stack" />
      <div className="max-w-6xl mx-auto relative z-10">
        <h1 className="text-3xl font-bold mb-8 text-center">Apps Admin Dashboard</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Add App Form */}
          <Card className="bg-gray-800/50 border-gray-700">
            <CardHeader>
              <CardTitle className="text-xl">Add New App</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="title">App Title *</Label>
                <Input
                  id="title"
                  name="title"
                  value={currentApp.title}
                  onChange={handleInputChange}
                  placeholder="Enter app title"
                  className="bg-gray-700 border-gray-600 text-white"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="slug">App Slug *</Label>
                <Input
                  id="slug"
                  name="slug"
                  value={currentApp.slug}
                  onChange={handleInputChange}
                  placeholder="Enter app slug (e.g. api-testing)"
                  className="bg-gray-700 border-gray-600 text-white"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="tagline">Tagline</Label>
                <Input
                  id="tagline"
                  name="tagline"
                  value={currentApp.tagline}
                  onChange={handleInputChange}
                  placeholder="Enter app tagline"
                  className="bg-gray-700 border-gray-600 text-white"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  name="description"
                  value={currentApp.description}
                  onChange={handleInputChange}
                  placeholder="Enter app description"
                  className="bg-gray-700 border-gray-600 text-white min-h-[100px]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="icon">Icon Path</Label>
                <Input
                  id="icon"
                  name="icon"
                  value={currentApp.icon}
                  onChange={handleInputChange}
                  placeholder="Enter icon path (e.g. /api-testing-project.svg)"
                  className="bg-gray-700 border-gray-600 text-white"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="category">Category</Label>
                <Input
                  id="category"
                  name="category"
                  value={currentApp.category}
                  onChange={handleInputChange}
                  placeholder="Enter category (e.g. API, No-Code, Productivity)"
                  className="bg-gray-700 border-gray-600 text-white"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="timeToValue">Time to Value</Label>
                <Input
                  id="timeToValue"
                  name="timeToValue"
                  value={currentApp.timeToValue}
                  onChange={handleInputChange}
                  placeholder="Enter time (e.g. 5 min)"
                  className="bg-gray-700 border-gray-600 text-white"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="landingUrl">Landing URL</Label>
                <Input
                  id="landingUrl"
                  name="landingUrl"
                  value={currentApp.landingUrl}
                  onChange={handleInputChange}
                  placeholder="Enter landing page URL (e.g. /projects/api-testing)"
                  className="bg-gray-700 border-gray-600 text-white"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="popularityScore">Popularity Score (0-100)</Label>
                <Input
                  id="popularityScore"
                  name="popularityScore"
                  type="number"
                  min="0"
                  max="100"
                  value={currentApp.popularityScore}
                  onChange={handleInputChange}
                  className="bg-gray-700 border-gray-600 text-white"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="iconAlt">Icon Alt Text</Label>
                <Input
                  id="iconAlt"
                  name="iconAlt"
                  value={currentApp.iconAlt}
                  onChange={handleInputChange}
                  placeholder="Enter alt text for icon"
                  className="bg-gray-700 border-gray-600 text-white"
                />
              </div>

              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="lifetimeFree"
                  name="lifetimeFree"
                  checked={currentApp.lifetimeFree}
                  onChange={handleCheckboxChange}
                  className="h-4 w-4 text-blue-600 rounded bg-gray-700 border-gray-600"
                />
                <Label htmlFor="lifetimeFree">Lifetime Free</Label>
              </div>

              {/* Features */}
              <div className="space-y-2">
                <Label>Features</Label>
                <div className="flex gap-2">
                  <Input
                    value={newFeature}
                    onChange={(e) => setNewFeature(e.target.value)}
                    placeholder="Add a feature"
                    className="bg-gray-700 border-gray-600 text-white"
                  />
                  <Button type="button" onClick={addFeature} size="sm" className="bg-blue-600 hover:bg-blue-700">
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>
                <div className="flex flex-wrap gap-2 mt-2">
                  {currentApp.features.map((feature, index) => (
                    <Badge key={index} variant="secondary" className="bg-blue-900/30 text-blue-400">
                      {feature}
                      <button
                        type="button"
                        onClick={() => removeFeature(index)}
                        className="ml-2 text-blue-400 hover:text-white"
                      >
                        <Trash2 className="w-3 h-3" />
                      </button>
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Integrations */}
              <div className="space-y-2">
                <Label>Integrations</Label>
                <div className="flex gap-2">
                  <Input
                    value={newIntegration}
                    onChange={(e) => setNewIntegration(e.target.value)}
                    placeholder="Add an integration"
                    className="bg-gray-700 border-gray-600 text-white"
                  />
                  <Button type="button" onClick={addIntegration} size="sm" className="bg-blue-600 hover:bg-blue-700">
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>
                <div className="flex flex-wrap gap-2 mt-2">
                  {currentApp.integrations.map((integration, index) => (
                    <Badge key={index} variant="secondary" className="bg-purple-900/30 text-purple-400">
                      {integration}
                      <button
                        type="button"
                        onClick={() => removeIntegration(index)}
                        className="ml-2 text-purple-400 hover:text-white"
                      >
                        <Trash2 className="w-3 h-3" />
                      </button>
                    </Badge>
                  ))}
                </div>
              </div>

              <Button onClick={addApp} className="w-full bg-green-600 hover:bg-green-700">
                <Plus className="w-4 h-4 mr-2" />
                Add App
              </Button>
            </CardContent>
          </Card>

          {/* Apps List */}
          <Card className="bg-gray-800/50 border-gray-700">
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle className="text-xl">Current Apps ({apps.length})</CardTitle>
                <Button onClick={saveApps} className="bg-blue-600 hover:bg-blue-700">
                  <Save className="w-4 h-4 mr-2" />
                  Save Changes
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              {message && (
                <div className="mb-4 p-3 bg-blue-900/30 text-blue-300 rounded-lg">
                  {message}
                </div>
              )}

              <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2">
                {apps.map((app, index) => (
                  <Card key={index} className="bg-gray-700/50 border-gray-600">
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start">
                        <div className="flex-1 min-w-0">
                          <h3 className="font-bold text-lg truncate">{app.title}</h3>
                          <p className="text-sm text-gray-400 truncate">{app.tagline}</p>
                          <p className="text-sm text-gray-300 mt-1 line-clamp-2">{app.description}</p>

                          <div className="flex flex-wrap gap-1 mt-2">
                            <Badge variant="secondary" className="bg-green-900/30 text-green-400 text-xs">
                              {app.category}
                            </Badge>
                            {app.lifetimeFree && (
                              <Badge variant="secondary" className="bg-blue-900/30 text-blue-400 text-xs">
                                Lifetime Free
                              </Badge>
                            )}
                          </div>

                          <div className="flex flex-wrap gap-1 mt-2">
                            {app.features.slice(0, 2).map((feature, idx) => (
                              <Badge key={idx} variant="outline" className="text-xs">
                                {feature}
                              </Badge>
                            ))}
                            {app.features.length > 2 && (
                              <Badge variant="outline" className="text-xs">
                                +{app.features.length - 2} more
                              </Badge>
                            )}
                          </div>
                        </div>

                        <Button
                          variant="destructive"
                          size="sm"
                          onClick={() => removeApp(index)}
                          className="ml-4 flex-shrink-0"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AppsAdmin;
