import prismadb from "@/lib/prismadb";

import { BillboardForm } from "./components/billboard-form";

export default async function BillboardPage({
                                              params,
                                            }: {
  params: { billboardId: string };
}) {
  // Remove the unnecessary await on params
  const { billboardId } = params;

  // Fetch the billboard data from the database
  const billboard = await prismadb.billboard.findUnique({
    where: {
      id: billboardId,
    },
  });

  return (
      <div className="flex-col">
        <div className="flex-1 space-y-4 p-6 pt-6">
          <BillboardForm initialData={billboard} />
        </div>
      </div>
  );
}
