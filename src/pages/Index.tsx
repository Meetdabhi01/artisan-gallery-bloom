
import React from 'react';
import ProductCard from "@/components/ProductCard";

// Sample product data
const products = [
  {
    id: 1,
    title: "Handcrafted Ceramic Bowl",
    description: "A beautiful, one-of-a-kind ceramic bowl made with traditional techniques. Perfect for serving or as a decorative piece.",
    image: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    price: "$45.00",
    bgColor: "bg-pastel-cream"
  },
  {
    id: 2,
    title: "Macramé Wall Hanging",
    description: "Intricately knotted macramé wall hanging made from 100% cotton rope. Adds texture and warmth to any space.",
    image: "https://images.unsplash.com/photo-1582643381669-4db bearer:3cc5df9d9695?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    price: "$78.00",
    bgColor: "bg-pastel-pink"
  },
  {
    id: 3,
    title: "Hand-poured Soy Candle",
    description: "Naturally scented soy wax candle in a reusable glass container. Burns clean for up to 45 hours.",
    image: "https://images.unsplash.com/photo-1603006905003-be475563bc59?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    price: "$32.00",
    bgColor: "bg-pastel-green"
  },
  {
    id: 4,
    title: "Embroidered Linen Pillow",
    description: "Hand-embroidered decorative pillow featuring native wildflowers on natural linen fabric.",
    image: "https://images.unsplash.com/photo-1579656381226-5fc0f0100c3b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    price: "$64.00",
    bgColor: "bg-pastel-blue"
  },
  {
    id: 5,
    title: "Abstract Watercolor Painting",
    description: "Original watercolor artwork on high-quality cold-press paper. Signed by the artist with certificate of authenticity.",
    image: "https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    price: "$120.00",
    bgColor: "bg-pastel-cream"
  },
  {
    id: 6,
    title: "Handwoven Basket",
    description: "Traditionally woven basket using sustainable materials. Perfect for storage or as a decorative accent.",
    image: "https://images.unsplash.com/photo-1611486212355-d276af4581c0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    price: "$58.00",
    bgColor: "bg-pastel-pink"
  },
  {
    id: 7,
    title: "Block-printed Table Runner",
    description: "Hand block-printed cotton table runner featuring botanical motifs. Dyed with natural pigments.",
    image: "https://images.unsplash.com/photo-1584589167171-541ce45f1eea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    price: "$42.00",
    bgColor: "bg-pastel-green"
  },
  {
    id: 8,
    title: "Stoneware Mug Set",
    description: "Set of four uniquely glazed stoneware mugs. Each piece exhibits slight variations, highlighting its handmade nature.",
    image: "https://images.unsplash.com/photo-1605367177286-f2e3836dbe4b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    price: "$85.00",
    bgColor: "bg-pastel-blue"
  }
];

const Index = () => {
  return (
    <div className="min-h-screen">
      <header className="py-12 md:py-20 text-center relative">
        <div className="absolute inset-0 -z-10 opacity-40 bg-[radial-gradient(circle_at_center,rgba(255,230,230,0.8),rgba(250,250,250,0))]"></div>
        <h1 className="font-serif text-4xl md:text-6xl mb-4 animate-fade-in">Artisan Treasures</h1>
        <p className="text-zinc-600 max-w-xl mx-auto px-4 animate-fade-in" style={{ animationDelay: "100ms" }}>
          A curated collection of handmade art and craft items from independent artisans around the world.
        </p>
      </header>
      
      <section className="max-w-7xl mx-auto px-4 md:px-8 mb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {products.map((product, index) => (
            <div key={product.id} className="animate-scale-in" style={{ animationDelay: `${index * 50}ms` }}>
              <ProductCard 
                title={product.title}
                description={product.description}
                image={product.image}
                price={product.price}
                bgColor={product.bgColor}
              />
            </div>
          ))}
        </div>
      </section>
      
      <footer className="py-8 text-center text-zinc-500 text-sm">
        <div className="max-w-md mx-auto px-4">
          <p>Handcrafted with care. Each item tells a unique story.</p>
          <div className="mt-4 flex justify-center space-x-3">
            <svg className="w-5 h-5 opacity-60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 3a7 7 0 0 0 7 7h-7V3Z" />
              <path d="M12 21a7 7 0 0 0 7-7h-7v7Z" />
              <path d="M12 21a7 7 0 0 1-7-7h7v7Z" />
              <path d="M12 3a7 7 0 0 1-7 7h7V3Z" />
            </svg>
            <span className="font-serif">Artisan Treasures © 2024</span>
            <svg className="w-5 h-5 opacity-60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 3a7 7 0 0 0 7 7h-7V3Z" />
              <path d="M12 21a7 7 0 0 0 7-7h-7v7Z" />
              <path d="M12 21a7 7 0 0 1-7-7h7v7Z" />
              <path d="M12 3a7 7 0 0 1-7 7h7V3Z" />
            </svg>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
