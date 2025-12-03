import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface BookFlipProps {
  children: React.ReactNode[]; // Array of pages
}

export const BookFlip: React.FC<BookFlipProps> = ({ children }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);

  // Check if we can show double spread
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalPages = children.length;
  // Ensure even number of pages for spread logic (though we handle blanks)
  const displayPageCount = isDesktop ? Math.ceil(totalPages / 2) : totalPages;

  const nextPage = () => {
    if (currentPage < displayPageCount - 1) {
      setCurrentPage(prev => prev + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(prev => prev - 1);
    }
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto h-[85vh] md:h-[80vh] flex items-center justify-center perspective-1000">
      
      {/* Navigation Controls */}
      <div className="absolute z-50 bottom-4 md:bottom-auto md:top-1/2 w-full flex justify-between px-4 md:px-0 md:-mx-16 pointer-events-none">
        <button 
          onClick={prevPage}
          disabled={currentPage === 0}
          className={`p-3 rounded-full bg-white/80 shadow-md backdrop-blur-sm pointer-events-auto transition-opacity hover:bg-white hover:scale-110 ${currentPage === 0 ? 'opacity-0' : 'opacity-100'}`}
        >
          <ArrowLeft className="text-ink" />
        </button>
        <button 
          onClick={nextPage}
          disabled={currentPage === displayPageCount - 1}
          className={`p-3 rounded-full bg-white/80 shadow-md backdrop-blur-sm pointer-events-auto transition-opacity hover:bg-white hover:scale-110 ${currentPage === displayPageCount - 1 ? 'opacity-0' : 'opacity-100'}`}
        >
          <ArrowRight className="text-ink" />
        </button>
      </div>

      {/* Book Container */}
      <div className="relative w-full h-full transition-transform duration-500 ease-in-out">
        {/* Render visible pages */}
        <div className="absolute inset-0 flex items-center justify-center">
             
             {/* Desktop Spread View */}
             {isDesktop ? (
               <div className="relative flex w-full h-full shadow-book rounded-sm overflow-hidden bg-paper">
                 {/* Spine */}
                 <div className="absolute left-1/2 top-0 bottom-0 w-8 bg-gradient-to-r from-black/5 to-transparent z-20 pointer-events-none -translate-x-1/2 mix-blend-multiply"></div>
                 
                 {/* Left Page */}
                 <div className="flex-1 h-full overflow-hidden relative border-r border-black/5 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')]">
                    <div className="absolute inset-0 shadow-page-left pointer-events-none z-10"></div>
                    <div className="h-full overflow-y-auto p-8 md:p-12 scrollbar-thin">
                        {children[currentPage * 2]}
                    </div>
                    {/* Page Number */}
                    <div className="absolute bottom-4 left-6 text-gray-400 font-mono text-sm z-20">{currentPage * 2 + 1}</div>
                 </div>

                 {/* Right Page */}
                 <div className="flex-1 h-full overflow-hidden relative bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')]">
                     <div className="absolute inset-0 shadow-page-right pointer-events-none z-10"></div>
                     <div className="h-full overflow-y-auto p-8 md:p-12 scrollbar-thin">
                        {children[currentPage * 2 + 1]}
                     </div>
                     {/* Page Number */}
                     <div className="absolute bottom-4 right-6 text-gray-400 font-mono text-sm z-20">{currentPage * 2 + 2}</div>
                 </div>
               </div>
             ) : (
               // Mobile Single Page View
               <motion.div 
                 key={currentPage}
                 initial={{ opacity: 0, x: 20 }}
                 animate={{ opacity: 1, x: 0 }}
                 exit={{ opacity: 0, x: -20 }}
                 transition={{ duration: 0.3 }}
                 className="w-full h-full bg-paper shadow-book rounded-lg overflow-hidden relative bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')]"
               >
                 <div className="h-full overflow-y-auto p-6">
                    {children[currentPage]}
                 </div>
                 <div className="absolute bottom-4 right-6 text-gray-400 font-mono text-sm">{currentPage + 1}</div>
               </motion.div>
             )}
        </div>
      </div>
    </div>
  );
};