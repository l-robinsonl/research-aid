import { createStudyAidHandler } from "../lib/studyAidActions";

const toolbarButtons = [
    { action: "heading", label: "H2", title: "Heading" },
    { action: "bold", label: "B", title: "Bold" },
    { action: "italic", label: "I", title: "Italic" },
    { action: "link", label: "Link", title: "Link" },
    { action: "quote", label: ">", title: "Quote" },
    { action: "bullet-list", label: "UL", title: "Bulleted list" },
    { action: "number-list", label: "1.", title: "Numbered list" },
    { action: "code", label: "Code", title: "Code" },
    { action: "divider", label: "---", title: "Divider" },
];

function keepEditorSelection(event) {
    event.preventDefault();
}

export function MarkdownToolbar({ editorKey }) {
    return (
        <div className="markdown-toolbar" data-markdown-toolbar={editorKey} role="toolbar" aria-label="Markdown formatting toolbar">
            {toolbarButtons.map((button) => (
                <button
                    key={`${editorKey}-${button.action}`}
                    className="markdown-toolbar-btn"
                    type="button"
                    title={button.title}
                    aria-label={button.title}
                    onMouseDown={keepEditorSelection}
                    onClick={createStudyAidHandler("applyMarkdownFormat", editorKey, button.action)}
                >
                    {button.label}
                </button>
            ))}
        </div>
    );
}
