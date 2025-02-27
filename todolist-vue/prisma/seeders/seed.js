const seedCompany = require('./companySeeder');
// Ajoute d'autres seeders ici si tu en as

async function main() {
  await seedCompany();
  // Appelle d'autres seeders ici si nécessaire
  console.log('Seeding complete');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    const { PrismaClient } = require('@prisma/client');
    const prisma = new PrismaClient();
    await prisma.$disconnect();
  });
