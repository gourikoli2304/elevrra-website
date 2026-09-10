import { motion } from "framer-motion";

export default function ProcessStep({ number, title, description, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="p-8 md:p-9 border-r border-b md:border-b-0 border-line last:border-r-0 hover:bg-bg-2 transition-colors duration-300"
    >
      <div className="font-display font-bold text-sm text-brass mb-6">
        {number}
      </div>
      <h3 className="font-display font-bold text-xl mb-3 text-paper">
        {title}
      </h3>
      <p className="text-sm text-paper-mute leading-relaxed">{description}</p>
    </motion.div>
  );
}
