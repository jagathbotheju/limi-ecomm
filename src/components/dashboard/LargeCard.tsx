import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Layers } from "lucide-react";

interface Props {
  data: {
    period: string;
    sales: number;
    color: string;
  };
}

const LargeCard = ({ data }: Props) => {
  return (
    <Card className={cn("text-slate-50 shadow-md border-none p-4", data.color)}>
      <CardContent>
        <div className="flex flex-col items-center gap-2">
          <Layers />
          <h4>{data.period}</h4>
          <h2 className="text-2xl md:text-3xl">{data.sales}</h2>
        </div>
      </CardContent>
    </Card>
  );
};

export default LargeCard;
