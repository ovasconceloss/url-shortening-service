# URL shortener — A URL shortening service API

> An API for converting long URLs into short ones.

---

![License: MIT](https://img.shields.io/badge/license-MIT-blue)
![Status: In Development](https://img.shields.io/badge/Status-In_Development-red)
![GitHub last commit](https://img.shields.io/github/last-commit/ovasconceloss/url-shortening-service)

## Index

* [About](#about)
* [Features](#Features)
* [Tech Stack](#tech-stack)
* [Folder Structure](#folder-structure)
* [Installation (development)](#installation-development)
* [Environment variables](#environment-variables)
* [Useful scripts](#useful-scripts)
* [Tests, lint, and formatting](#tests-lint-and-formatting)
* [CI / CD](#ci--cd)
* [Contribution](#contribution)
* [License](#license)

---

## About

A production-ready RESTful API built with **Node.js** and **TypeScript**, designed to shorten and manage long URLs. It provides full CRUD operations, access statistics, and a clean, extensible architecture that follows best practices in scalability, testing, and security.

## Features

* Create, retrieve, update, and delete short URLs.
* Track and provide statistics on access counts for each short URL.
* REST endpoints for all URL operations.

---

## Tech Stack

* **Dev tooling:** ESLint, Prettier.
* **Backend:** Node.js, TypeScript, Fastify, Prisma, PostgreSQL.

---

## Folder Structure

```
/webnote
├─ .github/               # workflows (CI/CD)
├─ src/
│  ├─ controllers/
│  ├─ services/
│  ├─ models/
│  ├─ routes/
│  ├─ fastify.ts
│  ├─ server.ts
│  └─ index.ts
├─ prisma/             # migrations and schema.prisma
├─ package.json
├─ README.md
└─ LICENSE
```

---

## Installation (development)

```bash
# clone
git clone https://github.com/ovasconceloss/url-shortening-service.git
cd url-shortening-service

cp .env.example .env
pnpm install
pnpm run dev            # start project with ts-node

## Environment variables

```
# backend/.env.example
DATABASE_URL=postgresql://user:pass@localhost:5432/webnote
PORT=4000
NODE_ENV=development
```

---

## Useful scripts

In the `package.json`:

```json
{
  "scripts": {
    "dev": "tsx --watch src/index.ts",
    "build": "tsc",
    "start": "node dist/index.js",
    "test": "vitest"
  }
}
```

## Tests, lint, and formatting

* **Unit tests:** Vitest.
* **Formatter:** Prettier with shared configuration.
* **Lint:** ESLint with rules based on TypeScript-ESLint.

---

## Contribution

1. Open an issue describing the feature/bug.
2. Create a branch named `feature/short-name` or `fix/issue-123`.
3. Add tests and run lint locally.
4. Make a Pull Request with a clear description and checklist.

---

## License

MIT © Victor Vasconcelos.
</br>
This project is licensed under the MIT License. See the LICENSE file for details.

---

## Contact

* GitHub: `https://github.com/ovasconceloss`
* Email: `victorolimpiovasconcelos.dev@gmail.com`