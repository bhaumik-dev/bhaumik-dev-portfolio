export const TechIcon = ({ component }: { component: React.ElementType }) => {
  const Component = component;
  return <Component className="text-[var(--color-opposite-text)] size-10" />;
};
