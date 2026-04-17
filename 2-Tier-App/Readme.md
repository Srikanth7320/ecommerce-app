2 Tier Ecommerce-App built based on chatGPT for learning purpose of DevOps
ecommerce-app/
│
├── frontend/        → React app (UI)
├── backend/         → Node.js (Express API)
└── README.md

--------------------------------------------------------------------------------------------
🛒 Core Features 

User side:
View products
Add to cart
Place order

Admin side (basic):
Add product
View orders
--------------------------------------------------------------------------------------------
⚙️ Backend (Node.js + Express)
Folder structure
backend/
│
├── src/
│   ├── controllers/
│   │     productController.js
│   │     orderController.js
│   │
│   ├── routes/
│   │     productRoutes.js
│   │     orderRoutes.js
│   │
│   ├── services/
│   │     productService.js
│   │     orderService.js
│   │
│   ├── data/
│   │     products.json
│   │
│   └── app.js
│
├── package.json
--------------------------------------------------------------------------------------------
🎨 Frontend (React)
Folder structure
frontend/
│
├── src/
│   ├── components/
│   │     ProductList.js
│   │     Cart.js
│   │
│   ├── pages/
│   │     Home.js
│   │     Admin.js
│   │
│   ├── services/
│   │     api.js
│   │
│   └── App.js
--------------------------------------------------------------------------------------------
