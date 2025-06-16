# Prompt Cart - Smart eCommerce Recommender & Assistant

## 🛒 Overview

**Prompt Cart** is a Smart eCommerce Application that helps consumers effortlessly find products they’re looking for. The system combines a full-stack web infrastructure and a microservices-ready architecture (FastAPI coming soon) with a chatbot assistant and intelligent product recommender.

This monorepo currently consists of:

* A **Node.js / Express / PostgreSQL** backend
* A **React / Typescript / Vite** frontend powered by **Tailwind CSS**, **Vitest**, **Cypress**, and **Docker**

---

## 🧩 Tech Stack

### Backend

* PostgreSQL
* TypeScript
* Node.js
* Express.js
* TypeORM

### Frontend

* React (Typescript) (with Vite)
* Tailwind CSS
* Vitest (unit testing)
* Cypress (E2E testing)
* Docker & Docker Compose

---

## 📁 Project Structure

```
PromptCart/
│
├── client/             # React Frontend
├── server/             # Node.js Backend
└── README.md
```

---

# 🚀 Getting Started

## 🔧 Prerequisites

* **Node.js** v20+
* **npm** v10+ or **yarn**
* **PostgreSQL** installed and configured
* **Docker** (optional but recommended for containerization)

---

## ⚙️ Backend Setup (`/server`)

### 1. Clone & Navigate

```bash
git clone <repo_url>
cd server
```

### 2. Configure Environment

Create `.env` and `.env.local` files based on `.env.example`. Fill in your database and server config:

```env
NODE_ENV="local"
AUTH_TOKEN_EXPIRATION_TIME=""
AUTH_TOKEN_SECRET=""

DB_HOST=""
DB_NAME=""
DB_PASSWORD=""
DB_PORT=""
DB_USERNAME=""
DB_MAIN_SCHEMA=""
DB_AUDIT_SCHEMA=""

LOGGING_COMBINED_FILE=""
LOGGING_ERROR_FILE=""
LOGGING_LEVEL=""
LOGGING_TYPE=""

SERVER_PORT=""
```

### 3. Create Your PostgreSQL Database

Using a tool like **pgAdmin** or CLI:

```bash
createdb promptcart_db
```

### 4. Run Migrations

```bash
npm install
npm run db:migration:generate
```

### 5. Start Backend Server

```bash
npm run server
```

Backend runs by default at: [http://localhost:3000](http://localhost:3000)

---

### ✅ Running Backend Tests

```bash
# Setup test database first
createdb promptcart_test_db

# Configure .env.test based on .env.example
npm run setup:test
npm test
```

---

## 🖥️ Frontend Setup (`/client`)

### 1. Navigate & Install

```bash
cd ../client
npm install
```

Or with yarn:

```bash
yarn install
```

### 2. Start Development Server

```bash
npm run dev
```

Or:

```bash
yarn dev
```

Frontend runs by default at: [http://localhost:5173](http://localhost:5173)

---

## 🐳 Running the Frontend with Docker

### Docker (Standalone)

```bash
docker build -t promptcart-frontend .
docker run -p 5173:5173 promptcart-frontend
```

### Docker Compose

Make sure the provided `docker-compose.yml` exists in `/client`, then run:

```bash
docker-compose up
# Or detached
docker-compose up -d
```

To stop:

```bash
docker-compose down
```

---

## 🧪 Frontend Testing

### Unit Tests with Vitest

```bash
npm run test
# or interactive:
npm run test:ui
```

### E2E Tests with Cypress

```bash
npm run cy:open
```

---

## 🎨 Tailwind CSS

This project uses Tailwind CSS. Modify `tailwind.config.js` to customize utilities. Example usage:

```tsx
<button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">
  Click me
</button>
```

---

## 📦 Building for Production

```bash
npm run build
```

---

## ✅ Notes

* Ensure the backend is running and accessible to the frontend for API requests.
* You can update the frontend to point to the backend by setting a proxy in `vite.config.ts`.

---

## 📜 License

This project is licensed under the [MIT License](https://github.com/busayo/meanmap/blob/master/LICENSE).

---

## 🔗 Resources

* [PostgreSQL Docs](https://www.postgresql.org/docs/)
* [Express.js](https://expressjs.com/)
* [TypeORM Docs](https://typeorm.io/)
* [Vite](https://vitejs.dev/)
* [Tailwind CSS](https://tailwindcss.com/)
* [Vitest](https://vitest.dev/)
* [Cypress](https://www.cypress.io/)
* [Docker Docs](https://docs.docker.com/)

---
