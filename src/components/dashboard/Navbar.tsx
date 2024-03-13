"use client";
import { AlignJustify, Bell, Sun, User } from "lucide-react";
import { ThemeSwitcher } from "../ThemeSwitcher";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between bg-slate-800 text-slate-50 ml-60 h-16 px-8 py-4 fixed top-0 right-0 left-0">
      <AlignJustify className="w-5 h-5" />
      <div className="flex space-x-3">
        <ThemeSwitcher />
        <Bell className="w-5 h-5" />
        <User className="w-5 h-5" />
      </div>
    </div>
  );
};

export default Navbar;
