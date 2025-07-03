import { useEffect, useState } from 'react';

const roles = [
  'Siddhartha',
  'a Frontend Developer',
  'a React Developer',
  'a Web Developer',
  'a Creator'
];

function Hero() {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [forward, setForward] = useState(true);

  useEffect(() => {
    if (subIndex === roles[index].length + 1 && forward) {
      setTimeout(() => setForward(false), 1000);
      return;
    }
    if (subIndex === 0 && !forward) {
      setForward(true);
      setIndex((prev) => (prev + 1) % roles.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (forward ? 1 : -1));
      setText(roles[index].substring(0, subIndex));
    }, forward ? 100 : 50);

    return () => clearTimeout(timeout);
  }, [subIndex, index, forward]);

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-gradient-to-br from-indigo-100 via-white to-purple-100 dark:from-zinc-900 dark:via-black dark:to-zinc-800 text-indigo-900 dark:text-white relative overflow-hidden transition-colors duration-500"
    >
      <div className="absolute w-full h-full overflow-hidden z-0">
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-purple-300 dark:bg-purple-700 rounded-full blur-[120px] opacity-30 animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-200 dark:bg-indigo-600 rounded-full blur-[100px] opacity-40 animate-float-slow" />
        <div className="absolute top-10 right-1/3 w-40 h-40 bg-pink-200 dark:bg-pink-600 rounded-full blur-[80px] opacity-20 animate-float-fast" />
      </div>

      <h1 className="relative z-10 text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 min-h-[60px]">
        Hi, I’m <span className="text-indigo-600 dark:text-indigo-400">{text}</span>
        <span className="animate-pulse"></span>
      </h1>
      {/* <h2 className="relative z-10 text-xl sm:text-2xl md:text-3xl font-medium mb-6 min-h-[40px]">
        {text}
        <span className="animate-pulse">_</span>
      </h2> */}
      <p className="relative z-10 max-w-xl text-lg text-indigo-800 dark:text-indigo-200">
        I craft beautiful, responsive interfaces with a focus on performance, user experience, and modern design aesthetics.
      </p>
      <div className="relative z-10 mt-8 flex flex-wrap justify-center gap-4">
        <a
          href="#projects"
          className="px-6 py-3 bg-white/40 dark:bg-white/10 text-indigo-900 dark:text-white border border-white/30 backdrop-blur-md rounded-full font-semibold hover:bg-white/60 dark:hover:bg-white/20 transition shadow-md"
        >
          View My Work
        </a>
        <a
          href="/resume.pdf"
          download
          className="px-6 py-3 bg-indigo-600 dark:bg-indigo-500 text-white rounded-full font-semibold hover:bg-indigo-700 dark:hover:bg-indigo-400 transition shadow-md"
        >
          Download Resume
        </a>
      </div>

      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(2deg); }
          }
          @keyframes float-slow {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-10px) rotate(-2deg); }
          }
          @keyframes float-fast {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-25px) rotate(3deg); }
          }
          .animate-float { animation: float 6s ease-in-out infinite; }
          .animate-float-slow { animation: float-slow 10s ease-in-out infinite; }
          .animate-float-fast { animation: float-fast 4s ease-in-out infinite; }
        `}
      </style>
    </section>
  );
}

export default Hero;
