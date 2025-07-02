import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-100 py-6 text-center text-gray-600">
      <div className="flex justify-center space-x-6 mb-2 text-xl">
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-primary"
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-primary"
        >
          <FaLinkedin />
        </a>
      </div>
      <p className="text-sm">
        © {new Date().getFullYear()} Sid.Dev • Built with ❤️ using React &
        Tailwind
      </p>
    </footer>
  );
}

export default Footer;
