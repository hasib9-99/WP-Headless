"use client";

import { useState } from "react";
import MissionCategories from "./MissionCategories";
import MissionCard from "./MissionCard";

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

            <section className="flex-1 px-4 pt-4">

                <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">

                    {filteredMissions.map((mission: any) => (
                        <MissionCard
                            key={mission.id}
                            {...mission}
                        />
                    ))}

                </div>

            </section>

        </main>
    );
}