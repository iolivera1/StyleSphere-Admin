import prismadb from "@/lib/prismadb";
import { CategoryForm } from "./components/category-form";

type Params = Promise<{ categoryId: string; storeId: string }>;

export default async function CategoryPage(props: { params: Params }) {
    const params = await props.params;
    const { categoryId, storeId } = params;

    const category = await prismadb.category.findUnique({
        where: {
            id: categoryId,
        },
    });

    const billboards = await prismadb.billboard.findMany({
        where: {
            storeId: storeId,
        },
    });

    return (
        <div className="flex-col">
            <div className="flex-1 space-y-4 p-6 pt-6">
                <CategoryForm billboards={billboards} initialData={category} />
            </div>
        </div>
    );
}