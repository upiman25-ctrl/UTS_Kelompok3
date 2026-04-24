const { Users } = require('../../../models');

async function getUsers() {
  return Users.find({});
}

async function createUser(email, password, fullName) {
  return Users.create({ email, password, fullName });
}

async function updateUser(id, email, fullName) {
  return Users.findByIdAndUpdate(id, { email, fullName }, { new: true });
}

async function deleteUser(id) {
  return Users.findByIdAndRemove(id);
}

module.exports = {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
};
