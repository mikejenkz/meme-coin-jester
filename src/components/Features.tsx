import { Card } from "@/components/ui/card";
import { Rocket, PiggyBank, PartyPopper } from "lucide-react";

const Features = () => {
  return (
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
  );
};

export default Features;