export default function SectionHeading({
  eyebrow,
  title,
  align = "left",
  className = "",
}) {
  return (
    <div className={`${align === "center" ? "text-center mx-auto" : ""} ${className}`}>
      {eyebrow && (
        <p className="text-brass text-sm font-bold tracking-wide mb-3.5">
          {eyebrow}
        </p>
      )}
      <h2 className="font-display font-bold text-[clamp(1.9rem,3.6vw,2.9rem)] leading-[1.05] text-paper">
        {title}
      </h2>
    </div>
  );
}
