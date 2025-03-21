import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader2, LockKeyholeIcon } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <div className="flex items-center justify-center min-h-screen w-full">
      <form className="flex flex-col gap-5 md:p-8 w-full max-w-md mx-4 rounded-lg md:border border-gray-200">
        <div className="text-center">
          <h1 className="font-extrabold text-2xl mb-2">Reset Password</h1>
          <p className="text-sm text-gray-600">
            Enter your new password to reset your account password.
          </p>
        </div>
        <div className="relative w-full">
          <Input
            type="password"
            name="newPassword"
            placeholder="Enter your new password"
            onChange={(e) => setNewPassword(e.target.value)}
            value={newPassword}
            className="pl-10 focus-visible:ring-1"
          />
          <LockKeyholeIcon
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
              Reset Password
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

export default ResetPassword;
