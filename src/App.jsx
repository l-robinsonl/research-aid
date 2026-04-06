import { useStudyAidCore } from "./hooks/useStudyAidCore";
import { createStudyAidHandler } from "./lib/studyAidActions";
import { ChatWidget } from "./components/ChatWidget";
import { CreateModuleModal } from "./components/CreateModuleModal";
import { LeftSidebar } from "./components/LeftSidebar";
import { MainWorkspace } from "./components/MainWorkspace";
import { RightSidebar } from "./components/RightSidebar";

export default function App() {
    useStudyAidCore();

    return (
        <>
            <div className="wrapper app-shell" id="layout">
                <header className="app-topbar">
                    <div className="app-brand">
                        <span className="app-brand-eyebrow">Research Atelier</span>
                        <strong className="app-brand-title">Study Aid Workbench</strong>
                    </div>
                    <div className="app-topbar-center">
                        <div className="app-import-toolbar">
                            <input
                                id="url-input"
                                className="app-import-input"
                                type="url"
                                placeholder="Paste a paper, article, or PDF URL"
                            />
                            <button
                                className="btn"
                                type="button"
                                onClick={createStudyAidHandler("openTypedUrl")}
                            >
                                Open URL
                            </button>
                            <button
                                className="btn secondary"
                                type="button"
                                onClick={createStudyAidHandler("openPdfPicker", "import")}
                            >
                                Choose Documents
                            </button>
                        </div>
                    </div>
                    <div className="app-topbar-actions">
                        <div className="app-module-switcher">
                            <label htmlFor="module-select">Module</label>
                            <select id="module-select"></select>
                        </div>
                        <button
                            className="btn secondary compact"
                            type="button"
                            onClick={createStudyAidHandler("openCreateModuleModal")}
                        >
                            New Module
                        </button>
                        <button
                            className="btn secondary compact"
                            type="button"
                            onClick={createStudyAidHandler("exportWorkspace")}
                        >
                            Export Workspace
                        </button>
                        <button
                            className="btn secondary compact"
                            type="button"
                            onClick={createStudyAidHandler("openWorkspaceImportPicker")}
                        >
                            Import .saw
                        </button>
                        <div className="app-active-source">
                            <span className="app-active-source-label">Active source</span>
                            <strong id="cur-name">None</strong>
                        </div>
                        <button
                            className="theme-toggle-btn"
                            id="theme-toggle-btn"
                            type="button"
                            onClick={createStudyAidHandler("toggleTheme")}
                        >
                            Dark Mode
                        </button>
                    </div>
                </header>
                <LeftSidebar />
                <MainWorkspace />
                <RightSidebar />
            </div>
            <ChatWidget />
            <CreateModuleModal />
            <input
                className="hidden-input"
                id="workspace-import-input"
                type="file"
                accept=".saw,.json,application/json"
            />
        </>
    );
}
