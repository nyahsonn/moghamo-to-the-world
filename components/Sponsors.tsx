// TODO: swap each name below for its real association logo image once
// gathered — until then, the name itself is shown as the logo.
const placeholderSponsors = [
  "Batibo",
  "Guzang",
  "Bessi",
  "Ashong",
  "Tetunjei",
  "Enyoh",
];

export default function Sponsors() {
  return (
    <section className="bg-cream px-6 py-20">
      <div className="mx-auto max-w-5xl text-center">
        <h2 className="font-heading text-2xl font-bold text-bark sm:text-3xl">
          Sponsored by the Moghamo Community and Village Associations
          Worldwide
        </h2>
        <p className="mt-3 text-bark/70">
          This platform exists because of the associations and families who
          fund it.
        </p>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6">
          {placeholderSponsors.map((name, i) => (
            <div
              key={i}
              className="flex aspect-square items-center justify-center rounded-xl border border-bark/15 bg-bark/[0.03] p-3 text-center font-heading text-lg font-extrabold text-bark sm:text-xl"
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
