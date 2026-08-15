import { START_LEARNING_URL } from "@/lib/links";

const categories = [
  {
    name: "Language",
    accent: "bg-terracotta",
    description:
      "Three levels take learners from a first alphabet to full literacy: speaking, reading, and writing Moghamo — for children just starting out and for adults learning to read and write for the first time.",
    items: [
      "Level 1 — Alphabet, pronunciation, vocabulary, sentences",
      "Level 2 — Reading, writing, stories, exercises",
      "Level 3 — Literacy, vocabulary, proverbs, storytelling",
    ],
  },
  {
    name: "Culture",
    accent: "bg-ochre",
    description:
      "Traditions, ceremonies, and everyday life that make up Moghamo culture — passed down so they stay alive for the next generation, wherever they grow up.",
    items: [
      "Traditional leadership & family structure",
      "Marriage customs & traditional ceremonies",
      "Festivals, food, music & dance",
      "Cultural values",
    ],
  },
  {
    name: "History",
    accent: "bg-leaf",
    description:
      "The Moghamo story — where the community came from, how it took shape, and the events that brought it to where it is today.",
    items: [
      "Origins & migration of the Moghamo people",
      "Village formation & historical timelines",
      "Colonial history & important leaders",
      "Oral traditions & modern history",
    ],
  },
];

export default function Courses() {
  return (
    <section id="courses" className="bg-bark/[0.03] px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <h2 className="font-heading text-3xl font-bold text-bark sm:text-4xl">
            What You Can Learn
          </h2>
          <p className="mt-4 text-bark/75">
            Every course is free, self-paced, and open to children and
            adults alike. Courses launch on{" "}
            <a href={START_LEARNING_URL} className="font-semibold text-terracotta underline">
              learn.moghamototheworld.com
            </a>{" "}
            as they become ready, starting with Language Level 1.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {categories.map((category) => (
            <div
              key={category.name}
              className="flex flex-col rounded-2xl bg-cream p-8 shadow-sm ring-1 ring-bark/10"
            >
              <span
                className={`mb-5 inline-block h-2 w-12 rounded-full ${category.accent}`}
              />
              <h3 className="font-heading text-2xl font-bold text-bark">
                {category.name}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-bark/75">
                {category.description}
              </p>
              <ul className="mt-5 space-y-2 text-sm text-bark/70">
                {category.items.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-terracotta">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
