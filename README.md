# KnightX Real Estate Agency

A full-stack real estate application built with **Laravel 12** and **React (Inertia.js)**. Users can browse properties, filter by various criteria, send inquiries, while administrators have full CRUD capabilities.

---

## Tech Stack

| Technology | Purpose |
|------------|---------|
| Laravel 12 | Backend API, authentication, database |
| React 18 + Inertia.js | Frontend SPA without API complexity |
| Tailwind CSS | Styling and responsive design |
| MySQL / SQLite | Database |
| Vite | Frontend build tool |

---

## Features

### Public Pages
- Homepage with latest properties and category cards
- Properties listing with **search, filters, and sorting**
- Property details page with **image gallery and lightbox**
- Inquiry form on each property
- Category pages with property listings

### Authentication (Breeze)
- Login / Register
- Password reset
- Role-based access (Admin / User)

### Admin Panel
- **Properties:** Create, edit, delete (with multiple images)
- **Categories:** Manage property categories (Sale, Rent, New Construction)
- **Property Types:** Manage property types (Apartment, House, Land)
- **Inquiries:** View and update status (new / contacted / closed)

### UX Features
- Responsive layout (mobile-friendly)
- Loading states and error handling
- Flash messages for success/error
- Image lightbox with navigation arrows
- Confirmation dialogs for delete actions

---

## Installation

### Prerequisites
- PHP 8.4+
- Composer
- Node.js 22+
- MySQL or SQLite

### Setup Instructions

```bash
# 1. Clone the repository
git clone https://github.com/FilipArambasic/real-estate-app.git
cd real-estate-app

# 2. Install backend dependencies
composer install

# 3. Install frontend dependencies
npm install

# 4. Copy environment file
cp .env.example .env

# 5. Generate application key
php artisan key:generate

# 6. Configure database in .env file (see below)

# 7. Run migrations and seeders
php artisan migrate --seed

# 8. Build frontend assets
npm run build

# 9. Start development servers
# Terminal 1 - Backend
php artisan serve

# Terminal 2 - Frontend (Vite)
npm run dev
```

--- 

## Environment Variables 

APP_URL=http://localhost:8000

DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=real_estate_db
DB_USERNAME=root
DB_PASSWORD=

---

## Implemented Features

User authentication (register, login, logout)

Role-based access (User / Admin)

Property listing with search, filters, sorting

Property details with image gallery + lightbox + navigation arrows

Inquiry form with validation and flash messages

Admin panel (Properties, Categories, Property Types, Inquiries)

Full CRUD for properties, categories, property types

Responsive design (Tailwind CSS)

Seeders with 15 properties + images

Pagination on properties listing

Flash messages for user actions

---

## Default Users (after seeding)

| Email | Password | Role |
|-------|----------|------|
| admin@example.com | password | Admin |
| user@example.com | password | User |

---

## Access Points

| Page | URL | Access |
|------|-----|--------|
| Homepage | `/` | Public |
| Properties | `/properties` | Public |
| Property Details | `/properties/{id}` | Public |
| Login | `/login` | Public |
| Register | `/register` | Public |
| Dashboard | `/dashboard` | Authenticated |
| Admin Panel | `/admin` | Admin only |

---

## Known Limitations
Issue	Status
Image upload – uses URLs instead of file upload	Can be improved with Laravel Storage
No Google Maps integration	Future feature
No email notifications for inquiries	Future feature
Property images deletion when property deleted	Works (cascade delete)

---