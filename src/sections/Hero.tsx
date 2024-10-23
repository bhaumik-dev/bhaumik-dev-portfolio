"use client";
import memojiImage from "../assets/images/memoji-computer.png";
import Image from "next/image";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import DarkModeToggle from "@/components/DarkModeToggle.js";

export const HeroSection = () => {
  return (
    <div className="py-24 md:py-36 sm:py-28">
      <div className="container lg:text-center sm:text-center md:text-center">
        <div className="flex flex-col items-center">
          <Image
            src={memojiImage}
            className="size-[100px]"
            alt="Person peeking from behind laptop."
          />
          {/* Updated background and text colors */}
          <div className="bg-[var(--color-opposite-background)] border border-[var(--color-text)] px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
            <div className="bg-green-500 size-2.5 rounded-full relative">
              <div className="absolute bg-green-500 inset-0 animate-ping-large rounded-full"></div>
            </div>
            <div className="text-[var(--color-opposite-text)] text-sm font-medium text-center">
              Open to full-time frontend roles and available for freelance
              projects.
            </div>
          </div>
        </div>
        <div className="lg:max-w-6xl md:max-w-3xl mx-auto">
          <h1 className="lg:leading-tight mt-6 tracking-wide font-serif lg:text-5xl md:text-4xl sm:text-4xl font-medium text-[var(--color-text)]">
            Building Coversion-Driven, Responsive, Scalable Websites with
            Frontend Development and No-Code Tools.
          </h1>
          {/* Updated paragraph text color */}
          <p
            className="lg:text-lg lg:max-w-3xl mx-auto md:text-md sm:text-md mt-4 tracking-wide"
            style={{ color: "var(--color-text-light)" }}
          >
            Hi, I am Bhaumik Raja, a frontend and no-code web developer helping
            businesses like yours go from ordinary to extra-ordinary with
            stunning websites.
          </p>
        </div>
        <div className="mx-auto flex flex-col md:flex-row justify-center items-center mt-8 gap-3 sm:items-center">
          {/* Buttons Updated to Use Variables */}
          <button
            className="inline-flex gap-2 border-spacing-4 items-center border bg-[var(--color-text)] text-[var(--color-background)] border-[var(--color-text)] px-8 h-12 rounded-xl hover:bg-[var(--color-primary)] hover:text-white"
            onClick={() =>
              (window.location.href =
                "https://cal.com/bhaumik-raja-ouzhch/discovery-call-free")
            }
          >
            <span>👋</span>
            <span className="font-medium">Book a Free Discovery Call</span>
          </button>
          <button
            className="inline-flex gap-2 border-spacing-4 items-center border border-[var(--color-text)] px-6 h-12 rounded-xl text-[var(--color-text)] bg-[var(--color-background)] hover:bg-[var(--color-primary)] hover:text-white"
            onClick={() => {
              const section = document.getElementById("my-work-section");
              if (section) {
                section.scrollIntoView({ behavior: "smooth", block: "start" });
              }
            }}
          >
            <span className="font-medium">Explore My Work</span>
            <ArrowDown className="size-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
