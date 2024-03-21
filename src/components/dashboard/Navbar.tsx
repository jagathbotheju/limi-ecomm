"use client";
import { AlignJustify, Bell, Sun, User } from "lucide-react";
import { ThemeSwitcher } from "../ThemeSwitcher";
import { Dispatch, SetStateAction, useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import Sidebar from "../Sidebar";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between bg-white dark:bg-slate-800 text-green-600 h-16 px-8 py-4 fixed top-0 right-0 left-0 shadow-lg w-full">
      {/* sidebar */}
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger className="flex gap-2 items-center">
          <AlignJustify className="w-8 h-8 cursor-pointer" />
          <h1 className="text-3xl font-bold">LIMI</h1>
        </SheetTrigger>
        <SheetContent className="w-fit p-0" side="left">
          <Sidebar setOpen={setOpen} />
        </SheetContent>
      </Sheet>

      <div className="flex space-x-5 items-center ml-auto">
        <ThemeSwitcher />

        <div className="relative flex">
          <Bell className="w-5 h-5" />
          <div className="absolute -top-3 -right-3 rounded-full p-[2px] flex items-center justify-center text-xs bg-red-500 font-semibold text-white">
            {25}
          </div>
        </div>
        <User className="w-6 h-6" />
      </div>
    </nav>
  );
};

export default Navbar;
