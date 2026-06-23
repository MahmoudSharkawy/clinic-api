# 🏥 Secure Clinic Rest API

A secure Node.js & Express RESTful API designed for clinic management systems, featuring built-in user authentication and endpoint protection.

## ✨ Features
* **User Authentication:** Secure `Register` and `Login` endpoints using `JWT (JSON Web Tokens)`.
* **Password Hashing:** Automated secure password encryption via `bcryptjs` middleware before database operations.
* **Endpoint Protection:** Custom security middleware (`protect`) guarding patient endpoints against unauthorized access.
* **Environment Configuration:** Secure variables handling via `dotenv`.

## 🛠️ Tech Stack
* **Backend:** Node.js, Express.js
* **Database:** Mongoose (MongoDB ODM)
* **Security:** JSON Web Tokens (JWT), BcryptJS


