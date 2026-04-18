const tableRepository = require('./table-repository');

async function gettable() {
  return tableRepository.gettable();
}

async function create(id,orders,date,waiter,catatan) {
  return tableRepository.create(id,orders,date,waiter,catatan);
}

async function updatetable(id,orders,date,waiter,catatan) {
  return tableRepository.updatetable(id,orders,date,waiter,catatan);
}

async function deletetable(id) {
  return tableRepository.deletetable(id);
}


module.exports = {
  gettable,
  create,
  updatetable,
  deletetable
};
