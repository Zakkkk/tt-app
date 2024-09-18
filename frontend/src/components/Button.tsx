import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  buttonRole?: string;
  onClick?: () => void;
  size?: string;
  type?: "button" | "submit" | "reset";
  showOutlineOnClick?: boolean;
  isPressed?: boolean;
}

const Button: React.FC<ButtonProps> = ({
                                         children,
                                         className,
                                         buttonRole,
                                         onClick,
                                         size,
                                         isPressed,
                                         type,
                                         showOutlineOnClick,
                                       }) => {
  let backgroundColor = "";
  if (buttonRole === "primary") {
    backgroundColor = "bg-teal-600";
  } else if (buttonRole === "danger") {
    backgroundColor = "bg-red-600";
  } else if (isPressed) {
    backgroundColor = "bg-slate-600";
  } else {
    backgroundColor = "bg-slate-900";
  }

  return (
    <button
      type={type}
      className={`
        ${className ? className : ""}
        ${buttonRole === "primary" || buttonRole === "danger" ? "border-none" : ""}
        ${size === "sm" ? "text-sm px-2 p-1" : "text-base"}
        ${size === "xs" ? "text-sm px-1.5 p-0.5" : "text-base"}
        ${showOutlineOnClick != false ? "focus:outline-2 outline-white focus:outline outline-offset-2" : ""}
        ${isPressed ? "" : ""}
        ${backgroundColor}
        transition-all select-none
        border-2 rounded px-4 p-2 font-bold text-white inline-flex items-center justify-center
     `}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
