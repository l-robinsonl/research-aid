# Study Aid

Blank reusable version of `readingreference.html`, now split into a Vite/React app instead of a single monolithic HTML file.

Run it locally with:

1. `npm install`
2. `npm run dev`

Build a production bundle with `npm run build`.

Once the app is running in the browser:

1. Create your own sections in the `Section Links` panel.
2. Paste URLs or import documents into `Sources`.
3. Link saved sources into one or more sections.
4. Draft notes in the built-in editor and use the AI chat against the active document.

Notes:

- The starter catalogue is intentionally empty. No hardcoded sections or sources are included.
- Browser storage for this version uses fresh `study_aid_*` keys, so it will not reuse the old `readingreference.html` data.
- If you want a separate workspace per module, copy this folder and run the copied app separately.
- The existing DOM IDs and class names were preserved so the extracted controller logic continues to behave like the original static version.
