import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 dark:bg-black py-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col items-center gap-4">
          <p className="text-slate-300 text-center flex items-center gap-2">
            Built with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> using React, TypeScript & Framer Motion
          </p>
          <p className="text-slate-400 text-sm">
            © {new Date().getFullYear()} Ruchira Sarkar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
