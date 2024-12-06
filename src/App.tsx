import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import Index from "./pages/Index";
import Admin from "./pages/Admin";

const queryClient = new QueryClient();

// Move AdminRoute outside of App component to prevent recreation on each render
const AdminRoute = ({ isAuthenticated, onLogin }: { isAuthenticated: boolean; onLogin: (password: string) => void }) => {
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin(password);
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-sm p-6 bg-card rounded-lg shadow-lg border border-border">
          <h1 className="text-2xl font-bold text-center text-foreground mb-6">Admin Login</h1>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            autoComplete="current-password"
          />
          <button
            type="submit"
            className="w-full bg-primary text-primary-foreground px-4 py-2 rounded hover:bg-primary/90 transition-colors"
          >
            Login
          </button>
        </form>
      </div>
    );
  }
  return <Admin />;
};

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = (password: string) => {
    console.log("Attempting login with password:", password);
    if (password === "trolcoin") {
      setIsAuthenticated(true);
    } else {
      alert("Incorrect password");
    }
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route 
              path="/troladmin" 
              element={<AdminRoute isAuthenticated={isAuthenticated} onLogin={handleLogin} />} 
            />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;