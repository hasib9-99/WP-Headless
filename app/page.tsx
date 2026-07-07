import Image from 'next/image'
import Link from 'next/link'
import { getSkills, getMissions } from '@/lib/wordpress'
import SkillCard from '@/components/SkillCard';
import MissionCard from '@/components/MissionCard';
import { Play } from "lucide-react";

const skills = await getSkills();
const missions = await getMissions();


export default function Home() {

  return (
    <main className="pt-20 pb-3">
      {/* Hero */}
      <section className="px-6 py-8 container mx-auto md:flex flex-row-reverse justify-between items-center md:gap-6">
        <div className="relative mb-6">
          <div className="border-2 border-primary p-1">
            <Image
              src="/Abu-hasib.png"
              width={500}
              height={500}
              alt="Picture of the author"
              className="w-full grayscale hover:grayscale-0 transition-all duration-500 border-4 border-background"
            />
          </div>
          <div className="absolute -bottom-4 -left-2 bg-primary text-primary-foreground font-display px-4 py-1 text-xl italic skew-x-[-12deg]">
            FULLSTACK AGENT
          </div>
        </div>

        <div className="mt-8">
          <h1 className="font-display text-6xl leading-[0.9] mb-2">
            HEY! I'M <br />
            <span className="text-primary">ABU HASIB</span>
          </h1>
          <p className="text-sm opacity-80 uppercase tracking-widest border-l-2 border-primary pl-3 mb-6 font-body">
            WordPress Developer // UX Strategist // Solution Architect
          </p>
          <Link
            href="/arsenal"
            className="bg-primary text-primary-foreground font-display text-2xl px-12 py-3 hover:bg-foreground hover:text-background transition-colors duration-300 w-full flex items-center justify-center gap-2 group"
          >
            PLAY PROJECT
            <Play size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* Core Abilities */}
      <section className="px-6 py-12 bg-muted/30">
        <div className="container mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-[2px] w-12 bg-primary" />
            <h2 className="font-display text-3xl">CORE ABILITIES</h2>
          </div>
          <div className="grid md:grid-cols-4 grid-cols-2 gap-4">
            {skills.map((skill: any) => (
              <SkillCard
                key={skill.id}
                {...skill}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ACTIVE MISSIONS */}
      <section className="px-6 py-12 container mx-auto">
        <div className="flex items-center gap-4 mb-10">
          <div className="h-[2px] w-12 bg-primary" />
          <h2 className="font-display text-3xl">ACTIVE MISSIONS</h2>
        </div>
        <div className="space-y-12 md:grid-cols-3 grid gap-4">
          {missions.map((mission: any) => (
            <MissionCard
              key={mission.id}
              {...mission}
            />
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-border">
        <div className="container mx-auto px-6 py-8 grid grid-cols-3 gap-2 ">
          {[
            { val: "5+", label: "EXP YEARS" },
            { val: "20+", label: "CLIENTS" },
            { val: "260+", label: "PROJECTS" },
          ].map(({ val, label }) => (
            <div key={label} className="text-center">
              <div className="font-display text-3xl text-primary leading-none">{val}</div>
              <div className="font-display text-[10px] uppercase tracking-widest opacity-60 mt-1">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-16 text-center container mx-auto">
        <h2 className="font-display text-5xl mb-8 italic">
          READY TO <span className="text-primary">LAUNCH</span>?
        </h2>
        <div className="bg-card p-8 border-l-4 border-primary relative overflow-hidden">
          <div className="absolute -right-4 -bottom-4 opacity-5 pointer-events-none">
            <span className="font-display text-9xl">📡</span>
          </div>
          <p className="font-display text-sm italic mb-8 opacity-80 uppercase tracking-widest">
            Deploying quality code to your servers 24/7
          </p>
          <Link
            href="/comms"
            className="block w-full bg-primary text-primary-foreground font-display text-4xl py-6 hover:brightness-110 active:scale-[0.98] transition-all glow-red"
          >
            CONNECT
          </Link>
        </div>
      </section>
    </main>
  )
}