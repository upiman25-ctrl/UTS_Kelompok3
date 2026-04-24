const usersService = require('./users-service');
const { errorResponder, errorTypes } = require('../../../core/errors');

async function getUsers(request, response, next) {
  try {
    const users = await usersService.getUsers();
    return response.status(200).json(users);
  } catch (error) {
    return next(error);
  }
}

async function createUsers(request, response, next) {
  try {
    const { email, password, fullName } = request.body;
    if (!email || !password || !fullName) {
      throw errorResponder(
        errorTypes.VALIDATION_ERROR,
        'All fields are required'
      );
    }
    const users = await usersService.createUsers(email, password, fullName);
    return response.status(200).json(users);
  } catch (error) {
    return next(error);
  }
}

async function updateUsers(request, response, next) {
  try {
    const { email, password,fullName } = request.body;
    const { id } = request.params;
    if (!email || !fullName) {
      throw errorResponder(
        errorTypes.VALIDATION_ERROR,
        'All fields are required'
      );
    }
    const user = await usersService.updateUsers(id, email, password, fullName);
    return response.status(200).json(user);
  } catch (error) {
    return next(error);
  }
}

async function deleteUsers(request, response, next) {
  try {
    const { id } = request.params;
    const success = await usersService.deleteUsers(id);
    if (!success) {
      throw errorResponder(errorTypes.VALIDATION_ERROR, 'User not found');
    }
    return response.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    return next(error);
  }
}
module.exports = {
  getUsers,
  createUsers,
  updateUsers,
  deleteUsers,
};
