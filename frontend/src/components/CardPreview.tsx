interface CardPreviewProps {
  title: string;
  description: string;
  icon: string;
}

const CardPreview: React.FC<CardPreviewProps> = ({ title, description, icon }) => {
  return (
    <div
      className={"p-3 border-2 transition active:bg-teal-950 active:border-teal-500 rounded-2xl text-center flex flex-col gap-3"}>
      <h1 className={"text-white text-2xl font-bold"}>{title}</h1>
      <span className={"material-symbols-outlined text-5xl"}>
        {icon}
      </span>
      <p>
        {description}
      </p>
    </div>
  );
};

export default CardPreview;