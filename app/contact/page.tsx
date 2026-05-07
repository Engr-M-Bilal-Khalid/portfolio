export default function ContactPage() {
          return (
                    <section className="max-w-2xl mx-auto space-y-6">
                              <h2 className="text-4xl font-bold">Contact Me</h2>
                              <form className="space-y-4">
                                        <input type="text" placeholder="Your Name" className="w-full p-3 rounded bg-gray-800 text-white" />
                                        <input type="email" placeholder="Your Email" className="w-full p-3 rounded bg-gray-800 text-white" />
                                        <textarea placeholder="Your Message" className="w-full p-3 rounded bg-gray-800 text-white h-32"></textarea>
                                        <button type="submit" className="px-6 py-2 bg-blue-600 rounded hover:bg-blue-700">Send</button>
                              </form>
                              <div className="space-x-4">
                                        <a href="https://github.com" className="text-gray-400 hover:text-white">GitHub</a>
                                        <a href="https://linkedin.com" className="text-gray-400 hover:text-white">LinkedIn</a>
                                        <a href="https://twitter.com" className="text-gray-400 hover:text-white">Twitter</a>
                              </div>
                    </section>
          );
}
