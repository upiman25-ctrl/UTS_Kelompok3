const reportService = require('./report-service');
const { errorResponder, errorTypes } = require('../../../core/errors');

async function getReport(request, response, next) {
  try {
    const report = await reportService.getReport();

    return response.status(200).json(report);
  } catch (error) {
    return next(error);
  }
}

async function createReport(request, response, next) {
  try {
    const { reportId, title, total, date } = request.body;

    if (!reportId || !title || !total || !date) {
      throw errorResponder(
        errorTypes.VALIDATION_ERROR,
        'All fields are required'
      );
    }

    const report = await reportService.createReport(
      reportId,
      title,
      total,
      date
    );

    return response.status(200).json(report);
  } catch (error) {
    return next(error);
  }
}

async function updateReport(request, response, next) {
  try {
    const { reportId, title, total, date } = request.body;

    if (!reportId || !title || !total || !date) {
      throw errorResponder(
        errorTypes.VALIDATION_ERROR,
        'All fields are required'
      );
    }

    const report = await reportService.updateReport(
      reportId,
      title,
      total,
      date
    );

    return response.status(200).json(report);
  } catch (error) {
    return next(error);
  }
}

async function deleteReport(request, response, next) {
  try {
    const success = await reportService.deleteReport(request.body.reportId);

    if (!success) {
      throw errorResponder(
        errorTypes.UNPROCESSABLE_ENTITY,
        'Failed to delete report'
      );
    }

    return response
      .status(200)
      .json({ message: 'Report Deleted Successfully' });
  } catch (error) {
    return next(error);
  }
}
module.exports = {
  getReport,
  createReport,
  updateReport,
  deleteReport,
};
