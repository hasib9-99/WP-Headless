import Image from 'next/image'
import Link from 'next/link'
import { getSkills } from '@/lib/wordpress'
import SkillCard from '@/components/SkillCard';

const skills = await getSkills();
export default function Home() {

  return (
    <main className="pt-20 pb-28">
      {/* Hero */}
      <section className="px-6 py-8">
        <div className="relative mb-6">
          <div className="border-2 border-primary p-1">
            <Image
              src="/Abu-hasib.png"
              width={500}
              height={500}
              alt="Picture of the author"
            />
          </div>
          <div className="absolute -bottom-4 -left-2 bg-primary text-white font-primary font-semibold font-display px-4 py-1 text-xl italic skew-x-[-12deg]">
            FULLSTACK AGENT
          </div>
        </div>

        <div className="mt-8">
          <h1 className="font-display text-6xl leading-[0.9] mb-2 font-primary text-white font-semibold">
            HEY! I'M <br />
            <span className="text-primary">ABU HASIB</span>
          </h1>
          <p className="font-secondary text-text text-sm opacity-80 uppercase tracking-widest border-l-2 border-primary pl-3 mb-6 font-body">
            WordPress Developer // UX Strategist // Solution Architect
          </p>
          <Link
            href="/arsenal"
            className="bg-primary font-primary font-semibold text-white text-2xl px-12 py-3 hover:bg-foreground hover:text-background transition-colors duration-300 w-full flex items-center justify-center gap-2 group"
          >
            PLAY PROJECT
            {/* <Play size={20} className="group-hover:translate-x-1 transition-transform" /> */}
          </Link>
        </div>
      </section>

      {/* Skills */}
      <section className="px-6 py-12">
        <div className="flex items-center gap-4 mb-8">
          <div className="h-[2px] w-12 bg-primary" />
          <h2 className="font-primary text-white font-semibold text-3xl">CORE ABILITIES</h2>
        </div>
        <div className="grid grid-cols-2 gap-4">
        {skills.map((skill: any) => (
          <SkillCard
            key={skill.id}
            {...skill}
          />
        ))}
        </div>
      </section>

      {/* ACTIVE MISSIONS */}
      <section className="px-6 py-12">
        <div className="flex items-center gap-4 mb-8">
          <div className="h-[2px] w-12 bg-primary" />
          <h2 className="font-primary text-white font-semibold text-3xl">ACTIVE MISSIONS</h2>
        </div>
        <div className="grid grid-cols-2 gap-4">
        {skills.map((skill: any) => (
          <SkillCard
            key={skill.id}
            {...skill}
          />
        ))}
        </div>
      </section>
    </main>
  )
}