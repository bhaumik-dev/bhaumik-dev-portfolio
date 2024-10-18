"use client";

import { Card } from "@/components/Cards";
import { SectionHeader } from "@/components/SectionHeader";
import StarIcon from "@/assets/icons/star.svg";
import JavaScriptIcon from "@/assets/icons/square-js.svg";
import HTMLIcon from "@/assets/icons/html5.svg";
import CSSIcon from "@/assets/icons/css3.svg";
import GithubIcon from "@/assets/icons/github.svg";
import ReactIcon from "@/assets/icons/react.svg";
import WebflowIcon from "@/assets/icons/webflow.svg";
import NextIcon from "@/assets/icons/nextjs.svg";
import NodeIcon from "@/assets/icons/nodejs.svg";
import SassIcon from "@/assets/icons/sass.svg";
import TailwindIcon from "@/assets/icons/tailwindcss.svg";
import BootstrapIcon from "@/assets/icons/bootstrap.svg";
import MongoDBIcon from "@/assets/icons/mongodb.svg";
import { TechIcon } from "@/components/TechIcon";
import myImage from "@/assets/images/myimage.jpeg";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRef } from "react";

const toolboxItems = [
  {
    title: "JavaScript",
    iconType: JavaScriptIcon,
  },
  {
    title: "React JS",
    iconType: ReactIcon,
  },
  {
    title: "Next JS",
    iconType: NextIcon,
  },
  {
    title: "Tailwind CSS",
    iconType: TailwindIcon,
  },
  {
    title: "CSS3",
    iconType: CSSIcon,
  },
  {
    title: "HTML5",
    iconType: HTMLIcon,
  },
  {
    title: "GitHub",
    iconType: GithubIcon,
  },
  {
    title: "Webflow",
    iconType: WebflowIcon,
  },
  {
    title: "SASS",
    iconType: SassIcon,
  },
  {
    title: "NodeJS",
    iconType: NodeIcon,
  },
  {
    title: "Bootstrap 5",
    iconType: BootstrapIcon,
  },
  {
    title: "MongoDB",
    iconType: MongoDBIcon,
  },
];

const hobbies = [
  {
    title: "Gym",
    emoji: "💪",
    left: "5%",
    top: "5%",
  },
  {
    title: "Gaming",
    emoji: "🎮",
    left: "35%",
    top: "5%",
  },
  {
    title: "Cooking",
    emoji: "🍳",
    left: "15%",
    top: "45%",
  },
  {
    title: "Reading",
    emoji: "📖",
    left: "50%",
    top: "60%",
  },
  {
    title: "Music",
    emoji: "🎵",
    left: "70%",
    top: "25%",
  },
  {
    title: "Walking",
    emoji: "🚶‍♂️",
    left: "5%",
    top: "85%",
  },
  {
    title: "Listening Podcast",
    emoji: "🎧",
    left: "40%",
    top: "98%",
  },
];

const achievements = [
  {
    title: "Graduated from a post-grade course with 3.7/4 GPA.",
    emoji: "✔",
  },
  {
    title: "Improved page load speed by 10%.",
    emoji: "✔",
  },
  {
    title: "Achieved 18% growth in website traffic.",
    emoji: "✔",
  },
  {
    title: "Achieved 5% increase in conversion rates.",
    emoji: "✔",
  },
  {
    title: "Completed multiple projects with 100% client satisfaction rate.",
    emoji: "✔",
  },
];

export const AboutSection = () => {
  const constraintRef = useRef(null);
  return (
    <div className="py-20 lg:py-22">
      <div className="container">
        <SectionHeader
          eyebrow="About Me"
          title="Get To Know Me"
          description="Checkout what I do and love"
        />
        {/* About Me Card */}
        <div className="mt-12 lg:grid lg:grid-cols-2 md:grid md:grid-cols-2">
          <Card className="md:col-span-2">
            <div className="flex flex-col">
              <div className="inline-flex items-center gap-2">
                <StarIcon className="text-[var(--color-background)] size-9" />
                <h3 className="text-[var(--color-background)] text-2xl font-serif font-semibold">
                  Hi, I am Bhaumik...
                </h3>
              </div>
              <p className="text-[var(--color-background)] text-sm mt-3 font-medium">
                I’m a frontend developer with 2 years of experience,
                specializing in building responsive and dynamic websites using
                HTML, CSS, JavaScript, Tailwind CSS, ReactJS, and NextJS. I also
                have extensive experience with no-code platforms like Webflow
                and WordPress, allowing me to deliver projects quickly and
                efficiently.
              </p>

              <p className="text-[var(--color-background)] text-sm mt-3 font-medium">
                I recently completed my post-graduate studies in Web Development
                with distinction, and I’m excited to bring my skills to
                full-time roles or freelance projects. Whether it’s developing
                custom-coded websites or leveraging no-code tools, I’m
                passionate about creating digital experiences that are both
                beautiful and functional.
              </p>
            </div>
          </Card>
        </div>

        {/* Toolbox Card */}

        <div className="lg:grid lg:grid-cols-5 md:grid md:grid-cols-2">
          <Card className="mt-2 lg:col-span-3">
            <div>
              <div className="inline-flex items-center gap-2">
                <StarIcon className="text-[var(--color-background)]" />
                <h3 className="text-2xl text-[var(--color-background)] font-serif font-semibold">
                  My Toolbox
                </h3>
              </div>
              <p className="text-[var(--color-background)] text-sm mt-3 mb-3 font-medium">
                Technologies and tools I use to craft exceptional digial
                experiences.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {toolboxItems.map((item) => (
                <div
                  key={item.title}
                  className="inline-flex items-center gap-2 py-2 px-3 outline outline-1 outline-[var(--color-opposite-text)] rounded-lg"
                >
                  <TechIcon component={item.iconType} />
                  <span className="text-[var(--color-opposite-text)] font-medium">
                    {item.title}
                  </span>
                </div>
              ))}
            </div>
          </Card>

          {/* Achievements Card */}

          <Card className="mt-2 lg:col-span-2">
            <div>
              <div className="inline-flex items-center gap-2">
                <StarIcon className="text-[var(--color-background)]" />
                <h3 className="text-[var(--color-background)] text-2xl font-serif font-semibold">
                  Achievements
                </h3>
              </div>
              <p className="text-[var(--color-background)] text-sm mt-3 mb-3 font-medium">
                Highlights of results I have produced for clients and employers.
              </p>
              <div className="flex flex-col gap-3">
                {achievements.map((achievement) => (
                  <div
                    key={achievement.title}
                    className="inline-flex items-center gap-4 py-3 px-3 outline outline-1 outline-[var(--color-opposite-text)] rounded-lg"
                  >
                    <span className="text-green-500">{achievement.emoji}</span>
                    <span className="text-[var(--color-background)] text-sm font-medium">
                      {achievement.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>

        <div className="md:grid md:grid-cols-2 lg:grid lg:grid-cols-5">
          {/* Photo Card */}

          <Card className="mt-2 p-0 lg:col-span-2">
            <div>
              <Image
                src={myImage}
                alt="An image of Bhaumik Raja."
                className="h-[300px] w-full object-cover"
              />
            </div>
          </Card>

          {/* Beyond Code Card */}

          <Card className="mt-2 h-[300px] p-0 flex flex-col relative lg:col-span-3">
            <div className="px-6 py-6">
              <div className="inline-flex items-center gap-2">
                <StarIcon className="text-[var(--color-background)]" />
                <h3 className="text-[var(--color-background)] text-2xl font-serif font-semibold">
                  Beyond the Code
                </h3>
              </div>
              <p className="text-[var(--color-background)] text-sm mt-3 mb-3 font-medium">
                Explore my interests and hobbies beyond code.
              </p>
              <div className="relative flex-1 h-full" ref={constraintRef}>
                {hobbies.map((hobby) => (
                  <motion.div
                    key={hobby.title}
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-600 to-purple-700 rounded-full px-1.5 py-1.5 absolute"
                    style={{
                      left: hobby.left,
                      top: hobby.top,
                    }}
                    drag
                    dragConstraints={constraintRef}
                  >
                    <span className="text-white text-sm font-medium">
                      {hobby.title}
                    </span>
                    <span>{hobby.emoji}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};
