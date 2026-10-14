import Link from "next/link";

const pages = [
  {
    href: "/about",
    title: "About Us",
    accent: "bg-terracotta",
    description:
      "Who the Moghamo people are, why our language must be preserved, and how village associations keep this platform free.",
  },
  {
    href: "/courses",
    title: "Courses",
    accent: "bg-ochre",
    description:
      "Free, self-paced courses in Moghamo language, culture, and history for children and adults.",
  },
  {
    href: "/donate",
    title: "Donate",
    accent: "bg-leaf",
    description:
      "Give once or monthly to help keep Moghamo To The World free for every learner.",
  },
];

export default function Explore() {
  return (
    <section className="bg-bark/[0.03] px-6 py-20">
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
        {pages.map((page) => (
          <Link
            key={page.href}
            href={page.href}
            className="group flex flex-col rounded-2xl bg-cream p-8 shadow-sm ring-1 ring-bark/10 transition hover:shadow-md hover:ring-terracotta/40"
          >
            <span
              className={`mb-5 inline-block h-2 w-12 rounded-full ${page.accent}`}
            />
            <h2 className="font-heading text-2xl font-bold text-bark group-hover:text-terracotta">
              {page.title}
            </h2>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-bark/75">
              {page.description}
            </p>
            <span className="mt-5 text-sm font-bold text-terracotta">
              Learn more →
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
