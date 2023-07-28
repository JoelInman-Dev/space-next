export const metadata = {
  title: "SpaceX Ships",
  description: "Check out the Launch Data",
};

export default function ShipsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="w-full m-auto">{children}</div>;
}
