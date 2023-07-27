import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import SignOutForm from "../forms/SignOutForm";
import { Button } from "../ui/button";

export default function SignoutConfirmation() {
  return (
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
  );
}
