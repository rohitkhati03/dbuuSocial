# 🎓 UniConnect – Frontend (Client)

UniConnect is a **full-stack campus social platform** designed to unify communication, academics, career opportunities, and student interactions into a single system.

This repository contains the **frontend (client-side)** of the application, built using React, and structured to support **multiple modules and future scalability**.

---

## 🧠 Project Vision

CampusConnect is not just a regular app — it is a **complete digital ecosystem for colleges**, aiming to replace:

* WhatsApp groups ❌
* Notice boards ❌
* Scattered portals ❌

With one unified platform ✅

---

## 🏗️ Frontend Role in Architecture

The frontend acts as the **presentation layer** in a full-stack system:

```id="arch"
[ React Frontend ] ⇄ [ Node.js Backend ] ⇄ [ Database ]
```

It is responsible for:

* Rendering UI components
* Managing application state
* Handling user interactions
* Communicating with backend APIs
* Providing a seamless user experience

---

## ⚙️ Tech Stack

* ⚛️ React (Functional Components + Hooks)
* 🎨 CSS3 (Modular, responsive, custom UI)
* 🧠 JavaScript (ES6+)
* 🔗 REST API (Backend integration)

---

## 🧩 Current Implementation

### 🔹 Landing Page (Completed)

* Responsive Navbar
* Hero Section
* Features Overview
* Modules Showcase (interactive tabs)
* How It Works
* Testimonials
* CTA Section
* Footer

---

## 🚧 Upcoming Modules (Planned Features)

The frontend is structured to support multiple pages and features:

### 👤 Authentication System

* Login / Signup
* OTP verification (Email + Phone)
* Role-based access

### 🏠 User Dashboard

* Personalized feed
* Notifications
* Quick access modules

### 📰 Campus Feed

* Social posts (text, images, updates)
* Like, comment, share system
* Stories feature

### 💼 Career & Placement Module

* Job & internship listings
* Application tracking
* Resume/profile matching

### 📚 Academic Hub

* Q&A discussion board
* Notes & resources
* Study groups

### 📅 Events System

* Event listings
* RSVP system
* Calendar integration

### 📢 Notice Board

* Official announcements
* Department-specific updates

### 👤 Profile System

* Student portfolio
* Skills, achievements, projects
* Public + private views

---

## 📁 Folder Structure

```id="structure2"
client/
│── src/
│   ├── components/        # UI components
│   ├── pages/             # Future page-level components
│   ├── styles/            # CSS files
│   ├── utils/             # Helper functions (future)
│   ├── App.jsx
│   └── main.jsx
│
└── package.json
```

---

## 🔄 Data Flow

1. User interacts with UI
2. React manages state (useState / useEffect)
3. API requests sent to backend
4. Backend processes data
5. UI updates dynamically

---

## 📱 UI & Design Approach

* Fully responsive (Mobile-first)
* Modular component architecture
* Clean and scalable design system
* Inspired by modern SaaS platforms (Stripe, Notion)

---

## 🚀 Setup & Run

```id="run"
cd client
npm install
npm run dev
```

---

## 🔮 Future Scope

* 🔐 Full authentication flow
* ⚡ Real-time updates
* 🎬 Advanced animations (Framer Motion)
* 🌙 Dark/Light mode
* 📊 Dashboard analytics
* 📡 API integration with backend

---

## ⭐ Note

This project is actively under development and aims to evolve into a **complete full-stack platform for campus management and student interaction**.

If you like this project, give it a ⭐ on GitHub!
