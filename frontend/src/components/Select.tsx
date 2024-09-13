interface SelectProps {
  children: React.ReactNode;
  className?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Select: React.FC<SelectProps> = ({ children, className, onChange }) => {
  return (
    <select
      onChange={onChange}
      className={`
        ${className}
        p-2 bg-slate-800 text-white h-10 rounded focus:outline outline-2 outline-white outline-offset-2 transition-all"
      `}
    >
      {children}
    </select>
  );
};

export default Select;