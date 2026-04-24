const { order } = require('../../../models').default;

async function getorder() {
  return order.find({});
}

async function create(id, orders, date, waiter, catatan) {
  return order.create({ id, orders, date, waiter, catatan });
}
async function updateorder(id, orders, date, waiter, catatan) {
  return order.findOneAndUpdate(
    { id },
    { orders, date, waiter, catatan },
    { new: true }
  );
}
async function deleteorder(id) {
  return order.findOneAndDelete({ id });
}
module.exports = {
  getorder,
  create,
  updateorder,
  deleteorder,
};
