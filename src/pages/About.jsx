import { motion } from "framer-motion";
import PageHero from "../components/PageHero";
import useSEO from "../hooks/useSEO";
import { differentiators } from "../data/services";

export default function About() {
  useSEO({
    title: "About Elevrra — A Creative-First Marketing Agency",
    description:
      "Elevrra is a creative-first marketing agency built for brands that want to think differently, communicate boldly, and grow intentionally.",
  });

  return (
    <>
      <PageHero eyebrow="ABOUT US" title="We're not just another marketing agency.">
        <div className="mt-12 grid md:grid-cols-2 gap-8 max-w-4xl">
          <p className="text-base text-paper-dim leading-relaxed">
            Elevrra is a creative-first marketing agency built for brands
            that want to think differently, communicate boldly, and grow
            intentionally.
          </p>
          <p className="text-base text-paper-dim leading-relaxed">
            We bring together strategy, creativity, content, and performance
            marketing under one roof — creating campaigns that look good and
            deliver results.
          </p>
        </div>
      </PageHero>

      {/* PHILOSOPHY */}
      <section className="container-content py-20 md:py-28 border-b border-line">
        <div className="grid md:grid-cols-[1fr_1fr] gap-12 items-start">
          <h2 className="font-display font-bold text-[clamp(1.8rem,3.6vw,2.9rem)] leading-[1.08]">
            Good marketing gets attention. Great marketing builds
            connection.
          </h2>
          <div className="space-y-6">
            <p className="text-base text-paper-mute leading-relaxed">
              We believe the best brands aren't created by following every
              trend. They're created by understanding people.
            </p>
            <p className="text-lg text-paper leading-relaxed border-l-2 border-brass pl-6">
              That's why every project starts with a simple question: why
              should anyone care?
            </p>
          </div>
        </div>
      </section>

      {/* DIFFERENTIATORS */}
      <section className="container-content py-20 md:py-28 border-b border-line">
        <p className="text-brass text-sm font-bold tracking-wide mb-4">
          WHAT MAKES US DIFFERENT
        </p>
        <h2 className="font-display font-bold text-[clamp(1.9rem,3.6vw,2.9rem)] leading-[1.08] mb-16 max-w-2xl">
          What Makes Elevrra Different?
        </h2>

        <div className="grid md:grid-cols-2 gap-x-10 gap-y-14">
          {differentiators.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="pt-6 border-t border-line-strong"
            >
              <h3 className="font-display font-bold text-xl mb-3 text-paper">
                {item.title}
              </h3>
              <p className="text-sm text-paper-mute leading-relaxed max-w-sm">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* VISION */}
      <section className="bg-bg-2 py-24 md:py-32">
        <div className="container-content text-center">
          <p className="text-brass text-sm font-bold tracking-wide mb-6">
            OUR VISION
          </p>
          <h2 className="font-display font-extrabold text-[clamp(2rem,5.6vw,4rem)] leading-[1.05] max-w-3xl mx-auto">
            To help brands become impossible to ignore.
          </h2>
        </div>
      </section>
    </>
  );
}
