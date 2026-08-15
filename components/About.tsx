function TodoBlock({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-xl border-2 border-dashed border-ochre/60 bg-ochre/10 p-5 text-sm text-bark/70">
      <p className="mb-2 font-heading text-xs font-bold uppercase tracking-wide text-terracotta">
        TODO — replace with real content
      </p>
      {children}
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="bg-cream px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <h2 className="font-heading text-3xl font-bold text-bark sm:text-4xl">
          About Moghamo To The World
        </h2>

        <div className="mt-10 grid gap-10">
          <div>
            <h3 className="font-heading text-xl font-bold text-terracotta">
              Who We Are
            </h3>
            <TodoBlock>
              <p>
                Write a short paragraph introducing the Moghamo people —
                where the community is from, and a welcoming line for
                visitors who may be discovering Moghamo for the first time.
              </p>
            </TodoBlock>
          </div>

          <div>
            <h3 className="font-heading text-xl font-bold text-terracotta">
              Why the Language Must Be Preserved
            </h3>
            <TodoBlock>
              <p>
                Write a paragraph on what is at risk if the Moghamo language
                stops being passed down, and why it matters that children
                growing up abroad still learn to speak, read, and write it.
              </p>
            </TodoBlock>
          </div>

          <div>
            <h3 className="font-heading text-xl font-bold text-terracotta">
              Why This Platform Exists
            </h3>
            <p className="mt-3 leading-relaxed text-bark/85">
              Moghamo To The World exists to document and teach Moghamo
              language, culture, and history — the origins and migration of
              the Moghamo people, our oral traditions, and our colonial
              history — and to build a lasting digital home for it. The
              platform is completely free for every learner, made possible
              entirely by Moghamo village associations and community
              donations.
            </p>
          </div>

          <div>
            <h3 className="font-heading text-xl font-bold text-terracotta">
              The Role of Village Associations
            </h3>
            <p className="mt-3 leading-relaxed text-bark/85">
              Village associations fund this platform and keep it free for
              their members. Each association receives a shared access code
              sized to its membership, which its leadership distributes
              internally — so no member ever has to pay to learn.
            </p>
            <div className="mt-4">
              <TodoBlock>
                <p>
                  Add a paragraph here on the broader role village
                  associations play in Moghamo community life beyond
                  funding — their history, and why they are the backbone of
                  this project.
                </p>
              </TodoBlock>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
