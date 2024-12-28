import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

import prismadb from "@/lib/prismadb";
import Navbar from "@/components/navbar";

type Params = Promise<{ storeId: string }>;

export default async function DashboardLayout(props: { children: React.ReactNode; params: Params }) {
  const params = await props.params;
  const { storeId } = params;

  const { userId } = await auth();

  if (!userId) {
    redirect("/sign-in");
  }

  const store = await prismadb.store.findFirst({
    where: {
      id: storeId,
      userId,
    },
  });

  if (!store) {
    redirect("/");
  }

  return (
    <>
      <Navbar />
      {props.children}
    </>
  );
}