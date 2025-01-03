"use client";

interface InputProps {
  id: string;
  type?: string;
  label?: string;
  placeholder?: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
}

const Input: React.FC<InputProps> = ({
  id,
  type,
  label,
  placeholder,
  setInputValue,
}) => {
  
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="flex flex-col items-center space-y-1">
      <label
        htmlFor={id}
        className="text-center font-cormorant text-sm font-bold md:text-base"
      >
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        className="w-full rounded-lg px-2 py-2 text-center outline-none placeholder:font-cormorant placeholder:text-black"
      />
    </div>
  );
};

export default Input;
