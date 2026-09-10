export default function PageHero({ eyebrow, title, description, children }) {
  return (
    <section className="container-content pt-16 md:pt-24 pb-14 md:pb-20 border-b border-line">
      {eyebrow && (
        <p className="text-brass text-sm font-bold tracking-wide mb-6 animate-fadeUp">
          {eyebrow}
        </p>
      )}
      <h1
        className="font-display font-extrabold text-[clamp(2.4rem,6.4vw,4.6rem)] leading-[0.98] tracking-tight max-w-4xl animate-fadeUp"
        style={{ animationDelay: "0.08s", opacity: 0 }}
      >
        {title}
      </h1>
      {description && (
        <p
          className="mt-8 text-lg text-paper-dim max-w-xl leading-relaxed animate-fadeUp"
          style={{ animationDelay: "0.16s", opacity: 0 }}
        >
          {description}
        </p>
      )}
      {children}
    </section>
  );
}
