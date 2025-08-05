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


---

## 🔐 Route Guard Logic

- Users **must enter their name** to access `/home`
- The name is stored in `sessionStorage`
- Direct access to `/home` without a name redirects to `/login`

---

## 🛠️ Setup & Run Locally

```bash
# Clone the repository
git clone https://github.com/your-username/arpan-portfolio.git
cd arpan-portfolio

# Install dependencies
npm install

# Start development server
ng serve

# Access on browser
http://localhost:4200/


🧩 Planned Enhancements
✅ Add full sections: About, Skills, Projects, Resume, Contact

📄 Resume download functionality

📧 Contact form with email integration

🎬 Animations, filtering, and section transitions

🌗 Dark/Light theme toggle

🛜 JSON server or Node.js backend (optional)

🧰 Tech Stack
Angular 20

TypeScript

SCSS / CSS

HTML5

sessionStorage

Git & GitHub

👨‍💻 Author
Arpan Das
📧 dasarpan915@gmail.com
🔗 GitHub

📝 License
This project is licensed under the MIT License.
Use, modify, or share it freely for personal or educational use