import P from "@/components/typography/p";
import { OriginalShipsType } from "@/types/original-ships-type";
import { ShipsType } from "@/types/ships-type";

async function getShips() {
  const res = await fetch("https://api.spacexdata.com/v4/ships");
  // handle errors
  if (!res.ok) {
    throw new Error("Failed to fetch ships data");
  }

  const allShipsData = await res.json();
  // filter out ship properties that are not part of the ShipsType
  const ships: ShipsType[] = allShipsData.map((ship: OriginalShipsType) => {
    return {
      id: ship.id,
      name: ship.name,
      flight_number: ship.flight_number,
      type: ship.type,
      weight: ship.mass_kg ?? 0,
      image: ship.image ?? "/spacenext-logo.png",
      built: ship.year_built,
      port: ship.home_port,
      roles: ship.roles,
    };
  });

  return ships;
}

export default async function Ships() {
  const ships: ShipsType[] = await getShips();
  return (
    <>
      <div className="container columns-4 flex flex-wrap">
        {ships.map((ship: ShipsType) => {
          return (
            <>
              <div className="flex flex-wrap" key={ship.id}>
                <div className="flex m-2 border rounded-sm flex-col">
                  <P>NAME: {ship.name}</P>
                  <P>ID: {ship.id}</P>
                  <P>WEIGHT: {ship.weight}KG</P>
                  <P>TYPE: {ship.type}</P>
                  <P>DOCKED @ {ship.port}</P>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}
