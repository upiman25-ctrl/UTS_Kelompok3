const { User } = require('../../../models');

async function getUsers() {
  return User.find({});
}

async function createUser(email, password, fullName, Id) {
  return User.create({ email, password, fullName, Id });
}

async function updateUser( email, fullName,role,isActive ) {
  return User.findOneAndUpdate(
    { email },
    { email, fullName,role,isActive },
    { new: true }
  );
}

async function deleteUser(email) {
  return User.findOneAndDelete({ email });
}


async function getUserByEmail(email) {
  return User.findOne({ email });
} 

module.exports = {
  getUsers,
  createUser,
  updateUser,
  deleteUser,getUserByEmail
};
