"use client";

import { useState } from "react";
import { GiSoundOn, GiSoundOff } from "react-icons/gi";

interface GiftandAudioProps {
  handleAudioOnOff: () => void;
}

const GiftandAudio: React.FC<GiftandAudioProps> = ({
  handleAudioOnOff,
}) => {
  const [activeIconAudio, setActiveIconAudio] = useState(false);

  const handleClick = () => {
    handleAudioOnOff();
    setActiveIconAudio(!activeIconAudio);
  };

  return (
    <section className="fixed bottom-24 right-7 z-50 flex flex-col items-center gap-y-3">
      <button
        onClick={handleClick}
        className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-primaryPink p-1 text-white md:h-14 md:w-14"
      >
        {!activeIconAudio ? <GiSoundOn size={30} /> : <GiSoundOff size={30} />}
      </button>
    </section>
  );
};

export default GiftandAudio;
