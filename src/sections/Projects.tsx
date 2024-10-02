import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import Image from "next/image";

const portfolioProjects = [
  {
    company: "Acme Corp",
    year: "2022",
    title: "Dark Saas Landing Page",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://youtu.be/4k7IdSLxh6w",
    image: darkSaasLandingPage,
  },
  {
    company: "Innovative Co",
    year: "2021",
    title: "Light Saas Landing Page",
    results: [
      { title: "Boosted sales by 20%" },
      { title: "Expanded customer reach by 35%" },
      { title: "Increased brand awareness by 15%" },
    ],
    link: "https://youtu.be/7hi5zwO75yc",
    image: lightSaasLandingPage,
  },
  {
    company: "Quantum Dynamics",
    year: "2023",
    title: "AI Startup Landing Page",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://youtu.be/Z7I5uSRHMHg",
    image: aiStartupLandingPage,
  },
];

export const ProjectsSection = () => {
  return (
    <div>
      <div className="container">
        <div className="flex justify-center">
          <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-violet-500 to-purple-600 text-transparent bg-clip-text text-center">
            My Work
          </p>
        </div>
        <h2 className="text-[var(--color-text)] font-serif text-3xl font-medium text-center mt-2">
          Featured Projects
        </h2>
        <p className="text-[var(--color-text-light)] text-center mt-4 ">
          See how I transformed concepts into engaging digital experiences.
        </p>
        <div className="flex flex-col mt-10">
          {portfolioProjects.map((project) => (
            <div
              key={project.title}
              className="bg-[var(--color-opposite-background)] rounded-3xl overflow-hidden relative z-0 after:z-10 after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-[var(--color-opposite-text)] p-8"
            >
              <div className="flex">
                <div className="bg-gradient-to-r from-violet-500 to-purple-600 inline-flex gap-2 font-semibold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                  <span>{project.company}</span>
                  <span>&bull;</span>
                  {/* <span>{project.year}</span> */}
                </div>
              </div>
              <hr />
              <h3>{project.title}</h3>
              <ul>
                {project.results.map((result) => (
                  <li>{result.title}</li>
                ))}
              </ul>
              <a href={project.link}>
                <button>View Live Site</button>
              </a>
              <Image src={project.image} alt={project.title} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
