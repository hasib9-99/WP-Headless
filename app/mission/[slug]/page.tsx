import Image from "next/image";
import Link from "next/link";
import { getMission, getSkill } from "@/lib/wordpress";
import { ExternalLink } from "lucide-react";
import FieldResults from '@/components/FieldResults'
import TacticalLoadout from '@/components/TacticalLoadout'

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function SingleMission({ params }: Props) {
  const { slug } = await params;

  const mission = await getMission(slug);

  const skills = mission.acf.skills?.length
    ? await Promise.all(
      mission.acf.skills?.map((id: number) => getSkill(id))
    )
    : []

  if (!mission) {
    return (
      <h1 className="text-4xl p-10">
        Mission Not Found
      </h1>
    );
  }

  return (
    <main className="pt-16 pb-28">
      {/* Hero image */}
      <section className="relative w-full aspect-[4/1] overflow-hidden">
        <Image
          src={mission._embedded?.["wp:featuredmedia"]?.[0]?.source_url}
          alt={mission.title.rendered}
          width={600}
          height={300}
          unoptimized
          className="w-full object-cover aspect-video transition-all duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        <div className="absolute bottom-6 left-0">
          <div className="bg-primary text-primary-foreground font-display text-2xl px-6 py-1 italic inline-block shadow-[4px_0_0_0_#fff]" style={{ clipPath: "polygon(0 0, 100% 0, 92% 100%, 0% 100%)" }}>MISSION STATUS: {mission.acf.progress}</div>
        </div>

      </section>

      {/* Title */}
      <section className="px-6 py-8 ">
        <h1 className="font-display text-6xl leading-[0.8] mb-2 tracking-tighter">
          {mission.title.rendered.split(" ").slice(0, -1).join(" ")} <br />
          <span className="text-primary">{mission.title.rendered.split(" ").at(-1)}</span>
        </h1>
        <div className="flex items-center gap-4 opacity-50 font-display text-[10px] uppercase tracking-[0.3em]">
          <span>ID: 882-991-HASIB</span>
          <div className="h-px flex-1 bg-foreground/20" />
          <span>{new Date(mission.date).getFullYear()}</span>
        </div>
      </section>

      {/* Intel Brief */}
      <section className="px-6 py-6 mb-8 container mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-1 h-6 bg-primary" />
          <h2 className="font-display text-2xl tracking-widest italic">// Intel Brief</h2>
        </div>
        <div className="bg-card/50 border border-foreground/5 p-6 relative">
          <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-primary/40" />
          <p className="text-sm leading-relaxed text-foreground/80 font-body">{mission.acf.intel_brief}</p>
        </div>
      </section>

      {/* Problem / Solution */}
      <section className="px-6 py-4 mb-8 space-y-4 container mx-auto">
        <div className="space-y-1">
          <p className="font-display text-[10px] text-muted-foreground uppercase font-bold tracking-widest">The Problem</p>
          <p className="font-body text-sm text-foreground/80">{mission.acf.the_problem}</p>
        </div>
        <div className="p-4 bg-card border border-border">
          <p className="font-display text-accent uppercase font-bold text-[9px] mb-2">The Solution</p>
          <p className="font-body text-sm text-foreground/80">{mission.acf.the_solution}</p>
        </div>
      </section>

      {/* Tactical Loadout */}
      <section className="px-6 py-6 mb-8 container mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-1 h-6 bg-primary" />
          <h2 className="font-display text-2xl tracking-widest italic">// Tactical Loadout</h2>
        </div>
        <div className="grid lg:grid-cols-4 grid-cols-2 gap-4">
          {skills.map((skill: any, i) => (
            <TacticalLoadout
              key={skill.id}
              index={i}
              {...skill}
            />
          ))}
        </div>
      </section>

      {/* Field Results */}
      <section className="px-6 py-6 mb-8 container mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-1 h-6 bg-primary" />
          <h2 className="font-display text-2xl tracking-widest italic">// Field Results</h2>
        </div>
        <div className="space-y-4">
          <FieldResults
            label="Load Efficiency"
            value={mission.acf.load_efficiency}
            color="text-accent"
          />
          <FieldResults
            label="User Engagement"
            value={mission.acf.user_engagement}
            color="text-primary"
          />
          <FieldResults
            label="Security Rating"
            value={mission.acf.security_rating}
            color="text-foreground"
          />
        </div>
      </section>

      {/* Tags */}
      <section className="px-6 mb-8 container mx-auto">
        <div className="flex gap-2 flex-wrap">
          {mission._embedded?.["wp:term"]?.[1]?.map((tag: any) => (
            <span
              key={tag.id}
              className="px-3 py-1 bg-card border border-border font-display text-[10px] font-bold uppercase tracking-widest"
            >
              {tag.name}
            </span>
          ))}
        </div>
      </section>

      {/* Launch CTA */}
      <section className="px-6 container mx-auto">
        <button className="relative w-full group overflow-hidden">
          <div className="bg-primary text-primary-foreground py-6 flex flex-col items-center justify-center border-b-4 border-foreground relative z-10 group-hover:brightness-110 transition-all active:scale-[0.98]">
            <Link
              href={mission.acf.live_link}
              className="font-display text-5xl tracking-tighter italic flex items-center gap-3"
              target="_blank"
            >
              Launch Mission <ExternalLink size={28} />
            </Link>
            <span className="font-display text-[10px] tracking-[0.4em] uppercase opacity-80 mt-1">Direct Link to Protocol</span>
          </div>
        </button>
      </section>
    </main>
  );
}