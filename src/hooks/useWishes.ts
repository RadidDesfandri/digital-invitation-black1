"use client";

import { AllMessages } from "@/types/Messages";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useWishes = () => {
  return useQuery({
    queryKey: ["wishes"],
    queryFn: async () => {
      const { data } = await axios.get<AllMessages[]>("/api/get-wishes");

      return data;
    },
  });
};

export default useWishes;
