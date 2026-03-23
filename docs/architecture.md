# 🏗️ Architecture

This document describes the architecture and organization of the **NEXT-KIETO-UI** project.

---

## 📂 Folder Structure
```bash
.github/                  # GitHub workflows and automation
    ├─ workflows/         # CI/CD workflows
    └─ dependabot.yml     # Dependency update config
docs/                     # Project documentation
    ├─ assets/            # Images, diagrams, etc.
    ├─ architecture.md    # Architecture documentation
    └─ setup.md           # Setup instructions
web/                      # Next.js project
    ├─ .next/             # Next.js build output (auto-generated)
    ├─ node_modules/      # Project dependencies
    ├─ public/            # Static assets (images, icons, fonts)
    ├─ src/               # Source code
    │   ├─ app/           # Routes and layouts (App Router)
    │   ├─ assets/        # Images used in the UI
    │   └─ components/    # Reusable UI library
    ├─ .gitignore         # Files/folders to ignore in Git
    ├─ components.json    # Components configuration (if used)
    ├─ eslint.config.mjs  # ESLint configuration
    ├─ next-env.d.ts      # Next.js TypeScript types
    ├─ next.config.ts     # Next.js configuration
    ├─ package-lock.json  # Auto-generated dependency lock file
    ├─ package.json       # Project dependencies and scripts
    ├─ postcss.config.mjs # PostCSS configuration
    └─ tsconfig.json      # TypeScript configuration
LICENSE                   # Project license
README.md                 # Project README
```
---

## 🎨 Design Patterns

- **Atomic Design**: components organized into `atoms`, `molecules`, `organisms`, and `templates`.  
- **Theme System**: light/dark theme support with TailwindCSS.  
- **Reusability**: decoupled and reusable components across different contexts.  

---

## 🔧 CI/CD

- **GitHub Actions**: pipeline configured for build, lint, and automated tests.  
- **Dependabot**: weekly updates for npm dependencies and GitHub Actions.  

---

## 📄 Notes

The architecture was designed to be **modular, scalable, and easy to maintain**, serving as a showcase of modern frontend best practices.

