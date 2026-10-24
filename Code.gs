// Dyeing calculator: save processes to a Google Sheet
const KEY = 'change-me'; // change this, then type the same key in the app

function sheet_() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let s = ss.getSheetByName('Processes');
  if (!s) { s = ss.insertSheet('Processes'); s.appendRow(['id', 'name', 'updated', 'json']); }
  return s;
}
function out_(o) {
  return ContentService.createTextOutput(JSON.stringify(o)).setMimeType(ContentService.MimeType.JSON);
}
function doGet(e) {
  if (e.parameter.key !== KEY) return out_({ error: 'Wrong key' });
  const rows = sheet_().getDataRange().getValues().slice(1);
  return out_({ items: rows.map(r => JSON.parse(r[3])) });
}
function doPost(e) {
  const b = JSON.parse(e.postData.contents);
  if (b.key !== KEY) return out_({ error: 'Wrong key' });
  const s = sheet_(), d = s.getDataRange().getValues();
  let row = -1;
  for (let i = 1; i < d.length; i++) if (String(d[i][0]) === String(b.id)) { row = i + 1; break; }
  if (b.action === 'delete') { if (row > 0) s.deleteRow(row); return out_({ ok: 1 }); }
  const v = [b.id, b.name, new Date(), JSON.stringify(b.data)];
  if (row > 0) s.getRange(row, 1, 1, 4).setValues([v]); else s.appendRow(v);
  return out_({ ok: 1 });
}
