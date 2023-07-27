import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";

config.autoAddCss = false;

export const metadata = {
  title: "SpaceX Crew Members",
  description: "Meet the crew",
};

export default function CrewLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col justify-between flex-wrap">
      <div className="flex-1 flex">{children}</div>
    </div>
  );
}
