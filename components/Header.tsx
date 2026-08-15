import Link from "next/link";
import { START_LEARNING_URL } from "@/lib/links";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-bark/10 bg-cream/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <span className="font-heading text-lg font-semibold text-bark">
          Moghamo To The World
        </span>
        <nav className="hidden items-center gap-8 text-sm font-semibold text-bark/80 sm:flex">
          <Link href="#about" className="hover:text-terracotta">
            About
          </Link>
          <Link href="#courses" className="hover:text-terracotta">
            Courses
          </Link>
          <Link href="#donate" className="hover:text-terracotta">
            Donate
          </Link>
        </nav>
        <a
          href={START_LEARNING_URL}
          className="rounded-full bg-terracotta px-5 py-2 text-sm font-bold text-cream shadow-sm transition hover:bg-bark"
        >
          Start Learning
        </a>
      </div>
    </header>
  );
}
