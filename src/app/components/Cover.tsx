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
        "relative flex h-full w-full flex-col items-center justify-center overflow-hidden",
        isOpen ? "block" : "hidden",
      )}
    >
      <Image
        src={"/pic4.jpg"}
        alt="Picpengantin"
        width={500}
        height={500}
        className="absolute left-0 right-0 top-0 -z-0 h-full w-full object-cover opacity-10"
      />
      <Image
        src={"/flowerbottomleft.png"}
        alt="FlowerBottom"
        width={110}
        height={110}
        className="absolute -bottom-2 -left-2 opacity-60"
      />
      <Image
        src={"/flowerbottomright.png"}
        alt="FlowerBottom"
        width={110}
        height={110}
        className="absolute -bottom-2 -right-2 opacity-60"
      />
      <Image
        src={"/flowercircle.png"}
        width={400}
        height={400}
        alt="Flowers"
        className="absolute -z-0"
      />
      <Image
        src={"/flowerpita.png"}
        width={100}
        height={100}
        alt="Flowers"
        className="absolute top-2 w-28 md:hidden"
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

        <p className="z-10 mt-4 font-cormorant text-xs">
          ANDA DIUNDANG MENJADI TAMU DI ACARA PERNIKAHAN KAMI
        </p>
        <p
          id="guest"
          className="z-10 mt-2 font-corinthia text-3xl tracking-wider"
        >
          {name ? `${name} & Partner` : "Guest & Partner"}
        </p>
        <p className="z-10 font-cormorant text-sm font-bold md:text-base">
          JANUARI
        </p>
        <div className="z-10 flex items-center gap-x-3">
          <div className="w-[90px] border-b border-t border-[#89633E] py-1 text-center font-cormorant font-semibold">
            SEL
          </div>
          <p className="font-corinthia text-5xl font-medium md:text-7xl">14</p>
          <div className="w-[90px] border-b border-t border-[#89633E] py-1 text-center font-cormorant font-semibold">
            08:00 - selesai
          </div>
        </div>
        <p className="z-10 font-cormorant text-sm font-bold md:text-base">
          2025
        </p>
        <div className="z-10 mt-4">
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
