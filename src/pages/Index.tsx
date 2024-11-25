import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Rocket, PiggyBank, PartyPopper } from "lucide-react";
import { toast } from "sonner";
import { useState } from "react";

const Index = () => {
  const handleBuyClick = () => {
    toast("🎉 Just kidding! This is a meme coin after all!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-coin-primary to-coin-secondary">
      {/* Hero Section */}
      <div className="container pt-8 pb-6 text-white text-center">
        <div className="flex flex-col items-center justify-center">
          <div className="animate-float mb-4">
            <img 
              src="IMG_7153-removebg-preview.png" 
              alt="TrollCoin Mascot" 
              className="w-32 h-32 object-contain border-0"
            />
          </div>
          <div className="relative w-32 h-32 mb-2">
            <img 
              src="Coin.png"
              alt="Spinning Coin 1"
              className="absolute w-12 h-12 animate-spin-slow left-1/2 -ml-6"
              style={{
                animation: 'spin 4s linear infinite, orbit 4s linear infinite',
                transformOrigin: '50% 150%'
              }}
            />
            <img 
              src="Coin.png"
              alt="Spinning Coin 2"
              className="absolute w-12 h-12 animate-spin-slow left-1/2 -ml-6"
              style={{
                animation: 'spin 4s linear infinite, orbit 4s linear infinite',
                transformOrigin: '50% 150%',
                animationDelay: '1.3s'
              }}
            />
            <img 
              src="Coin.png"
              alt="Spinning Coin 3"
              className="absolute w-12 h-12 animate-spin-slow left-1/2 -ml-6"
              style={{
                animation: 'spin 4s linear infinite, orbit 4s linear infinite',
                transformOrigin: '50% 150%',
                animationDelay: '2.6s'
              }}
            />
          </div>
          <h1 className="text-6xl font-bold mb-2">
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
          <div className="text-sm font-medium bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
            0.001 TROL = 1 BTC
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="container py-20">
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="p-6 bg-white/90 backdrop-blur">
            <Rocket className="w-12 h-12 mb-4 text-coin-primary" />
            <h3 className="text-xl font-bold mb-2">To The Moon!</h3>
            <p className="text-gray-600">We promise nothing except funny memes</p>
          </Card>
          <Card className="p-6 bg-white/90 backdrop-blur">
            <PiggyBank className="w-12 h-12 mb-4 text-coin-primary" />
            <h3 className="text-xl font-bold mb-2">Revolutionary Technology</h3>
            <p className="text-gray-600">It's basically just another token</p>
          </Card>
          <Card className="p-6 bg-white/90 backdrop-blur">
            <PartyPopper className="w-12 h-12 mb-4 text-coin-primary" />
            <h3 className="text-xl font-bold mb-2">Amazing Community</h3>
            <p className="text-gray-600">We post memes 24/7</p>
          </Card>
        </div>
      </div>

      {/* Top Memes */}
      <div className="container py-20 text-white">
        <h2 className="text-4xl font-bold mb-12 text-center">Top Memes</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {Array(3).fill(null).map((_, index) => (
            <MemeCard key={index} imageUrl="https://placehold.co/600x400" />
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="container py-8 text-center text-white/60 text-sm">
        <p>This is not financial advice. Please don't actually buy this.</p>
        <p className="mt-2">Made with 💜 and terrible financial decisions</p>
      </div>
    </div>
  );
};

const MemeCard = ({ imageUrl }: { imageUrl: string }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isDisliked, setIsDisliked] = useState(false);

  const handleLike = () => {
    setIsLiked(!isLiked);
    if (isDisliked) setIsDisliked(false);
    console.log('Meme liked:', !isLiked);
  };

  const handleDislike = () => {
    setIsDisliked(!isDisliked);
    if (isLiked) setIsLiked(false);
    console.log('Meme disliked:', !isDisliked);
  };

  return (
    <div className="relative bg-white/10 rounded-lg overflow-hidden">
      <div className="aspect-video relative">
        <img src={imageUrl} alt="Meme" className="w-full h-full object-cover" />
        <div className="absolute bottom-4 right-4 flex gap-2">
          <img
            src="Coin.png"
            alt="Like"
            className={`w-8 h-8 cursor-pointer transition-colors ${
              isLiked ? 'filter brightness-0 saturate-100 invert-[0.24] sepia-[.68] saturate-[.83] hue-rotate-[85deg]' : 'filter brightness-0 invert-[1]'
            }`}
            onClick={handleLike}
          />
          <Button
            variant="ghost"
            size="icon"
            className={`w-8 h-8 rounded-full ${
              isDisliked ? 'text-red-500' : 'text-white'
            }`}
            onClick={handleDislike}
          >
            👎
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
