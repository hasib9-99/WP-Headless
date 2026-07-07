import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type MissionProps = {
    id: number;
    slug: string;
    title: {
        rendered: string;
    };
    excerpt: {
        rendered: string;
    };
    _embedded: {
        "wp:featuredmedia": {
            source_url: string;
        }[];
    };
};
export default function MissionCard({
    id,
    slug,
    title,
    excerpt,
    _embedded,
}: MissionProps) {
    const image = _embedded?.["wp:featuredmedia"]?.[0]?.source_url;
    return (
        <Link href={`/mission/${slug}`} key={id} className="block group">
            <div className="relative overflow-hidden border-r-4 border-primary/30 group-hover:border-primary transition-colors">
                <Image
                    src={image}
                    alt={title.rendered}
                    width={600}
                    height={300}
                    unoptimized
                    className="w-full object-cover aspect-video grayscale group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute top-4 right-4 bg-primary px-3 py-1 text-xs font-display text-primary-foreground italic">
                    COMPLETED
                </div>
            </div>
            <div className="mt-4 flex justify-between items-start">
                <div>
                    <h3 className="font-display text-2xl group-hover:text-primary transition-colors">{title.rendered}</h3>
                    <p className="text-xs uppercase tracking-tighter opacity-60 font-body">{excerpt.rendered.replace(/<[^>]*>/g, "")}</p>
                </div>
                <ArrowUpRight size={20} className="text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform mt-1" />
            </div>
        </Link>
    );
}