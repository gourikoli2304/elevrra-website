import { motion } from "framer-motion";
import Button from "../components/Button";
import ProcessStep from "../components/ProcessStep";
import useSEO from "../hooks/useSEO";
import { process } from "../data/services";

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function Home() {
  useSEO({
    title: "Elevrra Marketing Agency — Building Brands That People Remember",
    description:
      "Elevrra Marketing Agency helps businesses grow through strategy, creativity, performance, and content that connects with the right audience.",
  });

  return (
    <>
      {/* HERO */}
      <section className="container-content pt-16 md:pt-24 pb-20 border-b border-line">
        <motion.p
          initial="hidden"
          animate="show"
          custom={0}
          variants={fadeUp}
          className="flex items-center gap-3 text-paper-mute text-sm mb-8"
        >
          <span className="w-1.5 h-1.5 bg-brass rounded-full" aria-hidden="true" />
          Marketing Agency — Mumbai
        </motion.p>

        <motion.h1
          initial="hidden"
          animate="show"
          custom={1}
          variants={fadeUp}
          className="font-display font-extrabold text-[clamp(2.6rem,8vw,6.8rem)] leading-[0.93] tracking-tight max-w-4xl"
        >
          Building brands that people remember.
        </motion.h1>

        <motion.div
          initial="hidden"
          animate="show"
          custom={2}
          variants={fadeUp}
          className="grid md:grid-cols-[1fr_360px] gap-10 mt-12 items-end"
        >
          <p className="text-lg md:text-xl text-paper-dim leading-relaxed max-w-2xl">
            "We turn ideas into brands, campaigns, and digital experiences
            that actually make an impact."
          </p>
          <div>
            <p className="text-base text-paper-mute leading-relaxed mb-7">
              Elevrra Marketing Agency helps businesses grow through
              strategy, creativity, performance, and content that connects
              with the right audience.
            </p>
            <Button to="/contact" variant="primary">
              LET'S WORK TOGETHER
            </Button>
          </div>
        </motion.div>
      </section>

      {/* WHAT WE DO */}
      <section className="container-content py-20 md:py-28">
        <div className="grid md:grid-cols-[240px_1fr] gap-10 mb-16">
          <p className="text-brass text-sm font-bold tracking-wide">
            WHAT WE DO
          </p>
          <h2 className="font-display font-bold text-[clamp(1.9rem,4vw,3.2rem)] leading-[1.05] max-w-2xl">
            Strategy. Creativity. Growth.
          </h2>
        </div>

        <div className="grid md:grid-cols-[240px_1fr] gap-10">
          <div aria-hidden="true" />
          <div className="max-w-2xl space-y-5">
            <p className="text-lg text-paper leading-relaxed">
              Marketing isn't just about being seen. It's about being
              remembered, chosen, and talked about.
            </p>
            <p className="text-base text-paper-mute leading-relaxed">
              At Elevrra, we combine creative thinking with data-driven
              marketing to build brands that don't just exist online — they
              stand out.
            </p>
          </div>
        </div>

        {/* PROCESS */}
        <div className="grid md:grid-cols-4 border-t border-line mt-16">
          {process.map((step, i) => (
            <ProcessStep key={step.number} {...step} index={i} />
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-brass text-bg py-24 md:py-32">
        <div className="container-content text-center">
          <h2 className="font-display font-extrabold text-[clamp(2rem,5.4vw,3.8rem)] leading-[1.03] max-w-3xl mx-auto mb-10">
            Your brand has a story. Let's make people care about it.
          </h2>
          <Button to="/contact" variant="primary" className="!bg-bg !text-paper mx-auto hover:!shadow-none">
            START A PROJECT
          </Button>
        </div>
      </section>
    </>
  );
}
