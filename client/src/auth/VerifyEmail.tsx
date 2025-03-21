import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader2 } from "lucide-react";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const VerifyEmail = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [otp, setOtp] = useState<string[]>(["", "", "", "", "", ""]);
  const inputRef = useRef<any>([]);
  const navigate = useNavigate();

  const handleChange = (idx: number, value: string) => {
    if (/^[a-zA-Z0-9]$/.test(value)) {
      const newOtp = [...otp];
      newOtp[idx] = value;
      setOtp(newOtp);
    }
    // Move to the next input field if a digit is entered
    if (value != "" && idx < 5) {
      inputRef.current[idx + 1].focus();
    }
  };

  const handleKeyDown = (
    idx: number,
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Backspace") {
      const newOtp = [...otp];

      // Clear the current input before moving back
      if (otp[idx] !== "") {
        newOtp[idx] = "";
        setOtp(newOtp);
      } else if (idx > 0) {
        newOtp[idx - 1] = "";
        setOtp(newOtp);
        inputRef.current[idx - 1]?.focus(); // Move to the previous input field
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen w-full">
      <div className="p-8 rounded-md w-full max-w-md flex flex-col gap-10 border border-gray-200">
        <div className="text-center">
          <h1 className="font-extrabold text-2xl">Verify you email</h1>
          <p className="text-sm text-gray-600">
            Enter the 6 digit code sent to your email address
          </p>
        </div>
        <form className="flex flex-col gap-4">
          <div className="flex justify-between">
            {otp.map((letter: string, idx: number) => (
              <Input
                key={idx}
                ref={(element) => (inputRef.current[idx] = element)}
                maxLength={1}
                type="text"
                value={letter}
                onChange={(e) => handleChange(idx, e.target.value)}
                onKeyDown={(e) => handleKeyDown(idx, e)}
                className="md:w-12 md:h-12 w-8 h-8 text-center text-sm md:text-2xl font-normal md:font-bold rounded-lg focus:outline-none focus-visible:ring-1 focus-visible:ring-indigo-500"
              />
            ))}
          </div>

          {loading ? (
            <Button
              className="bg-[#d19254] hover:bg-[#d18c47] mt-6 w-full"
              disabled
            >
              <Loader2 className=" w-4 h-4 animate-spin" />
              Loading...
            </Button>
          ) : (
            <Button className="bg-[#d19254] hover:bg-[#d18c47] mt-6 w-full">
              Verify
            </Button>
          )}
        </form>
      </div>
    </div>
  );
};

export default VerifyEmail;
