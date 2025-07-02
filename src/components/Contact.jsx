function Contact() {
  return (
    <section className="py-20 px-6 bg-white" id="contact">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">Get in Touch</h2>
        <p className="text-gray-600 mb-6">
          Have a project or want to collaborate? Reach out!
        </p>
        <a
          href="mailto:youremail@example.com"
          className="inline-block bg-primary text-white px-6 py-3 rounded-full hover:bg-indigo-700 transition shadow-lg"
        >
          Say Hello
        </a>
      </div>
    </section>
  );
}

export default Contact;
