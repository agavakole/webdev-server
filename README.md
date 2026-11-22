# webdev-server

Express.js HTTP server for the CS5610 Kambaz application.

## Local setup

1. Install dependencies:

   ```bash
   npm install
   ```

2. Copy `.env.example` to `.env` and keep the local values:

   ```env
   SERVER_ENV=development
   CLIENT_URL=http://localhost:3000
   SERVER_URL=http://localhost:4000
   SESSION_SECRET=replace-this-with-a-long-random-secret
   ```

3. Start the server:

   ```bash
   npm run dev
   ```

The server listens on port 4000. The Next.js client runs separately on port 3000.

## Useful endpoints

- `GET /` — welcome message
- `GET /hello` — hello response
- `GET /lab5/welcome` — Lab 5 welcome response
- `GET /api/courses` — all Kambaz courses
- `GET /api/courses/RS101/modules` — modules for a course
- `GET /api/courses/RS101/assignments` — assignments for a course

## Render

- Build command: `npm install`
- Start command: `npm start`
- Set `SERVER_ENV=production`
- Set `CLIENT_URL` to the deployed Vercel origin, without a trailing slash
- Set `SERVER_URL` to the Render hostname without `https://`
- Set `SESSION_SECRET` to a private random phrase

Do not commit `.env`. The server uses in-memory arrays loaded from the JSON seed files; data resets when the process restarts.
