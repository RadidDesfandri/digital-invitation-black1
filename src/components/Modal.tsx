"use client";

import clsx from "clsx";
import { useEffect } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      onClick={onClose}
      className={clsx(
        "fixed inset-0 z-[1000] flex items-center justify-center bg-black bg-opacity-50 px-5 transition-opacity duration-500",
        isOpen ? "opacity-100" : "opacity-0",
      )}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative flex w-full max-w-2xl translate-y-0 flex-col items-center rounded-md bg-gray-100 px-5 py-6 text-black shadow-lg transition-transform duration-500"
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
