export default function BlogPage() {
          const posts = [
                    { title: "Deploying Static Sites on Vercel", date: "May 2026" },
                    { title: "Next.js App Router Explained", date: "April 2026" },
                    { title: "AI in Education – My Thoughts", date: "March 2026" },
          ];

          return (
                    <section className="max-w-3xl mx-auto space-y-6">
                              <h2 className="text-4xl font-bold">Blog</h2>
                              <ul className="space-y-4">
                                        {posts.map((post, i) => (
                                                  <li key={i} className="p-4 bg-gray-800 rounded-lg">
                                                            <h3 className="text-2xl font-semibold">{post.title}</h3>
                                                            <p className="text-gray-400">{post.date}</p>
                                                            <a href="#" className="text-purple-400 hover:underline">Read More</a>
                                                  </li>
                                        ))}
                              </ul>
                    </section>
          );
}
