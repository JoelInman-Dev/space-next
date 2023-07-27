import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import P from "@/components/typography/p";

config.autoAddCss = false;

export const metadata = {
  title: "SpaceX Ships",
  description: "Check out the Launch Data",
};

export default function ShipsLayout({
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
