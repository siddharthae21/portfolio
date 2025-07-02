function Navbar() {
  return (
    <nav className="fixed w-full bg-white/70 backdrop-blur shadow z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-primary">Sid.Dev</h1>
        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <li>
            <a href="#about" className="hover:text-primary">
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-primary">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-primary">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
