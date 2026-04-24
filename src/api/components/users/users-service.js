const usersRepository = require('./users-repository');

async function getUsers() {
  return usersRepository.getUsers();
}

async function getUsers(id) {
  return usersRepository.getUsers(id);
}

async function emailExists(email) {
  const users = await usersRepository.getUsersByEmail(email);
  return !!users;
}

async function createUsers(email, password, fullName) {
  return usersRepository.createUser(email, password, fullName);
}

async function updateUsers(id, email, password, fullName) {
  return usersRepository.updateUsers(id, email, password, fullName);
}

async function deleteUsers(id) {
  return usersRepository.deleteUsers(id);
}

module.exports = {
  getUsers,
  emailExists,
  createUsers,
  updateUsers,
  deleteUsers,
};
