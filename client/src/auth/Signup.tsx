import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { SignupInputTypes, userSignupSchema } from "@/schema/userSchema";
import { Loader2, LockKeyhole, Mail, PhoneCall, User } from "lucide-react";
import { ChangeEvent, FormEvent, useState } from "react";
import { Link } from "react-router-dom";

// type SignupInputTypes = {
//   fullname: string;
//   email: string;
//   password: string;
//   contact: string;
// };

const Signup = () => {
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Partial<SignupInputTypes>>({});

  const [input, setInput] = useState<SignupInputTypes>({
    fullname: "",
    email: "",
    password: "",
    contact: "",
  });

  const changeEventHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const SignupSubmitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    // Form Validation Check
    const result = await userSignupSchema.safeParse(input);
    if (!result.success) {
      const fieldErrors = result.error.formErrors.fieldErrors;
      setErrors(fieldErrors as Partial<SignupInputTypes>);
      setLoading(false);
      return;
    }

    console.log(input);
    setLoading(false);
  };

  return (
    <main className="flex items-center justify-center min-h-screen w-screen">
      <form
        onSubmit={SignupSubmitHandler}
        className="md:p-8 w-full max-w-md mx-4 md:border border-gray-200 rounded-lg"
      >
        <div className="mb-4">
          <h1 className="font-bold text-2xl text-center">Sign Up</h1>
        </div>

        <div className="mb-4">
          <div className="relative">
            <Input
              className="pl-10 focus-visible:ring-1"
              type="text"
              name="fullname"
              value={input.fullname}
              onChange={changeEventHandler}
              placeholder="Full name"
            />
            <User className="absolute -translate-y-1/2 top-1/2 left-2 text-gray-500 pointer-events-none" />
          </div>
          {errors && (
            <span className="text-sm text-red-500">{errors.fullname}</span>
          )}
        </div>

        <div className="mb-4">
          <div className="relative">
            <Input
              className="pl-10 focus-visible:ring-1"
              type="email"
              name="email"
              value={input.email}
              onChange={changeEventHandler}
              placeholder="Email"
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
              placeholder="Password"
            />
            <LockKeyhole className="absolute -translate-y-1/2 top-1/2 left-2 text-gray-500 pointer-events-none" />
          </div>
          {errors && (
            <span className="text-sm text-red-500">{errors.password}</span>
          )}
        </div>

        <div className="mb-4">
          <div className="relative">
            <Input
              className="pl-10 focus-visible:ring-1"
              type="text"
              name="contact"
              value={input.contact}
              onChange={changeEventHandler}
              placeholder="Contact Number"
            />
            <PhoneCall className="absolute -translate-y-1/2 top-1/2 left-2 text-gray-500 pointer-events-none" />
          </div>
          {errors && (
            <span className="text-sm text-red-500">{errors.contact}</span>
          )}
        </div>

        <div className="mb-8">
          {loading ? (
            <Button
              className="w-full bg-[#d19254] hover:bg-[#d18c47]"
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
              Signup
            </Button>
          )}
        </div>

        <Separator />

        <p className="mt-2">
          Already have an account?{" "}
          <Link to={"/login"} className="text-blue-500 font-medium">
            Login
          </Link>{" "}
        </p>
      </form>
    </main>
  );
};

export default Signup;
