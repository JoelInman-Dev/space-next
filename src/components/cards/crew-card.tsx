import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CrewMemberType } from "@/types/crew-member-type";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

export default function CrewCard({
  crewMember,
}: {
  crewMember: CrewMemberType;
}) {
  return (
    <Card key={crewMember.id} className="flex flex-col flex-wrap w-1/4 gap-1">
      <CardHeader>
        <CardTitle>{crewMember.name}</CardTitle>
        <CardDescription>{crewMember.agency}</CardDescription>
      </CardHeader>
      <CardContent className=" flex flex-col justify-between gap-2">
        <div id="imageHolder" className="relative h-64">
          <Image src={crewMember.image} alt={crewMember.id} fill />
        </div>
        <div className="flex flex-col gap-2">
          <Button asChild>
            <Link href={crewMember.wikipedia}>View Wiki</Link>
          </Button>
          <CardDescription>
            <p>Launch Patches: </p>
            {crewMember.patches.map((patch) => {
              return (
                <div className="relative h-16 w-16">
                  <Image src={patch} alt={crewMember.id} fill />
                </div>
              );
            })}
          </CardDescription>
        </div>
      </CardContent>
      <CardFooter>
        <CardDescription>{crewMember.status}</CardDescription>
      </CardFooter>
    </Card>
  );
}
