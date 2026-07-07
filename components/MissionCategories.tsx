type MissionCategoryProps = {
    id: number | "all";
    name: string;
    description: string;
    active: number | "all";
    onClick: (id: number | "all") => void;
};

export default function MissionCategories({
    id,
    name,
    description,
    active,
    onClick,
}: MissionCategoryProps) {
    return (
        <button
            onClick={() => onClick(id)}
            className={`flex flex-col items-center py-4 gap-1 transition-colors text-sm ${
                active === id
                    ? "border-r-4 border-primary bg-primary/10 text-primary"
                    : "text-foreground/40 hover:text-foreground"
            }`}
        >
            <span className="text-xl">{description}</span>

            <span className="font-display text-[10px] uppercase tracking-widest">
                {name}
            </span>
        </button>
    );
}