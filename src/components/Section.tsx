interface SectionProps {
  children: React.ReactNode;
  className?: string;
  background?: "white" | "black" | "cream";
}

export function Section({ children, className = "", background = "white" }: SectionProps) {
  const bgColors = {
    white: "bg-white text-black",
    black: "bg-black text-white",
    cream: "bg-[#f5f3f0] text-black",
  };

  return (
    <section className={`py-16 px-4 md:py-24 lg:py-32 ${bgColors[background]} ${className}`}>
      <div className="mx-auto max-w-7xl">
        {children}
      </div>
    </section>
  );
}
