import {format} from "date-fns";
import prismadb from "@/lib/prismadb";
import BillboardClient from "./components/client";
import {BillboardColumn} from "./components/columns";

type Params = Promise<{ storeId: string }>;

export default async function BillboardsPage(props: { params: Params }) {
    const params = await props.params;
    const {storeId} = params;

    const billboards = await prismadb.billboard.findMany({
        where: {
            storeId: storeId,
        },
        orderBy: {
            createdAt: "desc",
        },
    });

    const formattedBillboards: BillboardColumn[] = billboards.map((item) => ({
        id: item.id,
        label: item.label,
        createdAt: format(item.createdAt, "d MMMM, yyyy"),
    }));

    return (
        <div className="flex-col">
            <div className="flex-1 space-y-4 p-8 pt-6">
                <BillboardClient data={formattedBillboards}/>
            </div>
        </div>
    );
}