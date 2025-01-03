"use client";

import clsx from "clsx";
import React from "react";
import Image from "next/image";
import Button from "@/components/Button";
import { useSearchParams } from "next/navigation";
import { MdInsertInvitation } from "react-icons/md";

interface CoverProps {
  isOpen?: boolean;
  handleClick: () => void;
}

const Cover: React.FC<CoverProps> = ({ isOpen, handleClick }) => {
  const searchParams = useSearchParams();
  const name = searchParams.get("name");

  return (
    <section
      id="cover"
      className={clsx(
        "relative flex h-full w-full flex-col items-center justify-center",
        isOpen ? "block" : "hidden",
      )}
    >
      <Image
        src={"/flowercircle.png"}
        width={400}
        height={400}
        alt="Flowers"
        className="absolute opacity-45"
      />
      <Image
        src={"/flowerpita.png"}
        width={100}
        height={100}
        alt="Flowers"
        className="absolute top-2 w-28 opacity-45 md:hidden"
      />
      <div className="flex flex-col items-center">
        <p className="mb-2 font-cormorant">The Wedding Of</p>
        <div className="relative">
          <p className="font-corinthia text-7xl">Ronal</p>
          <Image
            src="/butterfly.png"
            width={50}
            height={50}
            alt="butterfly"
            className="absolute -left-8 -top-7 w-12"
          />
        </div>
        <p className="font-corinthia text-7xl">&</p>
        <div className="relative">
          <p className="font-corinthia text-7xl">Fadilla</p>
          <Image
            src="/butterfly.png"
            alt="butterfly"
            width={50}
            height={50}
            className="absolute -left-8 -top-7 w-12"
          />
        </div>

        <p className="mt-4 font-cormorant text-xs">
          ANDA DIUNDANG MENJADI TAMU DI ACARA PERNIKAHAN KAMI
        </p>
        <p id="guest" className="mt-2 font-corinthia text-3xl tracking-wider">
          {name ? `${name} & Partner` : "Guest & Partner"}
        </p>
        <p className="font-cormorant text-sm font-bold md:text-base">JANUARI</p>
        <div className="flex items-center gap-x-3">
          <div className="w-[90px] border-b border-t border-[#89633E] py-1 text-center font-cormorant font-semibold">
            SEL
          </div>
          <p className="font-corinthia text-5xl font-medium md:text-7xl">14</p>
          <div className="w-[90px] border-b border-t border-[#89633E] py-1 text-center font-cormorant font-semibold">
            09:00
          </div>
        </div>
        <p className="font-cormorant text-sm font-bold md:text-base">2025</p>
        <div className="mt-4">
          <Button type="button" onClick={handleClick}>
            <div className="flex items-center gap-x-2">
              <MdInsertInvitation />
              Buka Undangan
            </div>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Cover;
