import db from '../../../database.js'

const AgentService = {
  async getAgents() {
    const query = db.prepare('SELECT * FROM agents')
    return query.all()
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
