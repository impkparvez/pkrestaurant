import { z } from "zod";

export const restaurantFormSchema = z.object({
  name: z.string().nonempty({ message: "Restaurant name is required" }),
  city: z.string().nonempty({ message: "City is required" }),
  country: z.string().nonempty({ message: "Country is required" }),
  deliveryTime: z
    .number()
    .min(0, { message: "Delivery time must be greater than 0" }),
  cuisines: z.array(z.string()),
  image: z
    .instanceof(File)
    .optional()
    .refine((file) => file?.size !== 0, { message: "Image is required" }),
});

export type RestaurantFormInput = z.infer<typeof restaurantFormSchema>;
