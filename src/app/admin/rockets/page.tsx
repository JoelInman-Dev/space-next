import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Rockets() {
  return (
    <>
      <h1>Launches Page</h1>
      <Button asChild>
        <Link href="/">Back to Landing</Link>
      </Button>
    </>
  );
}
