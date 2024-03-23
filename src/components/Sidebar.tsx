"use client";
import {
  ArrowRight,
  Boxes,
  Building2,
  CircleDollarSign,
  LayoutGrid,
  LayoutGridIcon,
  LayoutList,
  LayoutPanelLeft,
  LogOut,
  MonitorPlay,
  ScanSearch,
  SendToBack,
  Settings,
  ShoppingBag,
  Store,
  Tractor,
  User,
  Users2,
  Warehouse,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Dispatch, SetStateAction, useState } from "react";

const sidebarLinks = [
  {
    title: "Customers",
    href: "/dashboard/customers",
    icon: <Users2 />,
  },
  {
    title: "Markets",
    href: "/dashboard/markets",
    icon: <Warehouse />,
  },
  {
    title: "Farmers",
    href: "/dashboard/farmers",
    icon: <Tractor />,
  },
  {
    title: "Orders",
    href: "/dashboard/orders",
    icon: <ShoppingBag />,
  },
  {
    title: "Staff",
    href: "/dashboard/staff",
    icon: <User />,
  },
  {
    title: "Community",
    href: "/dashboard/community",
    icon: <Building2 />,
  },
  {
    title: "Wallet",
    href: "/dashboard/wallet",
    icon: <CircleDollarSign />,
  },
  {
    title: "Settings",
    href: "/dashboard/settings",
    icon: <Settings />,
  },
  {
    title: "Online Store",
    href: "/",
    icon: <Store />,
  },
];

const catalougeLinks = [
  {
    title: "Products",
    href: "/dashboard/products",
    icon: <Boxes />,
  },
  {
    title: "Categories",
    href: "/dashboard/categories",
    icon: <LayoutList />,
  },
  {
    title: "Attributes",
    href: "/dashboard/attributes",
    icon: <SendToBack />,
  },
  {
    title: "Coupons",
    href: "/dashboard/coupons",
    icon: <ScanSearch />,
  },
  {
    title: "Store Sliders",
    href: "/dashboard/sliders",
    icon: <MonitorPlay />,
  },
];

interface Props {
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const Sidebar = ({ setOpen }: Props) => {
  const pathname = usePathname();

  return (
    <div className="dark:bg-slate-700 space-y-6 w-60 h-screen dark:text-slate-50 shadow-lg">
      <Link href="/">
        <div className="mb-6 w-full h-[150px] relative">
          <Image
            src="/logo.jpg"
            alt="logo"
            className="top-0 left-0 relative w-full h-full"
            fill
          />
        </div>
      </Link>

      {/* dashboard */}
      <div className="space-y-3 flex flex-col">
        <Link
          href="/dashboard"
          className={cn(
            "flex space-x-2 items-center py-2 pl-4",
            `${
              "/dashboard" === pathname &&
              "text-green-600 border-green-600 border-l-8"
            }`
          )}
        >
          <LayoutGrid />
          <span>Dashboard</span>
        </Link>

        {/* catalouge */}
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-decoration-none pr-5">
              <Link
                href="/dashboard/catalouge"
                className={cn(
                  "flex space-x-2 items-center py-2 pl-4 text-decoration-none",
                  `${
                    "/dashboard/catalouge" === pathname &&
                    "text-green-600 border-green-600 border-l-8"
                  }`
                )}
              >
                <LayoutPanelLeft />
                <span>Catalouge</span>
              </Link>
            </AccordionTrigger>
            <AccordionContent className="dark:bg-slate-600 m-2 rounded-md">
              {catalougeLinks.map((link, i) => {
                return (
                  <Link
                    onClick={() => setOpen(false)}
                    key={i}
                    href={link.href}
                    className={cn(
                      "flex space-x-2 items-center py-2 pl-4",
                      `${
                        link.href === pathname &&
                        "text-green-600 border-green-600 border-l-8"
                      }`
                    )}
                  >
                    {link.icon}
                    <span>{link.title}</span>
                  </Link>
                );
              })}
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        {sidebarLinks.map((link, i) => {
          return (
            <Link
              key={i}
              href={link.href}
              className={cn(
                "flex space-x-2 items-center py-2 pl-4",
                `${
                  link.href === pathname &&
                  "text-green-600 border-green-600 border-l-8"
                }`
              )}
            >
              {link.icon}
              <span>{link.title}</span>
            </Link>
          );
        })}
      </div>

      <div className="px-5 mt-auto">
        <Button className="flex gap-2 w-full bg-green-600">
          <LogOut />
          Logout
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;
