import { Footer } from "@/components/footer";
import { Marquee } from "@/components/marquee";
import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { Experience } from "@/components/sections/experience";
import { Hero } from "@/components/sections/hero";
import { Projects } from "@/components/sections/projects";
import { Services } from "@/components/sections/services";
import { Skills } from "@/components/sections/skills";
import { siteConfig } from "@/lib/data";

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteConfig.shortName,
  url: siteConfig.url,
  jobTitle: "Creative Developer & Designer",
  description: siteConfig.description,
  email: `mailto:${siteConfig.email}`,
  knowsAbout: [
    "Web Development",
    "UI/UX Design",
    "React",
    "Next.js",
    "Creative Development",
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <main className="relative">
        <Hero />
        <About />
        <Skills />
        <Marquee />
        <Projects />
        <Experience />
        <Services />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
