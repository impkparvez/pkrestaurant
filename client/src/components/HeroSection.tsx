import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const [searchText, setSearchText] = useState<string>("");
  return (
    <div className="flex flex-col md:flex-row max-w-7xl mx-auto md:p-10 rounded-lg items-center justify-center m-4 gap-20">
      <div className="flex flex-col gap-10 md:w-[40%]">
        <div className="flex flex-col gap-5">
          <h1 className="font-bold md:font-extrabold md:text-5xl text-4xl">
            Order Food anytime & anywhere
          </h1>
          <p className="text-gray-500">
            Hey! Our Delicious food is wating for you, we are always near to
            you.
          </p>
        </div>

        <div className="relative flex items-center gap-2">
          <Input
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="pl-10 shadow-lg"
          />

          <Search className="text-gray-500 absolute top-1/2 -translate-y-1/2 left-2" />

          <Button className="bg-[#d19254] hover:bg-[#d18c47]">Search</Button>
        </div>
      </div>

      <div>
        <img
          src={"/hero-img.png"}
          alt=""
          className="object-cover w-full max-h-[500px]"
        />
      </div>
    </div>
  );
};

export default HeroSection;
