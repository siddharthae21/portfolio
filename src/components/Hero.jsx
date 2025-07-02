import { motion } from "framer-motion";

function Hero() {
  return (
    <section
      className="h-screen flex flex-col justify-center items-center text-center px-4 bg-gradient-to-br from-indigo-50 to-white"
      id="home"
    >
      <motion.h1
        className="text-5xl md:text-7xl font-extrabold mb-4 leading-tight text-gray-900"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Hi, I'm <span className="text-primary">Sid</span> 👋
      </motion.h1>

      <motion.p
        className="text-xl text-gray-600 max-w-xl mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        Frontend Developer crafting elegant and fast web interfaces using React,
        Tailwind, and modern web tech.
      </motion.p>

      <motion.a
        href="#projects"
        className="bg-primary text-white px-6 py-3 rounded-full hover:bg-indigo-700 transition shadow-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        Explore Projects
      </motion.a>
    </section>
  );
}

export default Hero;
