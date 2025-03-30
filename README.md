# 🛒 Grocery Booking API

## 📌 Project Overview
This is a **Grocery Booking API** built using **TypeScript with Node.js** and **MySQL**. The system allows users to view grocery items and place orders, while administrators manage grocery items and inventory.

---

## 🚀 Features
### **👤 User Role**
✅ View available grocery items.  
✅ Place an order with multiple items.  

### **🔧 Admin Role**
✅ Add new grocery items.  
✅ View and manage inventory.  
✅ Update or delete items.  

---

## 🛠️ Technologies Used
- **Backend**: Node.js (TypeScript, Express.js)
- **Database**: MySQL
- **Containerization**: Docker

---

## ⚙️ Project Setup
### **📌 Prerequisites**
- Install **Node.js** (>=18.x)
- Install **Docker** (if using containerized setup)
- Install **MySQL** (if running outside Docker)

### **📥 Clone the Repository**
```sh
git clone https://github.com/Prashant2149/qp-assessment.git
cd qp-assessment
```

### **📦 Install Dependencies**
```sh
npm install
```

### **📃 Environment Variables (.env)**
Create a `.env` file in the root directory:
```env
PORT=3000
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=root
DB_NAME=grocery_db
```

### **🐬 Start MySQL Database**
If using **Docker**, run:
```sh
docker run --name mysql-container -e MYSQL_ROOT_PASSWORD=root -e MYSQL_DATABASE=grocery_db -p 3306:3306 -d mysql:latest
```

### **📌 Run Database Migrations**
```sh
npm run migrate
```

### **▶️ Start the Application**
```sh
npm run dev
```

---

## 📡 API Endpoints
### **👤 User Routes**
| Method | Endpoint       | Description  |
|--------|---------------|--------------|
| **GET**    | `/items`      | View items   |
| **POST**   | `/orders`     | Place order  |

### **🔧 Admin Routes**
| Method | Endpoint         | Description      |
|--------|-----------------|------------------|
| **POST**   | `/admin/items`  | Add grocery item |
| **PUT**    | `/admin/items/:id` | Update item |
| **DELETE** | `/admin/items/:id` | Delete item |

---

## 📦 Running in Docker
```sh
docker-compose up --build
```

---

## 🧪 Testing
Run unit tests using:
```sh
npm run test
```

---

## 🤝 Contributing
1. **Fork** the repository  
2. **Create** a feature branch  
3. **Commit** your changes  
4. **Push** and open a **Pull Request**  

---

## 📜 License
This project is licensed under the **MIT License**.

