import { useEffect, useState } from "react";

const LoadingScreen = ({ onLoadComplete }: { onLoadComplete: () => void }) => {
  const [imagesLoaded, setImagesLoaded] = useState(false);
  
  useEffect(() => {
    const imageUrls = ["Coin.png", "IMG_7153-removebg-preview.png"];
    let loadedImages = 0;
    
    const preloadImages = async () => {
      const promises = imageUrls.map((url) => {
        return new Promise((resolve) => {
          const img = new Image();
          img.src = url;
          img.onload = () => {
            loadedImages++;
            resolve(null);
          };
        });
      });

      await Promise.all(promises);
      setImagesLoaded(true);
      onLoadComplete();
    };

    preloadImages();
  }, [onLoadComplete]);

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-coin-primary to-coin-secondary flex items-center justify-center">
      <img
        src="Coin.png"
        alt="Loading..."
        className="w-24 h-24 animate-spin-slow"
      />
    </div>
  );
};

export default LoadingScreen;