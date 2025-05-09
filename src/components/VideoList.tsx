
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Video } from "lucide-react";

// Sample video data
const videos = [
  {
    id: 'v1',
    title: 'Creating Ceramic Bowls',
    thumbnailUrl: 'https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    videoId: 'dQw4w9WgXcQ' // Example YouTube video ID
  },
  {
    id: 'v2',
    title: 'Macramé Wall Hanging Tutorial',
    thumbnailUrl: 'https://images.unsplash.com/photo-1582643381669-4db3cc5df9695?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    videoId: 'dQw4w9WgXcQ'
  },
  {
    id: 'v3',
    title: 'Hand-pouring Soy Candles',
    thumbnailUrl: 'https://images.unsplash.com/photo-1603006905003-be475563bc59?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    videoId: 'dQw4w9WgXcQ'
  },
  {
    id: 'v4',
    title: 'Creating Abstract Watercolor Art',
    thumbnailUrl: 'https://images.unsplash.com/photo-1579656381226-5fc0f0100c3b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    videoId: 'dQw4w9WgXcQ'
  }
];

const VideoList = () => {
  return (
    <div id="videos" className="py-12 md:py-16 bg-pastel-green/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-serif font-medium mb-4">Tutorial Videos</h2>
          <p className="text-zinc-600">Watch our artisans in action creating handcrafted treasures</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {videos.map(video => (
            <Card key={video.id} className="overflow-hidden border-zinc-100 transition-all hover:shadow-md hover:scale-[1.02]">
              <CardContent className="p-0">
                <div className="relative aspect-video">
                  <img 
                    src={video.thumbnailUrl} 
                    alt={video.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 hover:opacity-100 transition-opacity">
                    <button className="w-16 h-16 rounded-full bg-white/80 flex items-center justify-center hover:bg-white transition-colors">
                      <Video className="h-7 w-7 text-primary" />
                    </button>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-serif text-lg font-medium">{video.title}</h3>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoList;
