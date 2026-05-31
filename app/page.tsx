export default function HomePage() {
  return (
    <section className="text-center space-y-6">
      <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
        Abdul Wajid
      </h1>
      <p className="text-xl">Software Engineer | Building Modern Web Experiences</p>
      <div className="space-x-4">
        <a href="/projects" className="px-6 py-2 bg-blue-600 rounded hover:bg-blue-700">View Projects</a>
        <a href="/contact" className="px-6 py-2 bg-purple-600 rounded hover:bg-purple-700">Contact Me</a>
      </div>
    </section>
  );
}
