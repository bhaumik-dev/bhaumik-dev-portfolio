import memojiImage from "../assets/images/memoji-computer.png";
import Image from "next/image";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import DarkModeToggle from "@/components/DarkModeToggle.js";

export const HeroSection = () => {
  return (
    <div className="py-28 md:py-40">
      <div className="container lg:text-center sm:text-left md:text-center">
        <DarkModeToggle />
        <div className="flex flex-col items-center">
          <Image
            src={memojiImage}
            className="size-[100px]"
            alt="Person peeking from behind laptop."
          />
          {/* Updated background and text colors */}
          <div className="bg-[var(--color-opposite-background)] border border-[var(--color-text)] px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
            <div className="bg-green-500 size-2.5 rounded-full"></div>
            <div className="text-[var(--color-opposite-text)] text-sm font-medium text-center">
              Open to full-time frontend roles and available for freelance
              projects.
            </div>
          </div>
        </div>
        <div className="lg:max-w-5xl md:max-w-2xl mx-auto">
          <h1 className="lg:leading-tight mt-6 tracking-wide font-serif lg:text-5xl md:text-3xl sm:text-3xl font-medium text-[var(--color-text)]">
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
        <div className="mx-auto flex flex-col md:flex-row justify-center items-center mt-8 gap-3 sm:items-start">
          {/* Buttons Updated to Use Variables */}
          <button className="inline-flex gap-2 border-spacing-4 items-center border border-[var(--color-text)] px-6 h-12 rounded-xl text-[var(--color-text)] bg-[var(--color-background)] hover:bg-[var(--color-primary)] hover:text-[var(--color-background)]">
            <span className="font-medium">Explore My Work</span>
            <ArrowDown className="size-4" />
          </button>
          <button className="inline-flex gap-2 border-spacing-4 items-center border bg-[var(--color-text)] text-[var(--color-background)] border-[var(--color-text)] px-8 h-12 rounded-xl hover:bg-[var(--color-primary)] hover:text-[var(--color-background)]">
            <span>👋</span>
            <span className="font-medium">Let's Connect</span>
          </button>
        </div>
      </div>
    </div>
  );
};
