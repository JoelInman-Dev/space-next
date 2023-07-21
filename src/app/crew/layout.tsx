export const metadata = {
  title: "SpaceX Crew Members",
  description: "Meet the crew",
};

export default function CrewLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <div className="flex flex-col flex-wrap">
        <div className="flex-initial flex bg-primary justify-between text-white fixed w-screen z-50 p-10">
          Crew Members
          <ul className="pr-6 flex gap-4">
            <li>Filter 1</li>
            <li>Filter 2</li>
            <li>Filter 3</li>
          </ul>
        </div>
        <div className="flex-1 flex mt-28">{children}</div>
      </div>
    </main>
  );
}
