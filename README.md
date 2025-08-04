# Arpan Portfolio

A personal portfolio web application built with **Angular 20**, showcasing my skills, resume, and projects.

---

## 🧑‍💻 Features

- 👤 User greeting (Hello, [name]) after entering their name
- 🔐 Route Guard using session storage (user must input name to enter homepage)
- 🎨 Modern dark-themed responsive UI
- 🖼️ Logo support via favicon and asset folder
- 🚀 Angular CLI used for structured development

---

## 📁 Folder Structure

src/
├── app/
│ ├── components/ # Navbar, Hero, About, Skills, etc. (To be added)
│ ├── guards/ # Route guards
│ ├── pages/
│ │ ├── login/ # Login form with name validation
│ │ ├── home/ # Home page (will include main sections)
├── assets/
│ ├── logos/ # Logo used for favicon and branding
│ ├── images/ # Future images
├── index.html # SEO tags, favicon, etc.


---

## 🚦 Route Guard Logic

- User **must enter name** to access `/home`
- Name is stored in `sessionStorage`
- If someone tries to enter `/home` directly via URL, they will be redirected to `/login`

---

## 🔧 Setup & Run

```bash
# Install dependencies
npm install

# Run locally
ng serve

# Visit
http://localhost:4200/

🌱 Planned Enhancements
 Add portfolio sections: About, Projects, Skills, Contact

 Add user profile section and resume download

 Connect with backend API (e.g., JSON server or Node.js)

 Add animations, filtering, and section transitions

 Implement dark/light theme toggle

 Add contact form with email integration

📌 Tech Stack
Angular 20

Angular CLI

TypeScript

SCSS/CSS

HTML5

sessionStorage for state

Git & GitHub for version control

🧠 Author
Arpan Das
📧 [arpan.das@example.com] (or GitHub link if no email)

📝 License
This project is licensed under the MIT License. You can use, share, and modify it freely for educational or personal use.





✅### ✅ Next Step:
Now save this as `README.md`, and push:

```bash
git add README.md
git commit -m "Added production-ready README.md"
git push origin main
