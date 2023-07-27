import Image from "next/image";
import Link from "next/link";

export default function AdminHeader() {
  return (
    <>
      <div className="z-10 header w-screen bg-primary flex justify-between items-center p-4 mb-4">
        <Image
          src="/spacenext-trans.png"
          alt="SpaceX Logo"
          width={100}
          height={100}
        />
        <nav className="w-[30%] flex justify-evenly text-primary-foreground">
          <Link href="/admin">Home</Link>
          <Link href="/admin/ships">Ships</Link>
          <Link href="/admin/rockets">Rockets</Link>
          <Link href="/admin/crew">Crew</Link>
          <Link href="/admin/profile">My Profile</Link>
        </nav>
      </div>
    </>
  );
}
