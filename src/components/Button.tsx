"use client";

import clsx from "clsx";

interface ButtonProps {
  children: React.ReactNode;
  disabled?: boolean;
  type: "button" | "submit" | "reset";
}

const Button: React.FC<ButtonProps> = ({ children, disabled, type }) => {
  return (
    <button
      disabled={disabled}
      type={type}
      className={clsx(
        "rounded-lg bg-primaryPink px-6 py-2 font-cormorant text-white shadow-md transition-all duration-300 hover:opacity-55 active:scale-95 disabled:opacity-50",
      )}
    >
      {children}
    </button>
  );
};

export default Button;
