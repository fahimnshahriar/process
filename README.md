# Dyeing Program Calculator

- `index.html` – the calculator (single file, no build step)
- `Code.gs` – Google Apps Script for saving processes to a Google Sheet (optional)

## Deploy on GitHub Pages
1. Create a new repository on github.com (for example `dyeing-calc`).
2. Upload `index.html`, `Code.gs` and `README.md` (Add file, then Upload files).
3. Go to Settings, then Pages. Under Source choose "Deploy from a branch", branch `main`, folder `/ (root)`, then Save.
4. After about a minute the site is live at `https://YOUR-USERNAME.github.io/dyeing-calc/`.

## Google Sheet saving
1. Create a Google Sheet, then Extensions, then Apps Script. Paste `Code.gs`, change `KEY`.
2. Deploy, then New deployment, type Web app, Execute as Me, Who has access Anyone. Copy the `/exec` URL.
3. Open the site, go to the Saved tab, paste the URL and the same key, press Save settings, then Sync now.

Note: the key is stored in the browser and sent with each request. Do not commit your real key to a public repository.
