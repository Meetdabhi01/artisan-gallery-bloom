import React from "react";
import { cn } from "@/lib/utils";

const NavigationBar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-zinc-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <svg
                className="w-8 h-8 text-primary"
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
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a
                  href="#products"
                  className="px-3 py-2 rounded-md text-sm font-medium text-zinc-700 hover:text-primary transition-colors"
                >
                  Products
                </a>
                <a
                  href="#enquiry"
                  className="px-3 py-2 rounded-md text-sm font-medium text-zinc-700 hover:text-primary transition-colors"
                >
                  Enquire
                </a>
                <a
                  href="#payment"
                  className="px-3 py-2 rounded-md text-sm font-medium text-zinc-700 hover:text-primary transition-colors"
                >
                  Payment
                </a>
                <a
                  href="#videos"
                  className="px-3 py-2 rounded-md text-sm font-medium text-zinc-700 hover:text-primary transition-colors"
                >
                  Videos
                </a>
                <a
                  href="#portfolio"
                  className="px-3 py-2 rounded-md text-sm font-medium text-zinc-700 hover:text-primary transition-colors"
                >
                  Portfolio
                </a>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <span className="font-serif text-lg">Artisan Treasures</span>
          </div>
          <div className="md:hidden">
            <button className="inline-flex items-center justify-center p-2 rounded-md text-zinc-500 hover:text-primary hover:bg-zinc-50 focus:outline-none">
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
