import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function seedCategories() {
    const category1 = await prisma.category.create({
        data: {
            id: 'c1dc10e7-a845-4b42-ab68-c7c43fa1b862',
            storeId: '8b376914-2510-426c-9b79-0c1d27b9d6e1',
            billboardId: '6817e7e7-5091-4db3-94dd-d5fbf7ce4946',
            name: 'Dresses',
        },
    });

    const category2 = await prisma.category.create({
        data: {
            id: 'f7b1b62a-96e9-4c14-bdf2-a8a7e1329940',
            storeId: '8b376914-2510-426c-9b79-0c1d27b9d6e1',
            billboardId: '0d6b80ca-6b9c-4245-929a-154aa4657972',
            name: 'Jackets',
        },
    });

    console.log({ category1, category2 });
}