"use client";

import axios from "axios";
import Image from "next/image";
import Input from "@/components/Input";
import React, { useState } from "react";
import Button from "@/components/Button";
import Dropdown from "@/components/Dropdown";
import useWishes from "@/hooks/useWishes";

const GuestInvitation = () => {
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [attendance, setAttendance] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { data } = useWishes();

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      const res = await axios.post(
        "/api/wishes",
        {
          name,
          message,
          attendance,
        },
        {
          headers: {
            Authorization: "application/json",
          },
        },
      );
      alert("Berhasil mengirim pesan");
      console.log(res);
    } catch (error) {
      console.log("ERROR SAAT SUBMIT", error);
      alert("Something went wrong!");
    } finally {
      setIsLoading(false);
    }
  };

  const options = [
    {
      label: "Saya akan menghadiri pernikahannya",
      value: "Saya akan menghadiri pernikahannya",
    },
    {
      label: "Saya mungkin menghadiri pernikahan",
      value: "Saya mungkin menghadiri pernikahan",
    },
    {
      label: "Saya tidak menghadiri pernikahan",
      value: "Saya tidak menghadiri pernikahan",
    },
  ];

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

        <div className="z-10 flex w-full flex-col space-y-5 text-black">
          <Input
            id="name"
            type="text"
            setInputValue={setName}
            placeholder="Masukkan disini"
            label="Masukkan nama anda"
          />
          <div className="flex w-full flex-col items-center space-y-1">
            <label
              htmlFor="attendance"
              className="text-center font-cormorant text-sm font-bold md:text-base"
            >
              Konfirmasi kehadiran anda
            </label>
            <Dropdown
              onSelect={(e) => setAttendance(e)}
              options={options}
              placeholder="Konfirmasi kehadiran anda"
            />
          </div>
          <Input
            id="message"
            type="text"
            setInputValue={setMessage}
            placeholder="Masukkan disini"
            label="Silahkan tulis harapan dan doa anda untuk pasangan"
          />

          <div className="flex justify-center">
            <Button type="submit" disabled={isLoading} onClick={handleSubmit}>
              Submit
            </Button>
          </div>
        </div>
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

        <div className="mt-5 flex max-h-72 w-full flex-col items-center gap-y-2 overflow-y-scroll">
          {data?.length === 0 && (
            <p className="text-center font-cormorant text-black">
              Belum ada ucapan selamat, jadilah pemberi ucapan pertama
            </p>
          )}
          {data?.map((data) => {
            return (
              <div key={data.id} className="w-full">
                <h4 className="font-cormorant text-sm font-bold text-black md:text-base">
                  {data.name}
                </h4>
                <p className="font-cormorant text-xs text-black md:text-sm">
                  {data.message}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      {/* Card sec end */}
    </div>
  );
};

export default GuestInvitation;
