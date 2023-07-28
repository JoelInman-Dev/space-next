"use client";

import Image from "next/image";
import H2 from "../typography/h2";
import H3 from "../typography/h3";
import H4 from "../typography/h4";

import * as styles from "./slider.module.css";

export default function ShipSlide({ ship }: { ship: any }) {
  return (
    <div className={`keen-slider__slide text-center p-4 ${styles.numberSlide}`}>
      <H2 className="text-red-800 font-bold">
        {ship.name} - {ship.type} Ship
      </H2>
      <div className="image-slider flex justify-center">
        <Image
          src={ship.image}
          alt={ship.name}
          width={700}
          height={466}
          className="justify-center max-h-[366px]"
        ></Image>
      </div>
      <H3 className="font-bold">Docked @ {ship.port}</H3>
      <div className="flex flex-wrap gap-4 justify-center">
        <H4>
          <span className="font-semibold">Weighing:</span> {ship.weight} KG
        </H4>
        <H4>
          <span className="font-semibold">Built in:</span> {ship.built}
        </H4>
        <H4>
          <span className="font-semibold">Roles:</span> {ship.roles}
        </H4>
      </div>
    </div>
  );
}
