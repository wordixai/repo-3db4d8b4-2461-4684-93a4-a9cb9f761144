import React, { useState } from 'react';
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
      description: 'Modular compositions for s',
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
    
    </div>
  );
};

export default Index;
