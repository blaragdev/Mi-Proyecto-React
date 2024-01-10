import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="flex items-center justify-between bg-gray-800 px-4 py-3 text-white">
      <span className="text-xl tracking-tight">Mi App</span>
      <div className="flex items-center">
        <NavLink
          className="rounded-md px-4 py-2 text-sm leading-none hover:bg-gray-700"
          to="/"
        >
          Inicio
        </NavLink>
        <NavLink
          className="rounded-md px-4 py-2 text-sm leading-none hover:bg-gray-700"
          to="/posts"
        >
          Post
        </NavLink>
        {/* <a
          className="rounded-full px-4 py-2 text-sm leading-none hover:bg-gray-700"
          href="#"
        >
          About
        </a> */}
      </div>
    </nav>
  );
};
export default NavBar;
