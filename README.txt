# 📦 UTS Kelompok 3 - Backend API

## 📖 Deskripsi

Project ini merupakan backend API berbasis **Node.js (Express)** yang dibuat untuk memenuhi tugas **UTS Backend Programming**.

API ini digunakan untuk mengelola berbagai fitur dalam sistem restoran, seperti:

* Users
* Products
* Orders
* Reservations
* Deliveries
* Payments
* Tax & Discount
* dan lainnya

Database yang digunakan adalah **MongoDB Atlas** dengan ODM **Mongoose**.

---

## 🛠️ Teknologi yang Digunakan

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose
* ES Modules (import/export)
* Nodemon (development)

---

## 📂 Struktur Project

```id="tree1"
src/
 ├── api/
 │   └── components/
 │       ├── address/
 │       ├── category/
 │       ├── deliveries/
 │       ├── discount/
 │       ├── inventory/
 │       ├── Metode_pembayaran/
 │       ├── order/
 │       ├── payment/
 │       ├── product/
 │       ├── report/
 │       ├── reservation/
 │       ├── review/
 │       ├── role/
 │       ├── shift/
 │       ├── supplier/
 │       ├── table/
 │       ├── tax/
 │       └── users/
 │
 └── index.js
```

Setiap module terdiri dari:

* **controller** → handle request & response
* **service** → business logic
* **repository** → akses database
* **route** → endpoint API

---

## ⚙️ Instalasi

1. Clone repository:

```id="cmd1"
git clone <repo-url>
```

2. Masuk ke folder:

```id="cmd2"
cd UTS_Kelompok3-main
```

3. Install dependencies:

```id="cmd3"
npm install
```

---

## 🔌 Konfigurasi Environment

Buat file `.env`:

```id="env1"
PORT=5000
MONGO_URI=your_mongodb_atlas_connection
```

---

## ▶️ Menjalankan Server

```id="run1"
npm run dev
```

Jika berhasil:

```id="out1"
Server runs at port 5000 in development environment
```

---

## 🌐 Base URL

```id="url1"
http://localhost:5000/api
```

---

## 📌 Contoh Endpoint

### 👤 Users

* GET `/api/users`
* POST `/api/users`
* PUT `/api/users/:id`
* DELETE `/api/users/:id`

---

### 🍔 Products

* GET `/api/products`
* POST `/api/products`

---

### 📦 Orders

* POST `/api/order`
* DELETE `/api/order/:id`

---

### 🪑 Reservation

* GET `/api/reservation`
* PUT `/api/reservation/:id`

---

### 🚚 Delivery

* GET `/api/delivery`
* POST `/api/delivery`

---

### 💳 Payment

* POST `/api/payment`

---

## 🧪 Testing API

Gunakan:

* Postman
* EchoAPI
* Thunder Client

---

## ⚠️ Catatan Penting

### 🔹 1. Gunakan ObjectId

Field relasi (contoh: `table`, `user`, dll) harus pakai:

```id="oid1"
"661f8c9b2f1a2c0012345678"
```

Bukan angka:

```id="oid2"
9 ❌
```

---

### 🔹 2. Import wajib pakai `.js`

```id="imp1"
import userService from './user-service.js';
```

---

### 🔹 3. DELETE pakai params

```id="del1"
DELETE /api/order/:id
```

---

## ❌ Error yang Sering Terjadi

### ECONNREFUSED

➡️ Server belum jalan

---

### ERR_MODULE_NOT_FOUND

➡️ Import tidak pakai `.js` / path salah

---

### is not a function

➡️ Nama function tidak sesuai antara service & controller

---

### Cast to ObjectId failed

➡️ Data yang dikirim bukan ObjectId

---

### 422 Unprocessable Entity

➡️ Data valid tapi tidak sesuai logic backend

---

## 👨‍💻 Author

Kelompok 3 - UTS Backend Programming

---

## 📌 Notes

Project ini menggunakan arsitektur modular (Controller - Service - Repository) untuk mempermudah pengembangan dan maintenance.

---
