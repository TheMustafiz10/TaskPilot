import { useContext } from "react";
import { ThemeContext } from "../context/theme_context.jsx";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      className="rounded-4xl px-2 py-1 cursor-pointer bg-orange-500 dark:bg-blue-500 text-white font-bold transition"
    >
      {theme === "light" ? "🌙" : "☀️"}
    </button>
  );
};

export default ThemeToggle;
