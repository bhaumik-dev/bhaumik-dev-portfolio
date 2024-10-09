import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUprightIcon from "@/assets/icons/arrow-up-right.svg";

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
    <section className="lg:py-20 pb-16 mb-4">
      <div className="container">
        <div className="flex justify-center">
          <p className="lg:text-lg uppercase font-semibold tracking-widest bg-gradient-to-r from-violet-500 to-purple-600 text-transparent bg-clip-text text-center">
            My Work
          </p>
        </div>
        <h2 className="text-[var(--color-text)] font-serif lg:text-4xl md:text-3xl sm:text-3xl font-medium text-center mt-2">
          Featured Projects
        </h2>
        <p className="text-[var(--color-text-light)] text-center mt-4 max-w-md lg:max-w-3xl mx-auto">
          See how I transformed concepts into engaging digital experiences.
        </p>
        <div className="flex flex-col mt-10 gap-10 md:mt-20">
          {portfolioProjects.map((project) => (
            <div
              key={project.title}
              className="bg-[var(--color-opposite-background)] rounded-3xl overflow-hidden relative z-0 after:z-10 after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-[var(--color-opposite-text)] px-8 pt-8 lg:pt-12 lg:px-20 md:pt-12 md:px-10 pointer-events-none"
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-violet-500 to-purple-600 inline-flex gap-2 font-semibold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    {/* <span>{project.year}</span> */}
                  </div>

                  <h3 className="text-[var(--color-opposite-text)] font-serif text-2xl md:text-3xl mt-2">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5 " />
                  <ul className="flex flex-col gap-2 mt-4 md:mt-5 ">
                    {project.results.map((result) => (
                      <li className="flex gap-2 text-sm md:text-base text-[var(--color-opposite-text)]">
                        <CheckCircleIcon className="size-5 md:size-6" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={project.link}>
                    <button className="mt-6 px-6 bg-[var(--color-background)] text-[var(--color-text)] h-12 w-full md:w-auto rounded-xl font-semibold inline-flex items-center justify-center gap-2">
                      <span>Visit Live Site</span>
                      <ArrowUprightIcon className="size-4" />
                    </button>
                  </a>
                </div>
                <div className="relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="mt-6 -mb-4 md:mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
