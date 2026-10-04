import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

/**
 * Portfolio card.
 * Tries to load the real project image from /public/portfolio/. If the
 * image hasn't been supplied yet, it falls back to a styled placeholder
 * so the layout never breaks — drop a real file at the same path in
 * src/data/projects.js and it will render automatically.
 *
 * If the project has a `link`, the entire card becomes clickable and
 * opens that URL in a new tab.
 */
export default function ProjectCard({ project, index = 0 }) {
  const [imgError, setImgError] = useState(false);
  const { name, categories, description, image, alt, link } = project;

  const content = (
    <>
      <div className="relative overflow-hidden bg-bg-2 aspect-[4/3] mb-5">
        {!imgError ? (
          <img
            src={image}
            alt={alt}
            loading="lazy"
            onError={() => setImgError(true)}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
        ) : (
          <div
            className="w-full h-full flex items-center justify-center"
            style={{
              background:
                "repeating-linear-gradient(135deg, #1C1B17 0 26px, #232019 26px 52px)",
            }}
            role="img"
            aria-label={alt}
          >
            <span className="font-display font-bold text-3xl text-line-strong">
              {name
                .split(" ")
                .map((w) => w[0])
                .slice(0, 2)
                .join("")}
            </span>
          </div>
        )}

        <div className="absolute inset-0 bg-bg/0 group-hover:bg-bg/10 transition-colors duration-300" />
        <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-paper flex items-center justify-center opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
          <ArrowUpRight size={16} className="text-bg" aria-hidden="true" />
        </div>
      </div>

      <h3 className="font-display font-bold text-xl text-paper mb-1.5">
        {name}
      </h3>
      <p className="text-xs text-brass font-semibold tracking-wide mb-3">
        {categories.join(" · ")}
      </p>
      <p className="text-sm text-paper-mute leading-relaxed max-w-md">
        {description}
      </p>
    </>
  );

  const motionProps = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-60px" },
    transition: {
      duration: 0.55,
      delay: index * 0.06,
      ease: [0.16, 1, 0.3, 1],
    },
    className: "group block focus-visible:outline-none",
  };

  if (link) {
    return (
      <motion.a
        href={link}
        target="_blank"
        rel="noreferrer noopener"
        aria-label={`View ${name} on Instagram (opens in a new tab)`}
        {...motionProps}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.article {...motionProps} className="group">
      {content}
    </motion.article>
  );
}