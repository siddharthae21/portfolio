function Projects() {
  const projects = [
    {
      title: 'ShareNest',
      description: 'A household management app with shared tasks, expenses, reminders, and document storage.',
      tech: ['React', 'Tailwind CSS', 'Node.js'],
      live: 'https://siddharthae.vercel.app',
      code: 'https://github.com/siddharthae21/sharenest'
    },
    {
      title: 'Portfolio Website',
      description: 'This very portfolio built using Vite, React, Tailwind, and framer-motion with glassmorphism UI.',
      tech: ['React', 'Tailwind CSS', 'Framer Motion'],
      live: 'https://siddharthae.vercel.app',
      code: 'https://github.com/siddharthae21/portfolio'
    },
    // {
    //   title: 'Weather App',
    //   description: 'Responsive weather forecast app using OpenWeatherMap API with clean UI.',
    //   tech: ['React', 'Tailwind CSS', 'API'],
    //   live: '#',
    //   code: 'https://github.com/siddharthae21/weather-app'
    // }
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-white dark:bg-black text-indigo-900 dark:text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white/40 dark:bg-white/10 rounded-xl p-6 shadow-lg backdrop-blur-md border border-white/20 hover:scale-105 transition-transform"
            >
              <h3 className="text-2xl font-semibold mb-2 text-indigo-700 dark:text-indigo-300">
                {project.title}
              </h3>
              <p className="text-sm mb-4 text-indigo-900/80 dark:text-indigo-100/90">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs rounded-full bg-indigo-100 dark:bg-indigo-800 text-indigo-700 dark:text-white"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-indigo-600 dark:text-indigo-300 underline hover:text-indigo-800"
                >
                  Live
                </a>
                <a
                  href={project.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-indigo-600 dark:text-indigo-300 underline hover:text-indigo-800"
                >
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;