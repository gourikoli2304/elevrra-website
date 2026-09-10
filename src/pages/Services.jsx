import PageHero from "../components/PageHero";
import ServiceCard from "../components/ServiceCard";
import Button from "../components/Button";
import useSEO from "../hooks/useSEO";
import { services } from "../data/services";

export default function Services() {
  useSEO({
    title: "Services — Elevrra Marketing Agency",
    description:
      "Social media marketing, performance marketing, branding & creative, content creation, and digital strategy — all under one roof at Elevrra.",
  });

  return (
    <>
      <PageHero
        eyebrow="SERVICES"
        title="Everything a brand needs to grow, under one roof."
      />

      <section className="container-content pb-8 md:pb-12">
        {services.map((service, i) => (
          <ServiceCard key={service.id} service={service} index={i} />
        ))}
      </section>

      <section className="bg-brass text-bg py-24 md:py-32">
        <div className="container-content text-center">
          <h2 className="font-display font-extrabold text-[clamp(2rem,5.4vw,3.8rem)] leading-[1.05] max-w-2xl mx-auto mb-10">
            Got a brand in mind? We've got ideas.
          </h2>
          <Button
            to="/contact"
            variant="primary"
            className="!bg-bg !text-paper mx-auto hover:!shadow-none"
          >
            LET'S TALK
          </Button>
        </div>
      </section>
    </>
  );
}
