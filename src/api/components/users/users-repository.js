const { Users } = require('../../../models');

async function getUsers() {
  return Users.find({});
}

async function createUser(email, password, fullName) {
  return Users.create({ email, password, fullName });
}

async function updateUsers(id, email, password, fullName) {
  return Users.findByIdAndUpdate(id, { email, password, fullName }, { new: true });
}

async function deleteUsers(id) {
  return Users.deleteOne({ _id: id });
}

module.exports = {
  getUsers,
  createUser,
  updateUsers,
  deleteUsers,
};
