import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import FallingCoins from "./FallingCoins";

const Hero = () => {
  const handleBuyClick = () => {
    toast("🎉 Just kidding! This is a meme coin after all!");
  };

  return (
    <div className="container pt-4 pb-6 text-white text-center relative">
      <FallingCoins />
      <div className="flex flex-col items-center justify-center">
        <div className="animate-float mb-4">
          <img 
            src="IMG_7153-removebg-preview.png" 
            alt="TrollCoin Mascot" 
            className="w-32 h-32 object-contain border-0"
          />
        </div>
        <h1 className="text-6xl font-bold mt-8 mb-2">
          <span style={{ animation: 'colorChange 3s infinite' }}>$TROL</span>
          <br />
          TrolCoin
        </h1>
        <p className="text-xl mb-4">The first coin fueled by trolling every shit coin in the game!</p>
        
        <Button 
          onClick={handleBuyClick}
          className="bg-green-500 hover:bg-green-600 text-white text-lg px-8 py-6 rounded-full font-bold mb-2"
        >
          Join the Trolvolution!
        </Button>
        <div className="text-sm font-medium bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm mb-6">
          0.001 TROL = 1 BTC
        </div>
      </div>
    </div>
  );
};

export default Hero;