import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/lib/supabaseClient";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";
import { format } from "date-fns";

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
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-white">Date</TableHead>
                <TableHead className="text-white">Username</TableHead>
                <TableHead className="text-white">Wallet</TableHead>
                <TableHead className="text-white">Submission</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {submissions?.map((submission) => (
                <TableRow key={submission.id}>
                  <TableCell className="text-white">
                    {format(new Date(submission.created_at), "MMM d")}
                  </TableCell>
                  <TableCell className="text-white">{submission.username}</TableCell>
                  <TableCell className="text-white font-mono text-sm flex items-center gap-2">
                    {submission.wallet_address}
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8"
                      onClick={() => copyToClipboard(submission.wallet_address)}
                    >
                      <Copy className="h-4 w-4 text-white" />
                    </Button>
                  </TableCell>
                  <TableCell className="text-white flex items-center gap-2">
                    {submission.submission_text}
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8"
                      onClick={() => copyToClipboard(submission.submission_text)}
                    >
                      <Copy className="h-4 w-4 text-white" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default Admin;