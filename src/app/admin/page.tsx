import H1 from "@/components/typography/h1";
import H2 from "@/components/typography/h2";
import SignoutConfirmation from "@/components/messages/signoutConfirmation";
import { NextPage } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

const AdminHomepage: NextPage = async () => {
  const session = await getServerSession(authOptions);
  const user = session?.user;

  return (
    <div className="items-center m-auto">
      <div className="z-10 w-full max-w-5xl justify-center items-center font-mono text-2xl lg:flex flex-col pb-6">
        <H1 className="p-6">Welcome to the Admin LANDING page {user?.name}</H1>
        <H2 className="p-6">Thanks for logging in Captain!</H2>
        <div className="logout flex justify-center items-center z-10 w-full max-w-5xl font-mono text-sm">
          <SignoutConfirmation />
        </div>
      </div>
    </div>
  );
};

export default AdminHomepage;
