const userRepository = require('./users-repository'); // Sesuaikan path-nya ya
const { errorResponder, errorTypes } = require('../../../core/errors');

async function getUsers(request, response, next) {
  try {
    const users = await userRepository.getUsers();

    return response.status(200).json(users);
  } catch (error) {
    return next(error);
  }
}

async function getUserById(request, response, next) {
  try {
    const user = await userRepository.getUser(request.params.id);

    if (!user) {
      throw errorResponder(errorTypes.VALIDATION_ERROR, 'User not found');
    }

    return response.status(200).json(user);
  } catch (error) {
    return next(error);
  }
}

async function createUser(request, response, next) {
  try {
    const { email, password, fullName, Id } = request.body;

    if (!email || !password || !fullName || !Id) {
      throw errorResponder(
        errorTypes.VALIDATION_ERROR,
        'All fields are required'
      );
    }

    const user = await userRepository.createUser(email, password, fullName, Id);

    return response.status(200).json(user);
  } catch (error) {
    return next(error);
  }
}

async function updateUser(request, response, next) {
  try {
    const { email, fullName, role, isActive } = request.body;

    if (!email || !fullName || !role || !isActive) {
      throw errorResponder(
        errorTypes.VALIDATION_ERROR,
        'All fields are required'
      );
    }

    const user = await userRepository.updateUser(
      email,
      fullName,
      role,
      isActive
    );

    return response.status(200).json(user);
  } catch (error) {
    return next(error);
  }
}

async function deleteUser(request, response, next) {
  try {
    const result = await userRepository.deleteUser(request.body.email);

    if (!result || result.deletedCount === 0) {
      throw errorResponder(errorTypes.VALIDATION_ERROR, 'User not found');
    }

    return response.status(200).json({ message: 'User successfully deleted' });
  } catch (error) {
    return next(error);
  }
}

async function getUserDetail(request, response, next) {
  try {
    const user = await userRepository.getUser(request.params.id);

    if (!user) {
      throw errorResponder(errorTypes.VALIDATION_ERROR, 'User not found');
    }

    return response.status(200).json(user);
  } catch (error) {
    return next(error);
  }
}

module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  getUserDetail,
};
