import { motion } from "framer-motion";

function Projects() {
  const projects = [
    {
      title: "ShareNest",
      description:
        "Manage shared tasks, expenses & groceries among roommates. Built with React & Firebase.",
      link: "https://github.com/yourusername/sharenest",
    },
    {
      title: "Portfolio Website",
      description: "My personal site built with Vite, React, and Tailwind CSS.",
      link: "#",
    },
  ];

  return (
    <section className="py-20 px-6 bg-gray-50" id="projects">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">
          Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <h3 className="text-2xl font-semibold text-primary mb-2">
                {project.title}
              </h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                className="text-indigo-500 font-medium hover:underline"
              >
                View Project →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
