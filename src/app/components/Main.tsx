"use client";

import { Suspense, useEffect, useState } from "react";
import Cover from "@/app/components/Cover";
import Invitations from "./Invitations";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const Main = () => {
  const [openInvitation, setOpenInvitation] = useState(false);
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
    setOpenInvitation(true);
    if (audioInstance) {
      audioInstance.play();
      setIsPlaying(true);
    }
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
        <Cover handleClick={handleClick} isOpen={!openInvitation} />
      </Suspense>
      <Invitations
        isOpen={openInvitation}
        handleAudioOnOff={handleAudioOnOff}
      />
    </QueryClientProvider>
  );
};

export default Main;
