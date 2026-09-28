# Car Sharing — Frontend

Web client for the **Car Sharing** training project.

**Where to find this file:** `frontend/README.md` (inside the `frontend` folder of the car-sharing repo).

Users log in to access the app and will eventually browse and book shared cars. The frontend talks to the Spring Boot backend on `http://localhost:8080`.

## Current project state

| Item | Description |
|------|-------------|
| **Purpose** | User-facing UI for a car-sharing platform |
| **Status** | Early development — login UI and auth scaffolding are in place |
| **Dev URL** | `http://localhost:5173` (Vite dev server) |
| **Backend** | `http://localhost:8080` (must be running for API calls) |

### Implemented

- **Login form** — email and password fields with client-side validation
- **Authentication context** — global auth state via React Context (`token`, `login`, `logout`)
- **Token persistence** — token stored in `localStorage` under the key `token`
- **Conditional routing** — shows `Login` when logged out; intended to show `Dashboard` when logged in

### Not yet implemented

- `Dashboard` component (referenced in `App.tsx` but not built yet)
- Car listing, booking, and user profile flows
- Logout UI and protected API requests with the stored token
- `Login` does not yet call `AuthContext.login()` after a successful response (writes to `localStorage` directly)
- Backend login endpoint (`POST /api/auth/login`) is not implemented yet

### Project structure

```
frontend/
├── src/
│   ├── main.tsx              # App entry point, wraps app in AuthProvider
│   ├── App.tsx               # Root component — Login vs Dashboard
│   ├── components/
│   │   └── Login.tsx         # Login form and submit handler
│   └── context/
│       └── AuthContext.tsx   # Auth state (token, login, logout)
├── package.json
└── vite.config.ts
```

### Run locally

```bash
cd frontend
npm install
npm run dev
```

Open **http://localhost:5173** in your browser.

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server |
| `npm run build` | Type-check and production build |
| `npm run preview` | Preview production build |
| `npm run lint` | Run Oxlint |

### Backend integration

| Endpoint | Method | Used by | Status |
|----------|--------|---------|--------|
| `/api/auth/login` | `POST` | `Login.tsx` | Expected by frontend; backend not implemented yet |
| `/api/cars` | `GET` | — | Placeholder on backend; not wired in frontend yet |

### Troubleshooting

- **Blank page after login:** `Dashboard` does not exist yet. Clear the `token` key in browser DevTools → Application → Local Storage, then refresh.
- **Login error "Falsche Logindaten":** Backend auth API is missing or not running on port 8080.
- **`useAuth must be used inside AuthProvider`:** Ensure `main.tsx` wraps `<App />` inside `<AuthProvider>`.

---

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend enabling type-aware lint rules by installing `oxlint-tsgolint` and editing `.oxlintrc.json`:

```json
{
  "$schema": "./node_modules/oxlint/configuration_schema.json",
  "plugins": ["react", "typescript", "oxc"],
  "options": {
    "typeAware": true
  },
  "rules": {
    "react/rules-of-hooks": "error",
    "react/only-export-components": ["warn", { "allowConstantExport": true }]
  }
}
```

See the [Oxlint rules documentation](https://oxc.rs/docs/guide/usage/linter/rules) for the full list of rules and categories.
