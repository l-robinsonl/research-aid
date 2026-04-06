# Study Aid Workbench

Study Aid Workbench is a local-first reading and writing workspace for papers, articles, and course documents.

It combines:

- a module-scoped source library
- an embedded reading canvas
- citation and metadata editing
- per-paper notes
- section-based draft writing
- document chat against the active source
- support for both remote OpenAI-compatible APIs and local model servers such as LM Studio

The app is a browser-only Vite/React project with its working state stored in the browser.

Tested locally with LM Studio as the model backend.

## What It Does

- Organise work by module instead of keeping everything in one flat list.
- Import sources from a URL, by choosing local files, or by dragging files into the app.
- Keep sources linked to one or more custom sections.
- Edit title, author, year, publisher, URL, and citation fields directly.
- Attach a local document to a source so chat can use the actual document text rather than metadata alone.
- Keep paper-specific notes in a floating markdown editor.
- Keep section-based draft notes in a separate floating markdown editor.
- Chat with the active document in a floating AI panel.
- Persist chat per paper, scoped to the current module.
- Render assistant output with Markdown, sanitized HTML, and LaTeX.
- Switch between remote and local OpenAI-compatible chat endpoints.

## Current Workspace Model

- `Module`: top-level workspace boundary.
- `Source`: a paper, article, PDF, or imported document.
- `Section`: a custom grouping for saved sources and draft work.
- `Paper Notes`: notes stored per source.
- `Draft Notes`: notes stored per section, plus a general draft section.
- `Chat`: stored per source inside the active module.

This means the same paper can have different notes and chat history in different modules.

## Quick Start

1. Install dependencies:

```bash
npm install
```

2. Start the app:

```bash
npm run dev
```

3. Open the local URL shown by Vite in your browser.

4. Build a production bundle when needed:

```bash
npm run build
```

## Typical Flow

1. Create or choose a module from the header.
2. Paste a paper URL into the top bar or choose local documents.
3. Save the active source into `Sources` when its metadata looks right.
4. Create sections in `Section Links` and link saved sources to them.
5. Open `Paper Notes` for source-specific notes.
6. Open `Draft Notes` for section writing.
7. Open `AI Chat` to ask questions about the active document.

## AI Setup

The app talks to OpenAI-compatible chat endpoints.

The current setup has been tested with LM Studio. In practice, any backend that exposes a sufficiently OpenAI-compatible chat API should be a reasonable candidate as well, but LM Studio is the one that has actually been verified in this project.

### Remote mode

Use this for hosted APIs.

- Set `Base URL` to your API endpoint, for example `https://api.openai.com/v1`
- Enter an API key
- Choose or type a model ID

### Local mode

Use this for local model servers such as LM Studio.

- Set `Base URL` to your local server endpoint
- No API key is required
- Fetch models or type the model ID directly

If another local server exposes an OpenAI-compatible API, it will probably work here too, but that should be treated as compatible-in-principle rather than confirmed unless you test it.

The `Document context limit` controls how much extracted source text is sent into chat.

## Supported Inputs

The file picker currently accepts:

- PDF
- DOCX
- ODT
- HTML / HTM
- TXT
- Markdown
- RTF
- XML
- JSON

Text extraction quality depends on the format and what the browser can read client-side.

## Storage And Privacy

This project is browser-local by default.

- Most state is stored in `localStorage`
- persisted file attachments are stored in `IndexedDB`
- no backend is required for the core workflow

Important implications:

- data is tied to the current browser profile unless you add your own export/sync layer
- clearing browser storage will remove saved workspace state
- local files only become chat-readable after you import or attach the actual file contents

## UI Overview

- Left column: module library and source list
- Center: reading canvas and drag/drop document viewer
- Right column: metadata, section links, and AI configuration
- Bottom-right dock: `Paper Notes`, `Draft Notes`, and `AI Chat`

## Known Limitations

- Some publisher sites block iframe embedding, so their pages may need to be downloaded and imported manually.
- Browser-based local file handling is limited; raw filesystem paths are not enough for chat unless the file contents are actually attached.
- This is currently a client-side app with browser persistence, not a synced multi-user system.

## Project Structure

- [src/App.jsx](src/App.jsx): shell layout and top bar
- [src/components/LeftSidebar.jsx](src/components/LeftSidebar.jsx): module/source library
- [src/components/MainWorkspace.jsx](src/components/MainWorkspace.jsx): reading canvas and document import surface
- [src/components/RightSidebar.jsx](src/components/RightSidebar.jsx): metadata, section links, and AI controls
- [src/components/ChatWidget.jsx](src/components/ChatWidget.jsx): floating notes, draft, and chat panels
- [src/core/studyAidCore.js](src/core/studyAidCore.js): app state and controller logic

## Status

The project is functional, but still evolving quickly. Expect UI and storage details to change as the workflow is refined.
