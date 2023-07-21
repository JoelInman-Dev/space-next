import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-center font-mono text-2xl lg:flex pb-6">
        <h1>Welcome to the LANDING page</h1>
      </div>
      <div className="z-10 w-full max-w-5xl items-center justify-evenly font-mono text-sm lg:flex">
        <Button asChild>
          <Link href="/launches">Launches</Link>
        </Button>
        <Button>
          <Link href="/rockets">Rockets</Link>
        </Button>
        <Button>
          <Link href="/crew">Crew Members</Link>
        </Button>
      </div>
    </main>
  );
}
