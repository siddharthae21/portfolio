function Skills() {
  const skills = [
    'React','Vite', 'Tailwind CSS', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'Git', 'Figma', 'REST APIs', 'Responsive Design','Jira', 'Git', 'Node.js','Jenkins','Postman'
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-indigo-100 via-white to-purple-100 dark:bg-zinc-900 text-indigo-900 dark:text-white" id="skills">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {skills.map((skill, idx) => (
            <div
              key={idx}
              className="py-3 px-4 bg-white/40 dark:bg-white/10 border border-white/20 rounded-xl shadow backdrop-blur-md"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
