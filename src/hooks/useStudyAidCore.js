import { useEffect } from "react";

import { createStudyAidCore } from "../core/studyAidCore";

export function useStudyAidCore() {
    useEffect(() => {
        const core = createStudyAidCore();
        window.studyAidActions = core.actions;
        window.studyAidCore = core;
        void core.init();

        return () => {
            if (window.studyAidActions === core.actions) {
                delete window.studyAidActions;
            }
            if (window.studyAidCore === core) {
                delete window.studyAidCore;
            }
        };
    }, []);
}
