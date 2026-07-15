type ExperienceProps = {
    id: number;
    title: {
        rendered: string;
    };
    content: {
        rendered: string;
    }
    acf: {
        company: string;
        role: string;
        start: string;
        end: string;
    }
}

export default function Experience({
    id,
    title,
    content,
    acf,
}: ExperienceProps) {
    const items = content.rendered
        .replace(/<p[^>]*>/gi, "")
        .replace(/<\/p>/gi, "")
        .replace(/<br\s*\/?>/gi, "\n")
        .split("\n")
        .map((item) => item.trim())
        .filter(Boolean);

    return (
        <div key={id} className="relative">
            <div
                className={`absolute -left-[30px] top-0 w-2 h-2 rotate-45 ${!acf.end ? "bg-primary" : "bg-muted-foreground"
                    }`}
            />
            <div className={!acf.end ? "mission-log-active p-4 border border-border" : "p-4 border border-border bg-card/50"}>
                <div className="flex justify-between items-start mb-2">
                    <span
                        className={`font-display text-[10px] px-2 py-0.5 font-bold text-primary-foreground ${!acf.end ? "bg-primary" : "bg-muted-foreground"
                            }`}
                    >
                        {acf.start.slice(0, 4)} - {acf.end ? acf.start.slice(0, 4) : "Present"}
                    </span>
                    {!acf.end && <span className="text-primary text-xs">✓</span>}
                </div>
                <h3 className="font-display text-xl leading-none">{title.rendered}</h3>
                <p className={`font-display text-xs font-bold tracking-widest mb-3 ${!acf.end ? "text-primary" : "text-muted-foreground"}`}>
                    {acf.company}
                </p>
                <ul className="text-xs space-y-2 text-muted-foreground font-body">
                    {items.map((item, index) => (
                        <li key={index} className="flex gap-2">
                            <span className={!acf.end ? "text-primary" : "text-muted-foreground"}>
                                ▶
                            </span>
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}