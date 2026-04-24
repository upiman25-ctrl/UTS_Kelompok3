const { Report } = require('../../../models');

async function getReport() {
  return Report.find({});
}

async function createReport(reportId, title, total, date) {
  return Report.create({ reportId, title, total, date });
}

async function updateReport(reportId, title, total, date) {
  return Report.findOneAndUpdate(
    { reportId },
    { reportId, title, total, date },
    { new: true }
  );
}

async function deleteReport(reportId) {
  return Report.findOneAndDelete({ reportId });
}

module.exports = {
  getReport,
  createReport,
  updateReport,
  deleteReport,
};
