import prismadb from "@/lib/prismadb";
import { ColorForm } from "./components/color-form";

type Params = Promise<{ colorId: string }>;

export default async function ColorPage(props: { params: Params }) {
    const params = await props.params;
    const { colorId } = params;

    const color = await prismadb.color.findUnique({
        where: {
            id: colorId,
        },
    });

    return (
        <div className="flex-col">
            <div className="flex-1 space-y-4 p-6 pt-6">
                <ColorForm initialData={color} />
            </div>
        </div>
    );
}