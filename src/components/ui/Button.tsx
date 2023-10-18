import React from "react";

interface ButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
}

function Button({ onClick, children }: ButtonProps) {
  return (
    <button
      className="cursor-pointer bg-[#8a2b06] text-white px-8 py-1 rounded-2xl border-solid border-2 border-[#8a2b06] font-bold active:bg-[#641e03] hover:bg-[#641e03]"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
