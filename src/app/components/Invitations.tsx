"use client";

import clsx from "clsx";
import Image from "next/image";
import GiftandAudio from "./GiftandAudio";
import HomeInvitation from "./HomeInvitation";
import BottomBar from "@/components/BottomBar";
import { useState } from "react";
import Modal from "@/components/Modal";
import GiftContent from "./GiftContent";

interface InvitationsProps {
  isOpen: boolean;
  handleAudioOnOff: () => void;
}

const Invitations: React.FC<InvitationsProps> = ({
  isOpen,
  handleAudioOnOff,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div
      className={clsx(
        "relative h-full w-full overflow-x-hidden px-5 py-5",
        isOpen ? "block" : "hidden",
      )}
    >
      <Image
        src="/flowertopleft.png"
        alt="flowertopleft"
        width={100}
        height={100}
        className="absolute -left-3 -top-3 w-32 opacity-60"
      />
      <Image
        src="/flowertopright.png"
        alt="flowertopleft"
        width={100}
        height={100}
        className="absolute -right-3 -top-3 w-32 opacity-60"
      />
      <BottomBar />
      <GiftandAudio
        handleOpenModal={() => setIsModalOpen(true)}
        handleAudioOnOff={handleAudioOnOff}
      />
      <GiftContent isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <HomeInvitation />
      
    </div>
  );
};

export default Invitations;
