import { NextPage } from "next";

import H1 from "@/components/typography/h1";
import P from "@/components/typography/p";
import ResetPasswordForm from "@/components/forms/ResetPasswordForm";

const ResetPasswordPage: NextPage = async () => {
  return (
    <>
      <H1 className="text-center">Reset your Password</H1>
      <P className="text-xl py-4 font-bold text-center mb-10">
        Try picking a password you will remember this time...
      </P>
      <div className="border rounded-lg p-4">
        <ResetPasswordForm />
      </div>
    </>
  );
};

export default ResetPasswordPage;
