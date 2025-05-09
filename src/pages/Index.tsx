
import React from 'react';
import ProductCard from "@/components/ProductCard";
import NavigationBar from '@/components/NavigationBar';
import EnquiryForm from '@/components/EnquiryForm';
import PaymentInfo from '@/components/PaymentInfo';
import VideoList from '@/components/VideoList';
import Portfolio from '@/components/Portfolio';
import { Phone, MapPin, Mail, Globe, Share2 } from 'lucide-react';

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
    image: "https://images.unsplash.com/photo-1582643381669-4db3cc5df9695?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
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
      <NavigationBar />
      
      {/* Updated Hero Section */}
      <header className="py-16 md:py-20 relative bg-[#e9dfd0]">
        <div className="max-w-4xl mx-auto px-6 md:px-8">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            {/* Logo Circle */}
            <div className="relative animate-fade-in">
              <div className="w-48 h-48 md:w-56 md:h-56 rounded-full bg-white shadow-lg flex items-center justify-center border-4 border-white">
                <div className="text-center p-4">
                  <p className="text-xs font-medium text-gray-500 mb-1">EST. 2014</p>
                  <h2 className="text-2xl font-playfair font-bold">ARTISAN</h2>
                  <h3 className="text-xl font-playfair font-bold">TREASURES</h3>
                  <p className="text-sm italic mt-1 text-primary">Shop</p>
                </div>
              </div>
            </div>
            
            {/* Right Content */}
            <div className="flex-1 animate-fade-in" style={{ animationDelay: "200ms" }}>
              <h1 className="text-3xl md:text-4xl font-playfair font-bold mb-2">Art & Craft</h1>
              <h2 className="text-xl md:text-2xl font-sans text-zinc-700 mb-6">Artisan Collections</h2>
              
              {/* Contact Info Blocks */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                <div className="flex gap-3 items-center">
                  <div className="bg-primary/90 p-2 rounded-md shadow-sm text-white">
                    <Phone size={20} />
                  </div>
                  <span className="text-sm">+1 (555) 123-4567</span>
                </div>
                <div className="flex gap-3 items-center">
                  <div className="bg-primary/90 p-2 rounded-md shadow-sm text-white">
                    <Mail size={20} />
                  </div>
                  <span className="text-sm">info@artisan.com</span>
                </div>
                <div className="flex gap-3 items-center">
                  <div className="bg-primary/90 p-2 rounded-md shadow-sm text-white">
                    <MapPin size={20} />
                  </div>
                  <span className="text-sm">123 Craft St, Artville</span>
                </div>
                <div className="flex gap-3 items-center">
                  <div className="bg-primary/90 p-2 rounded-md shadow-sm text-white">
                    <Globe size={20} />
                  </div>
                  <span className="text-sm">www.artisan.com</span>
                </div>
              </div>
              
              {/* Share buttons */}
              <div className="flex gap-4">
                <button className="bg-primary/90 text-white px-5 py-2 rounded flex items-center gap-2 hover:bg-primary transition-colors">
                  <Share2 size={18} />
                  <span>Share</span>
                </button>
                <button className="bg-zinc-700/90 text-white px-5 py-2 rounded flex items-center gap-2 hover:bg-zinc-700 transition-colors">
                  Add to Contacts
                </button>
              </div>
              
              {/* Social Media Icons */}
              <div className="flex gap-3 mt-6">
                {['facebook', 'instagram', 'pinterest', 'snapchat', 'twitter', 'youtube', 'whatsapp'].map((social) => (
                  <a 
                    key={social}
                    href="#" 
                    className="w-9 h-9 rounded-full bg-white shadow-sm flex items-center justify-center hover:scale-110 transition-transform"
                    aria-label={`Follow on ${social}`}
                  >
                    <div className={`w-5 h-5 bg-center bg-no-repeat bg-contain`} 
                      style={{ backgroundImage: `url(/placeholder.svg)` }}></div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </header>
      
      {/* Product Catalog Section */}
      <section id="products" className="max-w-7xl mx-auto px-4 md:px-8 mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-medium mb-4">Our Products</h2>
          <p className="text-zinc-600">Each piece tells a unique story through craftsmanship</p>
        </div>
        
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
      
      {/* Portfolio Section */}
      <Portfolio />
      
      {/* Video List Section */}
      <VideoList />
      
      {/* Payment Information Section */}
      <PaymentInfo />
      
      {/* Enquiry Form Section */}
      <EnquiryForm />
      
      {/* Footer */}
      <footer className="py-8 text-center text-zinc-500 text-sm bg-pastel-cream/30">
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
