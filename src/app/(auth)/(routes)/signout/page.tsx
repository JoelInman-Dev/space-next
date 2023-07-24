import { NextPage } from "next";

import H1 from "@/components/typography/h1";
import P from "@/components/typography/p";
import SignOutForm from "@/components/forms/SignOutForm";

const SignOutPage: NextPage = async () => {
  return (
    <>
      <H1 className="text-center">
        Signing Out | {process.env.APPLICATION_NAME}
      </H1>
      <P className="text-xl py-4 font-bold text-center mb-10">
        Are you sure you want to sign out of {process.env.APPLICATION_NAME}?
      </P>
      <div className="border rounded-lg p-4">
        <SignOutForm />
      </div>
    </>
  );
};

export default SignOutPage;
