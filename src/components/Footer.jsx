import { FaGithub, FaLinkedin, } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-white dark:bg-black text-indigo-900 dark:text-white py-6 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-4">
        <p className="text-sm">&copy; {new Date().getFullYear()} Siddhartha.E • Built with ❤️ using React &
        Tailwind</p>
        <div className="flex gap-4 text-lg">
          <a
            href="https://github.com/siddharthae21"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-500"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/siddharthae21"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-500"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

