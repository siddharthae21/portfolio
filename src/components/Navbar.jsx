import { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinkClass =
    'relative group transition text-indigo-800 dark:text-indigo-100 hover:text-indigo-500 dark:hover:text-indigo-400';

  const underlineClass =
    'absolute left-0 -bottom-1 h-0.5 w-0 bg-indigo-500 group-hover:w-full transition-all duration-300';

  return (
    <header
       className="fixed top-0 w-full z-50 transition-all duration-300 bg-gradient-to-r from-white via-white to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 shadow-md border-b border-white/20 dark:border-gray-700"
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a
          href="#home"
          className="text-2xl font-extrabold text-indigo-600 dark:text-indigo-200 tracking-wide"
        >
          Siddhartha E
          <p className="text-xs text-black italic tracking-[0.20em] font-thin dark:text-white">Frontend Developer</p>
        </a>
        

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 font-semibold">
          {['about','experience', 'skills', 'projects', 'contact'].map((item) => (
            <li key={item}>
              <a href={`#${item}`} className={navLinkClass}>
                {item.charAt(0).toUpperCase() + item.slice(1)}
                <span className={underlineClass}></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-indigo-700 dark:text-white text-2xl"
            aria-label="Toggle Menu"
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-6">
          <ul className="flex flex-col gap-4 text-indigo-800 dark:text-indigo-100 font-medium">
            {['about', 'skills', 'projects', 'contact'].map((item) => (
              <li key={item}>
                <a
                  href={`#${item}`}
                  onClick={() => setMenuOpen(false)}
                  className="block py-2 hover:text-indigo-500 dark:hover:text-indigo-400"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}

export default Navbar;