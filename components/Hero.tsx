import { START_LEARNING_URL } from "@/lib/links";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-bark text-cream">
      {/* Simple woven-pattern accent stripe. TODO: replace with a real
          Moghamo pattern/motif once one is confirmed with the community. */}
      <div className="h-2 w-full bg-gradient-to-r from-terracotta via-ochre to-leaf" />

      <div className="mx-auto flex max-w-5xl flex-col items-center px-6 py-24 text-center sm:py-32">
        <h1 className="font-heading text-balance text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
          Preserving Our Language, Culture, and History for Future
          Generations
        </h1>
        <p className="mt-6 max-w-2xl text-balance text-lg text-cream/85 sm:text-xl">
          Free online courses that teach Moghamo children and adults — near
          and across the diaspora — to speak, read, and write our language,
          and to know our culture and history.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href={START_LEARNING_URL}
            className="rounded-full bg-terracotta px-8 py-3 text-base font-bold text-cream shadow-md transition hover:bg-ochre hover:text-bark"
          >
            Start Learning
          </a>
          <a
            href="#donate"
            className="rounded-full border-2 border-cream px-8 py-3 text-base font-bold text-cream transition hover:bg-cream hover:text-bark"
          >
            Donate Now
          </a>
        </div>
      </div>
    </section>
  );
}
