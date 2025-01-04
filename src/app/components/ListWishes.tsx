"use client";

import useWishes from "@/hooks/useWishes";

const ListWishes = () => {
  const { data, isPending } = useWishes();

  if (isPending) {
    <p className="text-center text-black">Harap tunggu</p>;
  }

  return (
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
  );
};

export default ListWishes;
