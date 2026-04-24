import {
  create,
  getDeliveries as _getDeliveries,
  updateStatus as _updateStatus,
  updateAddress as _updateAddress,
  remove,
} from './delivery-repository.js';
import * as productService from '../product/product-service.js';

async function getOptions() {
  return {
    delivery: 'Restaurant Delivery',
    estimation: '30-45 menit',
    menu: await productService.getProductsDelivery(),
  };
}

async function calculateCost(data) {
  const { items, distance } = data;
  const MENU = await productService.getProductsDelivery();

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
  return create(data);
}

async function getDeliveries() {
  return _getDeliveries();
}

async function updateStatus(id, status) {
  return _updateStatus(id, status);
}

async function updateAddress(id, address) {
  return _updateAddress(id, address);
}

async function deleteDelivery(id) {
  return remove(id);
}

export default {
  getOptions,
  calculateCost,
  createDelivery,
  getDeliveries,
  updateStatus,
  updateAddress,
  deleteDelivery,
};
