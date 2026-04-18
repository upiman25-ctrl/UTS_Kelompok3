const ReportRepository = require('./report-repository');

async function getReport() {
  return ReportRepository.getReport();
}

async function createReport(reportId, title, total, date) {
  return ReportRepository.createReport(reportId, title, total, date);
}

async function updateReport(reportId, title, total, date) {
  return ReportRepository.updateReport(reportId, title, total, date);
}

async function deleteReport(reportId) {
  return ReportRepository.deleteReport(reportId);
}

module.exports = {
  getReport,
  createReport,
  updateReport,
  deleteReport,
};
