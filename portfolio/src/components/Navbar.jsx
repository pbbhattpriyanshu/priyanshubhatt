import { Link, NavLink } from "react-router-dom";
import { Sun, Moon, Github, Linkedin, Mail } from "lucide-react";
import { useState, useEffect } from "react";

const Navbar = () => {
  //Theme State (light and dark) - useState
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  //TODO Apply theme to HTML and save to localStorage - useEffect
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  //TODO toggle theme function  - [ condition ? valueIfTrue : valueIfFalse ] / Single Expression -> { no }, Multiple Statement -> { yes }
  const toggleTheme = () => {setTheme(theme === "dark" ? "light" : "dark")};

  return (
    <header className="bg-neutral-800 text-white p-2">
      <nav className="p-2 ml-40 mr-32 flex justify-between">
        <div className="text-xl font-semibold">
          <a href="" className="text-yellow-400">@priyanshu</a>
          <button onClick={toggleTheme} className="ml-2">
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        {/* NAVIGATION LINKS */}
        <div className="flex space-x-4 pr-4 gap-3 mr-14">
          <NavLink to="/"  className={({ isActive }) =>
            isActive ? "underline underline-offset-4 decoration-yellow-400 decoration-2 font-semibold" : "font-semibold"
          }>
            Home
          </NavLink>
          <NavLink to="/blog" className={({ isActive }) =>
            isActive ? "underline underline-offset-4 decoration-yellow-400 decoration-2 font-semibold"  : "font-semibold"
          }>
            Blog
          </NavLink>
          <NavLink to="/projects" className={({ isActive }) =>
            isActive ?"underline underline-offset-4 decoration-yellow-400 decoration-2 font-semibold"  : "font-semibold"
          }>
            Projects
          </NavLink>
          <NavLink to="/search" className={({ isActive }) =>
            isActive ? "underline underline-offset-4 decoration-yellow-400 decoration-2 font-semibold"  : "font-semibold"
          }>
            Search
          </NavLink>
          <NavLink to="/about" className={({ isActive }) =>
            isActive ? "underline underline-offset-4 decoration-yellow-400 decoration-2 font-semibold"  : "font-semibold"
          }>
            About
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
