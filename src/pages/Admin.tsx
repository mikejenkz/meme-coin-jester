import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/lib/supabaseClient";
import { Button } from "@/components/ui/button";
import { Trash2, Plus } from "lucide-react";
import { toast } from "sonner";

interface TrolSubmission {
  id: number;
  content: string;
  username: string;
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
      console.log("Featuring submission:", submission); // Debug log
      
      const { error } = await supabase
        .from("featured_submissions")
        .insert([
          {
            content: submission.content,
            username: submission.username,
          },
        ])
        .select();

      if (error) {
        console.error("Supabase error:", error); // Debug log
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
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
      <div className="grid gap-4">
        {submissions?.map((submission) => (
          <div
            key={submission.id}
            className="bg-white p-4 rounded-lg shadow flex justify-between items-center"
          >
            <div>
              <p className="font-semibold">@{submission.username}</p>
              <p>{submission.content}</p>
              <p className="text-sm text-gray-500">
                {new Date(submission.created_at).toLocaleDateString()}
              </p>
            </div>
            <div className="flex gap-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => handleFeature(submission)}
              >
                <Plus className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => handleDelete(submission.id)}
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