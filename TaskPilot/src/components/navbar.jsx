import { Link } from "react-router";
import ThemeToggle from "./theme_toggle";

function Navbar() {
  return (
    <nav>
      <ul className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 py-4 px-4 sm:px-10 bg-gray-200 dark:bg-gray-800 transition">
        <li className="text-2xl text-center sm:text-left cursor-pointer">
          <Link to="/">
            <span className="text-blue-500 font-bold">Task</span>
            <span className="text-orange-500 font-bold">Manager</span>
          </Link>
        </li>
        <li className="flex justify-center sm:justify-end">
          <ul className="flex gap-3 sm:gap-4">
            <Link to="/tasks">
              <button className="rounded-4xl  px-4 py-1 bg-orange-500 dark:bg-blue-500 text-white font-bold cursor-pointer">
                Tasks
              </button>
            </Link>
            <ThemeToggle />
          </ul>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
