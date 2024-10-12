export const SectionHeader = ({
  title,
  eyebrow,
  description,
}: {
  title: string;
  eyebrow: string;
  description: string;
}) => {
  return (
    <>
      <div className="flex justify-center">
        <p className="lg:text-lg uppercase font-semibold tracking-widest bg-gradient-to-r from-violet-500 to-purple-600 text-transparent bg-clip-text text-center">
          {eyebrow}
        </p>
      </div>
      <h2 className="text-[var(--color-text)] font-serif lg:text-4xl md:text-3xl sm:text-3xl font-medium text-center mt-2">
        {title}
      </h2>
      <p className="text-[var(--color-text-light)] text-center mt-4 max-w-md lg:max-w-3xl mx-auto">
        {description}
      </p>
    </>
  );
};
