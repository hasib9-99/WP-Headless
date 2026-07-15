import Image from 'next/image'
import Link from 'next/link'
import { getExperiences, getSkills } from '@/lib/wordpress'
import SkillCard from '@/components/SkillCard';
import Experience from '@/components/Experience';

const skills = await getSkills();
const experiences = await getExperiences();


export default async function Dossier() {
    return (
        <main className="pb-28 glitch-bg container mx-auto">
            {/* Hero portrait */}
            <section className="p-6 pt-24 relative md:flex gap-6 flex-row-reverse justify-center items-center">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 -z-10" style={{ clipPath: "polygon(0 0, 100% 0, 95% 100%, 0% 100%)" }} />
                <div className="relative w-full aspect-square overflow-hidden border-2 border-primary/30 group">
                    <Image
                        src="/me.png"
                        alt="Abu Hasib Portrait"
                        width={500}
                        height={500}
                        className="w-full h-full object-cover contrast-125 brightness-90 grayscale group-hover:grayscale-0 transition-all duration-700"
                    />
                    <div className="absolute bottom-0 left-0 w-full bg-primary/80 backdrop-blur-sm p-3 flex justify-between items-end">
                        <div>
                            <p className="font-display text-[10px] text-primary-foreground/70 uppercase">Designation</p>
                            <h2 className="font-display text-2xl text-primary-foreground leading-none">Senior Developer</h2>
                        </div>
                        <div className="text-right">
                            <p className="font-display text-[10px] text-primary-foreground/70 uppercase">Origin</p>
                            <p className="font-display text-primary-foreground leading-none">Bangladesh</p>
                        </div>
                    </div>
                    <div className="absolute top-2 right-2 flex flex-col gap-1">
                        <div className="w-1 h-8 bg-primary" />
                        <div className="w-1 h-2 bg-primary" />
                    </div>
                </div>

                <div className="mt-6 space-y-4">
                    <div className="flex items-center gap-2">
                        <span className="text-primary font-bold">//</span>
                        <h1 className="font-display text-4xl">Dossier: About Me</h1>
                    </div>
                    <div className="h-[2px] w-32 bg-gradient-to-r from-primary to-transparent" />
                    <p className="text-sm leading-relaxed text-foreground/70 font-body">
                        I'm a WordPress Developer who transforms ideas into intuitive, stunning websites. With a keen eye for
                        design and a passion for clean, efficient code, I create seamless, high-performing sites that drive results.
                    </p>
                </div>
            </section>

            {/* Stats */}
            <section className="px-6 py-4 grid grid-cols-3 gap-2">
                {[
                    { val: "5+", label: "XP Years", color: "text-primary" },
                    { val: "20+", label: "Satisfied", color: "text-accent" },
                    { val: "260+", label: "Projects", color: "text-foreground" },
                ].map(({ val, label, color }) => (
                    <div key={label} className="bg-card border-b-2 border-primary p-3">
                        <p className="font-display text-[10px] uppercase font-bold text-muted-foreground mb-1">{label}</p>
                        <p className={`font-display text-3xl ${color} leading-none`}>{val}</p>
                    </div>
                ))}
            </section>

            {/* Skills */}
            <section className="mt-10 px-6">
                <div className="flex items-center gap-2 mb-6">
                    <span className="text-primary font-bold">//</span>
                    <h2 className="font-display text-3xl uppercase tracking-wider">Utility & Skills</h2>
                </div>
                <div className="grid md:grid-cols-4 grid-cols-2 gap-4">
                    {skills.map((skill: any) => (
                        <SkillCard
                            key={skill.id}
                            {...skill}
                        />
                    ))}
                </div>
            </section>

            {/* Experience */}
            <section className="mt-12 px-6">
                <div className="flex items-center gap-2 mb-6">
                    <span className="text-primary font-bold">//</span>
                    <h2 className="font-display text-3xl uppercase tracking-wider">Mission Log</h2>
                </div>
                <div className="space-y-6 relative border-l border-border ml-2 pl-6">
                    {experiences.map((exp: any) => (
                        <Experience
                            key={exp.id}
                            {...exp}
                        />
                    ))}
                </div>
            </section>

            {/* Testimonial */}
            <section className="mt-12 px-6">
                <div className="flex items-center gap-2 mb-6">
                    <span className="text-primary font-bold">//</span>
                    <h2 className="font-display text-3xl uppercase tracking-wider">Commendations</h2>
                </div>
                <div className="bg-primary/5 border-l-2 border-primary p-4">
                    <p className="italic text-sm text-foreground/80 mb-3 font-body">
                        "Expert level precision. The interface clarity and performance surpassed our operational requirements."
                    </p>
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-muted overflow-hidden">
                            {/* <img
                    alt="Client"
                    className="w-full h-full object-cover grayscale"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBig6jOiYo_X43IuqKxamItjDfE5N7Ny31jRXV-FUmHe0s1WwJoAxz9VisHvIv0NYZGHpnKkvm8fpC_TFAxB9bS6lrqPwYqRPrzhoJRKTd7U6J0Sdm30x7eGrJ8HOyy2CZlfwdyJ5qWOSP0WOfQvCWXMUYtxIiYQzOMnFexGoce0TMjASx0lZ08cpO170IGOtRovPrvTKE0N_erBOT369_1wf1rRFRZycFAWFeEUiYhorUFbxp4mYGFBa29ITgsE5gSyjDwsrw9z1I"
                /> */}
                        </div>
                        <div>
                            <p className="font-display text-sm leading-none">Emily Rodriguez</p>
                            <p className="font-display text-[10px] text-muted-foreground uppercase font-bold">Product Lead, TechSprint</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="mt-16 bg-primary px-6 py-12 text-primary-foreground relative overflow-hidden">
                <div className="absolute top-0 right-0 opacity-10 scale-150 pointer-events-none text-[200px]">🛡</div>
                <div className="relative z-10">
                    <h2 className="font-display text-4xl mb-2">Initiate Contact</h2>
                    <p className="text-sm font-medium mb-8 opacity-90 font-body">
                        Ready to deploy your next high-performance digital asset?
                    </p>
                    <Link
                        href="/comms"
                        className="block w-full bg-background py-4 text-center font-display text-xl tracking-widest hover:bg-val-charcoal transition-colors text-foreground"
                    >
                        SEND TRANSMISSION
                    </Link>
                </div>
            </section>
        </main>
    )
}
