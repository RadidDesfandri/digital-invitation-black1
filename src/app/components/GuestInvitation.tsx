import Image from "next/image";
import FormWishes from "./FormWishes";
import ListWishes from "./ListWishes";

export default function GuestInvitation() {
  return (
    <div
      id="tamu"
      className="relative mt-10 flex w-full flex-col items-center rounded-md bg-secondaryBlack/40 px-5 py-10"
    >
      <div className="relative">
        <Image
          height={40}
          width={40}
          alt="Butterfly"
          className="absolute -left-24 -top-10 md:-left-9 md:top-0"
          src="/butterfly.png"
        />
        <h1 className="font-corinthia text-5xl md:text-6xl">Guest Book</h1>
      </div>

      <h2 className="max-w-lg text-center font-cormorant text-sm italic">
        Kami mengucapkan rasa syukur dan terima kasih atas waktu dan kehadiran
        Anda dalam momen bahagia kami. Kehadiran Andamenjadi doa dan restu yang
        berarti bagi perjalanan hidup kami ke depan.
      </h2>

      <div className="relative mt-6 flex max-h-96 w-full flex-col items-center rounded-3xl bg-[url(/bgcover.png)] px-5 py-6">
        <Image
          width={40}
          height={40}
          src="/leftbutterfly.png"
          alt="Butterfly"
          className="absolute left-1 top-1"
        />
        <Image
          width={40}
          height={40}
          src="/leftbutterfly.png"
          alt="Butterfly"
          className="absolute bottom-1 right-1"
        />
        <Image
          width={40}
          height={40}
          src="/butterflypoint45.png"
          alt="Butterfly"
          className="absolute right-2 top-24 w-8 -rotate-12"
        />
        <Image
          width={70}
          height={70}
          alt="Flower"
          src="/flowertulip.png"
          className="absolute bottom-0 left-0"
        />

        <FormWishes />
      </div>

      {/* Card sec start*/}
      <div className="relative mt-12 flex w-full flex-col items-center rounded-3xl bg-[url('/bgcover.png')] px-5 py-6">
        <Image
          width={40}
          height={40}
          src="/leftbutterfly.png"
          alt="Butterfly"
          className="absolute left-1 top-1"
        />
        <Image
          width={40}
          height={40}
          src="/centerbutterfly.png"
          alt="Butterfly"
          className="absolute right-2 top-12"
        />
        <h1 className="gradient-text pb-2 pl-2 font-corinthia text-4xl text-black">
          Messages & Wishes
        </h1>
        <ListWishes />
      </div>
      {/* Card sec end */}
    </div>
  );
}
