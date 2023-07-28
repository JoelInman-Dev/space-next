import RocketsTable from "@/components/tables/rockets/rocketsTable";
import H1 from "@/components/typography/h1";
import { RocketsType } from "@/types/rockets-type";

async function getRockets() {
  const rocketsFetch = await fetch("https://api.spacexdata.com/v4/rockets");
  if (!rocketsFetch.ok) {
    throw new Error("Failed to fetch rocket data");
  }
  const rocketDataRaw = await rocketsFetch.json();

  const rocketData: RocketsType[] = rocketDataRaw.map((rocket: any) => {
    return {
      id: rocket.id,
      name: rocket.name,
      type: rocket.type,
      active: rocket.active,
      costPerLaunch: rocket.cost_per_launch,
      firstFlight: rocket.first_flight,
      country: rocket.country,
      company: rocket.company,
      engine: {
        type: rocket.engines.type,
        propellant: {
          mix: `${rocket.engines.propellant_1} & ${rocket.engines.propellant_2}`,
        },
      },
      height: rocket.height.meters,
      diameter: rocket.diameter.meters,
      mass: rocket.mass.kg,
    };
  });
  return rocketData;
}

export default async function Rockets() {
  const rockets: RocketsType[] = await getRockets();
  return (
    <>
      <div className="container min-w-full py-10">
        <H1 className="text-center">Oh... There's Only 4 Rockets</H1>
        <RocketsTable rockets={rockets} />
      </div>
    </>
  );
}
