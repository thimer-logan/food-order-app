import React from "react";

interface CardProps {
  children: React.ReactNode;
}

function Card(props: CardProps) {
  return (
    <div className="p-4 shadow-md rounded-2xl bg-white">{props.children}</div>
  );
}

export default Card;
