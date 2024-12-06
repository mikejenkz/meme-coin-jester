import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/lib/supabaseClient";
import { Button } from "@/components/ui/button";
import { Trash2, Plus } from "lucide-react";
import { toast } from "sonner";

interface TrolSubmission {
  id: number;
  submission_text: string;
  username: string;
  wallet_address: string;
  created_at: string;
}

const Admin = () => {
  const { data: submissions, refetch } = useQuery({
    queryKey: ["trol-submissions"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("trol_submissions")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;
      return data as TrolSubmission[];
    },
  });

  const handleDelete = async (id: number, submissionText: string) => {
    try {
      console.log("Deleting submission:", id, submissionText);
      
      // Delete from trol_submissions
      const { error: submissionError } = await supabase
        .from("trol_submissions")
        .delete()
        .eq("id", id);

      if (submissionError) throw submissionError;
      
      // Delete from featured_submissions if it exists there
      const { error: featuredError } = await supabase
        .from("featured_submissions")
        .delete()
        .eq("content", submissionText);

      if (featuredError) throw featuredError;
      
      toast.success("Submission deleted successfully!");
      refetch();
    } catch (error) {
      console.error("Error deleting submission:", error);
      toast.error("Failed to delete submission");
    }
  };

  const handleFeature = async (submission: TrolSubmission) => {
    try {
      console.log("Featuring submission:", submission);
      
      const { error } = await supabase
        .from("featured_submissions")
        .insert([
          {
            content: submission.submission_text,
            username: submission.username,
          },
        ])
        .select();

      if (error) {
        console.error("Supabase error:", error);
        throw error;
      }
      
      toast.success("Added to featured submissions!");
    } catch (error) {
      console.error("Error featuring submission:", error);
      toast.error("Failed to feature submission");
    }
  };

  return (
    <div className="container mx-auto p-4 min-h-screen bg-background">
      <h1 className="text-2xl font-bold mb-4 text-foreground">Admin Dashboard</h1>
      <div className="grid gap-4">
        {submissions?.map((submission) => (
          <div
            key={submission.id}
            className="bg-card p-6 rounded-lg shadow flex justify-between items-start border border-border"
          >
            <div className="space-y-2">
              <p className="font-semibold text-foreground">@{submission.username}</p>
              <p className="text-muted-foreground">{submission.submission_text}</p>
              <p 
                className="text-sm text-muted-foreground cursor-pointer hover:text-foreground"
                onClick={() => {
                  navigator.clipboard.writeText(submission.wallet_address);
                  toast.success("Wallet address copied!");
                }}
              >
                {submission.wallet_address}
              </p>
              <p className="text-sm text-muted-foreground">
                {new Date(submission.created_at).toLocaleDateString()}
              </p>
            </div>
            <div className="flex gap-2">
              <Button
                variant="secondary"
                size="icon"
                onClick={() => handleFeature(submission)}
                className="hover:bg-accent"
              >
                <Plus className="h-4 w-4" />
              </Button>
              <Button
                variant="secondary"
                size="icon"
                onClick={() => handleDelete(submission.id, submission.submission_text)}
                className="hover:bg-accent"
              >
                <Trash2 className="h-4 w-4 text-destructive" />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Admin;