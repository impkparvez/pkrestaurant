import { Link } from "react-router-dom";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "./ui/menubar";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { Loader2, Moon, ShoppingCart, Sun } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { MobileNavbar } from "./MobileNavbar";

const Navbar = () => {
  const [admin, setAdmin] = useState(true);
  const [theme, setTheme] = useState("light");
  const [loading, setLoading] = useState(false);

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex items-center justify-between h-14">
        <Link to="/">
          <h1 className="text-2xl font-bold md:font-extrabold">PRK</h1>
        </Link>

        <div className="hidden md:flex items-center gap-10">
          <div className="hidden md:flex items-center gap-6">
            <Link to="/">Home</Link>
            <Link to="/profile">Profile</Link>
            <Link to="/order/status">Order</Link>

            {admin && (
              <Menubar>
                <MenubarMenu>
                  <MenubarTrigger>Dashboard</MenubarTrigger>
                  <MenubarContent>
                    <Link to={"/admin/restaurant"}>
                      <MenubarItem>Restaurant</MenubarItem>
                    </Link>
                    <Link to={"/admin/menu"}>
                      <MenubarItem>Menu</MenubarItem>
                    </Link>
                    <Link to={"/admin/orders"}>
                      <MenubarItem>Orders</MenubarItem>
                    </Link>
                  </MenubarContent>
                </MenubarMenu>
              </Menubar>
            )}
          </div>

          <div className="flex items-center gap-4">
            <div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="icon">
                    <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                    <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                    <span className="sr-only">Toggle theme</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={() => setTheme("light")}>
                    Light
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setTheme("dark")}>
                    Dark
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            <Link to={"/cart"} className="relative cursor-pointer">
              <ShoppingCart className="h-6 w-6" />

              <Button
                size={"icon"}
                className="absolute -inset-y-3 right-0 text-xs rounded-full h-4 w-4 bg-red-500 hover:bg-red-500"
              >
                5
              </Button>
            </Link>

            <div>
              <Avatar>
                <AvatarImage />
                <AvatarFallback>PK</AvatarFallback>
              </Avatar>
            </div>
            <div>
              {loading ? (
                <Button className="bg-[#d19254] hover:bg-[#d18c47]">
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Loading...
                </Button>
              ) : (
                <Button className="bg-[#d19254] hover:bg-[#d18c47]">
                  Logout
                </Button>
              )}
            </div>
          </div>
        </div>

        {/* Mobile Navbar */}
        <div className="md:hidden">
          <MobileNavbar />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
