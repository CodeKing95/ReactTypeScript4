import React from "react";

type ButtonProps = {
  text: string;
  bgColor?: string;
  textColor?: string;
  handler?: () => void;
};

const Button: React.FC<ButtonProps> = ({ text, bgColor, textColor, handler }) => {
  return (
    <button
      className={`${bgColor} ${textColor} px-4 py-2 rounded-md duration-200`}
      onClick={handler}
    >
      {text}
    </button>
  );
};

export default Button;
