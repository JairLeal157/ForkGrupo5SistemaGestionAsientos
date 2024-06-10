import { useEffect, useState } from "react";

const usePetition = () => {
  const [statePetition, setStatePetition] = useState<{
    status: "idle" | "success" | "error" | "loading";
    message: string;
  }>({
    status: "idle",
    message: "",
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setStatePetition({ status: "idle", message: "" });
    }, 5000);
    () => clearTimeout(timer);
  }, [statePetition.status]);
  return { statePetition, setStatePetition };
};

export default usePetition;
