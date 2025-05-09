
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Cross2Icon } from '@radix-ui/react-icons';

// Sample portfolio data
const portfolioItems = [
  {
    id: 'p1',
    title: 'Hand-painted Ceramic Collection',
    description: 'A series of hand-painted ceramic bowls and plates with intricate floral patterns.',
    image: 'https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
  },
  {
    id: 'p2',
    title: 'Natural Fiber Macramé Set',
    description: 'Beautifully crafted macramé wall hangings and planters made from sustainable materials.',
    image: 'https://images.unsplash.com/photo-1582643381669-4db3cc5df9695?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
  },
  {
    id: 'p3',
    title: 'Artisanal Candle Collection',
    description: 'Hand-poured soy wax candles with carefully selected natural scents and minimal packaging.',
    image: 'https://images.unsplash.com/photo-1603006905003-be475563bc59?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
  },
  {
    id: 'p4',
    title: 'Embroidered Textile Art',
    description: 'Hand-embroidered textile pieces featuring modern abstract designs and traditional techniques.',
    image: 'https://images.unsplash.com/photo-1579656381226-5fc0f0100c3b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
  },
  {
    id: 'p5',
    title: 'Watercolor Landscape Series',
    description: 'Original watercolor paintings featuring serene landscapes and nature-inspired scenes.',
    image: 'https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
  },
  {
    id: 'p6',
    title: 'Woven Basket Collection',
    description: 'Traditionally crafted baskets using sustainable reed and natural dyeing techniques.',
    image: 'https://images.unsplash.com/photo-1611486212355-d276af4581c0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
  },
];

const Portfolio = () => {
  const [selectedItem, setSelectedItem] = useState<null | typeof portfolioItems[0]>(null);

  return (
    <div id="portfolio" className="py-12 md:py-16 bg-pastel-blue/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-serif font-medium mb-4">Our Portfolio</h2>
          <p className="text-zinc-600">Explore our collection of handcrafted artworks</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {portfolioItems.map((item, index) => (
            <div key={item.id} className="animate-scale-in" style={{ animationDelay: `${index * 50}ms` }}>
              <Card 
                className="overflow-hidden border-zinc-100 hover-card cursor-pointer"
                onClick={() => setSelectedItem(item)}
              >
                <CardContent className="p-0">
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-serif text-lg font-medium">{item.title}</h3>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedItem} onOpenChange={(open) => !open && setSelectedItem(null)}>
        <DialogContent className="max-w-3xl w-[90vw]">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="aspect-square overflow-hidden rounded-md">
              <img 
                src={selectedItem?.image} 
                alt={selectedItem?.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-center p-2">
              <h3 className="text-2xl font-serif font-medium mb-2">{selectedItem?.title}</h3>
              <p className="text-zinc-600 mb-4">{selectedItem?.description}</p>
              <Button>Enquire About This Item</Button>
            </div>
          </div>
          <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-zinc-400 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-zinc-100">
            <Cross2Icon className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </DialogClose>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Portfolio;
