# 🌐 Arpan Portfolio

A modern, dark-themed **personal portfolio** built using **Angular 20**, showcasing my skills, resume, and projects with interactive UI and session-based user greetings.

---

## 🚀 Features

- 🙋‍♂️ Personalized user greeting after entering name
- 🔐 Route guard via `sessionStorage` (redirects to login if name not set)
- 🎨 Responsive, dark-themed design with smooth animations
- 🧩 Modular Angular structure using standalone components
- 🖼️ Logo and favicon integration via asset folder
- ⚙️ Angular CLI for project scaffolding and management

---

## 📁 Folder Structure

src/
├── app/
│ ├── components/ # Navbar, Hero, About, Skills, etc.
│ ├── guards/ # Route guards
│ ├── pages/
│ │ ├── login/ # Login form with name validation
│ │ └── home/ # Home page with all sections
├── assets/
│ ├── logos/ # Favicon and branding images
│ ├── images/ # Project and profile images
├── index.html # Favicon, meta tags