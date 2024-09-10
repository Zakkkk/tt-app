import { Link } from "react-router-dom";

interface NavbarLinkProps {
  to: string;
  children: React.ReactNode;
}

const NavbarLink: React.FC<NavbarLinkProps> = ({ to, children }) => {
  return (
    <Link to={to}>{children}</Link>
  );
};

export default NavbarLink;