import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

interface NavbarProps {
  isLogged: boolean;
}

const Navbar = ({ isLogged }: NavbarProps) => {
  return (
    <>
      <nav className="navbar flex justify-between px-7 py-3 bg-stone-900 select-none align-middle">
        <div
          className="appName"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h2 className="text-3xl font-semibold">Git Explorer</h2>
        </div>
        <div className="links">
          <ul className="flex justify-center align-middle text-xl">
            <li className="px-3 py-2 m-3 hover:bg-slate-800 ">
              <Link to="/">Home</Link>
            </li>
            <li className="px-3 py-2 m-3 hover:bg-slate-800 ">
              <Link to="/repos">Repos</Link>
            </li>
            <li className="px-3 py-2 m-3 hover:bg-slate-800 ">
              <Link to="/users">Users</Link>
            </li>
            <li className="px-3 py-2 m-3 hover:bg-slate-800 ">
              <Link to="/search">Search</Link>
            </li>
            <li className="px-3 py-2 m-3 hover:bg-slate-800 ">
              <Link to="/authProfile">Profile</Link>
            </li>
            {!isLogged && (
              <li className="px-3 py-2 m-3 hover:bg-slate-800 ">
                <Link to="/login">Login</Link>
              </li>
            )}
          </ul>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
