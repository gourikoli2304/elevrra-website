import PageHero from "../components/PageHero";
import ProjectCard from "../components/ProjectCard";
import SectionHeading from "../components/SectionHeading";
import Button from "../components/Button";
import useSEO from "../hooks/useSEO";
import { projects } from "../data/projects";

export default function Work() {
  useSEO({
    title: "Our Work — Elevrra Marketing Agency",
    description:
      "A selection of brands and projects we've worked with across marketing, social media, branding, and digital campaigns.",
  });

  return (
    <>
      <PageHero
        eyebrow="OUR WORK"
        title="Ideas are great. Results are better."
        description="A selection of brands and projects we've worked with across marketing, social media, branding, and digital campaigns."
      />

      <section className="container-content py-16 md:py-24">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </section>

      <section className="bg-bg-2 py-24 md:py-32">
        <div className="container-content text-center">
          <SectionHeading
            title="From an idea to something people notice."
            align="center"
            className="max-w-2xl mb-10"
          />
          <p className="text-paper-mute max-w-xl mx-auto mb-10 leading-relaxed">
            Every project starts differently. A problem. An idea. A blank
            page. Our job is to turn it into something people remember.
          </p>
          <Button
            as="a"
            href="https://instagram.com/elevrra"
            variant="outline"
            className="mx-auto"
          >
            VIEW MORE WORK
          </Button>
        </div>
      </section>
    </>
  );
}
