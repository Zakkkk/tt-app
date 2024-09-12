interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  buttonRole?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, className, buttonRole, onClick }) => {
  return (
    <button className={`
      ${className ? className : ""}
      ${buttonRole === "primary" ? "bg-teal-600 border-none" : "bg-slate-900"}
      focus:outline-2 outline-white focus:outline outline-offset-2 transition-all
      border-2 rounded px-4 p-2 font-bold text-white inline-flex items-center justify-center
     `}
            onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;