import { PrismaClient } from '@prisma/client';
import { seedBillboards } from './seed/seedBillboards';
import { seedSizes } from './seed/seedSize';
import { seedColors } from './seed/seedColor';
import { seedCategories } from './seed/seedCategory';
import { seedProducts } from './seed/seedProduct';


const prisma = new PrismaClient();

async function main() {
    await seedSizes();
    await seedColors();
    await seedBillboards();
    await seedCategories();
    await seedProducts();
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });