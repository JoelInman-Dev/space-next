"use client";
import H1 from "@/components/typography/h1";
import H2 from "@/components/typography/h2";
import H3 from "@/components/typography/h3";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import SignOutForm from "@/components/forms/SignOutForm";

export default function AdminHome() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="z-10 w-full max-w-5xl justify-center items-center font-mono text-2xl lg:flex flex-col pb-6">
        <H1 className="p-6">Welcome to the Admin LANDING page</H1>
        <H2 className="p-6">Thanks for logging in Captain!</H2>
        <div className="logout flex justify-center items-center z-10 w-full max-w-5xl font-mono text-sm">
          <AlertDialog>
            <AlertDialogTrigger className="p-6">
              <Button>Sign Out</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Sign Out</AlertDialogTitle>
              </AlertDialogHeader>
              <SignOutForm />
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>
      <div className="w-full max-w-5xl items-center font-mono text-sm border rounded-lg p-4 flex justify-around">
        <H3 className="p-6">Available Pages: </H3>
        <Button asChild>
          <Link href="/admin/ships">Ships</Link>
        </Button>
        <Button asChild>
          <Link href="/admin/rockets">Rockets</Link>
        </Button>
        <Button asChild>
          <Link href="/admin/crew">Crew Members</Link>
        </Button>
      </div>
    </main>
  );
}
