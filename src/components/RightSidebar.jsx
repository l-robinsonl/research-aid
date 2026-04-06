import { createStudyAidHandler } from "../lib/studyAidActions";
import { CollapsibleCard } from "./CollapsibleCard";

export function RightSidebar() {
    return (
        <aside className="tools">
            <div className="tools-intro">
                <span className="tools-intro-eyebrow">Workbench</span>
                <h2 className="tools-intro-title">Inspector &amp; AI</h2>
                <p className="tools-intro-copy">
                    Keep metadata, citations, section links, and AI behaviour connected to the
                    active paper while writing happens in the floating notes and draft panels.
                </p>
            </div>
            <div id="ref-box" className="ref-output"></div>

            <div className="tools-groups">
                <section className="tools-group">
                    <div className="tools-group-label">Source Control</div>
                    <CollapsibleCard
                        collapseId="reference-metadata"
                        title="Reference Metadata"
                        bodyId="reference-metadata-body"
                    >
                        <div className="meta-grid">
                            <label className="full">
                                Title
                                <input id="meta-title" type="text" placeholder="Source title" />
                            </label>
                            <label>
                                Author / organisation
                                <input id="meta-author" type="text" placeholder="Author or organisation" />
                            </label>
                            <label>
                                Year
                                <input id="meta-year" type="text" placeholder="2026" />
                            </label>
                            <label>
                                Publisher / journal
                                <input id="meta-publisher" type="text" placeholder="Publisher or journal" />
                            </label>
                            <label className="full">
                                Tags
                                <input
                                    id="meta-tags"
                                    type="text"
                                    placeholder="Comma-separated tags, e.g. class imbalance, ensemble methods"
                                />
                            </label>
                            <label className="full">
                                URL
                                <input id="meta-url" type="text" placeholder="Optional URL for the source" />
                            </label>
                            <label className="full">
                                Local document / viewer URL
                                <input
                                    id="meta-local-url"
                                    type="text"
                                    placeholder="file:///..., \\wsl.localhost\\Ubuntu\\..., /home/..., or localhost document URL"
                                />
                            </label>
                            <div className="status-text">
                                Blocked source? Paste a local document path or URL here, then attach it to
                                the active source. Raw `\\wsl.localhost\...`, `C:\...`, and `/home/...`
                                paths are converted automatically. If you want chat to read the full
                                document text, choose or import the file so the browser gets the actual
                                file contents.
                            </div>
                            <label className="full">
                                Full reference
                                <textarea
                                    id="ref-full-input"
                                    placeholder="Write or paste the final full reference here"
                                ></textarea>
                            </label>
                            <label className="full">
                                Narrative reference
                                <input
                                    id="ref-narrative-input"
                                    type="text"
                                    placeholder="Example: Smith (2024)"
                                />
                            </label>
                            <label className="full">
                                Parenthetical reference
                                <input
                                    id="ref-parenthetical-input"
                                    type="text"
                                    placeholder="Example: (Smith, 2024)"
                                />
                            </label>
                        </div>
                        <div className="status-text">
                            Edit any citation field directly when the detected author, year, or title is
                            wrong, then save it against the active source.
                        </div>
                        <div className="button-stack">
                            <button
                                className="btn"
                                type="button"
                                onClick={createStudyAidHandler("generateReference")}
                            >
                                Generate Citation
                            </button>
                            <button
                                className="btn"
                                type="button"
                                onClick={createStudyAidHandler("saveReferenceToPaper")}
                            >
                                Save Citation To Source
                            </button>
                        </div>
                        <div className="button-stack">
                            <button
                                className="btn secondary"
                                type="button"
                                onClick={createStudyAidHandler("attachLocalPdfToPaper")}
                            >
                                Attach Local Document To Source
                            </button>
                            <button
                                className="btn danger"
                                type="button"
                                onClick={createStudyAidHandler("clearLocalOverride")}
                            >
                                Remove Attached Local Copy
                            </button>
                        </div>
                        <div className="button-stack">
                            <button
                                className="btn"
                                id="save-article-btn"
                                type="button"
                                onClick={createStudyAidHandler("saveCurrentSourceToList")}
                                disabled
                            >
                                Save This Source To Sources
                            </button>
                            <button
                                className="btn danger"
                                id="delete-article-btn"
                                type="button"
                                onClick={createStudyAidHandler("removeCurrentCustomSource")}
                                disabled
                            >
                                Delete From Sources
                            </button>
                        </div>
                        <div className="button-row triple">
                            <button
                                className="btn"
                                type="button"
                                onClick={createStudyAidHandler("copyToNotes", "full")}
                            >
                                Insert Full Citation
                            </button>
                            <button
                                className="btn secondary"
                                type="button"
                                onClick={createStudyAidHandler("copyToNotes", "narrative")}
                            >
                                Insert Narrative
                            </button>
                            <button
                                className="btn secondary"
                                type="button"
                                onClick={createStudyAidHandler("copyToNotes", "parenthetical")}
                            >
                                Insert Parenthetical
                            </button>
                        </div>
                        <div id="meta-status" className="status-text">
                            Select a source or drop a document to auto-fill this panel.
                        </div>
                    </CollapsibleCard>

                    <CollapsibleCard collapseId="section-links" title="Section Links" bodyId="section-links-body">
                        <div className="meta-grid">
                            <label className="full">
                                Section target
                                <select id="section-link-select"></select>
                            </label>
                            <label className="full">
                                New custom section
                                <input
                                    id="new-section-name"
                                    type="text"
                                    placeholder="Create a section for your draft and linked sources"
                                />
                            </label>
                            <div className="link-summary" id="linked-sections-summary"></div>
                        </div>
                        <div className="button-stack">
                            <button
                                className="btn secondary"
                                type="button"
                                onClick={createStudyAidHandler("linkActiveSourceToSelectedSection")}
                            >
                                Link To Section
                            </button>
                            <button
                                className="btn danger"
                                type="button"
                                onClick={createStudyAidHandler("unlinkActiveSourceFromSelectedSection")}
                            >
                                Unlink From Section
                            </button>
                        </div>
                        <div className="button-stack">
                            <button
                                className="btn success"
                                type="button"
                                onClick={createStudyAidHandler("createCustomSection")}
                            >
                                Create Section
                            </button>
                            <button
                                className="btn danger"
                                type="button"
                                onClick={createStudyAidHandler("deleteSelectedSection")}
                            >
                                Delete Selected Section
                            </button>
                        </div>
                        <div id="linked-sections-status" className="status-text">
                            Saved sources live in Sources and can be linked into one or more sections.
                        </div>
                    </CollapsibleCard>
                </section>

                <section className="tools-group">
                    <div className="tools-group-label">AI Workspace</div>
                    <CollapsibleCard collapseId="ai-chat-config" title="AI Chat Config" bodyId="ai-chat-config-body">
                        <div className="meta-grid">
                            <label className="full">
                                Mode
                                <div className="mode-toggle" id="ai-mode-toggle">
                                    <button className="mode-chip" type="button" data-ai-mode="remote">
                                        Remote
                                    </button>
                                    <button className="mode-chip" type="button" data-ai-mode="local">
                                        Local
                                    </button>
                                </div>
                            </label>
                            <label className="full">
                                Base URL
                                <input
                                    id="ai-base-url"
                                    type="text"
                                    placeholder="https://api.openai.com/v1 or your LM Studio tunnel"
                                />
                            </label>
                            <label className="full" id="ai-api-key-row">
                                API key
                                <input id="ai-api-key" type="password" placeholder="Required for remote OpenAI" />
                            </label>
                            <label className="full">
                                Model
                                <input
                                    id="ai-model"
                                    type="text"
                                    placeholder="gpt-4.1-mini or your local model id"
                                />
                            </label>
                            <label className="full">
                                Available models
                                <select id="ai-model-list">
                                    <option value="">Fetch models for this endpoint</option>
                                </select>
                            </label>
                            <label className="full">
                                Document context limit (chars)
                                <input
                                    id="ai-context-limit"
                                    type="number"
                                    min="12000"
                                    max="500000"
                                    step="1000"
                                    inputMode="numeric"
                                    placeholder="60000"
                                />
                            </label>
                        </div>
                        <div className="button-stack">
                            <button
                                className="btn secondary"
                                id="ai-fetch-models-btn"
                                type="button"
                            >
                                Fetch Models
                            </button>
                        </div>
                        <div id="ai-config-status" className="status-text">
                            Remote mode uses an OpenAI-compatible base URL and API key. Local mode uses
                            the same chat endpoint without an API key.
                        </div>
                    </CollapsibleCard>

                    <CollapsibleCard
                        collapseId="ai-instructions"
                        title="AI Instructions"
                        bodyId="ai-instructions-body"
                    >
                        <div className="meta-grid">
                            <label className="full">
                                Active saved instruction
                                <select id="ai-instruction-select">
                                    <option value="">No extra instruction</option>
                                </select>
                            </label>
                            <div className="link-summary instruction-summary" id="ai-instruction-summary"></div>
                            <label className="full">
                                Instruction name
                                <input
                                    id="ai-instruction-name"
                                    type="text"
                                    maxLength="80"
                                    placeholder="e.g. Summarise"
                                />
                            </label>
                            <label className="full">
                                Instruction text
                                <textarea
                                    id="ai-instruction-text"
                                    placeholder="Example: Summarise the document in plain English using concise bullet points and highlight the key arguments, methods, and limitations."
                                ></textarea>
                            </label>
                        </div>
                        <div className="button-stack">
                            <button className="btn success" id="ai-instruction-save-btn" type="button">
                                Save Instruction
                            </button>
                            <button className="btn secondary" id="ai-instruction-new-btn" type="button">
                                New Blank
                            </button>
                        </div>
                        <div className="button-stack">
                            <button className="btn danger" id="ai-instruction-delete-btn" type="button">
                                Delete Selected Instruction
                            </button>
                        </div>
                        <div id="ai-instruction-status" className="status-text">
                            Save named instruction presets and switch between them when you want different
                            chat behaviour.
                        </div>
                    </CollapsibleCard>
                </section>

            </div>
        </aside>
    );
}
