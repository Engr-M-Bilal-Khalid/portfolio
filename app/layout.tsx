import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "M Bilal Khalid | Portfolio",
  description: "Software Engineer Portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-950 text-gray-100 font-sans">
        <Navbar />
        <main className="min-h-screen px-6 py-12">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
