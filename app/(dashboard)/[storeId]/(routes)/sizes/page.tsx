import { format } from "date-fns";
import prismadb from "@/lib/prismadb";

import SizeClient from "./components/client";
import { SizeColumn } from "./components/columns";

type Params = Promise<{ storeId: string }>;

export default async function SizesPage(props: { params: Params }) {
  const params = await props.params;
  const { storeId } = params;

  const sizes = await prismadb.size.findMany({
    where: {
      storeId: storeId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  const formattedSizes: SizeColumn[] = sizes.map((item) => ({
    id: item.id,
    name: item.name,
    value: item.value,
    createdAt: format(item.createdAt, "d MMMM, yyyy"),
  }));

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <SizeClient data={formattedSizes} />
      </div>
    </div>
  );
}