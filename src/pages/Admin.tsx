import { useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/lib/supabaseClient";
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Copy, Trash2 } from "lucide-react";
import { format } from "date-fns";
import { useToast } from "@/components/ui/use-toast";

interface TrolSubmission {
  id: string;
  created_at: string;
  username: string;
  wallet_address: string;
  submission_text: string;
}

const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const { data: submissions, isLoading } = useQuery({
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

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "trolleader93") {
      setIsAuthenticated(true);
      setError("");
    } else {
      setError("Incorrect password");
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const handleDelete = async (id: string) => {
    try {
      const { error } = await supabase
        .from("trol_submissions")
        .delete()
        .eq("id", id);

      if (error) throw error;

      // Invalidate and refetch
      await queryClient.invalidateQueries({ queryKey: ["trol-submissions"] });
      
      toast({
        title: "Success",
        description: "Submission deleted successfully",
      });
    } catch (error) {
      console.error("Error deleting submission:", error);
      toast({
        title: "Error",
        description: "Failed to delete submission",
        variant: "destructive",
      });
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-coin-primary to-coin-secondary p-8">
        <div className="container mx-auto max-w-md">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <h1 className="text-3xl font-bold text-white mb-6">TROL Admin Login</h1>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <Input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter password"
                  className="w-full"
                />
              </div>
              {error && <p className="text-red-500">{error}</p>}
              <button
                type="submit"
                className="w-full bg-white/20 hover:bg-white/30 text-white font-bold py-2 px-4 rounded"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-coin-primary to-coin-secondary p-8">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold text-white mb-6">Loading...</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-coin-primary to-coin-secondary p-8">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-white mb-6">TROL Submissions Admin</h1>
        
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
          <div className="overflow-x-auto">
            <Table>
              <TableBody>
                {submissions?.map((submission) => (
                  <div key={submission.id} className="mb-6">
                    <TableRow className="border-b border-white/10">
                      <TableCell className="text-white w-[20%]">
                        {format(new Date(submission.created_at), "MMM d")}
                      </TableCell>
                      <TableCell className="text-white w-[30%]">{submission.username}</TableCell>
                      <TableCell className="text-white font-mono text-sm w-[50%] flex items-center gap-2">
                        <span className="truncate">{submission.wallet_address}</span>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 flex-shrink-0"
                          onClick={() => copyToClipboard(submission.wallet_address)}
                        >
                          <Copy className="h-4 w-4 text-white" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 flex-shrink-0 hover:bg-red-500/20"
                          onClick={() => handleDelete(submission.id)}
                        >
                          <Trash2 className="h-4 w-4 text-red-500" />
                        </Button>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell colSpan={3} className="text-white flex items-center gap-2 bg-white/5">
                        <span className="flex-grow">{submission.submission_text}</span>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 flex-shrink-0"
                          onClick={() => copyToClipboard(submission.submission_text)}
                        >
                          <Copy className="h-4 w-4 text-white" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  </div>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;