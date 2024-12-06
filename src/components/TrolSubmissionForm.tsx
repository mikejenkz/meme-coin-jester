import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { toast } from "sonner";
import { supabase } from "@/lib/supabaseClient";

const TrolSubmissionForm = () => {
  const [username, setUsername] = useState("");
  const [walletAddress, setWalletAddress] = useState("");
  const [submission, setSubmission] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!username.trim() || !submission.trim() || !walletAddress.trim()) {
      toast("Please fill in all fields!");
      return;
    }

    setIsSubmitting(true);
    try {
      const { error } = await supabase
        .from('trol_submissions')
        .insert([
          {
            username,
            wallet_address: walletAddress,
            submission_text: submission,
            status: 'pending'
          }
        ]);

      if (error) throw error;

      toast("🎉 Your trol has been submitted for review!");
      setUsername("");
      setWalletAddress("");
      setSubmission("");
    } catch (error) {
      console.error('Error submitting trol:', error);
      toast("Failed to submit trol. Please try again!");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-6 bg-white/5 p-4 rounded-lg">
      <h3 className="text-lg font-semibold mb-4">Submit Your Trol</h3>
      <div className="space-y-4">
        <div>
          <Input
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="bg-white/5 border-white/20 text-white placeholder:text-gray-400"
          />
        </div>
        <div>
          <Input
            placeholder="Wallet address"
            value={walletAddress}
            onChange={(e) => setWalletAddress(e.target.value)}
            className="bg-white/5 border-white/20 text-white placeholder:text-gray-400"
          />
        </div>
        <div>
          <Textarea
            placeholder="TROL link or message"
            value={submission}
            onChange={(e) => setSubmission(e.target.value)}
            className="bg-white/5 border-white/20 text-white placeholder:text-gray-400"
          />
        </div>
        <Button 
          type="submit"
          className="w-full bg-green-500 hover:bg-green-600 text-white"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Submitting...' : 'Earn TROL!'}
        </Button>
      </div>
    </form>
  );
};

export default TrolSubmissionForm;