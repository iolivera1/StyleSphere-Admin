import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function seedSizes() {
    const size1 = await prisma.size.create({
        data: {
            storeId: '8b376914-2510-426c-9b79-0c1d27b9d6e1',
            name: 'Small',
            value: 'S',
        },
    });

    const size2 = await prisma.size.create({
        data: {
            storeId: '8b376914-2510-426c-9b79-0c1d27b9d6e1',
            name: 'Medium',
            value: 'M',
        },
    });

    const size3 = await prisma.size.create({
        data: {
            storeId: '8b376914-2510-426c-9b79-0c1d27b9d6e1',
            name: 'Large',
            value: 'L',
        },
    });

    const size4 = await prisma.size.create({
        data: {
            storeId: '8b376914-2510-426c-9b79-0c1d27b9d6e1',
            name: 'Extra Large',
            value: 'XL',
        },
    });

    console.log({ size1, size2, size3, size4 });
}