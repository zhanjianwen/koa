const DBHelper = require('../DBHelper/index.js')
const Excel = require('exceljs')
// @userCreateHelper
// @userFindHelper
const userController = async function (ctx) {
  const data = await DBHelper.userFindHelper({});
  var workBook = new Excel.Workbook();
  workBook.addWorksheet('My Sheet');
  var worksheet = workBook.getWorksheet('My Sheet');
  worksheet.columns = [
    { header: 'user',style: { bold: true } },
    { header: 'age',style: { bold: true } },
    { header: 'sex',style: {  bold: true } },
  ];
  for (let i = 0; i < data.length; i++) {
    worksheet.addRow([data[i].user,data[i].age,data[i].sex]).commit()
  }
  let fileName = 'test.xlsx';
  ctx.response.attachment(fileName);
  await workBook.xlsx.write(ctx.res);
  ctx.res.end();
  ctx.status = 200;
  let req = ctx.request.body;
  if (req) {
    try {
      ctx.response.status = 200;
      ctx.body = {
        code: 200,
        msg: '请求成功',
        data
      }

    } catch (err) {
      ctx.body = {
        code: 200,
        msg: '请求失败',
        data: err
      }
    }
  } else {
    ctx.response.status = 416;
    ctx.body = {
      code: 200,
      msg: '参数不齐全',
    }
  }

}
module.exports = userController