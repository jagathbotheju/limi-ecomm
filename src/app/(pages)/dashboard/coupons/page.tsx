import Heading from "@/components/dashboard/Heading";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Link from "next/link";

const CouponsPage = () => {
  return (
    <div className="flex justify-between dark:text-slate-50 dark:bg-slate-800 bg-slate-100 p-10 rounded-md relative">
      <h1 className="text-2xl font-semibold">Coupons</h1>

      <Button asChild>
        <Link href="/dashboard/coupons/new" className="">
          <Plus />
          <span>Add Coupon</span>
        </Link>
      </Button>
    </div>
  );
};

export default CouponsPage;
