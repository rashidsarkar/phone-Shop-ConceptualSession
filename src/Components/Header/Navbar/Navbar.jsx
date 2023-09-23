import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav className="flex items-center justify-between px-6 py-4 bg-blue-500 rounded">
        {/* Left-side logo */}
        <div className="text-lg font-bold text-white">Your Logo</div>

        {/* Right-side menu */}
        <div className="space-x-4">
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "text-blue-900 bg-blue-200 px-2 py-1 rounded"
                : "text-violet-950 hover:text-blue-300 hover:bg-blue-200 hover:rounded px-2 py-1"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/favorite"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "text-blue-900 bg-blue-200 px-2 py-1 rounded"
                : "text-violet-950 hover:text-blue-300 hover:bg-blue-200 hover:rounded px-2 py-1"
            }
          >
            Favorite
          </NavLink>

          <NavLink
            to="/login"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "text-blue-900 bg-blue-200 px-2 py-1 rounded"
                : "text-violet-950 hover:text-blue-300 hover:bg-blue-200 hover:rounded px-2 py-1"
            }
          >
            Login
          </NavLink>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
