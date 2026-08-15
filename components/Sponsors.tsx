// TODO: replace these placeholder slots with real village association
// logos/names once they're gathered. Add or remove entries as needed —
// each one just needs a name for now.
const placeholderSponsors = [
  "Your Village Association",
  "Village Association",
  "Village Association",
  "Village Association",
  "Village Association",
  "Village Association",
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
              className="flex aspect-square items-center justify-center rounded-xl border-2 border-dashed border-bark/20 bg-bark/[0.03] p-3 text-center text-xs font-semibold text-bark/40"
            >
              {name} Logo
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
