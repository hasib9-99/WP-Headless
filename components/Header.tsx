import Link from "next/link";

export default function Header() {

  return (
    <header className="bg-bg-primary border-b border-text/10">

      <nav className="container max-w-7xl mx-auto px-5 py-5 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold font-primary text-primary uppercase leading-none"
        >
          Abu Hasib
        </Link>
        {/* Menu */}
        <ul className="flex gap-8 text-text">
          <li>
            <Link
              href="/"
              className="hover:text-gray-400"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/blog"
              className="hover:text-gray-400"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              href="/projects"
              className="hover:text-gray-400"
            >
              Projects
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}