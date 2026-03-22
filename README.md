# Ivan Ivanov Marin Portfolio

A personal portfolio website built with **Angular 21**, featuring advanced animations, 3D elements, and smooth scrolling.

## 🚀 Overview

This project showcases professional works, skills, and experience. It is designed with a focus on high-quality user experience, utilizing modern web technologies for animations and performance.

### Key Features
- **Modern Framework**: Built with [Angular 21](https://angular.dev/).
- **Advanced Animations**: Powered by [GSAP](https://gsap.com/) and ScrollTrigger.
- **Smooth Scrolling**: Implemented using [Lenis](https://github.com/darkroomengineering/lenis).
- **Internationalization (i18n)**: Supports English and Spanish via [NGX-Translate](http://www.ngx-translate.com/).
- **Responsive Design**: Tailored for various screen sizes.
- **Testing**: Robust unit testing with [Vitest](https://vitest.dev/).

---

## 🛠️ Tech Stack

- **Language**: TypeScript
- **Framework**: Angular 21
- **Animations**: GSAP (GreenSock)
- **Scrolling**: Lenis
- **i18n**: NGX-Translate
- **Styles**: SASS / CSS
- **Test Runner**: Vitest (jsdom)
- **Deployment**: Firebase Hosting

---

## 📋 Requirements

- **Node.js**: `^22.11.0` (Recommended)
- **npm**: `^11.7.0`
- **Angular CLI**: `21.2.3`

---

## ⚙️ Setup & Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/ivan-ivanov-marin.git
   cd ivan-ivanov-marin
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm start
   ```
   Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

---

## 📜 Available Scripts

- `npm start`: Runs the app in development mode.
- `npm run build`: Builds the app for production. The artifacts will be stored in the `dist/` directory.
- `npm test`: Runs unit tests using Vitest.
- `npm run watch`: Builds the app in watch mode for development.

---

## 🧪 Testing

This project uses **Vitest** as the test runner, integrated via the Angular build system.

To run tests once:
```bash
npm test -- --watch=false
```

To run tests in watch mode:
```bash
npm test
```

### Note on GSAP/ScrollTrigger in Tests
Many components use GSAP and ScrollTrigger, which require `window.matchMedia` to be mocked in the `jsdom` environment. If tests fail with `TypeError: _win.matchMedia is not a function`, ensure the test or a setup file mocks it.

---

## 📂 Project Structure

```text
├── src/
│   ├── app/                # Main application components and logic
│   │   ├── landing-page/   # Home page components (Intro, Skills, Experience)
│   │   ├── works/          # Project showcases and details
│   │   ├── app.config.ts   # App configuration (providers, i18n)
│   │   └── app.routes.ts   # Main routing definitions
│   ├── assets/             # Static assets
│   │   ├── fonts/          # Custom fonts (Brice)
│   │   ├── i18n/           # Translation files (en.json, es.json)
│   │   └── projects/       # Project images and screenshots
│   └── index.html          # Entry point
├── angular.json            # Angular CLI configuration
├── firebase.json           # Firebase Hosting configuration
├── package.json            # Project dependencies and scripts
└── tsconfig.json           # TypeScript configuration
```

---

## 🔒 Environment Variables & Configuration

- **TODO**: Configure Firebase environment variables if needed for production.
- **TODO**: Setup contact form backend if needed.
- Currently, no specific `.env` file is required for local development.

---

## 🚀 Deployment

The project is configured for **Firebase Hosting**.

To deploy (requires Firebase CLI):
1. Build the project: `npm run build`
2. Deploy: `firebase deploy`

---

## 📄 License

- **TODO**: Add license information (e.g., MIT, All Rights Reserved).
