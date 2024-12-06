import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useState } from "react";
import LoadingScreen from "@/components/LoadingScreen";
import Features from "@/components/Features";
import TrolSubmissionForm from "@/components/TrolSubmissionForm";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/lib/supabaseClient";
import HeroSection from "@/components/HeroSection";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const contractAddress = "0x66f7D08404e5a860152FAf62DeE164D2C266F928";

  const { data: featuredSubmissions } = useQuery({
    queryKey: ["featured-submissions"],
    queryFn: async () => {
      console.log("Fetching featured submissions...");
      const { data, error } = await supabase
        .from("featured_submissions")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Error fetching featured submissions:", error);
        throw error;
      }

      console.log("Received featured submissions:", data);

      const uniqueSubmissions = data.reduce((acc: any[], current: any) => {
        const exists = acc.find((item) => item.content === current.content);
        if (!exists) {
          acc.push(current);
        }
        return acc;
      }, []);

      return uniqueSubmissions;
    },
    refetchInterval: 2000,
  });

  const handleBuyClick = () => {
    toast("🎉 Just kidding! This is a meme coin after all!");
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
            className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 animate-spin-slow hover:scale-110 transition-transform"
          />
        </div>
      </div>

      {/* Hero Section */}
      <HeroSection handleBuyClick={handleBuyClick} contractAddress={contractAddress} />

      {/* Earn $TROL Section */}
      <div className="max-w-2xl mx-auto mb-4 bg-white/10 backdrop-blur-sm rounded-lg p-6">
        <h2 className="text-4xl font-bold mb-4 text-white">Earn $TROL</h2>
        <p className="text-xl mb-4 text-white">Memes fuel the Trolverse - get $TROL to troll!</p>
        <p className="text-lg italic mb-4 text-white">Post your best $TROL memes or links with #Trol. The community will decide the winners, and $TROL rewards will be yours!</p>
        <p className="text-yellow-300 font-semibold text-2xl mb-4">Best Weekly TROLS <span className="font-bold">🏆</span></p>
      </div>

      {/* Featured Submissions */}
      <div className="w-full max-w-2xl mx-auto">
        {featuredSubmissions?.map((submission) => (
          <div 
            key={submission.id} 
            className="w-full mb-8 bg-white/20 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:bg-white/25 transition-colors min-h-[100px] flex items-center"
          >
            <p className="text-lg italic text-gray-200 w-full">
              <span className="text-green-500">@{submission.username}:</span> {submission.content}
            </p>
          </div>
        ))}
      </div>

      {/* Submission Form */}
      <div className="max-w-md mx-auto w-full">
        <TrolSubmissionForm />
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
