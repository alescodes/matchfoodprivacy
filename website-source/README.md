# Match Food Privacy Policy source

This is the independent source project for the static policy page. It uses React, Vite and Tailwind CSS, with no Replit runtime dependency, game backend, database, or player-save access.

## Local preview

```sh
npm install
npm run dev
```

## Production build

For the `alescodes.github.io/matchfoodprivacy/` project page:

```sh
BASE_PATH=/matchfoodprivacy/ npm run build
```

The output is written to `dist/`. `BASE_PATH` can be changed for a different repository subpath or set to `/` for a root domain. The policy copy and effective date are in `src/privacy-policy.ts`; update the effective date to the actual first-publication date when issuing a later policy revision.
