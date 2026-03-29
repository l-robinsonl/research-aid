import { useStudyAidCore } from "./hooks/useStudyAidCore";
import { ChatWidget } from "./components/ChatWidget";
import { CreateModuleModal } from "./components/CreateModuleModal";
import { LeftSidebar } from "./components/LeftSidebar";
import { MainWorkspace } from "./components/MainWorkspace";
import { RightSidebar } from "./components/RightSidebar";

export default function App() {
    useStudyAidCore();

    return (
        <>
            <div className="wrapper" id="layout">
                <LeftSidebar />
                <MainWorkspace />
                <RightSidebar />
            </div>
            <ChatWidget />
            <CreateModuleModal />
        </>
    );
}
