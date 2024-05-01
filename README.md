# Nuxt, TypeScript and MongoDB Proof of Concept

This is an example project for a fullstack application written in the Nuxt.js metaframework.

## Core technologies used

- Vue.js for UI development
- Nuxt.js for server-side rendering (SSR) and API routes
- MongoDB + `mongoose` for NoSQL database management
- TypeScript for type-safe development
- JSON web tokens (JWT) for authorization
- `bcrypt` for hashing and decoding passwords
- ESlint and Prettier for code quality
- [Railway.app](https://railway.app) for database hosting
- [Vercel](https://vercel.com) for deployments

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

Create a `.env` file with the following values specified:

```bash
DATABASE_URI=
JWT_SECRET=
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```
