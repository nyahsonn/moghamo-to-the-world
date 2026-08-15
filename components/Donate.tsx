import { DONATION_LINKS } from "@/lib/links";

const oneTimeAmounts = [10, 25, 50, 100] as const;
const monthlyAmounts = [10, 25, 50, 100] as const;

export default function Donate() {
  return (
    <section id="donate" className="bg-bark px-6 py-24 text-cream">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="font-heading text-3xl font-bold sm:text-4xl">
          Help Keep This Free
        </h2>
        <p className="mt-4 text-cream/80">
          Moghamo To The World is 100% free for every learner, funded
          entirely by village associations and community donations like
          yours. Donors receive an individual access code as a thank-you.
        </p>

        <div className="mt-12">
          <h3 className="font-heading text-lg font-bold text-ochre">
            Give Once
          </h3>
          <div className="mt-4 flex flex-wrap justify-center gap-3">
            {oneTimeAmounts.map((amount) => (
              <a
                key={amount}
                href={DONATION_LINKS.oneTime[amount]}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-terracotta px-6 py-3 text-sm font-bold text-cream shadow-sm transition hover:bg-ochre hover:text-bark"
              >
                ${amount}
              </a>
            ))}
            <a
              href={DONATION_LINKS.oneTime.custom}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border-2 border-cream px-6 py-3 text-sm font-bold text-cream transition hover:bg-cream hover:text-bark"
            >
              Choose Your Own Amount
            </a>
          </div>
        </div>

        <div className="mt-10">
          <h3 className="font-heading text-lg font-bold text-ochre">
            Give Monthly
          </h3>
          <div className="mt-4 flex flex-wrap justify-center gap-3">
            {monthlyAmounts.map((amount) => (
              <a
                key={amount}
                href={DONATION_LINKS.monthly[amount]}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-leaf px-6 py-3 text-sm font-bold text-cream shadow-sm transition hover:bg-ochre hover:text-bark"
              >
                ${amount}/mo
              </a>
            ))}
          </div>
        </div>

        <p className="mt-10 text-xs text-cream/50">
          Donation buttons are placeholders for now and will link to secure
          Stripe checkout pages once they're set up.
        </p>
      </div>
    </section>
  );
}
