"use client";

import Button from "@/components/Button";
import Dropdown from "@/components/Dropdown";
import Input from "@/components/Input";
import axios from "axios";
import React, { useState } from "react";

const FormWishes = () => {
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [attendance, setAttendance] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      await axios.post(
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
  );
};

export default FormWishes;
