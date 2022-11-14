const Excel = require('exceljs')

async function run() {
    const workbook = new Excel.Workbook();
    const worksheet = workbook.addWorksheet("data");

    worksheet.columns = [
        { header: 'Id', key: 'id', width: 50 },
    ];
    worksheet.addRow({ code: code, sector });
    await workbook.xlsx.writeFile('output.xlsx');
}

run()
