interface InputProps {
  type: string;
  placeholder: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  isRequired?: boolean;
  autoFocus?: boolean;
  maxLength?: number;
}

const Input: React.FC<InputProps> = ({ type, placeholder, value, setValue, isRequired, autoFocus, maxLength }) => {
  return (
    <input type={type} placeholder={placeholder} value={value} onChange={(e) => setValue(e.target.value)}
           className={"focus:outline outline-2 outline-white outline-offset-2 p-2 bg-slate-800 text-white rounded transition-all"}
           required={isRequired}
           autoFocus={autoFocus}
           maxLength={maxLength}
    />
  );
};

export default Input;