const { order } = require('../../../models');

async function getorder() {
  return order.find({});
}

async function create(orders,date,waiter,catatan) {
  return order.create({  orders, date, waiter, catatan });
}
async function updateorder(id,orders,date,waiter,catatan) {
  return order.findOneAndUpdate(
    { _id : id },
    { orders, date, waiter, catatan },
    { new: true }
  );
}
async function deleteorder(id) {
  return order.findOneAndDelete({ _id :id });
}
module.exports = {
  getorder,
  create,
  updateorder,
  deleteorder
};

