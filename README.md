<!-- PROJECT LOGO & HEADER -->
<br />
<div align="center">
  <img src="https://img.icons8.com/color/96/000000/brain.png" alt="Logo" width="80" height="80">
  <h1 align="center">ADHD Finder</h1>

  <p align="center">
    A clean, accessible, and interactive web application designed to help users assess potential ADHD symptoms through a structured questionnaire.
    <br />
    <br />
    <a href="#live-demo-">View Demo</a>
    ·
    <a href="https://github.com/rupamzz/adhd_finder/issues/new?labels=bug&template=bug-report---.md">Report Bug</a>
    ·
    <a href="https://github.com/rupamzz/adhd_finder/issues/new?labels=enhancement&template=feature-request---.md">Request Feature</a>
  </p>
</div>

<!-- BADGES -->
<div align="center">
  <img src="https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vue.js&logoColor=4FC08D" alt="Vue 3" />
  <img src="https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E" alt="Vite" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Pinia-FF9800?style=for-the-badge&logo=vue.js&logoColor=white" alt="Pinia" />
</div>

<br />

> **Disclaimer**: This assessment is for informational and educational purposes only and is **not a clinical diagnostic tool**. If you have concerns about your mental health or these results, please consult with a qualified healthcare professional.

---

## 📸 Screenshots

*(Add screenshots of your application here! Upload them to your repo and link them below)*

<div align="center">
  <img src="https://via.placeholder.com/600x350/F8FAFC/4F46E5?text=Home+Screen+Screenshot" alt="Home Screen Screenshot" width="48%">
  <img src="https://via.placeholder.com/600x350/F8FAFC/4F46E5?text=Assessment+Screen+Screenshot" alt="Assessment Screenshot" width="48%">
</div>

---

## ✨ Features

- **Interactive Questionnaire**: Step-by-step assessment flow with dynamic Vue routing and intuitive navigation.
- **Robust State Management**: Powered by Pinia to securely track answers, calculate scores, and prevent data loss during the test.
- **Calming & Accessible UI**: Custom-designed with Tailwind CSS featuring a soothing, minimalist color palette (slates, indigos, emeralds), and large touch-friendly targets that prevent sensory overload.
- **Responsive Layout**: Fluid design that works seamlessly across mobile, tablet, and desktop devices.
- **Instant Result Calculation**: Automatically calculates a likelihood score based on responses seamlessly.

## 🛠️ Built With

* [Vue 3](https://vuejs.org/) (Using the modern Composition API `<script setup>`)
* [Pinia](https://pinia.vuejs.org/) (Intuitive State Management)
* [Tailwind CSS v4](https://tailwindcss.com/) (Utility-first styling)
* [Vue Router 4](https://router.vuejs.org/) (SPA Routing)
* [Vite](https://vitejs.dev/) (Next Generation Frontend Tooling)

---

## 🚀 Getting Started

To get a local copy up and running, follow these simple example steps.

### Prerequisites

Make sure you have Node.js and npm installed on your machine.
* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/rupamzz/adhd_finder.git
   ```
2. Navigate into the directory
   ```sh
   cd adhd_finder
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Start the Vite development server
   ```sh
   npm run dev
   ```

## 🏗️ Building for Production

To create an optimized production build, run:

```sh
npm run build
```

The compiled assets will be generated in the `dist` directory, ready to be deployed to Vercel, Netlify, GitHub Pages, or any static host.

---

## 📁 Project Structure Highlights

- `src/views/` - Contains the main dynamic view components (`HomeView.vue`, `Questions.vue`, `Result.vue`).
- `src/stores/` - Contains the Pinia store (`counter.js` or `adhdStore.js`) handling global state, scores, and questions data.
- `data/` - Holds the `adhd_data.json` dataset representing the questionnaire structure.
- `src/App.vue` - The root layout framing the application's clean design.

---

## 🤝 Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request




