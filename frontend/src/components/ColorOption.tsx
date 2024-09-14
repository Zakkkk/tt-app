interface colorOptionProps {
  className: string;
  isSelected: boolean;
  onClick: () => void;
}

const ColorOption: React.FC<colorOptionProps> = ({ className, isSelected, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`
        ${className}
        ${isSelected ? "outline outline-4 outline-gray-200" : ""}
        w-8 h-8 rounded cursor-pointer transition-all
      `}
    ></div>
  );
};

export default ColorOption;
