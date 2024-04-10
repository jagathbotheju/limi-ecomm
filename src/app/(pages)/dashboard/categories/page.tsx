import Heading from "@/components/dashboard/Heading";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Link from "next/link";

const CategoriesPage = () => {
  return (
    <div>
      <div className="flex justify-between dark:text-slate-50 dark:bg-slate-800 bg-slate-100 p-10 rounded-md relative">
        <h1 className="text-2xl font-semibold">Categories</h1>
        <Button asChild>
          <Link href="/dashboard/categories/new" className="">
            <Plus />
            <span>Add Category</span>
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default CategoriesPage;
