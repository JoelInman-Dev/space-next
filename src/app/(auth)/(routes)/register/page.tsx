import { NextPage } from "next";

import H1 from "@/components/typography/h1";
import P from "@/components/typography/p";
import RegisterForm from "@/components/forms/RegisterForm";

const ForgotPasswordPage: NextPage = async () => {
  return (
    <>
      <H1 className="text-center">Register a New Account</H1>
      <P className="text-xl py-4 font-bold text-center mb-10">
        Enter your details below to create your account.
      </P>
      <div className="border rounded-lg p-4">
        <RegisterForm />
      </div>
    </>
  );
};

export default ForgotPasswordPage;
