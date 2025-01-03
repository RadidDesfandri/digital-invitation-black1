"use client";

import { useRef, useState } from "react";
import Cover from "@/app/components/Cover";
import Invitations from "./Invitations";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const Main = () => {
  const [openInvitation, setOpenInvitation] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const audioRef = useRef(new Audio("music-file.mp3"));

  const handleClick = () => {
    setOpenInvitation(true);
    const audio = audioRef.current;
    audio.play();
    setIsPlaying(true);
  };

  const handleAudioOnOff = () => {
    const audio = audioRef.current;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play();
      setIsPlaying(true);
    }
  };

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Cover handleClick={handleClick} isOpen={!openInvitation} />
      <Invitations
        isOpen={openInvitation}
        handleAudioOnOff={handleAudioOnOff}
      />
    </QueryClientProvider>
  );
};

export default Main;
