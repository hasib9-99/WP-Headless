import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type MissionProps = {
    id: number;
    slug: string;
    date: string;
    title: {
        rendered: string;
    };
    acf: {
        type: string;
    };
    _embedded: {
        "wp:featuredmedia": {
            source_url: string;
        }[];
    };
};
export default function MissionList({
    id,
    acf,
    date,
    slug,
    title,
    _embedded,
}: MissionProps) {
    const image = _embedded?.["wp:featuredmedia"]?.[0]?.source_url;
    return (
        <Link
            key={id}
            href={`/mission/${slug}`}
            className="block valorant-card-clip hover:border-primary bg-card border border-border relative transition-all duration-300 m-0"
        >
            <div className="relative aspect-video overflow-hidden">
                <Image
                    src={image}
                    alt={title.rendered}
                    width={600}
                    height={300}
                    unoptimized
                    className="w-full object-cover aspect-video transition-all duration-700"
                />
                <div className="absolute top-2 left-[-20px] bg-primary text-primary-foreground font-display text-[10px] px-8 py-1 rotate-[-35deg] ribbon-slant shadow-lg">
                    MISSION SUCCESS
                </div>
            </div>
            <div className="p-4 border-t border-border">
                <div className="flex items-start justify-between">
                    <h2 className="font-display text-2xl font-semibold uppercase tracking-tight">{title.rendered}</h2>
                    <ArrowUpRight size={18} className="text-primary mt-1 shrink-0" />
                </div>
                <div className="grid grid-cols-2 gap-4 mt-3">
                    <div>
                        <p className="font-display text-[10px] text-primary uppercase font-bold tracking-widest">
                            Deployment Date
                        </p>
                        <p className="font-display text-lg">{new Date(date).getFullYear()}</p>
                    </div>
                    <div>
                        <p className="font-display text-[10px] text-primary uppercase font-bold tracking-widest">
                            Tactical Category
                        </p>
                        <p className="font-display text-lg italic">{acf.type}</p>
                    </div>
                </div>
            </div>
        </Link>
    );
}