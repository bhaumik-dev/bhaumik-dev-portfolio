// import DarkModeToggle from "@/components/DarkModeToggle";

// export const Header = () => {
//   return (
//     <div className="inline-flex justify-center items-center fixed top-3 w-full z-10">
//       <nav className="flex gap-1 p-0.5 border-black/15 rounded-full bg-[var(--color-opposite-background)] backdrop-blur">
//         <a
//           href="#"
//           className="nav-item text-[var(--color-opposite-text)] hover:text-[var(--color-background)] hover:bg-[var(--color-primary)]"
//         >
//           Home
//         </a>
//         <a
//           href="#my-work-section"
//           className="nav-item text-[var(--color-opposite-text)] hover:text-[var(--color-background)] hover:bg-[var(--color-primary)]"
//         >
//           Projects
//         </a>
//         <a
//           href="#about-me-section"
//           className="nav-item text-[var(--color-opposite-text)] hover:text-[var(--color-background)] hover:bg-[var(--color-primary)]"
//         >
//           About
//         </a>
//         <a
//           href="mailto:webdevbhaumik@gmail.com"
//           className="nav-item text-[var(--color-text)] bg-[var(--color-background)] hover:text-[var(--color-background)] hover:bg-[var(--color-primary)]"
//         >
//           Contact
//         </a>
//       </nav>
//     </div>
//   );
// };

import DarkModeToggle from "@/components/DarkModeToggle";

export const Header = () => {
  return (
    <div className="flex justify-center items-center fixed top-3 w-full z-20">
      {/* Nav section */}
      <nav className="flex gap-1 p-0.5 border-black/15 rounded-full bg-[var(--color-opposite-background)] backdrop-blur">
        <a
          href="#"
          className="nav-item text-[var(--color-opposite-text)] hover:text-white hover:bg-[var(--color-primary)]"
        >
          Home
        </a>
        <a
          href="#my-work-section"
          className="nav-item text-[var(--color-opposite-text)] hover:text-white hover:bg-[var(--color-primary)]"
        >
          Projects
        </a>
        <a
          href="#about-me-section"
          className="nav-item text-[var(--color-opposite-text)] hover:text-white hover:bg-[var(--color-primary)]"
        >
          About
        </a>
        <a
          href="mailto:webdevbhaumik@gmail.com"
          className="nav-item text-[var(--color-text)] bg-[var(--color-background)] hover:text-white hover:bg-[var(--color-primary)]"
        >
          Contact
        </a>
      </nav>
    </div>
  );
};
