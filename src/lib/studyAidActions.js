export function callStudyAid(actionName, ...args) {
    const action = window.studyAidActions?.[actionName];
    if (typeof action !== "function") {
        return undefined;
    }

    return action(...args);
}

export function createStudyAidHandler(actionName, ...args) {
    return () => {
        callStudyAid(actionName, ...args);
    };
}
