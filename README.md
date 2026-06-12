<<<<<<< HEAD
# ⚡ Tharsan S. — Ultra-Premium Cybersecurity & AI Portfolio

This is a premium, high-fidelity personal brand and cybersecurity portfolio website for **Tharsan S** — a Pre-Final Year Cybersecurity Student, Founder & CEO of NexoraCrew, CTO of Vibernox, AI & LLM Security researcher, and public speaker from Trichy, Tamil Nadu, India.

Built with **React 18 (Vite)**, **Tailwind CSS v3**, and **Framer Motion**, featuring a dark security operations center (SOC) aesthetic, terminal animations, custom cursor logic, and dynamic GitHub REST API feeds.

---

## 🛠️ Tech Stack & Features

- **Core Framework:** React 18 (Vite 5)
- **Styling:** Tailwind CSS v3 (Custom Deep Space theme, Glassmorphism elements)
- **Animations:** Framer Motion (Scroll viewport animations)
- **Interactive Background:** tsParticles (Node-network connections)
- **Typographic Engine:** Typewriter-effect
- **Charts:** Recharts (Capability Matrix Radar & language shares)
- **Icons:** Lucide React + React Icons
- **Dynamic SEO:** React Helmet Async (JSON-LD Schemas, Open Graph metadata)
- **Deployment-Ready:** Redirection rules configured in `vercel.json`

---

## 🚀 Quick Start (Local Development)

### 1. Clone & Setup
Ensure you have [Node.js](https://nodejs.org/) installed, then run:

```bash
# Install dependencies with legacy peer resolutions
npm install --legacy-peer-deps
```

### 2. Run Locally
```bash
# Start Vite development server
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Build for Production
```bash
# Compile and bundle code
npm run build

# Preview build locally
npm run preview
```

---

## 📁 Project Structure

```
tharsan_ag/
├── public/                 # Static assets (PDFs, favicons)
│   └── Tharsan_S_Resume_v3.pdf
├── src/
│   ├── assets/             # Generated profile photo & graphics
│   │   └── avatar.png
│   ├── components/         # Modular layout segments
│   │   ├── Navbar.jsx
│   │   ├── Splash.jsx
│   │   ├── Hero.jsx
│   │   ├── Skills.jsx
│   │   └── ...
│   ├── data/
│   │   └── portfolio.js    # 📋 Single source of truth data file
│   ├── App.jsx             # Main router and animations assembler
│   ├── index.css           # Global custom stylesheet
│   └── main.jsx
├── tailwind.config.js      # Custom theme colors and fonts configuration
├── vercel.json             # Deployment redirects
└── package.json
```

---

## 📝 Updating Portfolio Data

To update any content on the website (e.g., adding a project, a certification, or modifying your bio), edit the single data file:

```bash
src/data/portfolio.js
```

### Example: Adding a new Certification
Simply add an object to the `certifications` array:
```js
{
  name: "New Security Credential",
  issuer: "Security Agency Name",
  date: "Jul 2026",
  credentialId: "SEC-ID-9918",
  category: "Security",
  featured: false
}
```

---

## 🌐 Deployment

### Vercel / Netlify
1. Connect this repository to your Vercel or Netlify account.
2. Select **Vite** as the framework preset.
3. Keep the default build command (`npm run build`) and output directory (`dist`).
4. Hit **Deploy**. SPA routing redirections are pre-configured.
=======
# tharsan-portfolio-newversion
Cybersecurity Student Portfolio | AI Security | Cloud Security | DevSecOps | Networking | Founder @ NexoraCrew
>>>>>>> 5da792aeb2313bc3b6f2fe5af946da9aead4b82d
