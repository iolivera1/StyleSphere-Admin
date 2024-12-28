import { format } from "date-fns";
import prismadb from "@/lib/prismadb";
import Categoryclient from "./components/client";
import { CategoryColumn } from "./components/columns";

type Params = Promise<{ storeId: string }>;

export default async function CategoriesPage(props: { params: Params }) {
    const params = await props.params;
    const { storeId } = params;

    const categories = await prismadb.category.findMany({
        where: {
            storeId: storeId,
        },
        include: {
            billboard: true,
        },
        orderBy: {
            createdAt: "desc",
        },
    });

    const formattedCategories: CategoryColumn[] = categories.map((item) => ({
        id: item.id,
        name: item.name,
        billboardLabel: item.billboard.label,
        createdAt: format(item.createdAt, "d MMMM, yyyy"),
    }));

    return (
        <div className="flex-col">
            <div className="flex-1 space-y-4 p-8 pt-6">
                <Categoryclient data={formattedCategories} />
            </div>
        </div>
    );
}