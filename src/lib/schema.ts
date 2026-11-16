import { services, siteConfig, skills } from "@/lib/data";

const personId = `${siteConfig.url}/#person`;
const websiteId = `${siteConfig.url}/#website`;
const serviceId = `${siteConfig.url}/#service`;
const pageId = `${siteConfig.url}/#webpage`;

const knowsAbout = Array.from(
  new Map(
    [
      "Web development",
      "Front-end development",
      "UI/UX design",
      "React",
      "Next.js",
      "TypeScript",
      "Responsive web design",
      "Web performance optimization",
      "Search engine optimization",
      ...skills.map((skill) => skill.name),
    ].map((value) => [value.toLowerCase(), value]),
  ).values(),
);

export const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": personId,
      name: siteConfig.shortName,
      url: siteConfig.url,
      image: `${siteConfig.url}/personal.jpeg`,
      jobTitle: siteConfig.role,
      description: siteConfig.description,
      email: `mailto:${siteConfig.email}`,
      knowsAbout,
      address: {
        "@type": "PostalAddress",
        addressRegion: siteConfig.region,
        addressCountry: "IN",
      },
      nationality: {
        "@type": "Country",
        name: siteConfig.country,
      },
    },
    {
      "@type": "WebSite",
      "@id": websiteId,
      url: siteConfig.url,
      name: siteConfig.shortName,
      description: siteConfig.description,
      inLanguage: "en",
      publisher: { "@id": personId },
    },
    {
      "@type": "ProfilePage",
      "@id": pageId,
      url: siteConfig.url,
      name: "Ali Irfan | Web Developer in Kerala",
      description: siteConfig.description,
      isPartOf: { "@id": websiteId },
      about: { "@id": personId },
      inLanguage: "en",
    },
    {
      "@type": "ProfessionalService",
      "@id": serviceId,
      name: "Ali Irfan — Web Development & Design",
      url: siteConfig.url,
      description:
        "Freelance web development and UI/UX design services for businesses in Kerala and worldwide, specialising in Next.js and React.",
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Kerala, India",
      },
      address: {
        "@type": "PostalAddress",
        addressRegion: siteConfig.region,
        addressCountry: "IN",
      },
      provider: { "@id": personId },
      serviceType: services.map((service) => service.title),
    },
  ],
};
