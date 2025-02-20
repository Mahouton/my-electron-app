import CompanieService from '../services/companiesServices'

export default (ipcMain) => {
  ipcMain.handle('get-companies', async () => await CompanieService.getCompanies())
  ipcMain.handle('get-companie-annexes', async (event, companieId) => {
    return await CompanieService.getCompanieAnnexes(companieId)
  })
}
