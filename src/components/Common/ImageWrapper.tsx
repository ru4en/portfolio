import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

const ImageWrapper = ({ src, alt }: { src: string; alt: string }) => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Add keyboard support for closing fullscreen and lock scroll
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isFullscreen) {
        setIsFullscreen(false);
      }
    };

    // Lock/unlock scroll when fullscreen state changes
    if (isFullscreen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleEscKey);
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup event listener and restore scroll
    return () => {
      window.removeEventListener('keydown', handleEscKey);
      document.body.style.overflow = 'unset';
    };
  }, [isFullscreen]);

  return (
    <>
      <img
        src={src}
        alt={alt}
        onClick={() => setIsFullscreen(true)}
        className="cursor-zoom-in transition-all duration-300 hover:scale-[1.02] ring-2 ring-gray-600/50 rounded-lg shadow-md"
      />
     
      {isFullscreen && createPortal(
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center cursor-zoom-out bg-gray-900/80 dark:bg-gray-800/80 
          backdrop-blur-sm transition-all duration-300 ease-out ${
            isFullscreen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setIsFullscreen(false)}
          style={{ margin: 0, padding: 0 }}
        >
          <div className="relative p-4 w-full h-full flex items-center justify-center">
            <img
              src={src}
              alt={alt}
              className={`object-contain rounded-2xl shadow-2xl transition-all duration-500 ease-out transform ring-4 ring-gray-600/50
              ${isFullscreen ? 'scale-100 opacity-100 rotate-0' : 'scale-75 opacity-0 rotate-1'}`}
              style={{ maxWidth: '90vw', maxHeight: '90vh' }}
              onClick={(e) => e.stopPropagation()} // Prevent click from propagating to the overlay
            />
            {/* Close indicator */}
            <div className="absolute top-6 right-6 bg-white/10 backdrop-blur-sm rounded-full p-3 text-white/80 hover:text-white hover:bg-white/20 transition-all duration-200">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-white/70 text-sm">
              Press ESC to close
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
};

export default ImageWrapper;