import {PrismaClient} from '@prisma/client';

const prisma = new PrismaClient();

export async function seedBillboards() {
    const billboard1 = await prisma.billboard.create({
        data: {
            id:'be3faeaa-5568-4625-9596-e7e6c5ca1395',
            storeId: '8b376914-2510-426c-9b79-0c1d27b9d6e1',
            label: '- StyleSphere - Unleash Your Fashion Universe',
            imageUrl: 'https://res.cloudinary.com/dxhuvp7ca/image/upload/v1734983874/ahxbtma3psgiamnqgzdv.png',
        },
    });

    const billboard2 = await prisma.billboard.create({
        data: {
            id:'6817e7e7-5091-4db3-94dd-d5fbf7ce4946',
            storeId: '8b376914-2510-426c-9b79-0c1d27b9d6e1',
            label: 'Dresses',
            imageUrl: 'https://res.cloudinary.com/dxhuvp7ca/image/upload/v1734986262/wxa7kvb7eqa8kgjmye0s.png',
        },
    });

    const billboard3 = await prisma.billboard.create({
        data: {
            id: '0d6b80ca-6b9c-4245-929a-154aa4657972',
            storeId: '8b376914-2510-426c-9b79-0c1d27b9d6e1',
            label: 'Jackets',
            imageUrl: 'https://res.cloudinary.com/dxhuvp7ca/image/upload/v1734986228/vkkexyluqzjklxgnqvcw.png',
        },
    });

    console.log({billboard1, billboard2, billboard3});
}