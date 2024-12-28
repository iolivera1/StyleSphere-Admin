import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs/server";
import prismadb from "@/lib/prismadb";
import { SettingsForm } from "./components/settings-form";

type Params = Promise<{ storeId: string }>;

export default async function SettingsPage(props: { params: Params }) {
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
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-4">
        <SettingsForm initialData={store} />
      </div>
    </div>
  );
}