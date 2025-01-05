"use client";

import AnimatedOpacity from "@/components/Motions/AnimatedOpacity";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const HomeInvitation = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const targetDate = "2025-01-14T01:00:00.418Z";

  useEffect(() => {
    const target = new Date(targetDate).getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = target - now;

      if (difference <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div
      id="home"
      className="relative flex w-full flex-col items-center rounded-md bg-secondaryBlack/40 px-5 py-10"
    >
      <AnimatedOpacity duration={0.5}>
        <div className="relative">
          <Image
            src="/flowerdecoration.png"
            alt="flowerdecoration"
            width={300}
            height={300}
            className="absolute -top-4 opacity-70"
          />
          <Image
            src="/pengantin3.jpg"
            alt="pengantin"
            width={100}
            height={100}
            className="w-64 rounded-full"
          />
        </div>
      </AnimatedOpacity>

      <AnimatedOpacity duration={1}>
        <h3 className="mt-3 font-corinthia text-3xl">
          The Journey Begins in...
        </h3>
      </AnimatedOpacity>

      {/* Time Coundown start */}
      <AnimatedOpacity duration={2}>
        <div className="mt-2 flex items-center gap-x-4">
          <div className="w-16 rounded-md bg-primaryPink px-1 py-2 text-center">
            <p className="font-cormorant text-base font-bold italic">Days</p>
            <p id="day" className="font-cormorant text-4xl font-bold">
              {timeLeft.days.toString().padStart(2, "0")}
            </p>
          </div>
          <div className="w-16 rounded-md bg-primaryPink px-1 py-2 text-center">
            <p className="font-cormorant text-base font-bold italic">Hours</p>
            <p id="hour" className="font-cormorant text-4xl font-bold">
              {timeLeft.hours.toString().padStart(2, "0")}
            </p>
          </div>
          <div className="w-16 rounded-md bg-primaryPink px-1 py-2 text-center">
            <p className="font-cormorant text-base font-bold italic">Minutes</p>
            <p id="minute" className="font-cormorant text-4xl font-bold">
              {timeLeft.minutes.toString().padStart(2, "0")}
            </p>
          </div>
          <div className="w-16 rounded-md bg-primaryPink px-1 py-2 text-center">
            <p className="font-cormorant text-base font-bold italic">Seconds</p>
            <p id="second" className="font-cormorant text-4xl font-bold">
              {timeLeft.seconds.toString().padStart(2, "0")}
            </p>
          </div>
        </div>
      </AnimatedOpacity>
      {/* Time Coundown end */}

      <AnimatedOpacity duration={2.5}>
        <p className="mt-2 text-center font-cormorant text-sm italic">
          - Pernikahan menandai awal dari sebuah perjalanan indah, di mana dua
          hati bersatu untuk membangun cinta, tawa, dan kenangan berharga seumur
          hidup. Semoga hari ini hanya menjadi awal dari kebahagiaan yang kita
          ciptakan bersama.-
        </p>
      </AnimatedOpacity>

      <AnimatedOpacity duration={2}>
        <div className="relative -left-5 mt-6 w-[100px] text-center md:mb-5 md:mt-0">
          <p className="font-corinthia text-5xl font-semibold text-primaryPink drop-shadow-lg">
            R
          </p>
          <p className="absolute right-0 top-3 font-corinthia text-5xl font-semibold text-primaryPink drop-shadow-lg">
            F
          </p>
          <Image
            width={50}
            height={50}
            alt="Butterfly"
            className="absolute -left-0 -top-4 h-8 w-8"
            src="/butterfly.png"
          />
          <Image
            width={50}
            height={50}
            alt="Butterfly"
            className="absolute -bottom-6 -right-5 h-8 w-8"
            src="/butterfly.png"
          />
        </div>
      </AnimatedOpacity>
    </div>
  );
};

export default HomeInvitation;
