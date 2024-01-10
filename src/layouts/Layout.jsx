import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <div className="container mx-auto items-center justify-center">
        <Outlet />
      </div>
      <footer className="bg-gray-900 p-6 text-center text-white">
        Este es el footer
      </footer>
    </>
  );
};
export default Layout;
