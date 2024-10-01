// export const Header = () => {
//   return (
//     <div className="flex justify-center items-center fixed top-3 w-full z-10">
//       <nav className="flex gap-1 p-0.5 border-black/15 rounded-full bg-black/95 backdrop-blur">
//         <a href="#" className="nav-item">
//           Home
//         </a>
//         <a href="#" className="nav-item">
//           Projects
//         </a>
//         <a href="#" className="nav-item">
//           About
//         </a>
//         <a
//           href="#"
//           className="nav-item bg-white text-gray-900 hover:bg-white/90 hover:text-gray-900"
//         >
//           Contact
//         </a>
//       </nav>
//     </div>
//   );
// };

export const Header = () => {
  return (
    <div className="flex justify-center items-center fixed top-3 w-full z-10">
      <nav className="flex gap-1 p-0.5 border-black/15 rounded-full bg-[var(--color-opposite-background)] backdrop-blur">
        <a
          href="#"
          className="nav-item text-[var(--color-opposite-text)] hover:text-[var(--color-background)] hover:bg-[var(--color-primary)]"
        >
          Home
        </a>
        <a
          href="#"
          className="nav-item text-[var(--color-opposite-text)] hover:text-[var(--color-background)] hover:bg-[var(--color-primary)]"
        >
          Projects
        </a>
        <a
          href="#"
          className="nav-item text-[var(--color-opposite-text)] hover:text-[var(--color-background)] hover:bg-[var(--color-primary)]"
        >
          About
        </a>
        <a
          href="#"
          className="nav-item text-[var(--color-text)] bg-[var(--color-background)] hover:text-[var(--color-background)] hover:bg-[var(--color-primary)]"
        >
          Contact
        </a>
      </nav>
    </div>
  );
};
