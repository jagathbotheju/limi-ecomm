"use client";
import { useEffect, useState } from "react";

interface Props {
  children: React.ReactNode;
}

const Hydration = ({ children }: Props) => {
  const [mount, setMount] = useState(false);

  useEffect(() => {
    setMount(true);
  }, []);

  if (!mount) return null;

  return <>{children}</>;
};

export default Hydration;
