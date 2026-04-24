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

async function createUser(request, response, next) {
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

async function updateUser(request, response, next) {
  try {
    const { email, fullName } = request.body;
    const { id } = request.params;
    if (!email || !fullName) {
      throw errorResponder(
        errorTypes.VALIDATION_ERROR,
        'All fields are required'
      );
    }
    const user = await usersService.updateUser(id, email, fullName);
    return response.status(200).json(user);
  } catch (error) {
    return next(error);
  }
}

async function deleteUser(request, response, next) {
  try {
    const { id } = request.params;
    const success = await usersService.deleteUser(id);
    if (!success) {
      throw errorResponder(errorTypes.VALIDATION_ERROR, 'User not found');
    }
    return response.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    return next(error);
  }
}

// Tambahan fungsi cadangan supaya route tidak error
async function getUser(request, response, next) {
  try {
    // Logika menyusul atau bisa panggil service jika sudah ada
    return response.status(200).json({ message: 'Detail user method' });
  } catch (error) {
    return next(error);
  }
}

async function changePassword(request, response, next) {
  try {
    return response.status(200).json({ message: 'Change password method' });
  } catch (error) {
    return next(error);
  }
}

module.exports = {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
  getUser, // <--- Sekarang sudah terdaftar
  changePassword, // <--- Sekarang sudah terdaftar
};
