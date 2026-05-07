export default function ProjectsPage() {
          const projects = [
                    { title: "Portfolio Website", desc: "Modern Next.js portfolio with Vercel deployment.", link: "#" },
                    { title: "Cloud Lab Automation", desc: "Scripts for deploying apps on cloud platforms.", link: "#" },
                    { title: "AI Blog Generator", desc: "AI-powered blog writing tool using OpenAI API.", link: "#" },
          ];

          return (
                    <section className="max-w-4xl mx-auto space-y-6">
                              <h2 className="text-4xl font-bold">Projects</h2>
                              <div className="grid md:grid-cols-2 gap-6">
                                        {projects.map((p, i) => (
                                                  <div key={i} className="p-6 bg-gray-800 rounded-lg shadow hover:scale-105 transition">
                                                            <h3 className="text-2xl font-semibold">{p.title}</h3>
                                                            <p className="text-gray-300">{p.desc}</p>
                                                            <a href={p.link} className="text-blue-400 hover:underline">View Project</a>
                                                  </div>
                                        ))}
                              </div>
                    </section>
          );
}
