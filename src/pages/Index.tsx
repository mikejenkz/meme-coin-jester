import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Rocket, PiggyBank, PartyPopper } from "lucide-react";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

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
  const [username, setUsername] = useState("");
  const [walletAddress, setWalletAddress] = useState("");
  const [submission, setSubmission] = useState("");

  const handleBuyClick = () => {
    toast("🎉 Just kidding! This is a meme coin after all!");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!username.trim() || !submission.trim() || !walletAddress.trim()) {
      toast("Please fill in all fields!");
      return;
    }
    toast("🎉 Your trol has been submitted for review!");
    setUsername("");
    setWalletAddress("");
    setSubmission("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-coin-primary to-coin-secondary">
      {/* Fixed Buy Button */}
      <div className="fixed top-4 right-4 z-50">
        <Button 
          onClick={handleBuyClick}
          className="bg-green-500 hover:bg-green-600 text-white font-bold px-6 py-3 rounded-full shadow-lg"
        >
          Buy $TROL
        </Button>
      </div>

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
          <Button 
            onClick={handleBuyClick}
            className="bg-[#FFD700] hover:bg-[#F7C400] text-white text-base px-8 py-4 rounded-full font-semibold mb-6 shadow-lg"
          >
            Add Liquidity
          </Button>

          {/* Earn $TROL Section */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-6">
            <h2 className="text-3xl font-bold mb-2">Earn $TROL</h2>
            <p className="text-lg mb-2">Memes fuel the Trolverse - get $TROL to troll!</p>
            <p className="text-base mb-2 italic">Post your best $TROL memes or links with #Trol. The community will decide the winners, and $TROL rewards will be yours!</p>
            <p className="text-sm font-semibold text-yellow-300">Best weekly trols 🏆</p>
            <div className="mt-4 bg-white/5 p-4 rounded-lg italic text-sm">
              <p className="text-gray-300">@soldmyhomeforTROL: "Buy coin in morning, sell at night." -Confucius</p>
            </div>

            {/* Submission Form */}
            <form onSubmit={handleSubmit} className="mt-6 bg-white/5 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-4">Submit Your Trol</h3>
              <div className="space-y-4">
                <div>
                  <Input
                    placeholder="Your username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="bg-white/5 border-white/20 text-white placeholder:text-gray-400"
                  />
                </div>
                <div>
                  <Input
                    placeholder="Enter your wallet address"
                    value={walletAddress}
                    onChange={(e) => setWalletAddress(e.target.value)}
                    className="bg-white/5 border-white/20 text-white placeholder:text-gray-400"
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Your trol or link"
                    value={submission}
                    onChange={(e) => setSubmission(e.target.value)}
                    className="bg-white/5 border-white/20 text-white placeholder:text-gray-400"
                  />
                </div>
                <Button 
                  type="submit"
                  className="w-full bg-green-500 hover:bg-green-600 text-white"
                >
                  Earn TROL!
                </Button>
              </div>
            </form>
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
              <div className="bg-white/5 p-6 rounded-lg mb-6">
                <p className="text-lg italic mb-2">"I've never coded anything before, but after seeing what Satoshi did, it inspired me to build off his creation and make it better. That's when I came up with the idea to create a money, but specifically for internet trolls. I quickly found other like-minded people to work with, and as the project developed, our goals became more ambitious. That's how we arrived at the TROL coin we have today: a decentralized, borderless, restrictionless, ultra-sound money but also a platform for Decentralized Apps, other crypto-currencies, and Non-fungible tokens via the TROL Virtual Machine. Although we don't make this claim directly ourselves, others have called TROL the SOL-killer."</p>
                <p className="text-sm text-gray-300">This is how our founder describes the birth of TROL coin.</p>
              </div>
              <div className="bg-white/5 p-6 rounded-lg">
                <p className="text-lg italic mb-2">"The unexamined coin is not worth hodling" - Socrates</p>
                <p className="text-sm text-gray-300">This famous quote inspired us to look really hard at how we developed TROL coin and make it good. It's good because we made it.</p>
              </div>
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
