# 🚀 Microservices DevOps Project (Docker + Node.js + Docker Compose)

A simple **microservices-based system** built using Node.js and containerized using Docker. The system demonstrates real-world DevOps concepts such as microservices architecture, containerization, and service orchestration using Docker Compose.

---

## 🧱 Architecture Overview


- **Gateway Service** → Acts as API entry point
- **Inventory Service** → Provides item data
- Communication happens over Docker internal network

---

## ⚙️ Tech Stack

- Node.js (Express)
- Docker
- Docker Compose
- Git & GitHub

---

## 📦 Services

### 1. Inventory Service
- Runs on port `3001`
- Provides product/item data via REST API

### 2. Gateway Service
- Runs on port `3000`
- Acts as API gateway
- Fetches data from inventory service

---

## 🐳 Run the Project Locally

### 1. Clone the repository

### run with docker compose up --build

```bash
git clone https://github.com/YOUR_USERNAME/microservices-devops.git
cd microservices-devops
