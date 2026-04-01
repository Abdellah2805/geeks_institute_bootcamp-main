const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 text-center max-w-lg">
        <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
        <p className="text-gray-600 mb-8">Have questions? We'd love to hear from you!</p>
        <form className="space-y-4">
          <input type="email" placeholder="Your Email" className="w-full p-3 border rounded-md" />
          <textarea placeholder="Your Message" className="w-full p-3 border rounded-md" rows="4"></textarea>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-md w-full hover:bg-blue-700 transition">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;