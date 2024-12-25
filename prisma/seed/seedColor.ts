import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function seedColors() {
    const color1 = await prisma.color.create({
        data: {
            storeId: '8b376914-2510-426c-9b79-0c1d27b9d6e1',
            name: 'Red',
            value: '#dd0808',
        },
    });

    const color2 = await prisma.color.create({
        data: {
            storeId: '8b376914-2510-426c-9b79-0c1d27b9d6e1',
            name: 'Dark Green',
            value: '#236133',
        },
    });

    const color3 = await prisma.color.create({
        data: {
            storeId: '8b376914-2510-426c-9b79-0c1d27b9d6e1',
            name: 'Black',
            value: '#1a1919',
        },
    });

    const color4 = await prisma.color.create({
        data: {
            storeId: '8b376914-2510-426c-9b79-0c1d27b9d6e1',
            name: 'Blue',
            value: '#1d91da',
        },
    });

    const color5 = await prisma.color.create({
        data: {
            storeId: '8b376914-2510-426c-9b79-0c1d27b9d6e1',
            name: 'gray',
            value: '#b0b0b0',
        },
    });

    console.log({ color1, color2, color3, color4, color5});
}