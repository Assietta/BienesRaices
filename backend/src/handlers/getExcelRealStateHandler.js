const XLSX = require('xlsx');
const { RealState } = require('../db')


const getExcelRealStateHandler = async (req, res)=>{

    const realstates = await RealState.findAll();
  const worksheet = XLSX.utils.json_to_sheet(realstates.map(realstate => realstate.toJSON()));
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, 'TableRealStates');
  const excelData = XLSX.write(workbook, { type: 'buffer' });
  res.attachment('TableRealStates.xlsx');
  res.send(excelData);
}
module.exports = {
    getExcelRealStateHandler
  };
  