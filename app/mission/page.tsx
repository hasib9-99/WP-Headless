import { getMissions, getMissionCategories } from "@/lib/wordpress";
import MissionClient from "@/components/MissionClient";

export default async function Mission() {
  const categories = await getMissionCategories();
  const missions = await getMissions();

  return (
    <MissionClient
      categories={categories}
      missions={missions}
    />
  );
}