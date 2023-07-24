import H1 from "@/components/typography/h1";
import P from "@/components/typography/p";
import "@/styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Space Next",
  description: "Interacting with the SpaceX API V4 using NextJS",
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <div className="flex h-screen">
        <div className="flex-1 flex flex-col justify-between w-50 bg-primary">
          <div className="flex justify-center mt-[25%]">
            <Image
              src="/spacenext-trans.png"
              alt="Logo"
              width={500}
              height={500}
            />
          </div>
          <div className="p-14">
            <H1 className="text-3xl text-white">
              Welcome to {process.env.APPLICATION_NAME}!
            </H1>
            <P className="text-3xl text-white">{metadata.description}</P>
          </div>
        </div>
        <div className="flex-1 flex flex-col justify-center items-center w-50">
          <div className="w-1/2">{children}</div>
        </div>
      </div>
    </main>
  );
}
