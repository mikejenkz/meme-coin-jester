import { Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const FallingCoins = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-48 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <img
          key={i}
          src="Coin.png"
          alt="Falling Coin"
          className="absolute w-8 h-8"
          style={{
            left: `${(i * 5) % 100}%`,
            animation: `fall ${2 + Math.random() * 3}s linear infinite`,
          }}
        />
      ))}
    </div>
  );
};

const HeroSection = ({ handleBuyClick, contractAddress }: { 
  handleBuyClick: () => void;
  contractAddress: string;
}) => {
  const handleCopyContract = () => {
    navigator.clipboard.writeText(contractAddress);
    toast("Contract address copied to clipboard! 📋");
  };

  return (
    <div className="container pt-4 pb-6 text-white text-center relative">
      <FallingCoins />
      <div className="flex flex-col items-center justify-center max-w-6xl mx-auto">
        <div className="animate-float mb-4">
          <img 
            src="IMG_7153-removebg-preview.png" 
            alt="TrollCoin Mascot" 
            className="w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 object-contain border-0"
          />
        </div>
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mt-8 mb-2">
          <span style={{ animation: 'colorChange 3s infinite' }}>$TROL</span>
          <br />
          TrolCoin
        </h1>
        <div className="flex items-center gap-2 mb-4 bg-white/10 rounded-lg px-4 py-2 text-base md:text-lg lg:text-xl">
          <span className="text-gray-300">Contract:</span>
          <span className="text-white">{contractAddress.slice(0, 6)}...{contractAddress.slice(-4)}</span>
          <Button
            variant="ghost"
            size="icon"
            onClick={handleCopyContract}
            className="hover:bg-white/20"
          >
            <Copy className="h-4 w-4 md:h-5 md:w-5 lg:h-6 lg:w-6" />
          </Button>
        </div>
        
        <p className="text-xl md:text-2xl lg:text-3xl mb-4">The first coin fueled by trolling every shit coin in the game!</p>
        
        <Button 
          onClick={handleBuyClick}
          className="bg-green-500 hover:bg-green-600 text-white text-lg md:text-xl lg:text-2xl px-8 py-6 rounded-full font-bold mb-2 transform hover:scale-105 transition-all"
        >
          Join the Trolvolution!
        </Button>
        <Button 
          onClick={handleBuyClick}
          className="bg-[#FFD700] hover:bg-[#F7C400] text-white text-base md:text-lg lg:text-xl px-8 py-4 rounded-full font-semibold mb-6 shadow-lg transform hover:scale-105 transition-all"
        >
          Add Liquidity
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;