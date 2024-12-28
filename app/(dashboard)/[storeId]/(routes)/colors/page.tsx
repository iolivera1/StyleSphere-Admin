import { format } from "date-fns";
import prismadb from "@/lib/prismadb";
import ColorClient from "./components/client";
import { ColorColumn } from "./components/columns";

type Params = Promise<{ storeId: string }>;

export default async function ColorsPage(props: { params: Params }) {
    const params = await props.params;
    const { storeId } = params;

    const colors = await prismadb.color.findMany({
        where: {
            storeId: storeId,
        },
        orderBy: {
            createdAt: "desc",
        },
    });

    const formattedColors: ColorColumn[] = colors.map((item) => ({
        id: item.id,
        name: item.name,
        value: item.value,
        createdAt: format(item.createdAt, "d MMMM, yyyy"),
    }));

    return (
        <div className="flex-col">
            <div className="flex-1 space-y-4 p-8 pt-6">
                <ColorClient data={formattedColors} />
            </div>
        </div>
    );
}