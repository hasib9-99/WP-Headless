type FieldResultsProps = {
  label: string;
  value: string;
  color: string;
};

export default function FieldResults({
  label,
  value,
  color,
}: FieldResultsProps) {
  return (
    <div className="flex items-center justify-between p-4 bg-foreground/5 border-b border-foreground/10">
      <span className="font-display uppercase text-xs tracking-tighter text-foreground/60 italic">
        {label}
      </span>

      <span className={`font-display text-3xl ${color} drop-shadow-lg`}>
        {value}
      </span>
    </div>
  );
}