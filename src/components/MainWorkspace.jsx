import { createStudyAidHandler } from "../lib/studyAidActions";

const fileAccept =
    ".pdf,.docx,.odt,.html,.htm,.txt,.md,.markdown,.rtf,.xml,.json,text/plain,text/html,application/pdf,application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/vnd.oasis.opendocument.text,application/rtf";

export function MainWorkspace() {
    return (
        <main id="drop-area">
            <div className="toolbar">
                <div className="toolbar-left">
                    <div className="toolbar-status">
                        <span>
                            <b>Active:</b> <span id="cur-name">None</span>
                        </span>
                        <div className="module-picker">
                            <label htmlFor="module-select">Module</label>
                            <select id="module-select"></select>
                            <button
                                className="btn secondary"
                                type="button"
                                onClick={createStudyAidHandler("openCreateModuleModal")}
                            >
                                New
                            </button>
                        </div>
                    </div>
                    <div className="toolbar-subactions">
                        <input
                            id="url-input"
                            type="url"
                            placeholder="Paste a source URL if you want to load it directly"
                        />
                        <button
                            className="btn"
                            type="button"
                            onClick={createStudyAidHandler("openTypedUrl")}
                        >
                            Open URL
                        </button>
                        <button
                            className="btn muted"
                            type="button"
                            onClick={createStudyAidHandler("openPdfPicker", "import")}
                        >
                            Import Document
                        </button>
                    </div>
                </div>
                <div className="toolbar-actions">
                    <button
                        className="theme-toggle-btn"
                        id="theme-toggle-btn"
                        type="button"
                        onClick={createStudyAidHandler("toggleTheme")}
                    >
                        Dark Mode
                    </button>
                </div>
            </div>
            <div className="viewer-help" id="viewer-help">
                Use the source list, paste a URL, or drop documents anywhere in this window. Some
                library and publisher sites refuse iframe embedding, so download the file in your
                browser and import it here.
            </div>
            <div className="viewer-shell">
                <button
                    className="edge-toggle edge-toggle-left"
                    id="toggle-left-btn"
                    type="button"
                    onClick={createStudyAidHandler("toggleRefsColumn")}
                    aria-label="Toggle left column"
                    title="Hide left column"
                >
                    {"<"}
                </button>
                <button
                    className="edge-toggle edge-toggle-right"
                    id="toggle-right-btn"
                    type="button"
                    onClick={createStudyAidHandler("toggleToolsColumn")}
                    aria-label="Toggle right column"
                    title="Hide right column"
                >
                    {">"}
                </button>
                <iframe id="viewer" title="Reading viewer"></iframe>
                <div className="viewer-empty" id="viewer-empty">
                    <strong>Drop document files here</strong>
                    <span>
                        Imported documents appear in Sources for this session and are parsed into
                        plain text for AI chat context.
                    </span>
                </div>
                <div className="viewer-overlay" id="viewer-overlay">
                    <strong>Release to import document</strong>
                    <span>
                        The file will be attached locally and parsed into plain text where
                        supported.
                    </span>
                </div>
            </div>
            <input className="hidden-input" id="pdf-input" type="file" accept={fileAccept} multiple />
        </main>
    );
}
