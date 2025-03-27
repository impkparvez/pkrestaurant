import { Minus, Plus } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { useState } from "react";
import CheckoutDetails from "./CheckoutDetails";

const Cart = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className="flex flex-col max-w-7xl mx-auto my-10">
      <div className="flex justify-end">
        <Button variant={"link"}>Clear All</Button>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Items</TableHead>
            <TableHead>Menu</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Quantity</TableHead>
            <TableHead>Total</TableHead>
            <TableHead className="text-right">Remove</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          <TableRow>
            <TableCell>
              <Avatar>
                <AvatarImage src="https://via.placeholder.com/150" />
                <AvatarFallback>PK</AvatarFallback>
              </Avatar>
            </TableCell>

            <TableCell>Biryani</TableCell>
            <TableCell>80</TableCell>
            <TableCell>
              <div className="w-fit flex items-center rounded-full border border-gray-100 dark:border-gray-800 shadow-md">
                <Button
                  className="rounded-full bg-gray-200"
                  size={"icon"}
                  variant="outline"
                >
                  <Minus />
                </Button>
                <Button
                  disabled
                  variant={"outline"}
                  size={"icon"}
                  className="font-bold border-none"
                >
                  1
                </Button>
                <Button
                  className="rounded-full bg-[#d19254] hover:bg-[#d18c47]"
                  size={"icon"}
                  variant="outline"
                >
                  <Plus />
                </Button>
              </div>
            </TableCell>
            <TableCell>80</TableCell>
            <TableCell className="text-right">
              <Button className="bg-[#d19254] hover:bg-[#d18c47]" size={"sm"}>
                Remove
              </Button>
            </TableCell>
          </TableRow>
        </TableBody>

        <TableFooter>
          <TableRow className="text-2xl font-bold">
            <TableCell colSpan={5} className="text-right">
              Total
            </TableCell>
            <TableCell className="text-right">80</TableCell>
          </TableRow>
        </TableFooter>
      </Table>

      <div className="flex justify-end my-5">
        <Button
          onClick={() => setOpen(true)}
          className="bg-[#d19254] hover:bg-[#d18c47]"
        >
          Proceed To Checkout
        </Button>
      </div>

      <CheckoutDetails open={open} setOpen={setOpen} />
    </div>
  );
};

export default Cart;
