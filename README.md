# 🎮 Gacha System API Documentation 🎮

---

**Disusun Oleh:**
* **Nama:** Charly
* **NIM:** 535250039

---

Dokumentasi ini menjelaskan cara menggunakan API Gacha yang telah diimplementasikan. Server berjalan pada `http://localhost:3002`.

---

## 🎯Endpoints

### 1. Roll Gacha
Melakukan pengambilan hadiah gacha. User dibatasi maksimal melakukan **5 kali gacha**.

| Item | Detail |
|------|--------|
| **URL** | `/api/gacha/roll` |
| **Method** | `POST` |
| **Body (JSON)** | `{ "userId": "661fxxxxxxxxxxxx" }` |

* **Input (Body JSON):**
  ```json
  {
    "userId": "id_user_mongodb"
  }

---

### 2. User Gacha History
Melihat riwayat gacha yang dilakukan oleh user tertentu

| Item | Detail |
|------|--------|
| **URL** | `/api/gacha/history/:userId` |
| **Method** | `GET` |
| **Input** | `userId` pada URL path. |

---

### 3. Prize Inventory & Stock
Menampilkan daftar hadiah beserta sisa kuota yang tersedia.

| Item | Detail |
|------|--------|
| **URL** | `/api/gacha/prizes` |
| **Method** | `GET` |

### 4. Public Winners List (Masked Names)
Menampilkan daftar user(disamarkan) yang berhasil memenangkan hadiah 

| Item | Detail |
| :--- | :--- |
| **URL** | `/api/gacha/winners` |
| **Method** | `GET` |





