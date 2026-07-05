type SkillProps = {
    id: number;
    title: {
        rendered: string;
    };
    acf: {
        key: string;
        icon: string;
    };
};

export default function SkillCard({
    title,
    acf,
}: SkillProps) {
    return (
        <div
            key={title.rendered}
            className="relative border border-border p-4 aspect-square flex flex-col items-center justify-center hover:border-primary transition-colors"
        >
            <div className="absolute top-1 left-1 bg-primary text-primary-foreground font-display text-[9px] px-1.5 py-0.5">
                {acf.key}
            </div>
            <span className="text-3xl mb-4 group-hover:scale-110 transition-transform">{acf.icon}</span>
            <span className="font-primary font-semibold text-white font-display text-xl">{title.rendered}</span>
        </div>
    );
}