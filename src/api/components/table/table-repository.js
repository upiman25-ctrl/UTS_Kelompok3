const { table } = require('../../../models').default;

async function gettable() {
  return table.find({});
}

async function create(id, orders, date, waiter, catatan) {
  return table.create({ id, orders, date, waiter, catatan });
}
async function updatetable(id, orders, date, waiter, catatan) {
  return table.findByIdAndUpdate(
    id,
    { orders, date, waiter, catatan },
    { new: true }
  );
}
async function deletetable(id) {
  return table.findByIdAndDelete(id);
}
module.exports = {
  gettable,
  create,
  updatetable,
  deletetable,
};
