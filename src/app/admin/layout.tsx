import AdminFooter from "@/components/navigation/adminFooter";
import AdminHeader from "@/components/navigation/adminHeader";
import "@/styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Space Next",
  description: "Interacting with the SpaceX API V4 using Next.js",
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="min-h-screen flex flex-col justify-between">
        <AdminHeader />
        <main className="flex flex-wrap justify-between">{children}</main>
        <AdminFooter />
      </div>
    </>
  );
}
