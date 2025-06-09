import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Link from 'next/link';

export default function SlideLandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/3 -left-40 w-96 h-96 bg-purple-500/15 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between px-6 py-6 lg:px-12">
        <div className="flex items-center space-x-3">
          <div className="w-9 h-9 bg-white rounded-xl flex items-center justify-center shadow-lg">
            <div className="w-4 h-5 bg-slate-900 rounded-sm flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-sm"></div>
            </div>
          </div>
          <span className="text-white text-2xl font-bold tracking-tight">Slide</span>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <Button variant="ghost" className="text-slate-300 hover:text-white hover:bg-white/10">
            Features
          </Button>
          <Button variant="ghost" className="text-slate-300 hover:text-white hover:bg-white/10">
            Pricing
          </Button>
          <Button variant="ghost" className="text-slate-300 hover:text-white hover:bg-white/10">
            About
          </Button>
        </div>
        
        <Button className="bg-white text-slate-900 hover:bg-slate-100 font-semibold shadow-lg">
          <Link href={'/dashboard'}>Login</Link>
        </Button>
      </nav>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center px-6 py-12 lg:py-20">
        <div className="max-w-5xl text-center">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-tight mb-8 tracking-tight">
            Transform Your
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400">
              Instagram
            </span>{' '}
            Engagement
            <br />
            <span className="text-blue-400">with Slide</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto mb-12 leading-relaxed font-light">
            Slide revolutionizes how you connect with your audience on Instagram. Automate 
            responses and boost engagement effortlessly, turning interactions into valuable business 
            opportunities.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 text-lg shadow-xl hover:shadow-2xl transition-all transform hover:scale-105"
            >
              Get Started
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white hover:text-slate-900 font-semibold px-8 py-4 text-lg shadow-xl hover:shadow-2xl transition-all transform hover:scale-105"
            >
              Learn More
            </Button>
          </div>
        </div>

        {/* Profile Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {/* Profile Card 1 */}
          <Card className="relative group cursor-pointer border-0 bg-gradient-to-br from-slate-400/20 to-slate-600/20 backdrop-blur-sm overflow-hidden">
            <div className="aspect-[3/4] bg-gradient-to-br from-slate-300 to-slate-500 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse shadow-lg"></div>
                <div className="text-white text-sm font-medium">Active</div>
              </div>
              <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-all duration-300"></div>
            </div>
          </Card>

          {/* Profile Card 2 */}
          <Card className="relative group cursor-pointer border-0 bg-gradient-to-br from-blue-400/20 to-blue-600/20 backdrop-blur-sm overflow-hidden">
            <div className="aspect-[3/4] bg-gradient-to-br from-blue-400 to-blue-600 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 flex items-center space-x-2">
                <div className="w-3 h-3 bg-blue-300 rounded-full animate-pulse shadow-lg"></div>
                <div className="text-white text-sm font-medium">Engaging</div>
              </div>
              <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-all duration-300"></div>
            </div>
          </Card>

          {/* Profile Card 3 */}
          <Card className="relative group cursor-pointer border-0 bg-gradient-to-br from-purple-400/20 to-pink-500/20 backdrop-blur-sm overflow-hidden">
            <div className="aspect-[3/4] bg-gradient-to-br from-purple-400 to-pink-500 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 flex items-center space-x-2">
                <div className="w-3 h-3 bg-pink-300 rounded-full animate-pulse shadow-lg"></div>
                <div className="text-white text-sm font-medium">Trending</div>
              </div>
              <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-all duration-300"></div>
            </div>
          </Card>

          {/* Profile Card 4 */}
          <Card className="relative group cursor-pointer border-0 bg-gradient-to-br from-teal-400/20 to-cyan-500/20 backdrop-blur-sm overflow-hidden">
            <div className="aspect-[3/4] bg-gradient-to-br from-teal-400 to-cyan-500 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 flex items-center space-x-2">
                <div className="w-3 h-3 bg-cyan-300 rounded-full animate-pulse shadow-lg"></div>
                <div className="text-white text-sm font-medium">Growing</div>
              </div>
              <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-all duration-300"></div>
            </div>
          </Card>
        </div>
      </div>

      {/* Settings Button */}
      <div className="fixed bottom-6 right-6 z-20">
        <Button 
          variant="secondary" 
          className="bg-slate-800/80 backdrop-blur-sm text-white hover:bg-slate-700/80 shadow-xl border border-slate-600/50"
        >
          Settings
        </Button>
      </div>
    </div>
  );
}