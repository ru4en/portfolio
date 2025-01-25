import { useState, useEffect } from 'react';

const ImageWrapper = ({ src, alt }: { src: string; alt: string }) => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Add keyboard support for closing fullscreen
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isFullscreen) {
        setIsFullscreen(false);
      }
    };

    // Add event listener when fullscreen is active
    if (isFullscreen) {
      window.addEventListener('keydown', handleEscKey);
    }

    // Cleanup event listener
    return () => {
      window.removeEventListener('keydown', handleEscKey);
    };
  }, [isFullscreen]);

  return (
    <>
      <img
        src={src}
        alt={alt}
        onClick={() => setIsFullscreen(true)}
        className="cursor-zoom-in transition-all hover:scale-[1.02] ring-2 ring-gray-600/50 rounded-lg shadow-md"
      />
     
      {isFullscreen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center rounded-2xl
          bg-black/60 backdrop-blur-sm"
          onClick={() => setIsFullscreen(false)}
        >
          <div className="relative max-w-[95%] max-h-[95%] flex items-center justify-center">
            <img
              src={src}
              alt={alt}
              className="max-h-[90vh] max-w-[90vw] object-contain scale-[1.5] ring-4 ring-emerald-500/50
              cursor-zoom-out transition-transform 
              rounded-lg shadow-2xl"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default ImageWrapper;