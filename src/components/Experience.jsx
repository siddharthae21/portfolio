function Experience() {
  const jobs = [
    {
      title: 'Fullstack Developer',
      company: 'Rite Software Solutions',
      duration: 'Sep 2023 – Dec 2024',
      tasks: [
        'Developed and maintained insurance web applications for Ola using React.js.',
        'Built a comprehensive platform for electric, health, and ride insurance.',
        'Collaborated with stakeholders to create responsive, user-friendly interfaces.',
        'Launched features like Diwali Protection Insurance, expanding Ola’s product line.',
        'Integrated APIs to streamline insurance purchasing workflows.'
      ]
    },
    {
      title: 'Software Developer',
      company: 'i-Weaves Solutions',
      duration: 'Mar 2020 – Sep 2023',
      tasks: [
        'Designed and developed automotive service platforms with React.js.',
        'Built a responsive booking UI that boosted user engagement.',
        'Collaborated with UX teams to refine design and user experience.',
        'Modernized legacy systems into modern, accessible responsive sites.'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-6 text-indigo-900 dark:text-white bg-gradient-to-br from-purple-50 via-white to-indigo-100 dark:from-zinc-900 dark:via-black dark:to-zinc-800 text-indigo-900 dark:text-white relative overflow-hidden transition-colors duration-500">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Work Experience</h2>
        <div className="space-y-8">
          {jobs.map((job, idx) => (
            <div
              key={idx}
              className="bg-white/50 dark:bg-white/10 rounded-xl p-6 shadow-lg backdrop-blur-md border border-white/20"
            >
              <h3 className="text-2xl font-semibold mb-1 text-indigo-700 dark:text-indigo-300">
                {job.title}
              </h3>
              <p className="text-sm text-indigo-800 dark:text-indigo-200 mb-2">
                {job.company} | {job.duration}
              </p>
              <ul className="list-disc list-inside space-y-1 text-indigo-900 dark:text-indigo-100">
                {job.tasks.map((task, i) => (
                  <li key={i}>{task}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
