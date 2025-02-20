import { ipcMain } from 'electron'
import db from '../../../database.js'

const CompanieService = {
  async getCompanies() {
    const query = db.prepare('SELECT * FROM companies')
    return query.all()
  },
  async getCompanieAnnexes(companieId) {
    const query = db.prepare('SELECT * FROM annexes WHERE companie_id=?')
    return query.all([companieId])
  }
}

export default CompanieService
