const deliveryRepository = require('./delivery-repository');

// FULL MENU
const MENU = [
  { name: 'Classic Beef Burger', price: 35000 },
  { name: 'Double Cheese Supreme', price: 48000 },
  { name: 'BBQ Bacon Burger', price: 42000 },
  { name: 'Crispy Chicken Burger', price: 32000 },
  { name: 'French Fries XL', price: 18000 },
  { name: 'Onion Rings', price: 20000 },
  { name: 'Chocolate Milkshake', price: 25000 },
  { name: 'Iced Lemon Tea', price: 12000 },
  { name: 'Warm Apple Pie', price: 22000 },
  { name: 'Vanilla Soft Serve', price: 10000 },
];

async function getOptions() {
  return {
    delivery: 'Restaurant Delivery',
    estimation: '30-45 menit',
    menu: MENU,
  };
}

async function calculateCost(data) {
  const { items, distance } = data;

  if (!Array.isArray(items)) {
    throw new Error('Items harus array');
  }

  let itemsTotal = 0;
  const itemsDetail = [];

  items.forEach((item) => {
    const menuItem = MENU.find((m) => m.name === item);

    if (!menuItem) {
      throw new Error(`Menu ${item} tidak tersedia`);
    }

    itemsDetail.push(menuItem);
    itemsTotal += menuItem.price;
  });

  const costPerKm = 2000;
  const deliveryCost = distance * costPerKm;
  const serviceFee = deliveryCost * 0.05;

  const total = itemsTotal + deliveryCost + serviceFee;

  return {
    items: itemsDetail,
    itemsTotal,
    distance,
    deliveryCost,
    serviceFee,
    total,
    estimation: '30-45 menit',
  };
}

async function createDelivery(data) {
  return deliveryRepository.create(data);
}

async function getDeliveries() {
  return deliveryRepository.getDeliveries();
}

async function updateStatus(id, status) {
  return deliveryRepository.updateStatus(id, status);
}

async function updateAddress(id, address) {
  return deliveryRepository.updateAddress(id, address);
}

async function deleteDelivery(id) {
  return deliveryRepository.remove(id);
}

module.exports = {
  getOptions,
  calculateCost,
  createDelivery,
  getDeliveries,
  updateStatus,
  updateAddress,
  deleteDelivery,
};
