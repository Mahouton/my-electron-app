//import db from '../../../database.js'
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const AgentService = {
  async getAgents() {
    return prisma.agent.findMany();
  },
  async getAgentsByCompanie(companieId) {
    const query = db.prepare('SELECT * FROM agents WHERE companie_id=?')
    return query.all([companieId])
  },
  async getAgentsByAnnexe(annexeId) {
    const query = db.prepare('SELECT * FROM agents WHERE annexe_id=?')
    return query.all([annexeId])
  }
}

export default AgentService
