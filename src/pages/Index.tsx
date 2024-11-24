import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Coins, Rocket, PiggyBank, PartyPopper } from "lucide-react";
import { toast } from "sonner";

const Index = () => {
  const handleBuyClick = () => {
    toast("🎉 Just kidding! This is a meme coin after all!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-coin-primary to-coin-secondary">
      {/* Hero Section */}
      <div className="container pt-20 pb-10 text-white text-center">
        <div className="animate-float">
          <Coins className="w-20 h-20 mx-auto mb-8 animate-spin-slow" />
        </div>
        <h1 className="text-6xl font-bold mb-4">MemeCoins To The Moon! 🚀</h1>
        <p className="text-xl mb-8">The most ridiculous cryptocurrency you'll ever not need!</p>
        <Button 
          onClick={handleBuyClick}
          className="bg-white text-coin-primary hover:bg-gray-100 text-lg px-8 py-6 rounded-full font-bold"
        >
          Buy Now (Not Financial Advice)
        </Button>
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

      {/* Roadmap */}
      <div className="container py-20 text-white">
        <h2 className="text-4xl font-bold mb-12 text-center">Our "Serious" Roadmap</h2>
        <div className="space-y-8">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">Q1</div>
            <div className="flex-1 bg-white/10 p-4 rounded-lg">
              Create more memes than any other crypto
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">Q2</div>
            <div className="flex-1 bg-white/10 p-4 rounded-lg">
              Convince Elon Musk to tweet about us (maybe)
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">Q3</div>
            <div className="flex-1 bg-white/10 p-4 rounded-lg">
              Launch NFTs of pixelated rockets
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