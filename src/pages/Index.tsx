import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Rocket, PiggyBank, PartyPopper } from "lucide-react";
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

      {/* About Us Section */}
      <div className="container py-12 px-4">
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 text-white">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/3">
              <img 
                src="IMG_7153-removebg-preview.png" 
                alt="Troll Mascot" 
                className="w-full max-w-[300px] mx-auto rounded-lg"
              />
            </div>
            <div className="md:w-2/3">
              <h2 className="text-3xl font-bold mb-6">About Us</h2>
              <p className="text-lg leading-relaxed italic">
                "I've never coded anything before, but after seeing what Satoshi did, it inspired me to build off his creation and make it better. That's when I came up with the idea to create a money, but specifically for internet trolls. I quickly found other like-minded people to work with, and as the project developed, our goals became more ambitious. That's how we arrived at the TROL coin we have today: a decentralized, borderless, restrictionless, ultra-sound money but also a platform for Decentralized Apps, other crypto-currencies, and Non-fungible tokens via the TROL Virtual Machine. Although we don't make this claim directly ourselves, others have called TROL the SOL-killer."
              </p>
            </div>
          </div>
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