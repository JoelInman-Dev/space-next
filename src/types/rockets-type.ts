// rocket data i want
export type RocketsType = {
  id: string;
  name: string;
  type: string;
  active: boolean;
  costPerLaunch: number;
  firstFlight: string;
  country: string;
  company: string;
  engine: {
    type: string;
    propellant: {
      mix: string;
    };
  };
  height: number;
  diameter: number;
  mass: number;
};
