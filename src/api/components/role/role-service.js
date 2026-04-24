const roleRepository = require('./role-repository');

async function getRole() {
  return roleRepository.getRole();
}

async function createRole(name, description, permissions) {
  return roleRepository.createRole(name, description, permissions);
}

async function updateRole(name, description, permissions) {
  return roleRepository.updateRole(name, description, permissions);
}

async function deleteRole(id) {
  return roleRepository.deleteRole(id);
}

module.exports = {
  getRole,
  createRole,
  updateRole,
  deleteRole,
};
