import { UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const Home = async () => {
  const { userId } = await auth();
  if (!userId) redirect("/login");
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      Olá, <UserButton showName />
    </div>
  );
};

export default Home;
