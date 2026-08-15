export default function Footer() {
  return (
    <footer className="bg-cream px-6 py-10 text-center text-sm text-bark/60">
      <p className="font-heading font-semibold text-bark">
        Moghamo To The World
      </p>
      <p className="mt-2">
        © {new Date().getFullYear()} Moghamo To The World. Preserving our
        language, culture, and history for future generations.
      </p>
    </footer>
  );
}
