import Link from "next/link";
import React from "react";

const dataCard = [
  { header: "Akad Nikah", tanggal: "13", hari: "Sen" },
  { header: "Resepsi Pernikahan", tanggal: "14", hari: "Sel" },
];

const AgendaInvitation = () => {
  return (
    <div
      id="agenda"
      className="relative mt-10 flex w-full flex-col items-center rounded-md bg-secondaryBlack/40 px-5 py-10"
    >
      <h1 className="font-corinthia text-5xl drop-shadow-md">
        The Day's Agenda
      </h1>
      <p className="mt-2 text-center font-cormorant text-sm">
        Agar tidak ketinggalan momen apa pun, berikut jadwal acara hari
        pernikahan kami.
      </p>

      <div className="mt-5 flex w-full flex-col gap-y-12">
        {dataCard.map((data) => {
          return (
            <div key={data.header} className="w-full">
              <div className="flex w-full flex-col items-center rounded-lg bg-[url('/bgcover.png')] px-4 py-5 text-black">
                <h1 className="font-corinthia text-5xl">{data.header}</h1>
                <div className="flex items-center justify-between gap-x-4">
                  <div className="w-[90px] border-b border-t border-[#89633E] py-1 text-center font-cormorant font-bold">
                    {data.hari}
                  </div>
                  <div className="mb-4 flex flex-col items-center justify-center">
                    <p className="font-cormorant text-sm font-bold">Januari</p>
                    <p className="gradient-text font-cormorant text-4xl italic">
                      {data.tanggal}
                    </p>
                    <p className="font-cormorant text-sm font-bold">2025</p>
                  </div>
                  <div className="w-[90px] border-b border-t border-[#89633E] py-1 text-center font-cormorant font-bold">
                    09:00 - 10:00
                  </div>
                </div>
                <p className="font-cormorant font-bold">
                  Rumah Mempelai Wanita
                </p>
                <p className="w-full max-w-64 text-center font-cormorant">
                  Jr. Koto Tuo, Nag. Siguntur ,Kec. Sitiung, Kab. Dharmasraya,
                  Sumatera Barat
                </p>
              </div>
              <div className="flex w-full justify-center">
                <Link
                  href="https://maps.app.goo.gl/mqo42w9jcaocgsSH8"
                  target="_blank"
                  className="mt-6 flex w-fit items-center justify-center gap-x-1 rounded-lg bg-primaryPink px-6 py-2 font-cormorant text-white shadow-md transition-all duration-300 hover:opacity-55 active:scale-95 disabled:opacity-50"
                >
                  <p>View on Google Map</p>
                </Link>
              </div>

              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3989.2326400002553!2d101.5697910749652!3d-0.9817404990087836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMMKwNTgnNTQuMyJTIDEwMcKwMzQnMjAuNSJF!5e0!3m2!1sen!2sid!4v1735711610621!5m2!1sen!2sid"
                className="mt-4 w-full rounded-lg"
                loading="lazy"
              ></iframe>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AgendaInvitation;
