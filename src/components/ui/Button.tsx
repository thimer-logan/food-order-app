import React from "react";

interface ButtonProps {
  className?: string;
  onClick?: () => void;
  children: React.ReactNode;
}

function Button({ className, onClick, children }: ButtonProps) {
  const defaultStyles =
    "cursor-pointer bg-[#8a2b06] rounded-2xl border-solid border-2 border-[#8a2b06] font-bold active:bg-[#641e03] hover:bg-[#641e03]";
  return (
    <button className={`${defaultStyles} ${className}`} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
