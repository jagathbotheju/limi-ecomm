import Heading from "@/components/dashboard/Heading";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Link from "next/link";

const CategoriesPage = () => {
  return (
    <div>
      <div className="flex justify-between w-full">
        <Heading title="Categories" />
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
