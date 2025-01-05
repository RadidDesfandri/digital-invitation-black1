import AnimatedOpacity from "@/components/Motions/AnimatedOpacity";
import AnimatedTranslate from "@/components/Motions/AnimatedTranslate";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const dataPengantin = [
  {
    image: "/pengantinpria.jpg",
    name: "Ronal Saputra S.Kom",
    namaBapak: "Bapak Syamsu Kamar",
    namaIbuk: "Ibuk Siti Jawanis",
    anakKe: "Putra ke-empat dari",
    linkIg: "https://www.instagram.com/ro.nald1671",
    linkFb: "https://www.facebook.com/share/1JnBSSdqjf/?mibextid=wwXIfr",
  },
  {
    image: "/pengantinwanita.jpg",
    name: "Agustia Fadilla S.Kom",
    namaBapak: "Bapak Syafrial",
    namaIbuk: "Ibuk Siti Halifa",
    anakKe: "Putri ke-lima dari",
    linkIg: "https://www.instagram.com/agustia.fadila",
    linkFb: "https://www.facebook.com/share/157dPFwSbq/?mibextid=wwXIfr",
  },
];

const CoupleInvitation = () => {
  return (
    <div
      id="couple"
      className="relative mt-10 flex w-full flex-col items-center rounded-md bg-secondaryBlack/40 px-5 py-10"
    >
      <Image
        width={200}
        height={200}
        src="/flowerpita.png"
        alt="flowerpita"
        className="mb-4 w-24 opacity-55"
      />

      <AnimatedTranslate delay={0.1} duration={0.7} direction="right">
        <h1 className="font-corinthia text-5xl drop-shadow-md">
          Our Beloved Couple
        </h1>
      </AnimatedTranslate>
      <AnimatedOpacity duration={0.9} threshold={1}>
        <p className="font-cormorant font-bold">Assalamu’alaikum Wr. Wb.</p>
      </AnimatedOpacity>

      <AnimatedOpacity duration={0.9} threshold={1}>
        <p className="mt-2 text-center font-cormorant text-sm">
          Dengan rahmat dan karunia Allah SWT, kami dengan rendah hati
          mengumumkan pernikahan putra dan putri kami tercinta:
        </p>
      </AnimatedOpacity>

      <div className="flex w-full flex-col gap-10 md:flex-row">
        {dataPengantin.map((data) => {
          return (
            <div
              key={data.name}
              className="flex w-full flex-col items-center gap-y-5"
            >
              <AnimatedOpacity duration={2}>
                <div className="relative mt-10 md:mt-0">
                  <Image
                    width={500}
                    height={500}
                    alt="Cloude"
                    className="absolute -top-10 -z-10 opacity-65"
                    src="/cloude.png"
                  />
                  <Image
                    alt="Cloude"
                    width={500}
                    height={500}
                    className="absolute -bottom-10 -z-10 opacity-65"
                    src="/cloude.png"
                  />
                  <Image
                    src="/flowerpita.png"
                    alt="flowerpita"
                    width={200}
                    height={200}
                    className="absolute -bottom-10 left-1/2 w-32 -translate-x-1/2 transform drop-shadow-[1px_1px_3px_pink]"
                  />
                  <Image
                    height={200}
                    width={200}
                    className="h-80 w-56 rounded-full object-cover"
                    alt="pengantinpria"
                    src={data.image}
                  />
                </div>
              </AnimatedOpacity>

              <AnimatedOpacity duration={1}>
                <p className="font-corinthia text-3xl font-semibold tracking-wider">
                  {data.name}
                </p>
              </AnimatedOpacity>

              <div className="flex justify-center gap-x-5">
                <Link href={data.linkIg} target="_blank">
                  <Image
                    width={50}
                    height={50}
                    src="/Instagram.png"
                    alt="Instagram icon"
                    className="w-7 drop-shadow-[1px_1px_5px_pink] grayscale transition-all duration-300 hover:drop-shadow-[1px_1px_8px_pink] hover:grayscale-0"
                  />
                </Link>
                <Link href={data.linkFb} target="_blank">
                  <Image
                    width={50}
                    height={50}
                    src="/facebook.png"
                    alt="Facebook icon"
                    className="w-7 drop-shadow-[1px_1px_5px_pink] grayscale transition-all duration-300 hover:drop-shadow-[1px_1px_8px_pink] hover:grayscale-0"
                  />
                </Link>
              </div>

              <AnimatedOpacity duration={1}>
                <p className="font-cormorant text-sm font-semibold">
                  {data.anakKe}
                </p>
                <p className="font-cormorant text-sm">
                  {data.namaBapak} & {data.namaIbuk}
                </p>
              </AnimatedOpacity>
            </div>
          );
        })}
      </div>

      <AnimatedOpacity duration={1}>
        <h1 className="mt-5 text-center font-corinthia text-5xl">
          Capture Love
        </h1>
      </AnimatedOpacity>
      <div className="mt-2 grid grid-cols-2 place-content-center gap-3 md:grid-cols-4">
        {[
          "/pic1.jpg",
          "/pic2.jpg",
          "/pic3.jpg",
          "/pic4.jpg",
          "/pic5.jpg",
          "/pic6.jpg",
        ].map((src, idx) => {
          const genap = idx % 2 === 0;
          return (
            <AnimatedTranslate
              direction={genap ? "left" : "right"}
              duration={1}
              delay={0.1}
              threshold={1}
              key={src}
            >
              <Image
                src={src}
                alt={`Pic-${idx + 1}`}
                width={200}
                height={200}
                className="rounded-lg object-cover"
              />
            </AnimatedTranslate>
          );
        })}
      </div>
    </div>
  );
};

export default CoupleInvitation;
