export default function Footer() {
          return (
                    <footer className="bg-gray-900 text-gray-400 text-center py-6 mt-12">
                              <p>&copy; {new Date().getFullYear()} Abdul Wajid. All rights reserved.</p>
                              <div className="space-x-4 mt-2">
                                        <a href="https://github.com" className="hover:text-white">GitHub</a>
                                        <a href="https://linkedin.com" className="hover:text-white">LinkedIn</a>
                                        <a href="https://twitter.com" className="hover:text-white">Twitter</a>
                              </div>
                    </footer>
          );
}
