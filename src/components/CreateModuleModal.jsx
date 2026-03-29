export function CreateModuleModal() {
    return (
        <section className="module-modal" id="create-module-modal" aria-hidden="true">
            <div
                className="module-modal-card"
                role="dialog"
                aria-modal="true"
                aria-labelledby="create-module-title"
                aria-describedby="create-module-description"
            >
                <div className="module-modal-header">
                    <div className="module-modal-copy">
                        <div className="module-modal-eyebrow">Study Workspace</div>
                        <h2 className="module-modal-title" id="create-module-title">
                            Create a new module
                        </h2>
                        <p className="module-modal-description" id="create-module-description">
                            Give this module a clear name. Its sources, notes, draft sections, and
                            AI chat settings stay separate from the current workspace.
                        </p>
                    </div>
                    <button
                        className="module-modal-close"
                        id="create-module-close-btn"
                        type="button"
                        aria-label="Close create module dialog"
                    >
                        Close
                    </button>
                </div>
                <form className="module-modal-form" id="create-module-form">
                    <label className="module-modal-label" htmlFor="create-module-input">
                        Module name
                    </label>
                    <input
                        className="module-modal-input"
                        id="create-module-input"
                        type="text"
                        maxLength="80"
                        placeholder="e.g. Research Methods"
                        autoComplete="off"
                    />
                    <div className="module-modal-preview" aria-live="polite">
                        <span className="module-modal-preview-label">Workspace key</span>
                        <span className="module-modal-preview-key" id="create-module-preview">
                            Start typing to generate one.
                        </span>
                    </div>
                    <div className="module-modal-status" id="create-module-status">
                        Pick something short enough to spot quickly in the module picker.
                    </div>
                    <div className="module-modal-actions">
                        <button className="btn muted" id="create-module-cancel-btn" type="button">
                            Cancel
                        </button>
                        <button
                            className="btn success"
                            id="create-module-submit-btn"
                            type="submit"
                            disabled
                        >
                            Create Module
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}
