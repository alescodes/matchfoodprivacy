# Match Food Privacy Policy

Standalone, mobile-friendly privacy policy site for Match Food. The public site is a static GitHub Pages website; it has no application server or database.

- Public URL: <https://alescodes.github.io/matchfoodprivacy/>
- Source application: [`website-source/`](website-source/)
- Published static files: repository root (`index.html` and `assets/`)
- Effective date in this release: 26 November 2026

## Rebuild the site

The source app is an ordinary Vite + React project and does not require Replit at runtime.

```sh
cd website-source
npm install
BASE_PATH=/matchfoodprivacy/ npm run build
```

The generated static site is in `website-source/dist/`. To publish another version using the repository-root GitHub Pages source, copy the contents of that folder to the repository root and commit them. For a different host or URL prefix, set `BASE_PATH` to that host's path prefix (use `/` for a root domain).

## Hosting and privacy

GitHub Pages serves the files in this repository as static content. The site does not run a Match Food backend, receive game saves, or depend on Replit at runtime. GitHub may process ordinary web request data as the hosting provider; see the policy for provider details. No paid hosting, custom domain, database, or external runtime API is configured.

The `source/` application and built files include only the privacy site, its policy text, and its approved logo/food artwork. They do not include the private Match Food game repository or player save files.
