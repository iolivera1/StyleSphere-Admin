import prismadb from "@/lib/prismadb";
import { BillboardForm } from "./components/billboard-form";

type Params = Promise<{ billboardId: string; storeId: string }>;

export default async function BillboardPage(props: { params: Params }) {
    const params = await props.params;
    const { billboardId } = params;
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