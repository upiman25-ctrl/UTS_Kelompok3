# UTS Backend - Kelompok 3

REST API documentation for the UTS Backend project.

**Base URL:** `http://localhost:5000/api`

---

## Table of Contents

- [Users](#users)
- [Address](#address)
- [Category](#category)
- [Delivery](#delivery)
- [Discount](#discount)
- [Inventory](#inventory)
- [Metode Pembayaran](#metode-pembayaran)
- [Notification](#notification)
- [Order](#order)
- [Payment](#payment)
- [Product](#product)
- [Report](#report)
- [Reservation](#reservation)
- [Review](#review)
- [Shift](#shift)
- [Supplier](#supplier)
- [Table](#table)
- [Tax](#tax)

---

## Users

Base path: `/api/users`

### GET /api/users
Get all users.

**Response:**
```json
[
  {
    "_id": "...",
    "email": "user@example.com",
    "fullName": "John Doe"
  }
]
```

---

### GET /api/users/:id
Get a user by ID.

**URL Params:**
| Param | Type   | Required | Description |
|-------|--------|----------|-------------|
| id    | string | Yes      | User ID     |

---

### POST /api/users
Create a new user.

**Request Body:**
```json
{
  "email": "user@example.com",
  "password": "yourpassword",
  "fullName": "John Doe"
}
```

| Field    | Type   | Required |
|----------|--------|----------|
| email    | string | Yes      |
| password | string | Yes      |
| fullName | string | Yes      |

---

### PUT /api/users/:id
Update a user.

**URL Params:**
| Param | Type   | Required | Description |
|-------|--------|----------|-------------|
| id    | string | Yes      | User ID     |

**Request Body:**
```json
{
  "email": "newemail@example.com",
  "fullName": "New Name"
}
```

| Field    | Type   | Required |
|----------|--------|----------|
| email    | string | Yes      |
| fullName | string | Yes      |

---

### PUT /api/users/:id/change-password
Change a user's password.

**URL Params:**
| Param | Type   | Required | Description |
|-------|--------|----------|-------------|
| id    | string | Yes      | User ID     |

---

### DELETE /api/users/:id
Delete a user.

**URL Params:**
| Param | Type   | Required | Description |
|-------|--------|----------|-------------|
| id    | string | Yes      | User ID     |

---

## Address

Base path: `/api/address`

### GET /api/address
Get all addresses.

**Response:**
```json
[
  {
    "_id": "...",
    "name": "Home",
    "address": "Jl. Sudirman No. 1",
    "city": "Jakarta",
    "postalCode": "12345"
  }
]
```

---

### POST /api/address
Create a new address.

**Request Body:**
```json
{
  "name": "Home",
  "address": "Jl. Sudirman No. 1",
  "city": "Jakarta",
  "postalCode": "12345"
}
```

| Field      | Type   | Required |
|------------|--------|----------|
| name       | string | Yes      |
| address    | string | Yes      |
| city       | string | Yes      |
| postalCode | string | Yes      |

---

### PUT /api/address/:id
Update an address.

**URL Params:**
| Param | Type   | Required | Description |
|-------|--------|----------|-------------|
| id    | string | Yes      | Address ID  |

**Request Body:**
```json
{
  "name": "Office",
  "address": "Jl. Thamrin No. 2",
  "city": "Jakarta",
  "postalCode": "10230"
}
```

---

### DELETE /api/address/:id
Delete an address.

**URL Params:**
| Param | Type   | Required | Description |
|-------|--------|----------|-------------|
| id    | string | Yes      | Address ID  |

---

## Category

Base path: `/api/categories`

### GET /api/categories
Get all categories.

---

### GET /api/categories/:id
Get a category by ID.

**URL Params:**
| Param | Type   | Required | Description |
|-------|--------|----------|-------------|
| id    | string | Yes      | Category ID |

---

### POST /api/categories
Create a new category.

**Request Body:**
```json
{
  "name": "Food",
  "description": "All food items",
  "isActive": true
}
```

| Field       | Type    | Required |
|-------------|---------|----------|
| name        | string  | Yes      |
| description | string  | Yes      |
| isActive    | boolean | Yes      |

---

### PUT /api/categories/:id
Update a category.

**URL Params:**
| Param | Type   | Required | Description |
|-------|--------|----------|-------------|
| id    | string | Yes      | Category ID |

**Request Body:**
```json
{
  "name": "Beverages",
  "description": "All drink items",
  "isActive": true
}
```

---

### DELETE /api/categories/:id
Delete a category.

**URL Params:**
| Param | Type   | Required | Description |
|-------|--------|----------|-------------|
| id    | string | Yes      | Category ID |

---

## Delivery

Base path: `/api/delivery`

### GET /api/delivery/options
Get available delivery options.

---

### POST /api/delivery/calculate
Calculate delivery cost.

**Request Body:**
```json
{
  "items": [{ "name": "Product A", "qty": 2 }],
  "distance": 10
}
```

| Field    | Type   | Required |
|----------|--------|----------|
| items    | array  | Yes      |
| distance | number | Yes      |

---

### GET /api/delivery
Get all deliveries.

---

### POST /api/delivery
Create a new delivery.

**Request Body:**
```json
{
  "userId": "user123",
  "customerName": "John Doe",
  "driverName": "Driver A",
  "itemName": "Pizza",
  "address": "Jl. Merdeka No. 5"
}
```

| Field        | Type   | Required |
|--------------|--------|----------|
| userId       | string | Yes      |
| customerName | string | Yes      |
| driverName   | string | Yes      |
| itemName     | string | Yes      |
| address      | string | Yes      |

---

### PUT /api/delivery/status/:id
Update delivery status.

**URL Params:**
| Param | Type   | Required | Description |
|-------|--------|----------|-------------|
| id    | string | Yes      | Delivery ID |

**Request Body:**
```json
{
  "status": "delivered"
}
```

---

### PUT /api/delivery/address/:id
Update delivery address.

**URL Params:**
| Param | Type   | Required | Description |
|-------|--------|----------|-------------|
| id    | string | Yes      | Delivery ID |

**Request Body:**
```json
{
  "address": "Jl. Baru No. 10"
}
```

---

### DELETE /api/delivery/:id
Delete a delivery.

**URL Params:**
| Param | Type   | Required | Description |
|-------|--------|----------|-------------|
| id    | string | Yes      | Delivery ID |

---

## Discount

Base path: `/api/discounts`

### GET /api/discounts
Get all discounts.

---

### GET /api/discounts/:id
Get a discount by ID.

**URL Params:**
| Param | Type   | Required | Description |
|-------|--------|----------|-------------|
| id    | string | Yes      | Discount ID |

---

### POST /api/discounts
Create a new discount.

**Request Body:**
```json
{
  "title": "Promo Lebaran",
  "discountCode": "LEBARAN10",
  "amount": 10,
  "expiredAt": "2026-12-31"
}
```

| Field        | Type   | Required |
|--------------|--------|----------|
| title        | string | Yes      |
| discountCode | string | Yes      |
| amount       | number | Yes      |
| expiredAt    | string | Yes      |

---

### PUT /api/discounts/:id
Update a discount.

**URL Params:**
| Param | Type   | Required | Description |
|-------|--------|----------|-------------|
| id    | string | Yes      | Discount ID |

**Request Body:**
```json
{
  "title": "Promo Hari Merdeka",
  "discountCode": "MERDEKA17",
  "amount": 17,
  "expiredAt": "2026-08-17"
}
```

---

### DELETE /api/discounts/:id
Delete a discount.

**URL Params:**
| Param | Type   | Required | Description |
|-------|--------|----------|-------------|
| id    | string | Yes      | Discount ID |

---

## Inventory

Base path: `/api/inventory`

### GET /api/inventory
Get all inventory items.

---

### GET /api/inventory/:id
Get an inventory item by ID.

**URL Params:**
| Param | Type   | Required | Description  |
|-------|--------|----------|--------------|
| id    | string | Yes      | Inventory ID |

---

### POST /api/inventory
Create a new inventory item.

**Request Body:**
```json
{
  "name": "Flour",
  "count": 50,
  "types": "kg",
  "expiredAt": "2027-01-01"
}
```

| Field     | Type   | Required |
|-----------|--------|----------|
| name      | string | Yes      |
| count     | number | Yes      |
| types     | string | Yes      |
| expiredAt | string | Yes      |

---

### PUT /api/inventory
Update an inventory item.

**Request Body:**
```json
{
  "name": "Flour",
  "count": 30,
  "types": "kg",
  "expiredAt": "2027-06-01"
}
```

---

### DELETE /api/inventory
Delete an inventory item.

**Request Body:**
```json
{
  "name": "Flour"
}
```

---

## Metode Pembayaran

Base path: `/api/Metode-pembayaran`

### GET /api/Metode-pembayaran
Get all payment methods.

---

### GET /api/Metode-pembayaran/:id
Get a payment method by ID.

**URL Params:**
| Param | Type   | Required | Description       |
|-------|--------|----------|-------------------|
| id    | string | Yes      | Payment Method ID |

---

### POST /api/Metode-pembayaran
Create a new payment method.

**Request Body:**
```json
{
  "name": "Transfer Bank",
  "description": "Pembayaran via transfer bank",
  "isActive": true
}
```

| Field       | Type    | Required |
|-------------|---------|----------|
| name        | string  | Yes      |
| description | string  | Yes      |
| isActive    | boolean | Yes      |

---

### PUT /api/Metode-pembayaran/:id
Update a payment method.

**URL Params:**
| Param | Type   | Required | Description       |
|-------|--------|----------|-------------------|
| id    | string | Yes      | Payment Method ID |

**Request Body:**
```json
{
  "name": "QRIS",
  "description": "Pembayaran via QRIS",
  "isActive": true
}
```

---

### DELETE /api/Metode-pembayaran/:id
Delete a payment method.

**URL Params:**
| Param | Type   | Required | Description       |
|-------|--------|----------|-------------------|
| id    | string | Yes      | Payment Method ID |

---

## Notification

Base path: `/api/notification`

### GET /api/notification
Get all notifications.

---

### POST /api/notification
Create a new notification.

**Request Body:**
```json
{
  "type": "order",
  "message": "Your order has been confirmed"
}
```

| Field   | Type   | Required |
|---------|--------|----------|
| type    | string | Yes      |
| message | string | Yes      |

---

### PUT /api/notification/:id
Mark a notification as read.

**URL Params:**
| Param | Type   | Required | Description     |
|-------|--------|----------|-----------------|
| id    | string | Yes      | Notification ID |

---

### DELETE /api/notification/:id
Delete a notification.

**URL Params:**
| Param | Type   | Required | Description     |
|-------|--------|----------|-----------------|
| id    | string | Yes      | Notification ID |

---

## Order

Base path: `/api/order`

### GET /api/order
Get all orders.

---

### POST /api/order
Create a new order.

**Request Body:**
```json
{
  "id": "order001",
  "orders": [{ "product": "Nasi Goreng", "qty": 2 }],
  "date": "2026-04-24",
  "waiter": "Budi",
  "catatan": "Tidak pedas"
}
```

| Field   | Type   | Required |
|---------|--------|----------|
| id      | string | Yes      |
| orders  | array  | Yes      |
| date    | string | Yes      |
| waiter  | string | Yes      |
| catatan | string | Yes      |

---

### PUT /api/order
Update an order.

**Request Body:**
```json
{
  "id": "order001",
  "orders": [{ "product": "Mie Goreng", "qty": 1 }],
  "date": "2026-04-24",
  "waiter": "Sari",
  "catatan": "Extra pedas"
}
```

---

### DELETE /api/order
Delete an order.

**Request Body:**
```json
{
  "id": "order001"
}
```

---

## Payment

Base path: `/api/payment`

### GET /api/payment
Get all payment records.

---

### GET /api/payment/:id
Get a payment record by ID.

**URL Params:**
| Param | Type   | Required | Description |
|-------|--------|----------|-------------|
| id    | string | Yes      | Payment ID  |

---

### POST /api/payment
Create a new payment record.

**Request Body:**
```json
{
  "method": "Credit Card",
  "discount": 5,
  "amount": 150000,
  "status": "paid",
  "paidAt": "2026-04-24"
}
```

| Field    | Type   | Required |
|----------|--------|----------|
| method   | string | Yes      |
| amount   | number | Yes      |
| discount | number | No       |
| status   | string | No       |
| paidAt   | string | No       |

---

### PUT /api/payment/:id
Update a payment record.

**URL Params:**
| Param | Type   | Required | Description |
|-------|--------|----------|-------------|
| id    | string | Yes      | Payment ID  |

**Request Body:**
```json
{
  "method": "Cash",
  "discount": 0,
  "amount": 200000,
  "status": "paid",
  "paidAt": "2026-04-25"
}
```

---

### DELETE /api/payment/:id
Delete a payment record.

**URL Params:**
| Param | Type   | Required | Description |
|-------|--------|----------|-------------|
| id    | string | Yes      | Payment ID  |

---

## Product

Base path: `/api/products`

### GET /api/products
Get all products.

---

### GET /api/products/:id
Get a product by ID.

**URL Params:**
| Param | Type   | Required | Description |
|-------|--------|----------|-------------|
| id    | string | Yes      | Product ID  |

---

### POST /api/products
Create a new product.

**Request Body:**
```json
{
  "name": "Nasi Goreng",
  "description": "Nasi goreng spesial",
  "price": 25000,
  "stock": 100,
  "category": "Food"
}
```

| Field       | Type   | Required |
|-------------|--------|----------|
| name        | string | Yes      |
| description | string | Yes      |
| price       | number | Yes      |
| stock       | number | Yes      |
| category    | string | Yes      |

---

### PUT /api/products/:id
Update a product.

**URL Params:**
| Param | Type   | Required | Description |
|-------|--------|----------|-------------|
| id    | string | Yes      | Product ID  |

**Request Body:**
```json
{
  "name": "Mie Goreng",
  "description": "Mie goreng spesial",
  "price": 20000,
  "stock": 80,
  "category": "Food"
}
```

---

### DELETE /api/products/:id
Delete a product.

**URL Params:**
| Param | Type   | Required | Description |
|-------|--------|----------|-------------|
| id    | string | Yes      | Product ID  |

---

## Report

Base path: `/api/reports`

### GET /api/reports
Get all reports.

---

### GET /api/reports/:id
Get a report by ID.

**URL Params:**
| Param | Type   | Required | Description |
|-------|--------|----------|-------------|
| id    | string | Yes      | Report ID   |

---

### POST /api/reports
Create a new report.

**Request Body:**
```json
{
  "reportId": "RPT001",
  "title": "Laporan Harian",
  "total": 5000000,
  "date": "2026-04-24"
}
```

| Field    | Type   | Required |
|----------|--------|----------|
| reportId | string | Yes      |
| title    | string | Yes      |
| total    | number | Yes      |
| date     | string | Yes      |

---

### PUT /api/reports
Update a report.

**Request Body:**
```json
{
  "reportId": "RPT001",
  "title": "Laporan Harian Update",
  "total": 6000000,
  "date": "2026-04-25"
}
```

---

### DELETE /api/reports
Delete a report.

**Request Body:**
```json
{
  "reportId": "RPT001"
}
```

---

## Reservation

Base path: `/api/reservation`

### GET /api/reservation
Get all reservations.

---

### POST /api/reservation
Create a new reservation.

**Request Body:**
```json
{
  "id": "res001",
  "table": "T01",
  "date": "2026-04-24"
}
```

| Field | Type   | Required |
|-------|--------|----------|
| id    | string | Yes      |
| table | string | Yes      |
| date  | string | Yes      |

---

### PUT /api/reservation/:id
Update a reservation.

**URL Params:**
| Param | Type   | Required | Description    |
|-------|--------|----------|----------------|
| id    | string | Yes      | Reservation ID |

**Request Body:**
```json
{
  "table": "T02",
  "date": "2026-04-25"
}
```

---

### DELETE /api/reservation/:id
Delete a reservation.

**URL Params:**
| Param | Type   | Required | Description    |
|-------|--------|----------|----------------|
| id    | string | Yes      | Reservation ID |

---

## Review

Base path: `/api/reviews`

### GET /api/reviews
Get all reviews.

---

### POST /api/reviews
Create a new review.

**Request Body:**
```json
{
  "rating": 5,
  "comment": "Makanannya enak banget!"
}
```

| Field   | Type   | Required |
|---------|--------|----------|
| rating  | number | Yes      |
| comment | string | Yes      |

---

### PUT /api/reviews/:id
Update a review.

**URL Params:**
| Param | Type   | Required | Description |
|-------|--------|----------|-------------|
| id    | string | Yes      | Review ID   |

**Request Body:**
```json
{
  "rating": 4,
  "comment": "Lumayan enak"
}
```

---

### DELETE /api/reviews/:id
Delete a review.

**URL Params:**
| Param | Type   | Required | Description |
|-------|--------|----------|-------------|
| id    | string | Yes      | Review ID   |

---

## Shift

Base path: `/api/shift`

### GET /api/shift
Get all shifts.

---

### GET /api/shift/:id
Get a shift by ID.

**URL Params:**
| Param | Type   | Required | Description |
|-------|--------|----------|-------------|
| id    | string | Yes      | Shift ID    |

---

### POST /api/shift
Create a new shift.

**Request Body:**
```json
{
  "shiftId": "SHF001",
  "employeeName": "Budi Santoso",
  "date": "2026-04-24",
  "startTime": "08:00",
  "endTime": "16:00"
}
```

| Field        | Type   | Required |
|--------------|--------|----------|
| shiftId      | string | Yes      |
| employeeName | string | Yes      |
| date         | string | Yes      |
| startTime    | string | Yes      |
| endTime      | string | Yes      |

---

### PUT /api/shift
Update a shift.

**Request Body:**
```json
{
  "shiftId": "SHF001",
  "employeeName": "Budi Santoso",
  "date": "2026-04-24",
  "startTime": "09:00",
  "endTime": "17:00"
}
```

---

### DELETE /api/shift
Delete a shift.

**Request Body:**
```json
{
  "shiftId": "SHF001"
}
```

---

## Supplier

Base path: `/api/supplier`

### GET /api/supplier
Get all suppliers.

---

### POST /api/supplier
Create a new supplier.

**Request Body:**
```json
{
  "supplierId": "SUP001",
  "name": "PT. Sembako Jaya",
  "contact": "081234567890"
}
```

| Field      | Type   | Required |
|------------|--------|----------|
| supplierId | string | Yes      |
| name       | string | Yes      |
| contact    | string | Yes      |

---

### PUT /api/supplier
Update a supplier.

**Request Body:**
```json
{
  "supplierId": "SUP001",
  "name": "PT. Bahan Baku Utama",
  "contact": "089876543210"
}
```

---

### DELETE /api/supplier
Delete a supplier.

**Request Body:**
```json
{
  "name": "PT. Sembako Jaya"
}
```

---

## Table

Base path: `/api/table`

### GET /api/table
Get all tables.

---

### POST /api/table
Create a new table.

**Request Body:**
```json
{
  "id": "T01",
  "orders": [{ "product": "Es Teh", "qty": 2 }],
  "date": "2026-04-24",
  "waiter": "Rina",
  "catatan": "Dekat jendela"
}
```

| Field   | Type   | Required |
|---------|--------|----------|
| id      | string | Yes      |
| orders  | array  | Yes      |
| date    | string | Yes      |
| waiter  | string | Yes      |
| catatan | string | Yes      |

---

### PUT /api/table/:id
Update a table.

**URL Params:**
| Param | Type   | Required | Description |
|-------|--------|----------|-------------|
| id    | string | Yes      | Table ID    |

**Request Body:**
```json
{
  "orders": [{ "product": "Jus Jeruk", "qty": 1 }],
  "date": "2026-04-24",
  "waiter": "Dewi",
  "catatan": "Tidak ada"
}
```

---

### DELETE /api/table/:id
Delete a table.

**URL Params:**
| Param | Type   | Required | Description |
|-------|--------|----------|-------------|
| id    | string | Yes      | Table ID    |

---

## Tax

Base path: `/api/taxes`

### GET /api/taxes
Get all taxes.

---

### GET /api/taxes/:id
Get a tax by ID.

**URL Params:**
| Param | Type   | Required | Description |
|-------|--------|----------|-------------|
| id    | string | Yes      | Tax ID      |

---

### POST /api/taxes
Create a new tax.

**Request Body:**
```json
{
  "name": "PPN",
  "rate": 11,
  "isActive": true
}
```

| Field    | Type    | Required |
|----------|---------|----------|
| name     | string  | Yes      |
| rate     | number  | Yes      |
| isActive | boolean | Yes      |

---

### PUT /api/taxes/:id
Update a tax.

**URL Params:**
| Param | Type   | Required | Description |
|-------|--------|----------|-------------|
| id    | string | Yes      | Tax ID      |

**Request Body:**
```json
{
  "name": "PPN",
  "rate": 12,
  "isActive": true
}
```

---

### DELETE /api/taxes/:id
Delete a tax.

**URL Params:**
| Param | Type   | Required | Description |
|-------|--------|----------|-------------|
| id    | string | Yes      | Tax ID      |
