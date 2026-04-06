import { createStudyAidHandler } from "../lib/studyAidActions";

export function LeftSidebar() {
    return (
        <aside className="refs">
            <div className="section-header">
                <div className="section-header-eyebrow">Collections</div>
                <div className="section-header-title">Module Library</div>
                <div className="section-header-copy">
                    Organise sources by section, keep module-specific reading stacks, and jump back
                    into any paper with its notes and chat intact.
                </div>
                <div className="section-header-tools">
                    <label>
                        Sources
                        <select id="article-filter-select">
                            <option value="all">All</option>
                            <option value="linked">Linked</option>
                            <option value="unlinked">Unlinked</option>
                        </select>
                    </label>
                    <label>
                        Tags
                        <input
                            id="article-tag-filter-input"
                            type="text"
                            placeholder="e.g. class imbalance"
                        />
                    </label>
                    <button
                        className="section-header-btn"
                        id="undo-delete-btn"
                        type="button"
                        onClick={createStudyAidHandler("undoDeleteArticle")}
                        disabled
                    >
                        Undo Delete
                    </button>
                </div>
            </div>
            <div className="scroll-area">
                <div className="library-list" id="list"></div>
            </div>
        </aside>
    );
}
