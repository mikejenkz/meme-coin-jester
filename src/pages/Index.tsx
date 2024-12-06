import { Button } from "@/components/ui/button";
import { Rocket, PiggyBank, PartyPopper, Copy } from "lucide-react";
import { toast } from "sonner";
import { useState } from "react";
import LoadingScreen from "@/components/LoadingScreen";
import Features from "@/components/Features";
import TrolSubmissionForm from "@/components/TrolSubmissionForm";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/lib/supabaseClient";

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
  const [isLoading, setIsLoading] = useState(true);
  const contractAddress = "0x66f7D08404e5a860152FAf62DeE164D2C266F928";

  const { data: featuredSubmissions } = useQuery({
    queryKey: ["featured-submissions"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("featured_submissions")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;
      return data;
    },
  });

  const handleBuyClick = () => {
    toast("🎉 Just kidding! This is a meme coin after all!");
  };

  const handleCopyContract = () => {
    navigator.clipboard.writeText(contractAddress);
    toast("Contract address copied to clipboard! 📋");
  };

  if (isLoading) {
    return <LoadingScreen onLoadComplete={() => setIsLoading(false)} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-coin-primary to-coin-secondary">
      {/* Fixed Buy Button */}
      <div className="fixed top-4 right-4 z-50">
        <div className="relative cursor-pointer" onClick={handleBuyClick}>
          <img 
            src="Coin.png" 
            alt="Buy TROL" 
            className="w-12 h-12 animate-spin-slow hover:scale-110 transition-transform"
          />
        </div>
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
          <div className="flex items-center gap-2 mb-4 bg-white/10 rounded-lg px-4 py-2">
            <span className="text-gray-300">Contract:</span>
            <span className="text-white">{contractAddress.slice(0, 6)}...{contractAddress.slice(-4)}</span>
            <Button
              variant="ghost"
              size="icon"
              onClick={handleCopyContract}
              className="hover:bg-white/20"
            >
              <Copy className="h-4 w-4" />
            </Button>
          </div>
          
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
          <div className="max-w-2xl mx-auto mb-4 bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <h2 className="text-4xl font-bold mb-4">Earn $TROL</h2>
            <p className="text-xl mb-4">Memes fuel the Trolverse - get $TROL to troll!</p>
            <p className="text-lg italic mb-4">Post your best $TROL memes or links with #Trol. The community will decide the winners, and $TROL rewards will be yours!</p>
            <p className="text-yellow-300 font-semibold text-2xl mb-4">Best Weekly TROLS <span className="font-bold">🏆</span></p>
          </div>

          {/* Weekly Winner Box */}
          <div className="max-w-2xl mx-auto mb-8 bg-white/20 backdrop-blur-sm rounded-lg p-4 border border-white/10 hover:bg-white/25 transition-colors">
            <p className="text-lg italic text-gray-200">
              <span className="text-green-500">@soldmyhomeforTROL:</span> "Buy coin in morning, sell at night." -Confucius
            </p>
          </div>

          {/* Featured Submissions */}
          {featuredSubmissions?.map((submission) => (
            <div key={submission.id} className="max-w-2xl mx-auto mb-8 bg-white/20 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:bg-white/25 transition-colors">
              <p className="text-lg italic text-gray-200">
                <span className="text-green-500">@{submission.username}:</span> {submission.content}
              </p>
            </div>
          ))}

          {/* Submission Form */}
          <div className="max-w-md mx-auto w-full">
            <TrolSubmissionForm />
          </div>
        </div>
      </div>

      {/* Features */}
      <Features />

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
