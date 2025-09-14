import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Play, Code, Zap, Layers, Film, Settings, Download, Eye } from 'lucide-react';

const Index = () => {
  const [projectConfig, setProjectConfig] = useState({
    title: 'Advanced Tech Demo',
    subtitle: 'Dynamic Video Creation with Remotion',
    brandColor: '#00D9FF',
    accentColor: '#FF6B6B',
  });

  const features = [
    {
      icon: <Code className="w-6 h-6" />,
      title: 'Code Animations',
      description: 'Syntax-highlighted code reveals with typewriter effects',
      color: 'bg-blue-500',
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Kinetic Typography',
      description: 'Dynamic text animations with professional easing',
      color: 'bg-yellow-500',
    },
    {
      icon: <Layers className="w-6 h-6" />,
      title: 'Particle Systems',
      description: 'Physics-based animations with realistic motion',
      color: 'bg-purple-500',
    },
    {
      icon: <Film className="w-6 h-6" />,
      title: 'Template System',
      description: 'Modular compositions for different video types',
      color: 'bg-green-500',
    },
  ];

  const templates = [
    { name: 'Tech Product Demo', description: 'Perfect for showcasing software products', duration: '30s' },
    { name: 'API Documentation', description: 'Interactive endpoint demonstrations', duration: '45s' },
    { name: 'Tutorial Series', description: 'Step-by-step coding tutorials', duration: '60s' },
    { name: 'Data Visualization', description: 'Animated charts and metrics', duration: '25s' },
  ];

  return (
    <div className="min-h-screen bg-tech-dark text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="relative container mx-auto px-6 py-24">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex justify-center mb-6">
              <Badge variant="outline" className="px-4 py-2 text-cyan-400 border-cyan-400">
                <Zap className="w-4 h-4 mr-2" />
                Remotion Powered
              </Badge>
            </div>
            
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Dynamic Video Creation
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Create stunning tech-focused videos with advanced animation sequences, 
              syntax highlighting, and physics-based effects. Built with React and Remotion.
            </p>
            
            <div className="flex gap-4 justify-center flex-wrap">
              <Button size="lg" className="bg-cyan-500 hover:bg-cyan-600 text-black font-semibold">
                <Play className="w-5 h-5 mr-2" />
                Start Creating
              </Button>
              <Button size="lg" variant="outline" className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black">
                <Eye className="w-5 h-5 mr-2" />
                View Examples
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="container mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Powerful Animation Features</h2>
          <p className="text-gray-400 text-lg">Everything you need to create professional tech videos</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-gray-800 border-gray-700 hover:border-cyan-400 transition-all duration-300 group">
              <CardHeader>
                <div className={`w-12 h-12 rounded-lg ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  {feature.icon}
                </div>
                <CardTitle className="text-xl text-white">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-400">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Interactive Configuration */}
      <div className="container mx-auto px-6 py-24">
        <Card className="bg-gray-800 border-gray-700 max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl text-white flex items-center">
              <Settings className="w-6 h-6 mr-3" />
              Video Configuration
            </CardTitle>
            <CardDescription>
              Customize your video settings and see the preview in real-time
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="basic" className="w-full">
              <TabsList className="grid w-full grid-cols-3 bg-gray-700">
                <TabsTrigger value="basic">Basic Settings</TabsTrigger>
                <TabsTrigger value="animations">Animations</TabsTrigger>
                <TabsTrigger value="export">Export</TabsTrigger>
              </TabsList>
              
              <TabsContent value="basic" className="mt-6 space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="title" className="text-white">Video Title</Label>
                    <Input
                      id="title"
                      value={projectConfig.title}
                      onChange={(e) => setProjectConfig({...projectConfig, title: e.target.value})}
                      className="bg-gray-700 border-gray-600 text-white mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="subtitle" className="text-white">Subtitle</Label>
                    <Input
                      id="subtitle"
                      value={projectConfig.subtitle}
                      onChange={(e) => setProjectConfig({...projectConfig, subtitle: e.target.value})}
                      className="bg-gray-700 border-gray-600 text-white mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="brandColor" className="text-white">Brand Color</Label>
                    <div className="flex gap-3 mt-2">
                      <Input
                        type="color"
                        id="brandColor"
                        value={projectConfig.brandColor}
                        onChange={(e) => setProjectConfig({...projectConfig, brandColor: e.target.value})}
                        className="w-16 h-10 bg-gray-700 border-gray-600"
                      />
                      <Input
                        value={projectConfig.brandColor}
                        onChange={(e) => setProjectConfig({...projectConfig, brandColor: e.target.value})}
                        className="bg-gray-700 border-gray-600 text-white flex-1"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="accentColor" className="text-white">Accent Color</Label>
                    <div className="flex gap-3 mt-2">
                      <Input
                        type="color"
                        id="accentColor"
                        value={projectConfig.accentColor}
                        onChange={(e) => setProjectConfig({...projectConfig, accentColor: e.target.value})}
                        className="w-16 h-10 bg-gray-700 border-gray-600"
                      />
                      <Input
                        value={projectConfig.accentColor}
                        onChange={(e) => setProjectConfig({...projectConfig, accentColor: e.target.value})}
                        className="bg-gray-700 border-gray-600 text-white flex-1"
                      />
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="animations" className="mt-6">
                <div className="text-center py-8">
                  <h3 className="text-xl font-semibold text-white mb-4">Animation Timeline</h3>
                  <p className="text-gray-400 mb-6">Configure animation sequences and timing</p>
                  <Button variant="outline" className="border-cyan-400 text-cyan-400">
                    Open Timeline Editor
                  </Button>
                </div>
              </TabsContent>
              
              <TabsContent value="export" className="mt-6">
                <div className="space-y-6">
                  <div className="grid md:grid-cols-3 gap-4">
                    <Card className="bg-gray-700 border-gray-600">
                      <CardContent className="p-4 text-center">
                        <h4 className="font-semibold text-white">1080p</h4>
                        <p className="text-sm text-gray-400">Standard HD</p>
                      </CardContent>
                    </Card>
                    <Card className="bg-gray-700 border-gray-600">
                      <CardContent className="p-4 text-center">
                        <h4 className="font-semibold text-white">4K</h4>
                        <p className="text-sm text-gray-400">Ultra HD</p>
                      </CardContent>
                    </Card>
                    <Card className="bg-gray-700 border-gray-600">
                      <CardContent className="p-4 text-center">
                        <h4 className="font-semibold text-white">Mobile</h4>
                        <p className="text-sm text-gray-400">Optimized</p>
                      </CardContent>
                    </Card>
                  </div>
                  <Button className="w-full bg-cyan-500 hover:bg-cyan-600 text-black">
                    <Download className="w-4 h-4 mr-2" />
                    Render Video
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>

      {/* Templates Section */}
      <div className="container mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Video Templates</h2>
          <p className="text-gray-400 text-lg">Pre-built compositions for common use cases</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {templates.map((template, index) => (
            <Card key={index} className="bg-gray-800 border-gray-700 hover:border-cyan-400 transition-all duration-300 cursor-pointer group">
              <CardHeader>
                <CardTitle className="text-lg text-white group-hover:text-cyan-400 transition-colors">
                  {template.name}
                </CardTitle>
                <Badge variant="secondary" className="w-fit">
                  {template.duration}
                </Badge>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-400 mb-4">
                  {template.description}
                </CardDescription>
                <Button variant="outline" size="sm" className="w-full border-gray-600 text-gray-300 hover:border-cyan-400 hover:text-cyan-400">
                  Use Template
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-6 py-24">
        <Card className="bg-gradient-to-r from-cyan-900 to-blue-900 border-cyan-400">
          <CardContent className="text-center py-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Create Amazing Videos?
            </h2>
            <p className="text-cyan-100 mb-8 text-lg">
              Start building your dynamic video content with our powerful Remotion framework
            </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg" className="bg-white text-cyan-900 hover:bg-gray-100">
                <Play className="w-5 h-5 mr-2" />
                Launch Studio
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-cyan-900">
                View Documentation
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;