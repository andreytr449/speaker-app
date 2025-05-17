<div align="center">
  <br />
  <img src="assets/images/client-side-banner.jpg" alt="Project Banner"  />
  <br /><br />
  <div>
    <img src="https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
    <img src="https://img.shields.io/badge/Expo-000020?style=for-the-badge&logo=expo&logoColor=white" />
    <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" />
 <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="tailwindcss" />  
</div>

<h3 align="center">📱 Speaker — Mobile App</h3>
  <p align="center">
    This is the frontend of the <strong>Speaker</strong> mobile app — a language learning platform.  
    Developed using <strong>React Native</strong> and <strong>Expo</strong>.
  </p>
</div>

---

## 📋 Table of Contents

1. ✨ [Introduction](#introduction)
2. 🧰 [Tech Stack](#tech-stack)
3.  ⚡ [Quick Start](#quick-start)
4. 📂 [Project Structure](#project-structure)
5. 🛡️ [License](#license)
6. ✍️ [Author](#author)

---

## <a name="introduction">✨ Introduction</a>

**Speaker** is a cross-platform mobile application designed to help users learn foreign languages through structured lessons, interactive content, and progress tracking.

This is the **frontend** app built with **Expo** and **React Native**.  
It interacts with a Node.js backend for authentication and lesson content.

---

## <a name="tech-stack">🧰 Tech Stack</a>


- ⚛️ **React Native** — Framework for building native mobile apps using React
- 🚀 **Expo** — Platform for making universal React Native apps
- 🧠 **TypeScript** — Superset of JavaScript for static typing
- 🔗 **Axios** — HTTP client for API requests

---

## <a name="quick-start"> ⚡ Quick Start</a>

Follow these steps to run the app locally.

### 📦 Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)
- A mobile device or emulator (e.g. Android Studio or Xcode)

### 🚀 Run Locally

1. **Clone the repository:**

```bash
git clone https://github.com/andreytr449/speaker-app
cd speaker-app
```
2. **Install dependencies:**

```bash
npm install
```

3. Start the development server:**

```bash
npx expo start
```

4. **Preview on device:**

- Use Expo Go app on your iOS/Android device to scan the QR code.

- Or run it on an emulator via Expo DevTools.

## <a name="project-structure">📂 Project Structure</a>

```
├── app/ # Main app navigation and routing
│ ├── (tabs)/ # Tab navigation views
│ ├── auth/ # Authentication screens
│ ├── lesson/ # Lesson routing
│ └── onboarding/ # Onboarding flow
│
├── assets/ # Static assets (fonts, icons, images)
│ ├── fonts/
│ ├── icons/
│ └── images/
│
├── components/ # Reusable UI components
│ ├── share/ # Shared components
│ └── ui/ # Basic UI elements
││
├── constants/ # Constant values
│
├── hooks/ # Custom React hooks
│
├── lib/ # Utility functions and form validators
│
├── screens/ # UI screen implementations
│ └── app/ # Main app-related screens
│
├── services/ # API service logic
│
└── store/ # Global state management (Zustand)
```

## <a name="license">🛡️  License</a>


[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

## <a name="author">✍️  Author</a>

💼 GitHub: [https://github.com/andreytr449](https://github.com/andreytr449)


This project was created as part of a personal project.

© 2025 All rights reserved.
