"use client";

import { useState } from "react";
import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import luxeRealtyPage from "@/assets/images/luxe-realty-page.png";
import bhaumikPortfolioPage from "@/assets/images/webflow-portfolio-project.png";
import hayesValleyPage from "@/assets/images/hayes-walley-webflow-project.png";
import parthProjectPage from "@/assets/images/parth-gupta-webflow-project.png";
import teamAppPage from "@/assets/images/team-app-webflow-project.png";
import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUprightIcon from "@/assets/icons/arrow-up-right.svg";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Cards";
import { motion } from "framer-motion";

// First set of projects
const portfolioProjects1 = [
  {
    company: "Capstone Team Project",
    year: "2021",
    title: "Luxe Realty - Market Place",
    results: [
      { title: "MERN Stack Real Estate Market Place" },
      { title: "OAuth Enabled, Search And Filter Added" },
      { title: "3.75/4 Grade Achieved" },
    ],
    link: "https://luxe-realty.onrender.com/",
    image: luxeRealtyPage,
  },
];

// Second set of projects
const portfolioProjects2 = [
  {
    company: "Bhaumik",
    year: "2023",
    title: "Portfolio Project",
    results: [
      { title: "Developed in Webflow." },
      { title: "GSAP used for Animations." },
      { title: "Custom code added to extend functionality." },
    ],
    link: "https://bhaumikraja.webflow.io/",
    image: bhaumikPortfolioPage,
  },
  {
    company: "Haye's Valley Interior Design",
    year: "2022",
    title: "Haye's Valley Project",
    results: [
      { title: "Developed in Webflow." },
      { title: "Extensive use of Webflow's CMS." },
      { title: "Image and code optimization." },
    ],
    link: "https://hayes-valley-bhaumik.webflow.io/",
    image: hayesValleyPage,
  },
  {
    company: "Parth Gupta",
    year: "2023",
    title: "Parth Gupta's Portfolio Project",
    results: [
      { title: "Decreaed page load speed by 20%." },
      { title: "12% increase in conversion in first two months." },
      { title: "Client signed new projects from first month of launch." },
    ],
    link: "https://parthgupta.webflow.io/",
    image: parthProjectPage,
  },
  {
    company: "Team.",
    year: "2022",
    title: "Team Collaboration Website",
    results: [
      { title: "Built fully on Webflow." },
      { title: "Native Webflow animations used." },
      { title: "Blog on website built using Webflow CMS." },
    ],
    link: "https://parthgupta.webflow.io/",
    image: teamAppPage,
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
                  className="px-8 pt-8 pb-0 lg:pt-12 lg:px-20 md:pt-12 md:px-10 sticky"
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

                      <h3 className="text-white font-serif text-2xl md:text-3xl mt-2">
                        {project.title}
                      </h3>
                      <hr className="border-t-2 border-white/5 mt-4 md:mt-5 " />
                      <ul className="flex flex-col gap-2 mt-4 md:mt-5 ">
                        {project.results.map((result) => (
                          <li className="flex gap-2 text-sm md:text-base text-white">
                            <CheckCircleIcon className="size-5 md:size-6" />
                            <span>{result.title}</span>
                          </li>
                        ))}
                      </ul>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button className="mt-6 px-6 bg-white text-black h-12 w-full md:w-auto rounded-xl font-semibold inline-flex items-center justify-center gap-2">
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
