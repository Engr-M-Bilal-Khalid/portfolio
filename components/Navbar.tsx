"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
          const [open, setOpen] = useState(false);

          return (
                    <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center sticky top-0 z-50">
                              <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                                        M Bilal Khalid
                              </Link>

                              <button
                                        className="md:hidden text-gray-300"
                                        onClick={() => setOpen(!open)}
                              >
                                        ☰
                              </button>

                              <ul className={`md:flex md:space-x-6 ${open ? "block" : "hidden"} md:block`}>
                                        <li><Link href="/" className="hover:text-blue-400">Home</Link></li>
                                        <li><Link href="/about" className="hover:text-blue-400">About</Link></li>
                                        <li><Link href="/projects" className="hover:text-blue-400">Projects</Link></li>
                                        <li><Link href="/blog" className="hover:text-blue-400">Blog</Link></li>
                                        <li><Link href="/contact" className="hover:text-blue-400">Contact</Link></li>
                              </ul>
                    </nav>
          );
}
