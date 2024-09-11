interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  buttonColor?: string;
}

const Button: React.FC<ButtonProps> = ({ children, className }) => {
  return (
    <button className={`
      ${className}
      border-2 rounded-full px-4 p-2 font-bold text-white flex items-center justify-center
     `}>
      {children}
    </button>
  );
};

export default Button;