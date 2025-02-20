import { ipcMain } from 'electron';
import companiesHandlers from './companiesHandlers.js';

const registerIpcHandlers = () => {
  companiesHandlers(ipcMain);
};

export default registerIpcHandlers;
