"use client";

import { useEffect, useRef, useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import clsx from "clsx";

interface DropdownOptions {
  label: string;
  value: string;
}

interface DropdownProps {
  options: DropdownOptions[];
  onSelect: (value: string) => void;
  placeholder: string;
}

const Dropdown: React.FC<DropdownProps> = ({
  options,
  onSelect,
  placeholder,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<string | null>(placeholder);

  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleSelect = (value: string, label?: string) => {
    setSelected(label!);
    onSelect(value);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickModal = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener(`click`, handleClickModal);
    }
    return () => {
      document.addEventListener("click", handleClickModal);
    };
  }, [isOpen]);

  return (
    <div className="relative w-full" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-center gap-x-2 rounded-lg bg-white px-2 py-2 text-center font-cormorant text-black outline-none"
      >
        {selected}
        <FaAngleDown
          className={clsx(
            `duration-600 transition-all`,
            isOpen && `rotate-180`,
          )}
        />
      </button>

      {isOpen && (
        <div className="absolute z-10 mt-[2px] flex w-full flex-col gap-y-[1px]">
          {options.map((opt, idx, array) => {
            return (
              <button
                key={opt.value}
                type="button"
                onClick={() => handleSelect(opt.value, opt.label)}
                className={clsx(
                  "w-full cursor-pointer bg-white py-2 text-center font-cormorant shadow transition-all duration-300 hover:bg-gray-100",
                  idx === 0 && "rounded-t-lg",
                  array.length - 1 === idx && "rounded-b-lg",
                )}
              >
                {opt.label}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
