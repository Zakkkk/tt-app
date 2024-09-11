import NavbarLink from "./NavbarLink";

const Navbar: React.FC = () => {
  return (
    <nav
      className={
        "select-none fixed bottom-0 left-0 right-0 flex items-center justify-between bg-slate-900 border-solid border-slate-800 border-t-2 p-2 pb-6"
      }
    >
      <NavbarLink to="/" icon="home">
        Home
      </NavbarLink>
      <NavbarLink to={"/tasks"} icon="task">
        Tasks
      </NavbarLink>
      <NavbarLink to={"/log"} icon="menu_book" isPrimary={true}></NavbarLink>
      <NavbarLink to={"/calendar"} icon="calendar_month">
        Calendar
      </NavbarLink>
      <NavbarLink to={"/profile"} icon="person">
        Profile
      </NavbarLink>
    </nav>
  );
};

export default Navbar;
