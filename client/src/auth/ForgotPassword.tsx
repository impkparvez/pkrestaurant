import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader2, Mail } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <div className="flex items-center justify-center min-h-screen w-full">
      <form className="flex flex-col gap-5 md:p-8 w-full max-w-md mx-4 rounded-lg">
        <div className="text-center">
          <h1 className="font-extrabold text-2xl mb-2">Forgot Password</h1>
          <p className="text-sm text-gray-600">
            Enter your email address to reset your password
          </p>
        </div>
        <div className="relative w-full">
          <Input
            type="email"
            name="email"
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className="pl-10 focus-visible:ring-1"
          />
          <Mail
            className="absolute top-1/2 -translate-y-1/2 left-3 text-gray-600 pointer-events-none"
            size={20}
          />
        </div>
        <div className="mb-4">
          {loading ? (
            <Button
              className="w-full bg-[#d19254] hover:bg-[#d18c47] "
              disabled
            >
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Loading...
            </Button>
          ) : (
            <Button
              type="submit"
              className="w-full bg-[#d19254] hover:bg-[#d18c47]"
            >
              Send Reset Link
            </Button>
          )}
        </div>

        <span className="text-center">
          Back to{" "}
          <Link to={"/login"} className="text-blue-500 font-medium">
            Login
          </Link>
        </span>
      </form>
    </div>
  );
};

export default ForgotPassword;
