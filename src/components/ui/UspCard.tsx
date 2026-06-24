interface UspCardProps {
  title: string;
  description: string;
}

export function UspCard({ title, description }: UspCardProps) {
  return (
    <div className="text-center">
      <h3 className="mb-2 font-serif text-xl font-bold text-white lg:text-black md:text-2xl">
        {title}
      </h3>
      <p className="font-sans text-sm leading-relaxed text-white/90 lg:text-zinc-600 md:text-base">
        {description}
      </p>
    </div>
  );
}
