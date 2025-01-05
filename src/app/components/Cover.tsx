"use client";

import clsx from "clsx";
import React from "react";
import Image from "next/image";
import Button from "@/components/Button";
import { useSearchParams } from "next/navigation";
import { MdInsertInvitation } from "react-icons/md";
import AnimatedOpacity from "@/components/Motions/AnimatedOpacity";

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
        "relative z-[100] flex h-full w-full flex-col items-center justify-center overflow-hidden",
        isOpen ? "block" : "hidden",
      )}
    >
      <AnimatedOpacity duration={1}>
        <Image
          src={"/pic7.jpg"}
          alt="Picpengantin"
          width={500}
          height={500}
          className="absolute left-0 right-0 top-0 -z-0 h-full w-full object-cover opacity-50"
        />
      </AnimatedOpacity>
      <div className="flex flex-col items-center">
        <AnimatedOpacity duration={1}>
          <p className="mb-2 font-cormorant">The Wedding Of</p>
        </AnimatedOpacity>

        <AnimatedOpacity duration={1.5}>
          <div className="relative">
            <p className="font-corinthia text-7xl font-medium">Ronal</p>
            <Image
              src="/butterfly.png"
              width={50}
              height={50}
              alt="butterfly"
              className="absolute -left-8 -top-7 w-12"
            />
          </div>
        </AnimatedOpacity>
        <AnimatedOpacity duration={2}>
          <p className="font-corinthia text-7xl font-semibold">&</p>
        </AnimatedOpacity>
        <AnimatedOpacity duration={2.5}>
          <div className="relative">
            <p className="font-corinthia text-7xl font-medium">Fadilla</p>
            <Image
              src="/butterfly.png"
              alt="butterfly"
              width={50}
              height={50}
              className="absolute -left-8 -top-7 w-12"
            />
          </div>
        </AnimatedOpacity>

        <AnimatedOpacity duration={3}>
          <p className="z-10 mt-4 font-cormorant text-xs">
            ANDA DIUNDANG MENJADI TAMU DI ACARA PERNIKAHAN KAMI
          </p>
        </AnimatedOpacity>

        <AnimatedOpacity duration={3.5}>
          <p
            id="guest"
            className="z-10 mt-2 font-corinthia text-3xl tracking-wider"
          >
            {name ? `${name}` : "Guest & Partner"}
          </p>
        </AnimatedOpacity>

        <AnimatedOpacity duration={4}>
          <p className="z-10 font-cormorant text-sm font-bold md:text-base">
            JANUARI
          </p>
          <div className="z-10 flex items-center gap-x-3">
            <div className="w-[90px] border-b-2 border-t-2 border-[#89633E] py-1 text-center font-cormorant font-semibold">
              SEL
            </div>
            <p className="font-corinthia text-5xl font-medium md:text-7xl">
              14
            </p>
            <div className="w-[90px] border-b-2 border-t-2 border-[#89633E] py-1 text-center font-cormorant font-semibold">
              08:00 - selesai
            </div>
          </div>
          <p className="z-10 font-cormorant text-sm font-bold md:text-base">
            2025
          </p>
        </AnimatedOpacity>

        <div className="z-10 mt-4">
          <AnimatedOpacity duration={4}>
            <Button type="button" onClick={handleClick}>
              <div className="flex items-center gap-x-2">
                <MdInsertInvitation />
                Buka Undangan
              </div>
            </Button>
          </AnimatedOpacity>
        </div>
      </div>
    </section>
  );
};

export default Cover;
