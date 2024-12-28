import prismadb from "@/lib/prismadb";
import { SizeForm } from "./components/size-form";

type Params = Promise<{ storeId: string; sizeId: string }>;

export default async function SizePage(props: { params: Params }) {
  const params = await props.params;
  const { storeId, sizeId } = params;

  const size = await prismadb.size.findUnique({
    where: {
      id: sizeId,
    },
  });

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-6 pt-6">
        <SizeForm initialData={size} />
      </div>
    </div>
  );
}