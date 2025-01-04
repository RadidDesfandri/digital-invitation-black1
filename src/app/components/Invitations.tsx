"use client";

import clsx from "clsx";
import Image from "next/image";
import GiftandAudio from "./AudioButton";
import HomeInvitation from "./HomeInvitation";
import BottomBar from "@/components/BottomBar";
import CoupleInvitation from "./CoupleInvitation";
import AgendaInvitation from "./AgendaInvitation";
import GuestInvitation from "./GuestInvitation";
import GiftInvitations from "./GiftInvitations";
import Footer from "@/components/Footer";

interface InvitationsProps {
  isOpen: boolean;
  handleAudioOnOff: () => void;
}

const Invitations: React.FC<InvitationsProps> = ({
  isOpen,
  handleAudioOnOff,
}) => {
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
      <div className="absolute left-0 right-0 top-0 flex h-full w-full flex-col items-center gap-y-[1px]">
        <Image
          src={"/pic1.jpg"}
          alt="Picpengantin"
          width={500}
          height={500}
          className="-z-0 h-full w-full object-cover opacity-30"
        />
        <Image
          src={"/pic2.jpg"}
          alt="Picpengantin"
          width={500}
          height={500}
          className="-z-0 h-full w-full object-cover opacity-30"
        />
        <Image
          src={"/pic3.jpg"}
          alt="Picpengantin"
          width={500}
          height={500}
          className="-z-0 h-full w-full object-cover opacity-30"
        />
        <Image
          src={"/pic4.jpg"}
          alt="Picpengantin"
          width={500}
          height={500}
          className="-z-0 h-full w-full object-cover opacity-30"
        />
        <Image
          src={"/pic5.jpg"}
          alt="Picpengantin"
          width={500}
          height={500}
          className="-z-0 h-full w-full object-cover opacity-30"
        />
        <Image
          src={"/pic6.jpg"}
          alt="Picpengantin"
          width={500}
          height={500}
          className="-z-0 h-full w-full object-cover opacity-30"
        />
        <Image
          src={"/pengantin3.jpg"}
          alt="Picpengantin"
          width={500}
          height={500}
          className="-z-0 h-full w-full object-cover opacity-30"
        />
        <Image
          src={"/pic1.jpg"}
          alt="Picpengantin"
          width={500}
          height={500}
          className="-z-0 h-full w-full object-cover opacity-30"
        />
        <Image
          src={"/pic2.jpg"}
          alt="Picpengantin"
          width={500}
          height={500}
          className="-z-0 h-full w-full object-cover opacity-30"
        />
        <Image
          src={"/pic3.jpg"}
          alt="Picpengantin"
          width={500}
          height={500}
          className="-z-0 h-full w-full object-cover opacity-30"
        />
      </div>

      <BottomBar />
      <GiftandAudio handleAudioOnOff={handleAudioOnOff} />
      <HomeInvitation />
      <CoupleInvitation />
      <AgendaInvitation />
      <GiftInvitations />
      <GuestInvitation />
      <Footer />
    </div>
  );
};

export default Invitations;
