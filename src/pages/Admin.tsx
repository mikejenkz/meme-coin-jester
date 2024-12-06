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

  const handleDelete = async (id: number) => {
    try {
      const { error } = await supabase
        .from("trol_submissions")
        .delete()
        .eq("id", id);

      if (error) throw error;
      
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
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-white">Admin Dashboard</h1>
      <div className="grid gap-4">
        {submissions?.map((submission) => (
          <div
            key={submission.id}
            className="bg-white/5 p-6 rounded-lg shadow flex justify-between items-start border border-white/10"
          >
            <div className="space-y-2">
              <p className="font-semibold text-white">@{submission.username}</p>
              <p className="text-gray-300">{submission.submission_text}</p>
              <p 
                className="text-sm text-gray-400 cursor-pointer hover:text-white"
                onClick={() => {
                  navigator.clipboard.writeText(submission.wallet_address);
                  toast.success("Wallet address copied!");
                }}
              >
                {submission.wallet_address}
              </p>
              <p className="text-sm text-gray-500">
                {new Date(submission.created_at).toLocaleDateString()}
              </p>
            </div>
            <div className="flex gap-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => handleFeature(submission)}
                className="hover:bg-white/10"
              >
                <Plus className="h-4 w-4 text-white" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => handleDelete(submission.id)}
                className="hover:bg-white/10"
              >
                <Trash2 className="h-4 w-4 text-red-500" />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Admin;