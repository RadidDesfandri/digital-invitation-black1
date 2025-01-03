"use client";

import Link from "next/link";
import Modal from "@/components/Modal";
import { IoHomeOutline, IoWalletOutline } from "react-icons/io5";

interface GiftContentProps {
  isOpen: boolean;
  onClose: () => void;
}

const GiftContent: React.FC<GiftContentProps> = ({ isOpen, onClose }) => {

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <h1 className="font-corinthia text-5xl">Wedding Gifts</h1>
      <div className="flex w-full flex-col items-center gap-x-8 gap-y-6 md:flex-row md:items-start">
        {/* Bagian 1 start */}
        <div className="flex w-full flex-col items-center">
          <div className="flex items-center gap-x-5">
            <div className="h-[1px] w-[67px] bg-[#89633E]"></div>
            <p className="font-cormorant text-xl font-bold">Cashless Gift</p>
            <div className="h-[1px] w-[67px] bg-[#89633E]"></div>
          </div>
          <p className="text-center font-cormorant italic">
            Pilih metode untuk mengirim hadiah Anda secara online
          </p>

          <div className="mt-4 flex w-full items-center gap-x-4 rounded-3xl bg-[url('/bgcardfamily.png')] px-6 py-5">
            <div className="flex w-1/2 flex-col items-center">
              <div className="rounded-full bg-primaryPink p-3">
                <IoWalletOutline className="text-white" />
              </div>
              <p className="font-cormorant font-bold">Nagari</p>
              <p className="font-cormorant">14030213070194</p>
              <p className="font-cormorant">a.n. Agustia Fadilla</p>
            </div>
            <div className="h-[130px] w-[1px] bg-[#89633E]"></div>
            <div className="flex w-1/2 flex-col items-center">
              <div className="rounded-full bg-primaryPink p-3">
                <IoWalletOutline className="text-white" />
              </div>
              <p className="font-cormorant font-bold">BRI</p>
              <p className="font-cormorant">7482 0100 6032 533</p>
              <p className="font-cormorant">a.n. Agustia Fadilla</p>
            </div>
          </div>
        </div>
        {/* Bagian 1 end */}

        {/* Bagian 2 start */}
        <div className="flex w-full flex-col items-center">
          <div className="flex items-center gap-x-5">
            <div className="h-[1px] w-[67px] bg-[#89633E]"></div>
            <p className="font-cormorant text-xl font-bold">Deliver a Gift</p>
            <div className="h-[1px] w-[67px] bg-[#89633E]"></div>
          </div>
          <p className="text-center font-cormorant italic">
            Kirim hadiah Anda ke alamat berikut
          </p>

          <div className="mt-4 flex w-full flex-col items-center gap-x-4 rounded-3xl bg-[url('/bgcardfamily.png')] px-6 py-5">
            <div className="rounded-full bg-primaryPink p-3">
              <IoHomeOutline className="text-white" />
            </div>
            <p className="font-cormorant font-bold">Agustia Fadilla</p>
            <p className="text-center font-cormorant">
              Jr. Koto Tuo, Nag. Siguntur ,Kec. Sitiung, Kab. Dharmasraya,
              Sumatera Barat
            </p>
            <Link
              href={"https://maps.app.goo.gl/mqo42w9jcaocgsSH8"}
              target="_blank"
              className="mt-4 rounded-lg bg-primaryPink px-6 py-2 font-cormorant text-white shadow-md transition-all duration-300 hover:opacity-55 active:scale-95 disabled:opacity-50"
            >
              View address
            </Link>
          </div>
        </div>
        {/* Bagian 2 end */}
      </div>
    </Modal>
  );
};

export default GiftContent;
