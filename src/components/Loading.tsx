import { Loader2 } from "lucide-react";

const Loading = () => {
  return (
    <div className="w-full p-10 mt-10">
      <Loader2 className="w-10 h-10 animate-spin text-primary" />
    </div>
  );
};

export default Loading;
