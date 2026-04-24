const { Role } = require('../../../models');

async function getRole() {
  return Role.find({});
}

async function createRole(name, description, permissions) {
  return Role.create({ name, description, permissions });
}

async function updateRole(name, description, permissions) {
  return Role.findOneAndUpdate(
    { name },
    { name, description, permissions },
    { new: true }
  );
}

async function deleteRole(id) {
  return Role.findOneAndDelete(id);
}

module.exports = {
  getRole,
  createRole,
  updateRole,
  deleteRole,
};
