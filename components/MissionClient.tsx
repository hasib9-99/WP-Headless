"use client";

import { useState } from "react";
import MissionCategories from "./MissionCategories";
import MissionList from "./MissionList";

export default function MissionClient({
    categories,
    missions,
}: any) {

    const [active, setActive] = useState<number | "all">("all");

    const filteredMissions =
        active === "all"
            ? missions
            : missions.filter((mission: any) =>
                mission["mission-categorie"].includes(active)
            );

    return (
        <main className="pt-20 pb-28 flex min-h-screen container mx-auto">

            <aside className="w-20 shrink-0 border-r border-border flex flex-col pt-4 sticky top-20 h-[calc(100vh-80px)]">

                <MissionCategories
                    id="all"
                    name="All"
                    description="⊞"
                    active={active}
                    onClick={setActive}
                />

                {categories.map((category: any) => (
                    <MissionCategories
                        key={category.id}
                        id={category.id}
                        name={category.name}
                        description={category.description}
                        active={active}
                        onClick={setActive}
                    />
                ))}

            </aside>
            <section className="flex-1 px-4 pt-4 overflow-y-auto">
                <div className="mb-8">
                    <div className="flex items-baseline gap-2">
                        <h1 className="font-display text-4xl font-bold italic text-primary">Arsenal</h1>
                        <span className="font-display text-xs font-bold opacity-30 italic uppercase tracking-tighter">
                            Collection / 2025
                        </span>
                    </div>
                    <div className="h-[2px] w-full bg-gradient-to-r from-primary to-transparent mt-2" />
                </div>

                <div className="space-y-6 md:grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
                    {filteredMissions.map((mission: any) => (
                        <MissionList
                            key={mission.id}
                            {...mission}
                        />
                    ))}
                </div>

                <div className="h-12" />

                {/* Footer */}
                {/* <footer className="bg-val-charcoal text-foreground/40 p-8 text-center border-t border-border/20">
                    <div className="font-display text-lg tracking-[0.2em] mb-2 uppercase opacity-60">
                        Strategic Archive // Agent Hasib
                    </div>
                    <p className="font-display text-[9px] uppercase tracking-widest">
                        Encryption Key: [REDACTED] • Tactical Portfolio v.1.0.4
                    </p>
                </footer> */}
            </section>

        </main>
    );
}