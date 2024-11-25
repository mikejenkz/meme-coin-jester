import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Rocket, PiggyBank, PartyPopper } from "lucide-react";
import { toast } from "sonner";

const FallingCoins = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-48 overflow-hidden pointer-events-none">
      {[...Array(40)].map((_, i) => (
        <img
          key={i}
          src="Coin.png"
          alt="Falling Coin"
          className="absolute w-8 h-8"
          style={{
            left: `${(i * 2.5) % 100}%`,
            animation: `fall ${3 + (i % 5)}s linear infinite`,
            animationDelay: `${i * 0.3}s`,
          }}
        />
      ))}
    </div>
  );
};

const Index = () => {
  const handleBuyClick = () => {
    toast("🎉 Just kidding! This is a meme coin after all!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-coin-primary to-coin-secondary">
      {/* Hero Section */}
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
            <img 
              src="Coin.png"
              alt="Spinning Coin 4"
              className="absolute w-12 h-12 animate-spin-slow left-1/2 -ml-6"
              style={{
                animation: 'spin 4s linear infinite, orbit 4s linear infinite',
                transformOrigin: '50% 150%',
                animationDelay: '3.9s'
              }}
            />
            <img 
              src="Coin.png"
              alt="Spinning Coin 5"
              className="absolute w-12 h-12 animate-spin-slow left-1/2 -ml-6"
              style={{
                animation: 'spin 4s linear infinite, orbit 4s linear infinite',
                transformOrigin: '50% 150%',
                animationDelay: '5.2s'
              }}
            />
          </div>
          <h1 className="text-6xl font-bold mb-2 -mt-4">
            <span style={{ animation: 'colorChange 3s infinite' }}>$TROL</span>
            <br />
            TrolCoin
          </h1>
          <Button 
            onClick={handleBuyClick}
            className="bg-green-500 hover:bg-green-600 text-white text-lg px-8 py-6 rounded-full font-bold mb-2"
          >
            Join the Trolvolution!
          </Button>
          <div className="text-sm font-medium bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm mb-6">
            0.001 TROL = 1 BTC
          </div>

          {/* Earn $TROL Section */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-6">
            <h2 className="text-3xl font-bold mb-2">Earn $TROL</h2>
            <p className="text-lg mb-2">Memes fuel the Trolverse - get $TROL to troll!</p>
            <p className="text-base mb-2 italic">Post your best $TROL memes with #Trol. The community will decide the winners, and $TROL rewards will be yours!</p>
            <p className="text-sm font-semibold text-yellow-300">Best weekly memes 🏆</p>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="container py-20">
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="p-6 bg-white/90 backdrop-blur">
            <Rocket className="w-12 h-12 mb-4 text-coin-primary" />
            <h3 className="text-xl font-bold mb-2">To The Moon!</h3>
            <p className="text-gray-600">And back because it's just for the LOLs</p>
          </Card>
          <Card className="p-6 bg-white/90 backdrop-blur">
            <PiggyBank className="w-12 h-12 mb-4 text-coin-primary" />
            <h3 className="text-xl font-bold mb-2">Revolutionary Technology</h3>
            <p className="text-gray-600">Built on cutting-edge tech... just kidding, it's a troll coin</p>
          </Card>
          <Card className="p-6 bg-white/90 backdrop-blur">
            <PartyPopper className="w-12 h-12 mb-4 text-coin-primary" />
            <h3 className="text-xl font-bold mb-2">Amazing Community</h3>
            <p className="text-gray-600">The only community that gets the joke</p>
          </Card>
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

export default Index;
