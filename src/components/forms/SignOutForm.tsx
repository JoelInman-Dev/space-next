"use client";
import { useRouter } from "next/navigation";
import * as AuthService from "@/services/Auth-Service";
import { getSession, signOut } from "next-auth/react";
import { AlertDialogAction, AlertDialogCancel } from "../ui/alert-dialog";

// logout page, show confirmation for logging out on screen and add button that fires signOut.
export default function SignOutForm() {
  const router = useRouter();

  // define a function to handle signout
  async function OnSignOut() {
    // get the session
    const session = await getSession();

    // if no session then redirect to signin page
    if (!session) {
      router.push("/");
    } else {
      //successfully logged out so now invoke client-side signout to desroy client session
      await signOut({ redirect: false });
      //redirect user to signin page
      router.push("/");
    }
  }
  return (
    <div className="flex flex-col space-y-10 py-4">
      <div className="flex-1 flex flex-col justify-center">
        <AlertDialogAction onClick={() => OnSignOut()}>
          Confirm Sign Out
        </AlertDialogAction>
      </div>
      <div className="flex-1 flex flex-col justify-center">
        <AlertDialogCancel>Back to Dashboard</AlertDialogCancel>
      </div>
    </div>
  );
}
