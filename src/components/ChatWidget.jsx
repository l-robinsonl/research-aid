import { createStudyAidHandler } from "../lib/studyAidActions";
import { MarkdownToolbar } from "./MarkdownToolbar";

export function ChatWidget() {
    return (
        <>
            <div className="floating-launchers">
                <button
                    className="floating-editor-launcher paper-notes-launcher"
                    id="paper-notes-launcher"
                    type="button"
                    onClick={createStudyAidHandler("togglePaperNotesExpanded")}
                >
                    Paper Notes
                </button>
                <button
                    className="floating-editor-launcher draft-launcher"
                    id="draft-launcher"
                    type="button"
                    onClick={createStudyAidHandler("toggleDraftPanelDetached")}
                >
                    Draft Notes
                </button>
                <button
                    className="chat-launcher"
                    id="chat-launcher"
                    type="button"
                    onClick={createStudyAidHandler("toggleChatWidget")}
                >
                    AI Chat
                </button>
            </div>

            <section className="editor-widget paper-notes-card" id="paper-notes-widget" aria-hidden="true">
                <div className="editor-widget-header">
                    <div className="editor-widget-title">
                        <strong>Paper Notes</strong>
                        <span id="paper-notes-status">Select a source to keep notes for that paper.</span>
                    </div>
                    <div className="editor-widget-actions">
                        <div className="mode-toggle" id="paper-notes-mode-toggle">
                            <button className="mode-chip is-active" type="button" data-editor-mode="edit">
                                Edit
                            </button>
                            <button className="mode-chip" type="button" data-editor-mode="preview">
                                Preview
                            </button>
                            <button className="mode-chip" type="button" data-editor-mode="split">
                                Split
                            </button>
                        </div>
                        <button
                            className="editor-widget-action"
                            id="paper-notes-size-btn"
                            type="button"
                            onClick={createStudyAidHandler("togglePaperNotesExpanded")}
                        >
                            Close
                        </button>
                    </div>
                </div>
                <MarkdownToolbar editorKey="paper-notes" />
                <div className="markdown-editor-body is-edit" id="paper-notes-body">
                    <textarea
                        className="markdown-editor-input"
                        id="paper-notes-input"
                        placeholder="Keep paper-specific notes, quotes, and takeaways here..."
                    ></textarea>
                    <div className="chat-markdown markdown-editor-preview is-empty" id="paper-notes-preview">
                        Select a source to preview paper notes.
                    </div>
                </div>
            </section>

            <section className="editor-widget draft-panel" id="draft-panel" aria-hidden="true">
                <div className="draft-panel-header editor-widget-header">
                    <div className="draft-panel-title editor-widget-title">
                        <strong>Draft Notes</strong>
                        <span id="draft-panel-section">General Draft</span>
                    </div>
                    <div className="draft-panel-actions editor-widget-actions">
                        <button
                            className="btn secondary draft-panel-add-reference"
                            type="button"
                            onClick={createStudyAidHandler("copyToNotes", "parenthetical")}
                        >
                            Add Reference
                        </button>
                        <button
                            className="btn success"
                            type="button"
                            onClick={createStudyAidHandler("downloadTxt")}
                        >
                            Download Draft (.md)
                        </button>
                        <button
                            className="editor-widget-action"
                            id="draft-detach-btn"
                            type="button"
                            onClick={createStudyAidHandler("toggleDraftPanelDetached")}
                        >
                            Close
                        </button>
                    </div>
                </div>
                <div className="draft-floating-meta">
                    <label className="editor-widget-label" htmlFor="draft-section-select">
                        Draft Section
                    </label>
                    <select id="draft-section-select"></select>
                    <div id="draft-status" className="status-text">
                        Draft notes are organised by section.
                    </div>
                </div>
                <div className="draft-panel-toolbar">
                    <div className="mode-toggle" id="draft-editor-mode-toggle">
                        <button className="mode-chip is-active" type="button" data-editor-mode="edit">
                            Edit
                        </button>
                        <button className="mode-chip" type="button" data-editor-mode="preview">
                            Preview
                        </button>
                        <button className="mode-chip" type="button" data-editor-mode="split">
                            Split
                        </button>
                    </div>
                    <div id="draft-markdown-status" className="status-text">
                        Markdown editing is enabled for the draft.
                    </div>
                </div>
                <MarkdownToolbar editorKey="draft" />
                <div className="draft-panel-body" id="draft-panel-body">
                    <div className="markdown-editor-body is-edit" id="draft-editor-body">
                        <textarea
                            className="markdown-editor-input"
                            id="notepad"
                            placeholder="Draft your notes here..."
                        ></textarea>
                        <div className="chat-markdown markdown-editor-preview is-empty" id="draft-preview">
                            Nothing to preview yet.
                        </div>
                    </div>
                </div>
            </section>

            <section className="chat-widget" id="chat-widget" aria-hidden="true">
                <div className="chat-widget-header">
                    <div className="chat-widget-title">
                        <strong>Document Chat</strong>
                        <span id="chat-source-label">No active document</span>
                    </div>
                    <div className="chat-widget-actions">
                        <button
                            className="chat-widget-action"
                            type="button"
                            onClick={createStudyAidHandler("clearChatMessages")}
                        >
                            New Chat
                        </button>
                        <button
                            className="chat-widget-action"
                            id="chat-expand-btn"
                            type="button"
                            onClick={createStudyAidHandler("toggleChatWidgetExpanded")}
                        >
                            Expand
                        </button>
                        <button
                            className="chat-widget-action"
                            id="chat-minimize-btn"
                            type="button"
                            onClick={createStudyAidHandler("toggleChatWidget", false)}
                        >
                            Minimize
                        </button>
                    </div>
                </div>
                <div className="chat-widget-status" id="chat-context-status">
                    Open a source or import a document to prepare document context.
                </div>
                <div className="chat-messages" id="chat-messages">
                    <div className="chat-empty" id="chat-empty">
                        Ask questions about the active document once text has been extracted.
                    </div>
                </div>
                <div className="chat-input-area">
                    <textarea
                        id="chat-input"
                        placeholder="Ask about the active document, its argument, methods, definitions, or findings..."
                    ></textarea>
                    <div className="button-stack">
                        <button
                            className="btn"
                            id="chat-send-btn"
                            type="button"
                            onClick={createStudyAidHandler("sendChatMessage")}
                        >
                            Ask About Document
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
}
