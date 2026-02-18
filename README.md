## Mayfair Weight Loss Clinic – Marketing Website

This repository contains the marketing and information website for **Mayfair Weight Loss Clinic** – a modern, conversion‑focused site that showcases treatments, explains the clinic’s approach, and guides visitors into starting an online consultation.

The site is built with **Next.js**, **React**, and **Tailwind CSS**, and is optimised for performance, accessibility, and SEO.

---

## ✨ Features

- **Clinic‑focused content structure**  
  - Home page with clear value proposition and hero section  
  - Weight loss treatments overview page  
  - About the clinic / team information  
  - FAQs and help/support content  
  - Blog section for articles and educational posts  

- **Guided conversion flow**  
  - Prominent “Start Consultation” / “Login” entry points  
  - External link to the consultation platform  
  - Clear navigation with active link states

- **Responsive UI**  
  - Fully responsive layout for mobile, tablet, and desktop  
  - Mobile menu with smooth dropdown experience  
  - Desktop navbar with pill‑shaped gradient background

- **Modern tech stack**  
  - Next.js 16 (Pages Router)  
  - React 19  
  - Tailwind CSS 4 for styling  
  - `lucide-react` for icons  
  - `react-hook-form` for form handling (where applicable)  

---

## 🧱 Tech Stack

- **Framework**: [Next.js](https://nextjs.org/)  
- **Language**: JavaScript / React  
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)  
- **Icons**: [lucide-react](https://lucide.dev/)  
- **Forms**: [react-hook-form](https://react-hook-form.com/)  

---

## 🚀 Getting Started (Local Development)

### 1. Install dependencies

```bash
npm install
```

### 2. Run the development server

```bash
npm run dev
```

By default the app will be available at `http://localhost:3000`.

---

## 📁 Project Structure (High Level)

Some key areas of the project:

- `components/` – Shared UI components  
  - `layout/Navbar.js` – Main navigation bar used across pages
- `pages/` – Next.js pages (home, treatments, about, FAQs, blog, contact, etc.)  
- `public/` – Static assets such as the clinic logo and images  
- `styles/` / Tailwind config – Global styles and design tokens  

---

## 🌐 Deployment

The app can be deployed to any platform that supports Next.js (e.g. Vercel, Netlify, custom Node server).

Typical production build steps:

```bash
npm run build
npm start
```

Make sure that any environment variables (API keys, analytics, etc.) are properly configured in your hosting provider.

---

## 🧪 Quality & Best Practices

- Semantic HTML for improved accessibility  
- Mobile‑first, responsive design  
- Reusable components for navigation and layout  
- ESLint configuration included via `eslint-config-next`  

You can run linting locally with:

```bash
npm run lint
```

---

## 📣 Contributing / Handover Notes

- **Design changes**: Update Tailwind utility classes in the relevant components (e.g. navbar, buttons, sections).  
- **Content updates**:  
  - Simple copy changes can usually be made directly in the corresponding `pages/` file or in shared components.  
  - Blog or FAQ items may be managed via separate components or data files, depending on how you extend the project.  
- **New pages**: Create a new file in `pages/` (e.g. `pages/new-page.js`) and link it via the navbar or internal CTAs.

If you are taking over this project, you can treat this README as a starting point and expand it with more detailed content architecture, analytics setup, or CMS integration details as the site evolves.
