import { NavLink } from "react-router-dom";

interface NavbarLinkProps {
  to: string;
  children?: React.ReactNode;
  icon: string;
  isPrimary?: boolean;
}

const NavbarLink: React.FC<NavbarLinkProps> = ({ to, children, icon, isPrimary }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex justify-center flex-1 transition 
        ${isActive && !isPrimary ? "bg-slate-800 text-teal-400" : ""} 
        ${!isPrimary ? "rounded active:bg-slate-800" : ""}`
      }
    >
      <div
        className={`drag-none p-3 flex flex-col items-center
          ${isPrimary ? "rounded-full active:bg-slate-500 transition bg-slate-200 w-14 h-14 justify-center" : ""}
        `}
      >
        <span className={`material-symbols-outlined ${isPrimary ? "text-gray-800 text-3xl" : "text-2xl"}`}>{icon}</span>
        {!isPrimary ? <span className={"text-xs"}>{children}</span> : null}
      </div>
    </NavLink>
  );
};

export default NavbarLink;
