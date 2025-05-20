# 🚀 My Portfolio Website

[![Website](https://img.shields.io/website?url=https%3A%2F%2Fdev-atul.vercel.app&style=flat-square)](https://dev-atul.vercel.app)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=flat-square)](LICENSE)
[![Parcel Bundler](https://img.shields.io/badge/Bundler-Parcel-orange?style=flat-square)](https://parceljs.org/)

This is my personal portfolio website, crafted using **HTML**, **CSS**, and **JavaScript**, with **Parcel** as the bundler. The site is responsive, accessible, performant, and structured for scalability. It highlights my frontend development capabilities in a clean, animated, and interactive format.

🔗 **Live Demo**: [https://dev-atul.vercel.app](https://dev-atul.vercel.app)

---

## 🌟 Features

- ✅ **Built with Vanilla HTML, CSS, and JavaScript**
- ⚙️ **Bundled using Parcel** for lightning-fast builds
- 📱 **Responsive** across all screen sizes
- ♿️ **Accessibility-conscious**: ARIA labels, semantic HTML, reduced motion preference support
- 🧩 **Modular JS architecture** for clean separation of concerns
- 🎯 **Smooth and performant DOM operations with proper cleanup**
- ✨ **Engaging animations and interactive charts**

---

## 🧠 JavaScript Modules Breakdown

| File Name          | Purpose                                                                 |
|--------------------|-------------------------------------------------------------------------|
| `autotype.js`       | Implements typewriter animation using the `Typed.js` library.            |
| `hamburger.js`      | Controls sidebar visibility on small screens via hamburger menu toggle. |
| `radarChart.js`     | Displays radar/web chart using the `ECharts` library.                    |
| `scrollAnimation.js`| Adds fade-in/fade-out scroll animations.                                |
| `scrollSpy.js`      | Highlights the sidebar section based on current scroll position.        |
| `scrollToSection.js`| Smooth scroll to specific section on sidebar click.                     |

---

## 📁 Folder Structure

my-portfolio/
├── src/
│ ├── assets/
│ └── modules/
│ ├── autotype.js
│ ├── hamburger.js
│ ├── radarChart.js
│ ├── scrollAnimation.js
│ ├── scrollSpy.js
│ ├── scrollToSection.js
│ └── script.js
├── index.html
├── style.css
├── README.md
├── package.json
├── .gitignore

---

## ⚙️ Tech Stack

- **HTML5**
- **CSS3**
- **JavaScript (ES6+)**
- **Parcel** (Bundler)
- **Typed.js** (Auto-typing effect)
- **ECharts** (Radar Chart)

---

## 🧪 Accessibility & Performance

- Supports `prefers-reduced-motion` settings
- Optimized for screen readers with semantic markup and ARIA roles
- Minimal, performant DOM manipulations with careful cleanup logic

---

## 🛠 Installation

```bash
git clone https://github.com/atul030702/atul-portfolio.git
cd your-portfolio
npm install
npm run start    # For development
npm run build    # For production
