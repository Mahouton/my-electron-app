//import db from '../../../database.js'
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const CompanieService = {
  async getCompanies() {
    return prisma.company.findMany()
  },
  async getCompanieAnnexes(companieId) {
    return prisma.company.findUnique({
      where: { id: companieId },
      include: { annexes: true }
    })
  }
}

export default CompanieService
