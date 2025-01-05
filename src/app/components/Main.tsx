"use client";

import { Suspense, useEffect, useState } from "react";
import Cover from "@/app/components/Cover";
import Invitations from "./Invitations";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { motion } from "framer-motion";
import clsx from "clsx";

const Main = () => {
  const [openInvitation, setOpenInvitation] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const [audioInstance, setAudioInstance] = useState<HTMLAudioElement | null>(
    null,
  );

  useEffect(() => {
    if (typeof window !== "undefined") {
      const audio = new Audio("music-file.mp3");
      setAudioInstance(audio);
    }
  }, []);

  const handleClick = () => {
    setIsOpen(true);

    if (audioInstance) {
      audioInstance.play();
      setIsPlaying(true);
    }

    setTimeout(() => {
      setOpenInvitation(true);
      setTimeout(() => {
        setIsOpen(false);
      }, 900);
    }, 900);
  };

  const handleAudioOnOff = () => {
    if (audioInstance) {
      if (isPlaying) {
        audioInstance.pause();
        setIsPlaying(false);
      } else {
        audioInstance.play();
        setIsPlaying(true);
      }
    }
  };

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Suspense
        fallback={
          <div className="flex h-full w-full flex-col items-center justify-center text-3xl">
            Mohon tunggu
          </div>
        }
      >
        <Cover handleClick={handleClick} isOpen={!openInvitation && !isOpen} />
        <motion.div
          initial={{ x: 0 }}
          animate={isOpen ? { x: "-100%" } : { x: 0 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className={clsx(
            "absolute left-0 top-0 h-full w-1/2",
            isOpen && "bg-black",
          )}
        ></motion.div>

        <motion.div
          initial={{ x: 0 }}
          animate={isOpen ? { x: "100%" } : { x: 0 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className={clsx(
            "absolute right-0 top-0 h-full w-1/2",
            isOpen && "bg-black",
          )}
        ></motion.div>
        <Invitations
          isOpen={openInvitation}
          handleAudioOnOff={handleAudioOnOff}
        />
      </Suspense>
    </QueryClientProvider>
  );
};

export default Main;
