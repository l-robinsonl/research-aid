import { createStudyAidHandler } from "../lib/studyAidActions";

const fileAccept =
    ".pdf,.docx,.odt,.html,.htm,.txt,.md,.markdown,.rtf,.xml,.json,text/plain,text/html,application/pdf,application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/vnd.oasis.opendocument.text,application/rtf";

export function MainWorkspace() {
    return (
        <main id="drop-area" className="atelier-main">
            <section className="viewer-stage">
                <div className="viewer-stage-header">
                    <div className="viewer-stage-copy">
                        <span className="viewer-stage-eyebrow">Reading Canvas</span>
                        <h2 className="viewer-stage-title">Document Viewer</h2>
                    </div>
                    <div className="viewer-stage-actions">
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
                    </div>
                </div>
                <div className="viewer-help-card">
                    <div className="viewer-help-label">Context status</div>
                    <div className="viewer-help" id="viewer-help">
                        Use the source list, paste a URL in the header, choose documents, or drop
                        files anywhere in this window. Some library and publisher sites refuse
                        iframe embedding, so download the file in your browser and import it here.
                    </div>
                </div>
                <div className="viewer-shell">
                    <iframe id="viewer" title="Reading viewer"></iframe>
                    <div className="viewer-empty" id="viewer-empty">
                        <strong>Drop document files here</strong>
                        <span>
                            Imported documents appear in Sources for this session and are parsed
                            into plain text for AI chat context.
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
            </section>
            <input className="hidden-input" id="pdf-input" type="file" accept={fileAccept} multiple />
        </main>
    );
}
