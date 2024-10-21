"use client";

import { useState } from "react";
import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUprightIcon from "@/assets/icons/arrow-up-right.svg";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Cards";
import { motion } from "framer-motion";

// First set of projects
const portfolioProjects1 = [
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

// Second set of projects (replace with your own data)
const portfolioProjects2 = [
  {
    company: "Tech Solutions",
    year: "2023",
    title: "E-commerce Platform",
    results: [
      { title: "Increased sales by 25%" },
      { title: "Improved load times by 40%" },
      { title: "Enhanced SEO performance" },
    ],
    link: "https://example.com/project1",
    image: darkSaasLandingPage,
  },
  {
    company: "Digital Labs",
    year: "2022",
    title: "Corporate Website",
    results: [
      { title: "Increased user engagement by 30%" },
      { title: "Reduced bounce rate by 20%" },
      { title: "Improved mobile responsiveness" },
    ],
    link: "https://example.com/project2",
    image: lightSaasLandingPage,
  },
  {
    company: "Future Innovations",
    year: "2023",
    title: "AI Dashboard",
    results: [
      { title: "Improved data accuracy by 35%" },
      { title: "Streamlined user interface" },
      { title: "Increased user satisfaction by 20%" },
    ],
    link: "https://example.com/project3",
    image: aiStartupLandingPage,
  },
];

export const ProjectsSection = () => {
  // State to track which tab is active
  const [activeTab, setActiveTab] = useState(1);

  // Function to handle tab switching
  const handleTabClick = (tabIndex: number) => {
    setActiveTab(tabIndex);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.6 }}
    >
      <section id="my-work-section" className="lg:py-14 pb-16 mb-4">
        <div className="container">
          <SectionHeader
            title="Featured Projects"
            eyebrow="My Work"
            description="See how I transformed concepts into engaging digital experiences."
          />

          {/* Tab navigation */}
          <div className="flex lg:flex-row md:flex-row sm:flex-col justify-center mt-8 gap-3 sm:gap-2 ">
            <button
              className={`px-6 py-3 mx-2 ${
                activeTab === 1
                  ? "bg-violet-600 text-white"
                  : "bg-gray-200 text-black"
              } rounded-lg`}
              onClick={() => handleTabClick(1)}
            >
              Code Projects
            </button>
            <button
              className={`px-6 py-3 mx-2 ${
                activeTab === 2
                  ? "bg-violet-600 text-white"
                  : "bg-gray-200 text-black"
              } rounded-lg`}
              onClick={() => handleTabClick(2)}
            >
              No-Code Projects
            </button>
          </div>

          {/* Cards */}
          <div className="flex flex-col mt-10 gap-10 md:mt-20">
            {(activeTab === 1 ? portfolioProjects1 : portfolioProjects2).map(
              (project, projectIndex) => (
                <Card
                  key={project.title}
                  className="px-8 pt-8 pb-0 lg:pt-12 lg:px-20 md:pt-12 md:px-10 pointer-events-none sticky"
                  style={{
                    top: `calc(64px + ${projectIndex * 40}px)`,
                  }}
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
                </Card>
              )
            )}
          </div>
        </div>
      </section>
    </motion.div>
  );
};
