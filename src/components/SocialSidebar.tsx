import React from 'react';
import { Twitter, Facebook, Instagram, Youtube } from 'lucide-react';
export function SocialSidebar() {
  return <div className="fixed left-0 z-40 flex flex-col gap-6 p-3 -translate-y-1/2 rounded-r-lg top-1/2 bg-black/30 backdrop-blur-sm">
      <a href="#" className="text-white transition-colors transform hover:text-teal-400 hover:scale-110">
        <Twitter className="w-6 h-6" />
      </a>
      <a href="#" className="text-white transition-colors transform hover:text-teal-400 hover:scale-110">
        <Facebook className="w-6 h-6" />
      </a>
      <a href="#" className="text-white transition-colors transform hover:text-teal-400 hover:scale-110">
        <Instagram className="w-6 h-6" />
      </a>
      <a href="#" className="text-white transition-colors transform hover:text-teal-400 hover:scale-110">
        <Youtube className="w-6 h-6" />
      </a>
    </div>;
}