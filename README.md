<div align="center">
  <img src="https://readme-typing-svg.herokuapp.com/?lines=Frontend+Developer...;Building+Modern+Web+Apps...;Passionate+about+UI%2FUX...&font=Space+Grotesk&center=true&width=500&height=50&color=8B5CF6&vCenter=true&size=22" alt="Typing SVG" />

  <p align="center">
    <img src="https://media.tenor.com/vHq0L9m8bBQAAAAj/firework.gif" width="150" alt="Atoshbaji Fireworks" />
    <img src="https://media.tenor.com/vHq0L9m8bBQAAAAj/firework.gif" width="150" alt="Atoshbaji Fireworks" />
  </p>
  
  <h1>🎇 Modern Developer Portfolio 🎇</h1>
  
  <p align="center">
    <a href="https://github.com/mamun2931/portfolio">
      <img alt="GitHub stars" src="https://img.shields.io/github/stars/mamun2931/portfolio?style=social&label=Star%20this%20Project">
    </a>
  </p>

  <img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif" width="100%">

  <p align="center">
    <a href="https://github.com/mamun2931">
      <img src="https://github-readme-stats.vercel.app/api?username=mamun2931&show_icons=true&theme=dracula&hide_border=true&bg_color=0A0A0C" alt="mamun2931's GitHub Stats" />
    </a>
  </p>

  <p align="center">
    <a href="https://github.com/mamun2931">
      <img src="https://github-readme-streak-stats.herokuapp.com/?user=mamun2931&theme=dracula&hide_border=true&background=0A0A0C" alt="mamun2931's GitHub Streak" />
    </a>
  </p>

  <p align="center">
    <img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" alt="React" />
    <img src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="TailwindCSS" />
    <img src="https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
  </p>
</div>
A blazing fast, highly customizable, and stunningly beautiful frontend developer portfolio built with React.js, Vite, Tailwind CSS, and DaisyUI. This project is entirely data-driven—all text, links, and content can be easily updated from a single centralized JSON file without ever touching the React components!

---

## ✨ Key Features

- **🎨 Modern Aesthetics:** Built using modern styling standards including Glassmorphism, floating micro-animations, glowing dark mode (Dracula theme powered by DaisyUI), and beautiful custom fonts.
- **⚡ Blazing Fast:** Powered by Vite & React for an incredibly lightweight and fast modular architecture.
- **💾 JSON-Driven Content:** Zero hardcoded text! Every section (Hero, Skills, Projects, Contact, Footer) reads its content from `src/data/portfolio.json`. Updating your portfolio takes seconds.
- **✉️ Working Contact Form:** Integrated directly with Formspree via AJAX so potential clients can email you without leaving the page. Includes sleek `react-toastify` popups.
- **📱 Fully Responsive:** Beautifully adapts to mobile devices, tablets, and massive desktop screens alike.

---

## 🛠️ Tech Stack

- **Framework:** [React.js](https://reactjs.org/) (via [Vite](https://vitejs.dev/))
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **UI Components:** [DaisyUI](https://daisyui.com/)
- **Icons:** [React Icons](https://react-icons.github.io/react-icons/)
- **Notifications:** [React Toastify](https://fkhadra.github.io/react-toastify/introduction)

---

## 🚀 Getting Started

Follow these instructions to get a copy of the project running on your local machine.

### Prerequisites

You need `Node.js` installed on your internal machine.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/mamun2931/portfolio.git
   cd portfolio
   ```

2. **Install the dependencies:**
   ```bash
   npm install
   ```

3. **Run the local development server:**
   ```bash
   npm run dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

---

## 📂 Project Structure

```bash
├── public/                 # Static assets (images, absolute paths)
│   └── assets/images/      # Project and profile images
├── src/
│   ├── components/         # Isolated part-by-part React components
│   │   ├── Navbar/
│   │   ├── Hero/
│   │   ├── Skills/
│   │   ├── Projects/
│   │   ├── Contact/
│   │   └── Footer/
│   ├── data/               # Centralized Data architecture
│   │   └── portfolio.json  # ALL text content lives here!
│   ├── App.jsx             # Main wrapper component
│   ├── index.css           # Global Tailwind & Custom Styles
│   └── main.jsx            # React Entry Point
  ...
```

---

## ⚙️ How to Customize

This portfolio was explicitly engineered to be easy for developers to customize. 

### Updating Your Information
Instead of hunting through React code to change a title or a link, just open `src/data/portfolio.json`. Everything is mapped there. For example, to add a new skill or project, simply add a new object to the respective array in the JSON file!

### Changing the Theme
We use DaisyUI to manage colors seamlessly. 
1. Open `tailwind.config.js`.
2. Locate the `daisyui` plugin settings.
3. Change `"dracula"` to one of DaisyUI's many themes (like `synthwave`, `cyberpunk`, or `lofi`).
4. Update `<html data-theme="dracula">` in `index.html` to perfectly match!

### Setting Up Formspree (Contact Form)
1. Go to [Formspree.io](https://formspree.io/) and create an account.
2. Create a new form and copy the endpoint URL provided.
3. Open `src/data/portfolio.json` and paste your URL into `"contact": { "formspreeEndpoint": "YOUR_URL" }`.

---

## 📝 License

Distributed under the MIT License. Feel free to use this template for your own developer portfolio.
