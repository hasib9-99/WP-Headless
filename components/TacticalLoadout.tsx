
type TacticalLoadoutProps = {
    key: number;
    index: number;
    title: {
        rendered: string;
    }
    acf: {
        icon: string;
        key: string;
    }
};
export default function TacticalLoadout({
    key,
    index,
    title,
    acf,
}: TacticalLoadoutProps) {
    return (
        <div
            key={key}
            className={`ability-card bg-card p-4 border-l-2 ${index === 0 ? "border-primary" : "border-primary/40"} group`}
        >
            <div className="flex items-center justify-between mb-4">
                <span className={`font-display text-[10px] font-bold italic ${index === 0 ? "text-primary" : "text-primary/40"}`}>
                    ABILITY [{acf.key}]
                </span>
                <span className={`text-2xl ${index === 0 ? "" : "opacity-60"}`}>{acf.icon}</span>
            </div>
            <div className="font-display text-xl uppercase">{title.rendered}</div>
        </div>
    )
}