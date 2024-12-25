import {Prisma, PrismaClient} from '@prisma/client';

const prisma = new PrismaClient();

export async function seedProducts() {
    const product1 = await prisma.product.create({
        data: {
            id: 'product-id-1',
            storeId: '8b376914-2510-426c-9b79-0c1d27b9d6e1',
            categoryId: 'category-id-1',
            name: 'Product 1',
            price: new Prisma.Decimal(29.99),
            isFeatured: true,
            isArchived: false,
            sizeId: 'size-id-1',
            colorId: 'color-id-1',
            images: {
                create: [
                    { url: 'https://example.com/product1-image1.jpg' },
                    { url: 'https://example.com/product1-image2.jpg' },
                ],
            },
        },
    });

    const product2 = await prisma.product.create({
        data: {
            id: 'product-id-2',
            storeId: '8b376914-2510-426c-9b79-0c1d27b9d6e1',
            categoryId: 'category-id-2',
            name: 'Product 2',
            price: new Prisma.Decimal(49.99),
            isFeatured: false,
            isArchived: false,
            sizeId: 'size-id-2',
            colorId: 'color-id-2',
            images: {
                create: [
                    { url: 'https://example.com/product2-image1.jpg' },
                    { url: 'https://example.com/product2-image2.jpg' },
                ],
            },
        },
    });

    console.log({ product1, product2 });
}