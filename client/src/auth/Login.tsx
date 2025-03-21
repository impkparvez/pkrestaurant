import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { LoginInputTypes, userloginSchema } from "@/schema/userSchema";
import { Loader2, LockKeyhole, Mail } from "lucide-react";
import { ChangeEvent, FormEvent, useState } from "react";
import { Link } from "react-router-dom";

// type LoginInputTypes = {
//   email: string;
//   password: string;
// };

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Partial<LoginInputTypes>>({});

  const [input, setInput] = useState<LoginInputTypes>({
    email: "",
    password: "",
  });

  const changeEventHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const loginSubmitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const result = await userloginSchema.safeParse(input);
    if (!result.success) {
      const fieldErrors = result.error.formErrors.fieldErrors;
      setErrors(fieldErrors as Partial<LoginInputTypes>);
      setLoading(false);
      return;
    }

    console.log(input);
    setLoading(false);
  };

  return (
    <main className="flex items-center justify-center min-h-screen w-screen">
      <form
        onSubmit={loginSubmitHandler}
        className="md:p-8 w-full max-w-md mx-4 md:border border-gray-200 rounded-lg"
      >
        <div className="mb-4">
          <h1 className="font-bold text-2xl text-center">Login</h1>
        </div>

        <div className="mb-4">
          <div className="relative">
            <Input
              className="pl-10 focus-visible:ring-1"
              type="email"
              name="email"
              value={input.email}
              onChange={changeEventHandler}
              placeholder="Enter your email"
            />
            <Mail className="absolute -translate-y-1/2 top-1/2 left-2 text-gray-500 pointer-events-none" />
          </div>
          {errors && (
            <span className="text-sm text-red-500">{errors.email}</span>
          )}
        </div>

        <div className="mb-4">
          <div className="relative">
            <Input
              className="pl-10 focus-visible:ring-1"
              type="password"
              name="password"
              value={input.password}
              onChange={changeEventHandler}
              placeholder="Enter your password"
            />
            <LockKeyhole className="absolute -translate-y-1/2 top-1/2 left-2 text-gray-500 pointer-events-none" />
          </div>
          {errors && (
            <span className="text-sm text-red-500">{errors.password}</span>
          )}
        </div>

        <div className="mb-8">
          {loading ? (
            <Button
              className="w-full bg-[#d19254] hover:bg-[#d18c47] mb-1"
              disabled
            >
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Loading...
            </Button>
          ) : (
            <Button
              type="submit"
              className="w-full bg-[#d19254] hover:bg-[#d18c47] font-bold mb-1"
            >
              Login
            </Button>
          )}

          <Link
            to={"/forgot-password"}
            className="text-blue-500 text-sm font-medium hover:underline"
          >
            Forgot Password?
          </Link>
        </div>

        <Separator />

        <p className="mt-2">
          Don't have an account?{" "}
          <Link to={"/signup"} className="text-blue-500 font-medium">
            Signup
          </Link>
        </p>
      </form>
    </main>
  );
};

export default Login;
