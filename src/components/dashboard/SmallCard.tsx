import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Layers, LucideIcon, ShoppingCart } from "lucide-react";

interface Props {
  data: {
    title: string;
    sales: number;
    iconBg: string;
    icon: LucideIcon;
  };
}

const SmallCard = ({ data }: Props) => {
  const { title, sales, iconBg, icon: Icon } = data;

  return (
    <Card
      className={cn("text-slate-50 shadow-md border-none p-4 bg-slate-700")}
    >
      <CardContent className="p-0">
        <div className="flex space-x-2 items-center">
          <Icon
            className={cn(
              "h-9 w-9 p-2 flex items-center justify-center rounded-full",
              iconBg
            )}
          />
          <div className="flex flex-col">
            <p>{title}</p>
            <h3 className="text-2xl font-bold">{sales}</h3>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SmallCard;
