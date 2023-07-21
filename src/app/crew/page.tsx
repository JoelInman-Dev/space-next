import CrewCard from "@/components/cards/crew-card";
import { CrewMemberType } from "@/types/crew-member-type";

async function getCrew() {
  const res = await fetch("https://api.spacexdata.com/v4/crew");

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch crew data");
  }

  // get all the cew members
  const crew = await res.json();

  for (let i = 0; i < crew.length; i++) {
    const patches: string[] = [];
    // call other apis and add properties to the crewMember object
    // remember this will create a new CrewMemberType
    for (let j = 0; j < crew[i].launches.length; j++) {
      const launchData = await getLaunchesForCrew(crew[i].launches[j]);
      patches.push(launchData.links.patch.small);
    }
    crew[i].patches = patches;
  }
  return crew;
}

async function getLaunchesForCrew(id: string) {
  const res = await fetch(`https://api.spacexdata.com/v4/launches/${id}`);

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch launches data");
  }

  return res.json();
}

export default async function Crew() {
  const crew: CrewMemberType[] = await getCrew();

  return (
    <>
      <div className="container columns-4 flex flex-wrap">
        {crew.map((crewMember: CrewMemberType) => {
          return <CrewCard crewMember={crewMember} />;
        })}
      </div>
    </>
  );
}
