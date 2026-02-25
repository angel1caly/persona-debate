# Persona Debate

Stress-test your product ideas with AI-powered persona debates.

## Deploy on Render

Your app files (`index.html`, `config.js`) must be in **this repo root** so Render can serve them. If you see "Not found" when opening the Render link:

1. **Confirm files are in the repo**  
   This folder (`persona-debate`) is the Git root. It should contain:
   - `index.html`
   - `config.js`
   - `scripts/write-config-keys.js`
   - `render.yaml` (optional)

2. **Push to GitHub**  
   From this folder:
   ```bash
   git add index.html config.js scripts render.yaml README.md
   git commit -m "Add app files for Render"
   git push origin main
   ```

3. **Render Dashboard**
   - **Build Command:** `node scripts/write-config-keys.js`
   - **Publish Directory:** `.` (leave default if it’s the repo root)
   - **Environment:** Add variable `OPENAI_API_KEY` with your OpenAI API key (the build script writes it into `config-keys.js`).

4. **Redeploy**  
   Trigger a new deploy after saving settings. The site should load at your Render URL.

## Local development

Open `index.html` in a browser. For the API to work, create a `config-keys.js` in this folder with:

```js
const CONFIG_KEYS = { OPENAI_API_KEY: 'your-key-here' };
```

(Do not commit `config-keys.js`; add it to `.gitignore`.)
