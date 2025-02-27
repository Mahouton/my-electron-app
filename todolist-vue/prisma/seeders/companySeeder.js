const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function seedCompany() {
  const companies = [
    {
      name: 'Berges-Consulting Sarl',
      description: 'management des ressources humaines, audits, assistance et appui-conseils',
      address: 'Lot 270-S Parcelle J Immeuble Déo Gracias, Quartier Aîtchédji',
      acronym: 'BERGES CONSULTING',
      createdAt: new Date('2022-09-28 08:16:05'),
      updatedAt: new Date(),
    },
    {
      name: 'Faitière des Caisses d\'Epargne et de Crédit Agricole Mutuel',
      description: 'Institution de Micro Finance',
      address: 'Lot 77 Bis, Quartier Zoca 08 BP 0843 Abomey-Calavi - Bénin',
      acronym: 'FECECAM BENIN',
      createdAt: new Date('2022-09-30 08:49:42'),
      updatedAt: new Date(),
    },
    // Ajoute ici d'autres entreprises
  ];

  for (let company of companies) {
    await prisma.company.create({
      data: company,
    });
  }
  console.log('Companies seeded successfully!');
}

module.exports = seedCompany;
