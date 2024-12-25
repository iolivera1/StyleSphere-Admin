import {auth} from "@clerk/nextjs/server";
import {NextResponse} from "next/server";

import prismadb from "@/lib/prismadb";

export async function GET(
    _req: Request,
    {params}: { params: { sizeId: string } }
) {
    try {
        const {sizeId} = await params;
        if (!sizeId) {
            return new NextResponse("Size id is required", {status: 400});
        }

        const size = await prismadb.size.findFirst({
            where: {
                id: sizeId,
            },
        });

        return NextResponse.json(size);
    } catch (error) {
        console.log("[SIZE_GET]", error);
        return new NextResponse("Internal error", {status: 500});
    }
}

export async function PATCH(
    req: Request,
    {params}: { params: { storeId: string; sizeId: string } }
) {
    try {
        const {userId} = await auth();
        const {storeId, sizeId} = await params;
        const body = await req.json();

        const {name, value} = body;

        if (!userId) {
            return new NextResponse("Unauthenticated", {status: 401});
        }

        if (!name) {
            return new NextResponse("Name is required", {status: 400});
        }

        if (!value) {
            return new NextResponse("Value is required", {status: 400});
        }

        if (!sizeId) {
            return new NextResponse("Size is required", {status: 400});
        }

        const storeByUserId = await prismadb.store.findFirst({
            where: {
                id: storeId,
                userId,
            },
        });

        if (!storeByUserId) {
            return new NextResponse("Unauthorized", {status: 403});
        }

        const size = await prismadb.size.updateMany({
            where: {
                id: sizeId,
            },
            data: {
                name,
                value,
            },
        });

        return NextResponse.json(size);
    } catch (error) {
        console.log("[SIZE_PATCH]", error);
        return new NextResponse("Internal error", {status: 500});
    }
}

export async function DELETE(
    _req: Request,
    {params}: { params: { storeId: string; sizeId: string } }
) {
    try {
        const {userId} = await auth();
        const {sizeId} = await params;

        if (!userId) {
            return new NextResponse("Unauthenticated", {status: 401});
        }

        if (!sizeId) {
            return new NextResponse("Billboard id is required", {status: 400});
        }

        const size = await prismadb.size.deleteMany({
            where: {
                id: sizeId,
            },
        });

        return NextResponse.json(size);
    } catch (error) {
        console.log("[BILLBOARD_DELETE]", error);
        return new NextResponse("Internal error", {status: 500});
    }
}
