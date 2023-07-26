import { NextPage } from "next";

import H1 from "@/components/typography/h1";
import P from "@/components/typography/p";
import ForgotPasswordForm from "@/components/forms/ForgotPasswordForm";

interface ForgotPasswordPageProps {
  params: { locale: string };
}

const ForgotPasswordPage: NextPage<ForgotPasswordPageProps> = async ({
  params,
}) => {
  return (
    <>
      <H1 className="text-center">Forgot your Password?</H1>
      <P className="text-xl py-4 font-bold text-center mb-10">
        Enter your email below and i'll send you password reset link.
      </P>
      <div className="border rounded-lg p-4">
        <ForgotPasswordForm />
      </div>
    </>
  );
};

export default ForgotPasswordPage;
