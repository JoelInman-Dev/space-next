import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import P from "@/components/typography/p";

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
    <main>
      <div className="flex flex-col justify-between flex-wrap">
        <div className="flex-initial flex bg-primary justify-between text-white fixed w-screen z-50 p-10">
          <Link href="/admin" className="flex align-middle">
            <i>
              <FontAwesomeIcon icon={faArrowLeftLong} size="2x" />
            </i>
            <P className="pt-1 pl-4">Crew Members</P>
          </Link>
          <ul className="pr-6 flex gap-4">
            <li>Filter 1</li>
            <li>Filter 2</li>
            <li>Filter 3</li>
          </ul>
        </div>
        <div className="flex-1 flex">{children}</div>
      </div>
    </main>
  );
}
