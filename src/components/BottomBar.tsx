"use client";

import Link from "next/link";
import { IoCalendar, IoHome } from "react-icons/io5";
import { BsPersonHeart } from "react-icons/bs";
import { FaBookOpen, FaGift } from "react-icons/fa";

const navigationData = [
  { href: "#home", icon: IoHome },
  { href: "#couple", icon: BsPersonHeart },
  { href: "#agenda", icon: IoCalendar },
  { href: "#gift", icon: FaGift },
  { href: "#tamu", icon: FaBookOpen },
];

const BottomBar = () => {
  return (
    <div className="fixed bottom-5 left-0 z-[100] flex w-full justify-center">
      <ul className="flex w-full max-w-sm items-center justify-center gap-x-12 rounded-full bg-primaryPink px-10 py-3 font-cormorant text-white">
        {navigationData.map((data) => {
          return (
            <Link
              key={data.href}
              href={data.href}
              className="flex flex-col items-center justify-start transition duration-300"
            >
              <data.icon size={26} />
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default BottomBar;
