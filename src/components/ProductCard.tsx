
import React from 'react';
import { cn } from "@/lib/utils";
// Fixing the import error - remove flower import as it doesn't exist
// import { flower } from 'lucide-react';

interface ProductCardProps {
  title: string;
  description: string;
  image: string;
  price: string;
  bgColor?: string;
  className?: string;
}

const ProductCard = ({
  title,
  description,
  image,
  price,
  bgColor = "bg-pastel-cream",
  className,
}: ProductCardProps) => {
  return (
    <div 
      className={cn(
        "flex flex-col rounded-lg overflow-hidden border border-zinc-100 hover-card", 
        bgColor,
        className
      )}
    >
      <div className="relative aspect-square overflow-hidden bg-white">
        <img 
          src={image} 
          alt={title} 
          className="object-cover w-full h-full"
        />
      </div>
      <div className="p-4 flex flex-col space-y-2">
        <div className="flex items-center justify-between">
          <h3 className="font-serif text-lg md:text-xl font-medium">{title}</h3>
          <svg 
            className="w-5 h-5 text-primary opacity-70" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="1.5" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M12 3a7 7 0 0 0 7 7h-7V3Z" />
            <path d="M12 21a7 7 0 0 0 7-7h-7v7Z" />
            <path d="M12 21a7 7 0 0 1-7-7h7v7Z" />
            <path d="M12 3a7 7 0 0 1-7 7h7V3Z" />
          </svg>
        </div>
        <p className="text-zinc-600 text-sm line-clamp-3">{description}</p>
        <div className="pt-2 flex items-center justify-between">
          <span className="font-medium text-primary">{price}</span>
          <button 
            className="text-xs px-3 py-1 rounded-full bg-white border border-zinc-200 hover:bg-zinc-50 transition-colors"
          >
            Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
