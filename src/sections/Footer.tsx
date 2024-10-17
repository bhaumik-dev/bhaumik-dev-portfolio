import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";

export const Footer = () => {
  return (
    <footer className="relative -z-10 overflow-x-clip">
      <div className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-violet-600/40 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10"></div>
      <div className="container">
        <div className="border-t border-white/15 py-6 text-sm flex flex-col md:flex-row md:justify-between lg:justify-between items-center gap-8">
          <div className="text-[var(--color-text)] text-center">
            &copy; All Rights Reserved 2024
          </div>
          <nav className="flex flex-col md:flex-row items-center gap-8 md:gap-4">
            <a href="#" className="inline-flex items-center gap-1.5">
              <span className="text-[var(--color-text)]">LinkedIn</span>
              <ArrowUpRightIcon className="size-4" />
            </a>
            <a href="#" className="inline-flex items-center gap-1.5">
              <span className="text-[var(--color-text)]">GitHub</span>
              <ArrowUpRightIcon className="size-4" />
            </a>
            <a href="#" className="inline-flex items-center gap-1.5">
              <span className="text-[var(--color-text)]">Email</span>
              <ArrowUpRightIcon className="size-4" />
            </a>
            <a href="#" className="inline-flex items-center gap-1.5">
              <span className="text-[var(--color-text)]">Instagram</span>
              <ArrowUpRightIcon className="size-4" />
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
};
