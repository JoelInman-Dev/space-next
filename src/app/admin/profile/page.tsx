import ProfileForm from "@/components/forms/ProfileForm";
import { authOptions } from "@/lib/auth";
import { NextPage } from "next";
import { getServerSession } from "next-auth";
import Image from "next/image";

const UserProfilepage: NextPage = async () => {
  const session = await getServerSession(authOptions);
  const user = session?.user;

  return (
    <>
      <div className="w-[85%] flex justify-evenly align-middle m-auto">
        <div className="profile-pic flex-none mr-4">
          <h1 className="text-2xl font-bold">{user?.name}'s Profile</h1>
          <Image
            src={user?.image || ""}
            width={200}
            height={200}
            alt="Profile Picture"
            className="rounded-full"
          ></Image>
        </div>
        <div className="border rounded-lg p-4 flex-1">
          <ProfileForm user={user!} />
        </div>
      </div>
    </>
  );
};

export default UserProfilepage;
