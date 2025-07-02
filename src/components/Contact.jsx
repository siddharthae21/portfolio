function Contact() {
  return (
    <section
      id="contact"
      className="py-20 px-6 bg-indigo-50 dark:bg-zinc-900 text-indigo-900 dark:text-white"
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Get In Touch</h2>
        <p className="text-lg mb-8">
          Whether you want to collaborate, have a question, or just want to say hi — my inbox is always open.
        </p>
        <a
          href="mailto:siddharthae76@gmail.com"
          className="inline-block px-6 py-3 bg-white/40 dark:bg-white/10 text-indigo-900 dark:text-white border border-white/30 backdrop-blur-lg rounded-full font-semibold hover:bg-white/60 dark:hover:bg-white/20 transition shadow-md"
        >
          Say Hello
        </a>
      </div>
    </section>
  );
}

export default Contact;
