import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  RestaurantFormInput,
  restaurantFormSchema,
} from "@/schema/restaurantSchema";
import { Loader2 } from "lucide-react";
import { ChangeEvent, FormEvent, useState } from "react";

const Restaurant = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [isRestaurantAdded, setIsRestaurantAdded] = useState<boolean>(false);

  const [input, setInput] = useState<RestaurantFormInput>({
    name: "",
    city: "",
    country: "",
    deliveryTime: 0,
    cuisines: [],
    image: undefined,
  });

  const [errors, setErrors] = useState<Partial<RestaurantFormInput>>({});

  const changeEventHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setInput({
      ...input,
      [e.target.name]:
        e.target.type === "number" ? Number(e.target.value) : e.target.value,
    });
  };

  const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const result = restaurantFormSchema.safeParse(input);
    if (!result.success) {
      const filedErrors = result.error.formErrors.fieldErrors;
      setErrors(filedErrors as Partial<RestaurantFormInput>);
      return;
    }

    console.log(input);
  };

  return (
    <div className="max-w-6xl mx-auto my-10">
      <div className="">
        <div className="">
          <h1 className="font-extrabold text-2xl mb-5">
            {isRestaurantAdded ? "Update " : "Add "} Restaurants
          </h1>

          <form onSubmit={submitHandler}>
            <div className="md:grid grid-cols-2 gap-6 space-y-2 md:space-y-0">
              <div>
                <Label>Restaurant Name</Label>
                <Input
                  type="text"
                  name="name"
                  placeholder="Enter your restaurant name"
                  value={input.name}
                  onChange={changeEventHandler}
                />
                {errors && (
                  <span className="text-xs text-red-600 font-medium">
                    {errors.name}
                  </span>
                )}
              </div>

              <div>
                <Label>City</Label>
                <Input
                  type="text"
                  name="city"
                  placeholder="Enter your city"
                  value={input.city}
                  onChange={changeEventHandler}
                />
                {errors && (
                  <span className="text-xs text-red-600 font-medium">
                    {errors.city}
                  </span>
                )}
              </div>

              <div>
                <Label>Country</Label>
                <Input
                  type="text"
                  name="country"
                  placeholder="Enter your country"
                  value={input.country}
                  onChange={changeEventHandler}
                />
                {errors && (
                  <span className="text-xs text-red-600 font-medium">
                    {errors.country}
                  </span>
                )}
              </div>

              <div>
                <Label>Estimated Delivery Time (minutes)</Label>
                <Input
                  type="text"
                  name="deliveryTime"
                  placeholder="Enter your delivery time"
                  value={input.deliveryTime}
                  onChange={changeEventHandler}
                />
                {errors && (
                  <span className="text-xs text-red-600 font-medium">
                    {errors.deliveryTime}
                  </span>
                )}
              </div>

              <div>
                <Label>Cuisines</Label>
                <Input
                  type="text"
                  name="cuisines"
                  placeholder="e.g. Momos, Biryani, Pizza"
                  value={input.cuisines}
                  onChange={(e) =>
                    setInput({ ...input, cuisines: e.target.value.split(",") })
                  }
                />
                {errors && (
                  <span className="text-xs text-red-600 font-medium">
                    {errors.cuisines}
                  </span>
                )}
              </div>

              <div>
                <Label>Restaurant Banner</Label>
                <Input
                  type="file"
                  accept="image/*"
                  name="image"
                  onChange={(e) =>
                    setInput({
                      ...input,
                      image: e.target.files?.[0] || undefined,
                    })
                  }
                />
                {errors && (
                  <span className="text-xs text-red-600 font-medium">
                    {errors.image?.name}
                  </span>
                )}
              </div>
            </div>

            <div className="my-5 w-fit">
              {loading ? (
                <Button className="bg-[#d19254] hover:bg-[#d18c47]" disabled>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Adding Restaurant...
                </Button>
              ) : (
                <Button className="bg-[#d19254] hover:bg-[#d18c47]">
                  {isRestaurantAdded ? "Update Restaurant" : "Add Restaurant"}
                </Button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Restaurant;
