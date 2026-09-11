<div align="center">

# 🏥 PharmaCare — Medical Store Management System

### *Next-Generation Cloud-Native Pharmacy & Inventory Management Platform*

[![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-3.2.7-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Node.js](https://img.shields.io/badge/Node.js-Express_4-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![MongoDB Atlas](https://img.shields.io/badge/MongoDB-Atlas_Cloud-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/atlas)
[![Vercel Deployed](https://img.shields.io/badge/Vercel-Cloud_Serverless-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)
[![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)](LICENSE)

<br/>

**[🌐 Live Frontend Application](https://medical-store-git-main-arkos-projects-f0a0594a.vercel.app)** &nbsp;•&nbsp; **[⚡ Live Backend API](https://medicalstore-backend-ashen.vercel.app/)** &nbsp;•&nbsp; **[📦 GitHub Repository](https://github.com/Arko-009/medical-store-management)**

</div>

---

## 📑 Table of Contents
- [Executive Overview](#-executive-overview)
- [Real-World Use Cases](#-real-world-use-cases)
- [Key Features & Visual Showcase](#-key-features--visual-showcase)
- [System Architecture & Repository Structure](#-system-architecture--repository-structure)
- [Technology Stack](#-technology-stack)
- [Installation & Quick Start](#-installation--quick-start)
- [Environment Configuration](#-environment-configuration)
- [Future Roadmap & Improvements](#-future-roadmap--improvements)
- [Author & License](#-author--license)

---

## 💡 Executive Overview

### What is this Project?
**PharmaCare** is an enterprise-ready, full-stack **Medical Store & Pharmacy Management System** built to replace antiquated, manual pen-and-paper or disconnected spreadsheet workflows with a unified, high-performance web platform.

Engineered with **React 18**, **Tailwind CSS**, and **Express on Node.js**, backed by a cloud-hosted **MongoDB Atlas** cluster, PharmaCare provides end-to-end operational visibility: from procurement intake and multi-branch inventory tracking to counter sales and real-time revenue analytics.

### Why was it built?
Independent pharmacies, retail medical stores, and healthcare chains face daily challenges:
- **Stock Mismatches & Human Error:** Over-selling out-of-stock medications or misplacing inventory counts.
- **Disconnected Multi-Branch Operations:** Inability to track stock and sales across multiple store branches simultaneously.
- **Lack of Financial Clarity:** Difficulty calculating net profit margins, distinguishing procurement expenses from gross counter revenue.
- **Slow Checkout Processes:** Delays in locating drug manufacturers, units, and inventory balances during customer transactions.

PharmaCare resolves these issues through automated, bidirectional stock synchronization: purchasing medications automatically increments stock in real time, while registering a counter sale automatically validates and decrements available inventory.

---

## 🎯 Real-World Use Cases

| Persona / Context | Operational Workflow | Solution Delivered by PharmaCare |
| :--- | :--- | :--- |
| **Retail Pharmacist** | Daily customer prescriptions, sales registration, price computation. | Point-of-sale counter interface with instant inventory deduction and live price calculation. |
| **Store & Inventory Manager** | Vendor drug intake, supply procurement, restocking low-inventory drugs. | Purchase intake module with automated stock updates and cost logging. |
| **Multi-Store Owner** | Managing multiple pharmacy branches across different districts/cities. | Multi-store registry allowing distinct stores to operate under a centralized owner account. |
| **Executive / Accountant** | Monthly financial audits, gross sales vs. procurement costs, supplier breakdowns. | Interactive visual dashboard with ApexCharts revenue trends and manufacturer distribution charts. |

---

## ✨ Key Features & Visual Showcase

### 1. 📊 Intelligent Financial & Analytics Dashboard
- High-contrast KPI metric cards for **Total Sales (Revenue)**, **Purchases (Procurement)**, **Registered Medicines (Catalog)**, and **Active Stores (Outlets)**.
- **Monthly Revenue Progression Bar Chart** powered by ApexCharts, tracking fiscal trajectory month over month.
- **Manufacturer Stock Distribution Donut Chart** powered by Chart.js, dynamically visualizing stock weight by drug brand and manufacturer.
- Zero-clutter, modern SaaS proportions with live synchronization status indicators.

<div align="center">

<!-- SCREENSHOT 1: DASHBOARD OVERVIEW -->
<p align="center">
  <img src="https://via.placeholder.com/1200x630/1e293b/ffffff?text=+Preview%3A+PharmaCare+Analytics+Dashboard" alt="PharmaCare Dashboard Overview" width="92%" style="border-radius: 12px; box-shadow: 0 10px 30px rgba(0,0,0,0.15);" />
  <br/>
  <em>Figure 1: Real-time Analytics Dashboard with financial KPI metrics, monthly revenue trends, and dynamic supplier distribution.</em>
</p>

</div>

<br/>

---

### 2. 💊 Real-Time Medicine & Inventory Catalog
- Live stock table displaying medicine names, manufacturers, live on-shelf quantities, and descriptions.
- Dynamic search functionality allowing instant keyword filtering across active drugs.
- Seamless modal workflows for adding new pharmaceutical products and updating existing entries.
- Real-time stock status flags warning pharmacists of depleted inventory.

<div align="center">

<!-- SCREENSHOT 2: MEDICINE INVENTORY CATALOG -->
<p align="center">
  <img src="https://via.placeholder.com/1200x630/1e293b/ffffff?text=+Preview%3A+Medicine+Inventory+Catalog" alt="PharmaCare Inventory Management" width="92%" style="border-radius: 12px; box-shadow: 0 10px 30px rgba(0,0,0,0.15);" />
  <br/>
  <em>Figure 2: Real-time Medicine Inventory Catalog with search, status filters, and instant stock update modals.</em>
</p>

</div>

<br/>

---

### 3. 📦 Vendor Procurement & Purchase Details
- Comprehensive procurement log recording purchase dates, supplier quantities, and total procurement investment.
- Automated bidirectional inventory increments: logging a purchased shipment instantly increases available inventory on shelf without manual reconciliation.
- Formatted financial reporting of batch costs and procurement dates.

<div align="center">

<!-- SCREENSHOT 3: PURCHASE INTAKE & PROCUREMENT -->
<p align="center">
  <img src="https://via.placeholder.com/1200x630/1e293b/ffffff?text=+Preview%3A+Procurement+%26+Purchase+Details" alt="PharmaCare Purchase Details" width="92%" style="border-radius: 12px; box-shadow: 0 10px 30px rgba(0,0,0,0.15);" />
  <br/>
  <em>Figure 3: Vendor Procurement Module tracking purchase orders, procurement expenses, and automatic inventory stock intake.</em>
</p>

</div>

<br/>

---

### 4. 🧾 Counter Sales Management & Instant Stock Deduction
- Counter checkout interface linking sales to specific pharmacy branches and customer transactions.
- Automated stock decrement: each completed sale immediately deducts the quantity from catalog stock.
- Aggregate revenue calculations feeding directly into the monthly financial charts.

<div align="center">

<!-- SCREENSHOT 4: SALES MANAGEMENT & POINT OF SALE -->
<p align="center">
  <img src="https://via.placeholder.com/1200x630/1e293b/ffffff?text=+Preview%3A+Sales+Counter+%26+Stock+Deduction" alt="PharmaCare Sales Management" width="92%" style="border-radius: 12px; box-shadow: 0 10px 30px rgba(0,0,0,0.15);" />
  <br/>
  <em>Figure 4: Sales Management interface with automatic inventory deduction and branch transaction logging.</em>
</p>

</div>

<br/>

---

### 5. 🏪 Multi-Store & Pharmacy Branch Management
- Register and monitor multiple retail pharmacy locations under a single management account.
- Track store addresses, cities, and operational branch profiles.
- Filter and assign sales and inventory across designated physical storefronts.

<div align="center">

<!-- SCREENSHOT 5: MULTI-STORE BRANCH MANAGEMENT -->
<p align="center">
  <img src="https://via.placeholder.com/1200x630/1e293b/ffffff?text=+Preview%3A+Multi-Store+Branch+Management" alt="PharmaCare Store Management" width="92%" style="border-radius: 12px; box-shadow: 0 10px 30px rgba(0,0,0,0.15);" />
  <br/>
  <em>Figure 5: Multi-Store Branch Registry supporting distributed pharmacy locations and multi-branch management.</em>
</p>

</div>

<br/>

---

## 🏛️ System Architecture & Repository Structure

```text
medical-store-management/
│
├── .gitignore                   # Root git protection (node_modules, builds, .env)
├── README.md                    # Project presentation & documentation
│
├── Backend/                     # Express REST API (Deployed on Vercel Serverless)
│   ├── controller/              # Business logic & database operations
│   │   ├── product.js           # Catalog management & search operations
│   │   ├── purchase.js          # Procurement records & total purchase aggregation
│   │   ├── purchaseStock.js     # Automated inventory intake increment logic
│   │   ├── sales.js             # Sales logging & monthly aggregation
│   │   ├── soldStock.js         # Automated inventory decrement logic
│   │   └── store.js             # Pharmacy branch store management
│   ├── models/                  # Mongoose schemas (MongoDB Atlas)
│   │   ├── index.js             # Connection pooling with serverless timeout
│   │   ├── product.js           # Medicine entity schema
│   │   ├── purchase.js          # Procurement entity schema
│   │   ├── sales.js             # Sales transaction schema
│   │   ├── store.js             # Pharmacy store schema
│   │   └── users.js             # User account schema
│   ├── router/                  # Express route definitions
│   │   ├── product.js           # /api/product endpoints
│   │   ├── purchase.js          # /api/purchase endpoints
│   │   ├── sales.js             # /api/sales endpoints
│   │   └── store.js             # /api/store endpoints
│   ├── .env.example             # Documented environment template
│   ├── package.json             # Backend dependencies & start scripts
│   ├── server.js                # Express application entry & serverless export
│   └── vercel.json              # Vercel Serverless routing configuration
│
└── Frontend/                    # React 18 Single Page Application
    ├── public/                  # Public assets, manifest, and index.html
    ├── src/
    │   ├── assets/              # Clean icons, logos, and UI graphics
    │   ├── components/          # Reusable UI component architecture
    │   │   ├── AddProduct.js    # Medicine registration modal
    │   │   ├── AddPurchaseDetails.js # Procurement intake modal
    │   │   ├── AddSale.js       # Transaction modal
    │   │   ├── AddStore.js      # Branch registration modal
    │   │   ├── Header.js        # Compact dashboard header with notification bell
    │   │   ├── Layout.js        # Sticky frame, sidebar, and outlet container
    │   │   ├── SideMenu.js      # Active-route-aware navigational sidebar
    │   │   ├── UpdateProduct.js # Inventory edit modal
    │   │   └── UserAvatar.js    # Dynamic user initials/image fallback avatar
    │   ├── pages/               # Top-level view controllers
    │   │   ├── Dashboard.js     # Analytics dashboard with KPI cards & charts
    │   │   ├── Inventory.js     # Medicine inventory data grid
    │   │   ├── Login.js         # Direct serverless authentication login
    │   │   ├── NoPageFound.js   # 404 error view
    │   │   ├── PurchaseDetails.js # Procurement history log
    │   │   ├── Register.js      # User account signup
    │   │   ├── Sales.js         # Counter sales transaction log
    │   │   └── Store.js         # Pharmacy branch registry
    │   ├── App.js               # Application router & auth provider
    │   ├── AuthContext.js       # React context for user state
    │   ├── ProtectedWrapper.js  # Route guard redirecting unauthenticated users
    │   ├── config.js            # Centralized API_URL environment configuration
    │   └── index.css            # Tailwind directives & global typography
    ├── .env.example             # Documented frontend environment template
    ├── package.json             # Frontend dependencies & build scripts
    ├── tailwind.config.js       # Tailwind CSS styling configuration
    └── vercel.json              # Client-side SPA rewrite rules for Vercel
```

---

## 🛠️ Technology Stack

```
Frontend:   [ React 18 ] ── [ Tailwind CSS ] ── [ ApexCharts ] ── [ Chart.js ] ── [ Headless UI ]
Backend:    [ Node.js ] ── [ Express.js ] ── [ Mongoose ODM ] ── [ Serverless Vercel Node ]
Database:   [ MongoDB Atlas Cloud Cluster ]
Deployment: [ Vercel CI/CD ] (Frontend SPA + Backend Microservice)
```

- **Frontend:** React 18, React Router v6, Tailwind CSS v3, Chart.js, React-ApexCharts, Headless UI, Heroicons.
- **Backend:** Node.js, Express.js 4, Mongoose 7, CORS, Dotenv.
- **Database:** MongoDB Atlas (Cloud Replica Set).
- **Deployment & Hosting:** Vercel (Frontend Single Page Application + Backend Serverless Functions).

---

## 🚀 Installation & Quick Start

### Prerequisites
- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- [Git](https://git-scm.com/)
- A free [MongoDB Atlas](https://www.mongodb.com/atlas) cluster connection string

### 1. Clone the Repository
```bash
git clone https://github.com/Arko-009/medical-store-management.git
cd medical-store-management
```

### 2. Configure & Run Backend
```bash
cd Backend
npm install

# Create local environment file
cp .env.example .env
# Open .env and insert your MongoDB connection string
# MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/storemanagement
# PORT=4000

# Start backend server
npm start
```
*The backend will boot up on `http://localhost:4000`.*

### 3. Configure & Run Frontend
```bash
cd ../Frontend
npm install

# Start local React development server
npm start
```
*The web app will automatically open at `http://localhost:3000`.*

---

## ⚙️ Environment Configuration

### Backend (`Backend/.env`)
| Variable | Description | Example |
| :--- | :--- | :--- |
| `PORT` | Local server listening port | `4000` |
| `MONGODB_URI` | MongoDB Atlas cloud connection URI | `mongodb+srv://user:pass@cluster.mongodb.net/storemanagement` |

### Frontend (`Frontend/.env`)
| Variable | Description | Default / Production Value |
| :--- | :--- | :--- |
| `REACT_APP_API_URL` | Base endpoint of the backend API | `https://medicalstore-backend-ashen.vercel.app` |
| `CI` | Disables strict warning-as-error in CI | `false` |

---

## 🔮 Future Roadmap & Improvements

While PharmaCare already provides end-to-end stock and sales tracking, upcoming releases will introduce enterprise features:

- [ ] **Batch Number & Expiry Date Lifecycle Alerts:** Automated color-coded tags and notifications when medications approach expiration (e.g. 30/60/90 days).
- [ ] **Automated PDF Invoicing & Thermal Printing:** Generate printable, professional GST-ready customer bills with one click.
- [ ] **Barcode / QR Scanner Integration:** Scan medication barcodes using standard USB/Bluetooth handheld scanners or device webcams for instant checkout.
- [ ] **Low-Stock Auto-Reorder Triggers:** Configurable minimum safety stock thresholds with automated email/SMS purchase draft generation.
- [ ] **Role-Based Access Control (RBAC):** Granular permissions for Super Admin, Pharmacist, and Cashier accounts.
- [ ] **Data Export & Fiscal Audits:** Export sales, purchase, and inventory tables into formatted Excel (.xlsx) and CSV reports.

---

## 👤 Author & Acknowledgments

- **Developer:** [Arko Bag (Arko-009)](https://github.com/Arko-009)
- **Live Demo:** [https://medical-store-git-main-arkos-projects-f0a0594a.vercel.app](https://medical-store-git-main-arkos-projects-f0a0594a.vercel.app)
- **API Endpoint:** [https://medicalstore-backend-ashen.vercel.app](https://medicalstore-backend-ashen.vercel.app)

---

## 📄 License
This project is open-source and available under the [MIT License](LICENSE).
