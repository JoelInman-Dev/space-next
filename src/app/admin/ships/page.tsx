import ShipSlide from "@/components/sliders/shipSlide";
import SliderWrapper from "@/components/sliders/sliderWrapper";
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
      type: ship.type,
      weight: ship.mass_kg ?? "Unknown",
      image: ship.image ?? "/spacenext-logo.png",
      built: ship.year_built,
      port: ship.home_port,
      roles: ship.roles,
    };
  });

  return ships;
}

export default async function Ships() {
  // get ships data
  const ships: ShipsType[] = await getShips();
  return (
    <>
      <div className="container">
        <SliderWrapper>
          {ships.map((ship: ShipsType) => {
            return (
              // return keen-slider component for each ship
              <ShipSlide ship={ship} />
            );
          })}
        </SliderWrapper>
      </div>
    </>
  );
}
