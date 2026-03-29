import { createStudyAidHandler } from "../lib/studyAidActions";

export function ChatWidget() {
    return (
        <>
            <button
                className="chat-launcher"
                id="chat-launcher"
                type="button"
                onClick={createStudyAidHandler("toggleChatWidget")}
            >
                AI Chat
            </button>
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
