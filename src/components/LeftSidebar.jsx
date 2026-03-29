import { createStudyAidHandler } from "../lib/studyAidActions";

export function LeftSidebar() {
    return (
        <aside className="refs">
            <div className="section-header">
                <div className="section-header-title">Module Sections &amp; Sources</div>
                <div className="section-header-tools">
                    <label>
                        Sources
                        <select id="article-filter-select">
                            <option value="all">All</option>
                            <option value="linked">Linked</option>
                            <option value="unlinked">Unlinked</option>
                        </select>
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
            <div className="scroll-area" id="list"></div>
        </aside>
    );
}
