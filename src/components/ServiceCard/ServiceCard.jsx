import { motion } from "framer-motion";

export default function ServiceCard({ service, index = 0 }) {
  const { number, title, tagline, items } = service;

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
      className="grid md:grid-cols-[100px_1fr_1.1fr] gap-6 md:gap-10 py-12 md:py-14 border-t border-line first:border-t-0 md:first:border-t"
    >
      <div className="font-display font-bold text-2xl text-brass">
        {number}
      </div>

      <div>
        <h3 className="font-display font-bold text-2xl md:text-[1.8rem] leading-tight mb-3 text-paper">
          {title}
        </h3>
        <p className="text-paper-dim text-base">{tagline}</p>
      </div>

      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5 content-start">
        {items.map((item) => (
          <li
            key={item}
            className="text-sm text-paper-mute flex items-start gap-2.5"
          >
            <span className="text-brass mt-1.5 shrink-0" aria-hidden="true">
              ·
            </span>
            {item}
          </li>
        ))}
      </ul>
    </motion.article>
  );
}
