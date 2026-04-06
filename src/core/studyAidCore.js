export function createStudyAidCore() {
    // Start blank. Create sections in the UI and save/import sources as you study each module.
    const catalogueData = [];

    const list = document.getElementById("list");
    const layout = document.getElementById("layout");
    const viewer = document.getElementById("viewer");
    const viewerEmpty = document.getElementById("viewer-empty");
    const viewerOverlay = document.getElementById("viewer-overlay");
    const viewerHelp = document.getElementById("viewer-help");
    const notepad = document.getElementById("notepad");
    const refBox = document.getElementById("ref-box");
    const urlInput = document.getElementById("url-input");
    const moduleSelect = document.getElementById("module-select");
    const pdfInput = document.getElementById("pdf-input");
    const workspaceImportInput = document.getElementById("workspace-import-input");
    const toggleLeftBtn = document.getElementById("toggle-left-btn");
    const toggleRightBtn = document.getElementById("toggle-right-btn");
    const curName = document.getElementById("cur-name");
    const articleFilterSelect = document.getElementById("article-filter-select");
    const articleTagFilterInput = document.getElementById("article-tag-filter-input");
    const undoDeleteBtn = document.getElementById("undo-delete-btn");
    const metaTitle = document.getElementById("meta-title");
    const metaAuthor = document.getElementById("meta-author");
    const metaYear = document.getElementById("meta-year");
    const metaPublisher = document.getElementById("meta-publisher");
    const metaTags = document.getElementById("meta-tags");
    const metaUrl = document.getElementById("meta-url");
    const metaLocalUrl = document.getElementById("meta-local-url");
    const metaAiPopulateBtn = document.getElementById("meta-ai-populate-btn");
    const saveArticleBtn = document.getElementById("save-article-btn");
    const deleteArticleBtn = document.getElementById("delete-article-btn");
    const refFullInput = document.getElementById("ref-full-input");
    const refNarrativeInput = document.getElementById("ref-narrative-input");
    const refParentheticalInput = document.getElementById("ref-parenthetical-input");
    const metaStatus = document.getElementById("meta-status");
    const sectionLinkSelect = document.getElementById("section-link-select");
    const newSectionNameInput = document.getElementById("new-section-name");
    const linkedSectionsSummary = document.getElementById("linked-sections-summary");
    const linkedSectionsStatus = document.getElementById("linked-sections-status");
    const draftSectionSelect = document.getElementById("draft-section-select");
    const draftStatus = document.getElementById("draft-status");
    const draftPanel = document.getElementById("draft-panel");
    const draftPanelHeader = draftPanel?.querySelector(".draft-panel-header");
    const draftPanelSection = document.getElementById("draft-panel-section");
    const draftDetachBtn = document.getElementById("draft-detach-btn");
    const draftEditorModeToggle = document.getElementById("draft-editor-mode-toggle");
    const draftEditorBody = document.getElementById("draft-editor-body");
    const draftPreview = document.getElementById("draft-preview");
    const draftMarkdownStatus = document.getElementById("draft-markdown-status");
    const paperNotesCard = document.querySelector(".paper-notes-card");
    const paperNotesHeader = paperNotesCard?.querySelector(".editor-widget-header");
    const paperNotesModeToggle = document.getElementById("paper-notes-mode-toggle");
    const paperNotesSizeBtn = document.getElementById("paper-notes-size-btn");
    const paperNotesBody = document.getElementById("paper-notes-body");
    const paperNotesInput = document.getElementById("paper-notes-input");
    const paperNotesPreview = document.getElementById("paper-notes-preview");
    const paperNotesStatus = document.getElementById("paper-notes-status");
    const themeToggleBtn = document.getElementById("theme-toggle-btn");
    const aiModeToggle = document.getElementById("ai-mode-toggle");
    const aiBaseUrl = document.getElementById("ai-base-url");
    const aiApiKeyRow = document.getElementById("ai-api-key-row");
    const aiApiKey = document.getElementById("ai-api-key");
    const aiModel = document.getElementById("ai-model");
    const aiModelList = document.getElementById("ai-model-list");
    const aiContextLimit = document.getElementById("ai-context-limit");
    const aiFetchModelsBtn = document.getElementById("ai-fetch-models-btn");
    const aiConfigStatus = document.getElementById("ai-config-status");
    const aiInstructionSelect = document.getElementById("ai-instruction-select");
    const aiInstructionSummary = document.getElementById("ai-instruction-summary");
    const aiInstructionName = document.getElementById("ai-instruction-name");
    const aiInstructionText = document.getElementById("ai-instruction-text");
    const aiInstructionSaveBtn = document.getElementById("ai-instruction-save-btn");
    const aiInstructionNewBtn = document.getElementById("ai-instruction-new-btn");
    const aiInstructionDeleteBtn = document.getElementById("ai-instruction-delete-btn");
    const aiInstructionStatus = document.getElementById("ai-instruction-status");
    const paperNotesLauncher = document.getElementById("paper-notes-launcher");
    const draftLauncher = document.getElementById("draft-launcher");
    const chatLauncher = document.getElementById("chat-launcher");
    const chatWidget = document.getElementById("chat-widget");
    const chatMinimizeBtn = document.getElementById("chat-minimize-btn");
    const chatSourceLabel = document.getElementById("chat-source-label");
    const chatContextStatus = document.getElementById("chat-context-status");
    const chatMessages = document.getElementById("chat-messages");
    const chatEmpty = document.getElementById("chat-empty");
    const chatInput = document.getElementById("chat-input");
    const chatSendBtn = document.getElementById("chat-send-btn");
    const chatExpandBtn = document.getElementById("chat-expand-btn");
    const createModuleModal = document.getElementById("create-module-modal");
    const createModuleForm = document.getElementById("create-module-form");
    const createModuleInput = document.getElementById("create-module-input");
    const createModulePreview = document.getElementById("create-module-preview");
    const createModuleStatus = document.getElementById("create-module-status");
    const createModuleSubmitBtn = document.getElementById("create-module-submit-btn");
    const createModuleCancelBtn = document.getElementById("create-module-cancel-btn");
    const createModuleCloseBtn = document.getElementById("create-module-close-btn");
    const collapsibleCards = Array.from(document.querySelectorAll("[data-collapse-id]"));
    const collapsibleCardToggles = Array.from(document.querySelectorAll("[data-collapse-target]"));

    const moduleRegistryStorageKey = "study_aid_module_registry_v1";
    const moduleScopedWorkspaceStorageBaseKeys = [
        "study_aid_section_drafts_v1",
        "study_aid_local_overrides_v1",
        "study_aid_custom_sources_v1",
        "study_aid_custom_sections_v1",
        "study_aid_source_link_overrides_v1",
        "study_aid_draft_panel_detached_v1",
        "study_aid_draft_panel_frame_v1",
        "study_aid_paper_notes_frame_v1",
        "study_aid_paper_notes_expanded_v1",
        "study_aid_active_source_v1",
        "study_aid_reference_overrides_v1",
        "study_aid_metadata_overrides_v1",
        "study_aid_attachment_meta_v1",
        "study_aid_ai_chat_config_v1",
        "study_aid_chat_threads_v1",
        "study_aid_right_panel_collapsed_v1",
        "study_aid_source_notes_v1",
    ];
    const workspaceSnapshotVersion = 1;
    const defaultModuleKey = "default";
    const moduleQueryParam = "module";
    const moduleRegistry = loadModuleRegistry();
    const activeModuleKey = resolveActiveModuleKey(moduleRegistry);
    const noteStorageKey = buildScopedStorageKey("study_aid_notes_v1");
    const sectionDraftStorageKey = buildScopedStorageKey("study_aid_section_drafts_v1");
    const localOverrideStorageKey = buildScopedStorageKey("study_aid_local_overrides_v1");
    const customSourcesStorageKey = buildScopedStorageKey("study_aid_custom_sources_v1");
    const customSectionsStorageKey = buildScopedStorageKey("study_aid_custom_sections_v1");
    const articleLinkOverrideStorageKey = buildScopedStorageKey("study_aid_source_link_overrides_v1");
    const draftPanelDetachedStorageKey = buildScopedStorageKey("study_aid_draft_panel_detached_v1");
    const draftPanelFrameStorageKey = buildScopedStorageKey("study_aid_draft_panel_frame_v1");
    const paperNotesFrameStorageKey = buildScopedStorageKey("study_aid_paper_notes_frame_v1");
    const paperNotesExpandedStorageKey = buildScopedStorageKey("study_aid_paper_notes_expanded_v1");
    const activeSourceStorageKey = buildScopedStorageKey("study_aid_active_source_v1");
    const referenceOverrideStorageKey = buildScopedStorageKey("study_aid_reference_overrides_v1");
    const metadataOverrideStorageKey = buildScopedStorageKey("study_aid_metadata_overrides_v1");
    const pdfAttachmentMetaStorageKey = buildScopedStorageKey("study_aid_attachment_meta_v1");
    const aiChatConfigStorageKey = buildScopedStorageKey("study_aid_ai_chat_config_v1");
    const chatThreadsStorageKey = buildScopedStorageKey("study_aid_chat_threads_v1");
    const rightPanelCollapseStorageKey = buildScopedStorageKey("study_aid_right_panel_collapsed_v1");
    const paperNotesStorageKey = buildScopedStorageKey("study_aid_source_notes_v1");
    const themeStorageKey = "study_aid_theme_v1";
    const chatWidgetExpandedStorageKey = "study_aid_chat_widget_expanded_v1";
    const pdfAttachmentDbName = "study_aid_pdf_attachments_v1";
    const pdfAttachmentStoreName = "attachments";
    const extraSectionKey = "extras";
    const generalDraftSectionKey = "general-draft";
    const defaultDocumentContextMaxChars = 60000;
    const minDocumentContextMaxChars = 12000;
    const maxDocumentContextMaxChars = 500000;
    const maxPersistedChatMessagesPerSource = 24;
    const frameBlockedHosts = [
        "cambridge.org",
        "doi.org",
        "ieeexplore.ieee.org",
        "jstor.org",
        "link.springer.com",
        "nature.com",
        "onlinelibrary.wiley.com",
        "sagepub.com",
        "sciencedirect.com",
        "tandfonline.com",
    ];

    migrateLegacyStorageForDefaultModule();

    const localOverrides = loadLocalOverrides();
    const metadataOverrides = loadMetadataOverrides();
    const referenceOverrides = loadReferenceOverrides();
    const articleLinkOverrides = loadArticleLinkOverrides();
    const persistedPdfAttachments = loadPersistedPdfAttachments();
    const customSections = loadCustomSections();
    const staticSectionDefs = catalogueData.map((section, sectionIndex) => ({
        key: `section-${sectionIndex}`,
        label: section.section,
    }));
    let nextTempId = 1;
    const staticSections = catalogueData.map((section, sectionIndex) => ({
        ...section,
        key: staticSectionDefs[sectionIndex].key,
        papers: section.papers.map((paper, paperIndex) => normalizePaper({
            ...paper,
            id: `static-${sectionIndex}-${paperIndex}`,
            sectionKey: staticSectionDefs[sectionIndex].key,
        })),
    }));

    const customSources = loadCustomSources();
    migrateCustomSourcesIntoStaticArticles();
    const aiChatConfig = loadAiChatConfig();
    const documentContextCache = new Map();
    let currentRef = { full: "", narrative: "", parenthetical: "" };
    let activeSource = null;
    let collapsedRightPanels = loadCollapsedRightPanels();
    let chatThreadsBySource = loadChatThreadsBySource();
    let paperNotesBySource = loadPaperNotesBySource();
    let sectionDrafts = loadSectionDrafts();
    let activeDraftSectionKey = generalDraftSectionKey;
    let draftPanelDetached = loadDraftPanelDetached();
    let draftPanelFrame = loadDraftPanelFrame();
    let paperNotesFrame = loadPaperNotesFrame();
    let draftEditorMode = "edit";
    let paperNotesEditorMode = "edit";
    let paperNotesExpanded = loadPaperNotesExpanded();
    let draftPanelDragState = null;
    let paperNotesDragState = null;
    let dragDepth = 0;
    let pdfPickerMode = "import";
    let articleFilter = articleFilterSelect ? articleFilterSelect.value : "all";
    let articleTagFilter = articleTagFilterInput ? articleTagFilterInput.value : "";
    let pdfAttachmentDbPromise = null;
    const deletedArticleHistory = [];
    let chatWidgetOpen = false;
    let chatWidgetExpanded = loadChatWidgetExpanded();
    let chatThread = [];
    let chatDocumentSourceId = "";
    let activeDocumentContext = buildEmptyDocumentContext();
    let activeDocumentContextPromise = null;
    let viewerLoadedSourceId = "";
    let viewerLoadedUrl = "";
    let chatRequestInFlight = false;
    let chatRequestToken = 0;
    let chatStatusMessage = "";
    let chatResponseReady = false;
    let chatAudioContext = null;
    let aiModelsLoading = false;
    let aiModelsRequestToken = 0;
    let aiConfigStatusMessage = "";
    let aiInstructionStatusMessage = "";
    let aiInstructionEditorPresetId = "";
    let metadataAiRequestInFlight = false;
    let metadataAiRequestToken = 0;
    let activeTheme = loadThemePreference();
    let createModuleModalReturnFocus = null;

    async function init() {
        applyTheme(activeTheme);
        configureExternalDocumentLibraries();
        await prunePersistedPdfAttachments();
        await restorePersistedPdfAttachments();
        renderModuleSelector();
        renderSectionLinkOptions();
        renderDraftSectionOptions();
        renderList();
        renderAiConfig();
        initializeAiInstructionEditor();
        renderAiInstructions();
        renderChatWidget();
        renderCreateModuleModal();
        bindEvents();
        renderCollapsibleSections();
        updateUndoDeleteButton();
        updateSaveToArticlesButtonState(null);
        updateDeleteArticleButtonState(null);
        updateColumnToggleButtons();
        setDraftPanelDetached(draftPanelDetached, { persist: false });
        setPaperNotesExpanded(paperNotesExpanded, { persist: false });
        setDraftEditorMode(draftEditorMode);
        setPaperNotesEditorMode(paperNotesEditorMode);
        renderPaperNotesEditor();
        maybeAutoFetchAiModels();
        clearActive();
    }

    function loadThemePreference() {
        try {
            return localStorage.getItem(themeStorageKey) === "dark" ? "dark" : "light";
        } catch (error) {
            return "light";
        }
    }

    function buildScopedStorageKey(baseKey) {
        return `${baseKey}__${activeModuleKey}`;
    }

    function buildScopedStorageKeyForModule(baseKey, moduleKey) {
        return `${baseKey}__${normalizeModuleKey(moduleKey) || defaultModuleKey}`;
    }

    function loadModuleRegistry() {
        const fallback = [{ key: defaultModuleKey, label: "Default Module" }];

        try {
            const raw = localStorage.getItem(moduleRegistryStorageKey);
            if (!raw) {
                return fallback;
            }

            const parsed = JSON.parse(raw);
            if (!Array.isArray(parsed)) {
                return fallback;
            }

            const uniqueByKey = new Map();
            parsed.forEach((entry) => {
                const key = normalizeModuleKey(entry && entry.key);
                const label = String(entry && entry.label ? entry.label : "").trim();
                if (!key || !label || uniqueByKey.has(key)) {
                    return;
                }
                uniqueByKey.set(key, { key, label });
            });

            if (!uniqueByKey.has(defaultModuleKey)) {
                uniqueByKey.set(defaultModuleKey, { key: defaultModuleKey, label: "Default Module" });
            }

            return Array.from(uniqueByKey.values());
        } catch (error) {
            return fallback;
        }
    }

    function saveModuleRegistry() {
        localStorage.setItem(moduleRegistryStorageKey, JSON.stringify(moduleRegistry));
    }

    function normalizeModuleKey(value) {
        return String(value || "")
            .toLowerCase()
            .trim()
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/^-+|-+$/g, "")
            .slice(0, 60);
    }

    function resolveActiveModuleKey(modules) {
        const params = new URLSearchParams(window.location.search || "");
        const requestedKey = normalizeModuleKey(params.get(moduleQueryParam));
        if (!requestedKey) {
            return defaultModuleKey;
        }

        return modules.some((entry) => entry.key === requestedKey)
            ? requestedKey
            : defaultModuleKey;
    }

    function migrateLegacyStorageForDefaultModule() {
        if (activeModuleKey !== defaultModuleKey) {
            return;
        }

        [
            "study_aid_notes_v1",
            "study_aid_section_drafts_v1",
            "study_aid_local_overrides_v1",
            "study_aid_custom_sources_v1",
            "study_aid_custom_sections_v1",
            "study_aid_source_link_overrides_v1",
            "study_aid_draft_panel_detached_v1",
            "study_aid_active_source_v1",
            "study_aid_reference_overrides_v1",
            "study_aid_metadata_overrides_v1",
            "study_aid_attachment_meta_v1",
            "study_aid_ai_chat_config_v1",
        ].forEach((legacyKey) => {
            const scopedKey = buildScopedStorageKey(legacyKey);
            if (localStorage.getItem(scopedKey) !== null) {
                return;
            }

            const legacyValue = localStorage.getItem(legacyKey);
            if (legacyValue !== null) {
                localStorage.setItem(scopedKey, legacyValue);
            }
        });
    }

    function renderModuleSelector() {
        if (!moduleSelect) {
            return;
        }

        moduleSelect.innerHTML = moduleRegistry
            .map((entry) => `<option value="${escapeHtml(entry.key)}">${escapeHtml(entry.label)}</option>`)
            .join("");
        moduleSelect.value = activeModuleKey;
    }

    function buildUniqueModuleKey(baseKey) {
        let candidateKey = baseKey;
        let suffix = 2;
        while (moduleRegistry.some((entry) => entry.key === candidateKey)) {
            candidateKey = `${baseKey}-${suffix}`;
            suffix += 1;
        }
        return candidateKey;
    }

    function switchModule(moduleKey) {
        const nextKey = normalizeModuleKey(moduleKey);
        if (!nextKey || nextKey === activeModuleKey) {
            return;
        }

        const params = new URLSearchParams(window.location.search || "");
        params.set(moduleQueryParam, nextKey);
        const nextSearch = params.toString();
        window.location.search = nextSearch ? `?${nextSearch}` : "";
    }

    function renderCreateModuleModal() {
        if (!createModulePreview || !createModuleStatus || !createModuleSubmitBtn) {
            return;
        }

        const name = cleanMetadataValue(createModuleInput ? createModuleInput.value : "");
        createModuleStatus.classList.remove("is-warning");

        if (!name) {
            createModulePreview.textContent = "Start typing to generate one.";
            createModuleStatus.textContent = "Pick something short enough to spot quickly in the module picker.";
            createModuleSubmitBtn.disabled = true;
            return;
        }

        const normalizedKey = normalizeModuleKey(name);
        if (!normalizedKey) {
            createModulePreview.textContent = "A generated key will be assigned when you create it.";
            createModuleStatus.textContent = "This name does not contain a clean URL slug yet, so the app will generate one automatically.";
            createModuleStatus.classList.add("is-warning");
            createModuleSubmitBtn.disabled = false;
            return;
        }

        const candidateKey = buildUniqueModuleKey(normalizedKey);
        createModulePreview.textContent = candidateKey;
        createModuleStatus.textContent = candidateKey === normalizedKey
            ? "This will open as a fresh workspace with its own saved notes and sources."
            : "That key already exists, so a numeric suffix will be added automatically.";
        createModuleSubmitBtn.disabled = false;
    }

    function openCreateModuleModal() {
        if (!createModuleModal || !createModuleInput) {
            return;
        }

        createModuleModalReturnFocus = document.activeElement instanceof HTMLElement
            ? document.activeElement
            : null;
        createModuleInput.value = "";
        renderCreateModuleModal();
        createModuleModal.classList.add("is-open");
        createModuleModal.setAttribute("aria-hidden", "false");
        requestAnimationFrame(() => {
            createModuleInput.focus();
            createModuleInput.select();
        });
    }

    function closeCreateModuleModal(options = {}) {
        if (!createModuleModal) {
            return;
        }

        const wasOpen = createModuleModal.classList.contains("is-open");
        createModuleModal.classList.remove("is-open");
        createModuleModal.setAttribute("aria-hidden", "true");
        if (createModuleInput) {
            createModuleInput.value = "";
        }
        renderCreateModuleModal();

        if (wasOpen && !options.skipFocusRestore && createModuleModalReturnFocus && typeof createModuleModalReturnFocus.focus === "function") {
            requestAnimationFrame(() => createModuleModalReturnFocus.focus());
        }
        createModuleModalReturnFocus = null;
    }

    function getCreateModuleFocusableElements() {
        return [
            createModuleCloseBtn,
            createModuleInput,
            createModuleCancelBtn,
            createModuleSubmitBtn,
        ].filter((element) => element && !element.disabled);
    }

    function handleCreateModuleModalKeydown(event) {
        if (!createModuleModal || !createModuleModal.classList.contains("is-open")) {
            return;
        }

        if (event.key === "Escape") {
            event.preventDefault();
            closeCreateModuleModal();
            return;
        }

        if (event.key !== "Tab") {
            return;
        }

        const focusableElements = getCreateModuleFocusableElements();
        if (!focusableElements.length) {
            return;
        }

        const currentIndex = focusableElements.indexOf(document.activeElement);
        const nextIndex = event.shiftKey
            ? (currentIndex <= 0 ? focusableElements.length - 1 : currentIndex - 1)
            : (currentIndex === -1 || currentIndex === focusableElements.length - 1 ? 0 : currentIndex + 1);

        event.preventDefault();
        focusableElements[nextIndex].focus();
    }

    function submitCreateModuleFromModal() {
        const name = cleanMetadataValue(createModuleInput ? createModuleInput.value : "");
        if (!name) {
            renderCreateModuleModal();
            if (createModuleInput) {
                createModuleInput.focus();
            }
            return false;
        }

        closeCreateModuleModal({ skipFocusRestore: true });
        createModule(name);
        return true;
    }

    function createModule(moduleName) {
        const name = cleanMetadataValue(moduleName);
        if (!name) {
            return false;
        }

        const baseKey = normalizeModuleKey(name) || `module-${Date.now()}`;
        const candidateKey = buildUniqueModuleKey(baseKey);

        moduleRegistry.push({ key: candidateKey, label: name });
        saveModuleRegistry();
        switchModule(candidateKey);
        return true;
    }

    function getWorkspaceExportFilename() {
        const dateStamp = new Date().toISOString().slice(0, 10);
        return `study-aid-workspace-${dateStamp}.saw`;
    }

    function downloadBlobFile(blob, filename) {
        const objectUrl = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = objectUrl;
        link.download = filename;
        link.click();
        setTimeout(() => URL.revokeObjectURL(objectUrl), 1000);
    }

    function readFileAsText(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => resolve(String(reader.result || ""));
            reader.onerror = () => reject(reader.error || new Error("The selected file could not be read."));
            reader.readAsText(file);
        });
    }

    function blobToDataUrl(blob) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => resolve(String(reader.result || ""));
            reader.onerror = () => reject(reader.error || new Error("The attachment could not be encoded."));
            reader.readAsDataURL(blob);
        });
    }

    function dataUrlToBlob(dataUrl) {
        const match = String(dataUrl || "").match(/^data:([^;,]*)(;base64)?,([\s\S]+)$/i);
        if (!match) {
            throw new Error("The attachment payload is not a valid data URL.");
        }

        const mimeType = match[1] || "application/octet-stream";
        const isBase64 = Boolean(match[2]);
        const body = match[3] || "";
        const decoded = isBase64 ? atob(body) : decodeURIComponent(body);
        const bytes = new Uint8Array(decoded.length);
        for (let index = 0; index < decoded.length; index += 1) {
            bytes[index] = decoded.charCodeAt(index);
        }
        return new Blob([bytes], { type: mimeType });
    }

    function parseModuleScopedWorkspaceValue(raw) {
        if (raw === null || raw === undefined) {
            return null;
        }

        try {
            return JSON.parse(raw);
        } catch (error) {
            return null;
        }
    }

    function buildWorkspaceGlobalSnapshot() {
        return {
            [themeStorageKey]: localStorage.getItem(themeStorageKey) || "light",
            [chatWidgetExpandedStorageKey]: localStorage.getItem(chatWidgetExpandedStorageKey) || "false",
        };
    }

    function buildWorkspaceModuleStorageSnapshot(moduleKey) {
        return Object.fromEntries(
            moduleScopedWorkspaceStorageBaseKeys
                .map((baseKey) => {
                    const value = parseModuleScopedWorkspaceValue(
                        localStorage.getItem(buildScopedStorageKeyForModule(baseKey, moduleKey))
                    );
                    return value === null ? null : [baseKey, value];
                })
                .filter(Boolean)
        );
    }

    async function buildWorkspaceAttachmentSnapshot(attachmentMeta) {
        const attachments = {};
        const entries = attachmentMeta && typeof attachmentMeta === "object" && !Array.isArray(attachmentMeta)
            ? Object.entries(attachmentMeta)
            : [];

        for (const [sourceId, kinds] of entries) {
            for (const kind of ["object", "local"]) {
                if (!kinds?.[kind]) {
                    continue;
                }

                const blob = await getPdfAttachmentBlob(sourceId, kind);
                if (!(blob instanceof Blob)) {
                    continue;
                }

                attachments[sourceId] = attachments[sourceId] || {};
                attachments[sourceId][kind] = {
                    label: cleanMetadataValue(kinds[kind].label),
                    type: blob.type || "application/octet-stream",
                    dataUrl: await blobToDataUrl(blob),
                };
            }
        }

        return attachments;
    }

    async function buildWorkspaceSnapshot() {
        const modules = [];

        for (const moduleEntry of moduleRegistry) {
            const storage = buildWorkspaceModuleStorageSnapshot(moduleEntry.key);
            const attachments = await buildWorkspaceAttachmentSnapshot(storage["study_aid_attachment_meta_v1"]);
            modules.push({
                key: moduleEntry.key,
                label: moduleEntry.label,
                storage,
                attachments,
            });
        }

        return {
            snapshotType: "study-aid-workspace",
            format: "saw",
            version: workspaceSnapshotVersion,
            exportedAt: new Date().toISOString(),
            modules,
            globals: buildWorkspaceGlobalSnapshot(),
        };
    }

    function openWorkspaceImportPicker() {
        workspaceImportInput?.click();
    }

    function normalizeImportedWorkspaceGlobals(globals) {
        const raw = globals && typeof globals === "object" && !Array.isArray(globals) ? globals : {};
        return {
            [themeStorageKey]: raw[themeStorageKey] === "dark" ? "dark" : "light",
            [chatWidgetExpandedStorageKey]: raw[chatWidgetExpandedStorageKey] === "true" ? "true" : "false",
        };
    }

    function normalizeImportedWorkspaceStorage(storage) {
        const normalized = {};
        const raw = storage && typeof storage === "object" && !Array.isArray(storage) ? storage : {};

        moduleScopedWorkspaceStorageBaseKeys.forEach((baseKey) => {
            if (Object.prototype.hasOwnProperty.call(raw, baseKey)) {
                normalized[baseKey] = raw[baseKey];
            }
        });

        return normalized;
    }

    function normalizeImportedWorkspaceAttachments(attachments) {
        const raw = attachments && typeof attachments === "object" && !Array.isArray(attachments) ? attachments : {};
        const normalized = {};

        Object.entries(raw).forEach(([sourceId, kinds]) => {
            const cleanSourceId = cleanMetadataValue(sourceId);
            if (!cleanSourceId || !kinds || typeof kinds !== "object" || Array.isArray(kinds)) {
                return;
            }

            const nextKinds = {};
            ["object", "local"].forEach((kind) => {
                const entry = kinds[kind];
                if (!entry || typeof entry !== "object" || Array.isArray(entry)) {
                    return;
                }

                const dataUrl = typeof entry.dataUrl === "string" ? entry.dataUrl : "";
                if (!/^data:/i.test(dataUrl)) {
                    return;
                }

                nextKinds[kind] = {
                    label: cleanMetadataValue(entry.label),
                    type: cleanMetadataValue(entry.type),
                    dataUrl,
                };
            });

            if (Object.keys(nextKinds).length) {
                normalized[cleanSourceId] = nextKinds;
            }
        });

        return normalized;
    }

    function normalizeImportedWorkspaceSnapshot(payload) {
        if (!payload || typeof payload !== "object" || Array.isArray(payload)) {
            throw new Error("The selected file is not a valid workspace snapshot.");
        }

        const rawModules = Array.isArray(payload.modules) ? payload.modules : [];
        if (!rawModules.length) {
            throw new Error("No modules were found in this workspace file.");
        }

        const usedKeys = new Set();
        const modules = rawModules.map((entry, index) => {
            const requestedKey = normalizeModuleKey(entry?.key || entry?.moduleKey || entry?.slug)
                || (index === 0 ? defaultModuleKey : `imported-module-${index + 1}`);
            let key = requestedKey;
            let suffix = 2;
            while (usedKeys.has(key)) {
                key = `${requestedKey}-${suffix}`;
                suffix += 1;
            }
            usedKeys.add(key);

            return {
                key,
                label: cleanMetadataValue(entry?.label || entry?.name || (key === defaultModuleKey ? "Default Module" : `Imported Module ${index + 1}`)),
                storage: normalizeImportedWorkspaceStorage(entry?.storage),
                attachments: normalizeImportedWorkspaceAttachments(entry?.attachments),
            };
        });

        return {
            snapshotType: "study-aid-workspace",
            version: Number.parseInt(payload.version, 10) || workspaceSnapshotVersion,
            modules,
            globals: normalizeImportedWorkspaceGlobals(payload.globals),
        };
    }

    async function clearWorkspaceModuleAttachmentBlobs(moduleKey) {
        const attachmentMeta = parseModuleScopedWorkspaceValue(
            localStorage.getItem(buildScopedStorageKeyForModule("study_aid_attachment_meta_v1", moduleKey))
        );

        if (!attachmentMeta || typeof attachmentMeta !== "object" || Array.isArray(attachmentMeta)) {
            return;
        }

        for (const [sourceId, kinds] of Object.entries(attachmentMeta)) {
            for (const kind of ["object", "local"]) {
                if (kinds?.[kind]) {
                    await deletePdfAttachmentBlob(sourceId, kind);
                }
            }
        }
    }

    function clearWorkspaceModuleStorage(moduleKey) {
        moduleScopedWorkspaceStorageBaseKeys.forEach((baseKey) => {
            localStorage.removeItem(buildScopedStorageKeyForModule(baseKey, moduleKey));
        });
    }

    function mergeImportedModulesIntoRegistry(importedModules) {
        const mergedByKey = new Map(moduleRegistry.map((entry) => [entry.key, { ...entry }]));
        importedModules.forEach((entry) => {
            mergedByKey.set(entry.key, { key: entry.key, label: entry.label });
        });

        if (!mergedByKey.has(defaultModuleKey)) {
            mergedByKey.set(defaultModuleKey, { key: defaultModuleKey, label: "Default Module" });
        }

        const existingOrder = moduleRegistry.map((entry) => entry.key);
        const merged = [];
        existingOrder.forEach((key) => {
            if (mergedByKey.has(key)) {
                merged.push(mergedByKey.get(key));
                mergedByKey.delete(key);
            }
        });

        if (mergedByKey.has(defaultModuleKey) && !merged.some((entry) => entry.key === defaultModuleKey)) {
            merged.unshift(mergedByKey.get(defaultModuleKey));
            mergedByKey.delete(defaultModuleKey);
        }

        merged.push(...Array.from(mergedByKey.values()));

        moduleRegistry.splice(0, moduleRegistry.length, ...merged);
        saveModuleRegistry();
    }

    async function applyWorkspaceSnapshot(snapshot) {
        for (const moduleEntry of snapshot.modules) {
            await clearWorkspaceModuleAttachmentBlobs(moduleEntry.key);
            clearWorkspaceModuleStorage(moduleEntry.key);

            Object.entries(moduleEntry.storage).forEach(([baseKey, value]) => {
                localStorage.setItem(
                    buildScopedStorageKeyForModule(baseKey, moduleEntry.key),
                    JSON.stringify(value)
                );
            });

            for (const [sourceId, kinds] of Object.entries(moduleEntry.attachments)) {
                for (const kind of ["object", "local"]) {
                    if (!kinds[kind]?.dataUrl) {
                        continue;
                    }

                    const blob = dataUrlToBlob(kinds[kind].dataUrl);
                    await putPdfAttachmentBlob(sourceId, kind, blob);
                }
            }
        }

        mergeImportedModulesIntoRegistry(snapshot.modules);

        Object.entries(snapshot.globals).forEach(([key, value]) => {
            localStorage.setItem(key, String(value));
        });
    }

    async function exportWorkspace() {
        try {
            const snapshot = await buildWorkspaceSnapshot();
            const blob = new Blob([JSON.stringify(snapshot, null, 2)], { type: "application/json" });
            downloadBlobFile(blob, getWorkspaceExportFilename());
        } catch (error) {
            window.alert(`Workspace export failed: ${error.message || "Unknown error"}`);
        }
    }

    async function importWorkspaceFromFileList(fileList) {
        const file = fileList?.[0];
        if (!file) {
            return;
        }

        try {
            const contents = await readFileAsText(file);
            const parsed = JSON.parse(contents);
            const snapshot = normalizeImportedWorkspaceSnapshot(parsed);
            const overwrittenModuleCount = snapshot.modules.filter((moduleEntry) => moduleRegistry.some((entry) => entry.key === moduleEntry.key)).length;
            const confirmed = window.confirm(
                `Import workspace from "${file.name}"?\n\n`
                + `${snapshot.modules.length} module${snapshot.modules.length === 1 ? "" : "s"} will be imported. `
                + (overwrittenModuleCount
                    ? `${overwrittenModuleCount} matching module${overwrittenModuleCount === 1 ? "" : "s"} will be overwritten. `
                    : "New modules will be added alongside the current workspace. ")
                + "The page will reload afterwards."
            );

            if (!confirmed) {
                return;
            }

            await applyWorkspaceSnapshot(snapshot);
            window.alert(
                `Imported ${snapshot.modules.length} module${snapshot.modules.length === 1 ? "" : "s"} from "${file.name}". The app will reload now.`
            );
            window.location.reload();
        } catch (error) {
            window.alert(`Workspace import failed: ${error.message || "Unknown error"}`);
        }
    }

    function loadChatWidgetExpanded() {
        try {
            return localStorage.getItem(chatWidgetExpandedStorageKey) === "true";
        } catch (error) {
            return false;
        }
    }

    function bindEvents() {
        notepad.addEventListener("input", () => {
            sectionDrafts[activeDraftSectionKey] = notepad.value;
            saveSectionDrafts();
            renderDraftEditor();
            updateDraftStatus();
        });

        pdfInput.addEventListener("change", async (event) => {
            if (pdfPickerMode === "link") {
                await attachFilesToActiveSource(event.target.files);
            } else {
                await importFiles(event.target.files);
            }
            event.target.value = "";
            pdfPickerMode = "import";
        });

        workspaceImportInput?.addEventListener("change", async (event) => {
            await importWorkspaceFromFileList(event.target.files);
            event.target.value = "";
        });

        [metaTitle, metaAuthor, metaYear, metaPublisher, metaTags, metaUrl, metaLocalUrl].forEach((input) => {
            input.addEventListener("input", markMetadataDirty);
        });

        [refFullInput, refNarrativeInput, refParentheticalInput].forEach((input) => {
            input.addEventListener("input", markReferenceDirty);
        });

        draftSectionSelect.addEventListener("change", (event) => {
            setActiveDraftSection(event.target.value, { focus: false });
        });

        articleFilterSelect.addEventListener("change", (event) => {
            articleFilter = event.target.value;
            renderList();
        });

        articleTagFilterInput?.addEventListener("input", (event) => {
            articleTagFilter = event.target.value || "";
            renderList();
        });

        moduleSelect.addEventListener("change", (event) => {
            switchModule(event.target.value);
        });

        createModuleForm.addEventListener("submit", (event) => {
            event.preventDefault();
            submitCreateModuleFromModal();
        });

        createModuleInput.addEventListener("input", renderCreateModuleModal);
        createModuleCancelBtn.addEventListener("click", () => closeCreateModuleModal());
        createModuleCloseBtn.addEventListener("click", () => closeCreateModuleModal());
        createModuleModal.addEventListener("click", (event) => {
            if (event.target === createModuleModal) {
                closeCreateModuleModal();
            }
        });
        createModuleModal.addEventListener("keydown", handleCreateModuleModalKeydown);

        newSectionNameInput.addEventListener("keydown", (event) => {
            if (event.key === "Enter") {
                event.preventDefault();
                createCustomSection();
            }
        });

        aiModeToggle.addEventListener("click", (event) => {
            const button = event.target.closest("[data-ai-mode]");
            if (!button) {
                return;
            }

            const nextMode = button.dataset.aiMode === "local" ? "local" : "remote";
            if (aiChatConfig.mode === nextMode) {
                return;
            }

            aiChatConfig.mode = nextMode;
            aiConfigStatusMessage = "";
            saveAiChatConfig();
            renderAiConfig();
            maybeAutoFetchAiModels();
        });

        aiBaseUrl.addEventListener("input", () => {
            const modeConfig = getAiModeConfig();
            const previousEndpointKey = getAiModelsEndpointKey();
            modeConfig.baseUrl = cleanMetadataValue(aiBaseUrl.value);
            if (getAiModelsEndpointKey() !== previousEndpointKey) {
                modeConfig.models = [];
                modeConfig.modelsEndpoint = "";
                modeConfig.apiFlavor = "";
            }
            aiConfigStatusMessage = "";
            saveAiChatConfig();
            renderAiModelList();
            renderAiConfigStatus();
        });

        aiApiKey.addEventListener("input", () => {
            aiChatConfig.remote.apiKey = aiApiKey.value || "";
            aiConfigStatusMessage = "";
            saveAiChatConfig();
            renderAiModelList();
            renderAiConfigStatus();
        });

        aiModel.addEventListener("input", () => {
            getAiModeConfig().model = cleanMetadataValue(aiModel.value);
            aiConfigStatusMessage = "";
            saveAiChatConfig();
            renderAiModelList();
            renderAiConfigStatus();
        });

        aiContextLimit.addEventListener("change", () => {
            const previousLimit = getDocumentContextCharLimit();
            aiChatConfig.documentContextMaxChars = normalizeDocumentContextCharLimit(aiContextLimit.value);
            const nextLimit = getDocumentContextCharLimit();
            aiConfigStatusMessage = `Document context limit set to ${formatCount(nextLimit)} characters.`;
            saveAiChatConfig();
            renderAiConfig();

            if (activeSource && nextLimit !== previousLimit) {
                invalidateDocumentContextForSource(
                    activeSource,
                    `Document context limit updated to ${formatCount(nextLimit)} characters. The chat will use a refreshed extract on your next question.`
                );
            }
        });

        aiModelList.addEventListener("change", () => {
            const selectedModel = cleanMetadataValue(aiModelList.value);
            if (!selectedModel) {
                return;
            }

            getAiModeConfig().model = selectedModel;
            aiConfigStatusMessage = `Model selected: ${selectedModel}`;
            saveAiChatConfig();
            renderAiConfig();
        });

        aiFetchModelsBtn.addEventListener("click", () => {
            void fetchAiModels();
        });

        aiInstructionSelect.addEventListener("change", (event) => {
            aiInstructionStatusMessage = "";
            setActiveAiInstruction(event.target.value);
        });

        [aiInstructionName, aiInstructionText].forEach((input) => {
            input.addEventListener("input", () => {
                aiInstructionStatusMessage = "";
                renderAiInstructions();
            });
        });

        aiInstructionSaveBtn.addEventListener("click", saveAiInstructionPreset);
        aiInstructionNewBtn.addEventListener("click", startNewAiInstructionDraft);
        aiInstructionDeleteBtn.addEventListener("click", deleteAiInstructionPreset);
        collapsibleCardToggles.forEach((button) => {
            button.addEventListener("click", () => {
                toggleCollapsibleSection(button.dataset.collapseTarget);
            });
        });

        draftEditorModeToggle.addEventListener("click", (event) => {
            const button = event.target.closest("[data-editor-mode]");
            if (!button) {
                return;
            }

            setDraftEditorMode(button.dataset.editorMode);
        });

        paperNotesModeToggle.addEventListener("click", (event) => {
            const button = event.target.closest("[data-editor-mode]");
            if (!button) {
                return;
            }

            setPaperNotesEditorMode(button.dataset.editorMode);
        });

        paperNotesInput.addEventListener("input", () => {
            if (!activeSource?.id) {
                return;
            }

            const nextValue = normalizeMarkdownEditorText(paperNotesInput.value);
            if (nextValue.trim()) {
                paperNotesBySource[activeSource.id] = nextValue;
            } else {
                delete paperNotesBySource[activeSource.id];
            }
            savePaperNotesBySource();
            renderPaperNotesEditor();
        });

        chatInput.addEventListener("keydown", (event) => {
            if (event.key === "Enter" && !event.shiftKey) {
                event.preventDefault();
                sendChatMessage();
            }
        });

        viewer.addEventListener("load", handleViewerLoaded);
        window.addEventListener("dragenter", handleDragEnter);
        window.addEventListener("dragover", handleDragOver);
        window.addEventListener("dragleave", handleDragLeave);
        window.addEventListener("drop", handleDrop);
        window.addEventListener("resize", handleWindowResize);
        window.addEventListener("beforeunload", cleanupObjectUrls);

        if (draftPanelHeader) {
            draftPanelHeader.addEventListener("mousedown", startDraftPanelDrag);
        }

        if (paperNotesHeader) {
            paperNotesHeader.addEventListener("mousedown", startPaperNotesDrag);
        }
    }

    function configureExternalDocumentLibraries() {
        if (window.pdfjsLib) {
            window.pdfjsLib.GlobalWorkerOptions.workerSrc = "https://cdn.jsdelivr.net/npm/pdfjs-dist@3.11.174/build/pdf.worker.min.js";
        }

        if (window.marked?.setOptions) {
            window.marked.setOptions({
                gfm: true,
                breaks: true,
            });
        }
    }

    function applyTheme(theme = "light") {
        activeTheme = theme === "dark" ? "dark" : "light";
        document.body.dataset.theme = activeTheme;

        if (themeToggleBtn) {
            themeToggleBtn.textContent = activeTheme === "dark" ? "Light Mode" : "Dark Mode";
        }

        try {
            localStorage.setItem(themeStorageKey, activeTheme);
        } catch (error) {
            // Theme persistence is best effort only.
        }
    }

    function toggleTheme() {
        applyTheme(activeTheme === "dark" ? "light" : "dark");
        renderChatWidget();
    }

    function toggleChatWidgetExpanded() {
        chatWidgetExpanded = !chatWidgetExpanded;

        try {
            localStorage.setItem(chatWidgetExpandedStorageKey, String(chatWidgetExpanded));
        } catch (error) {
            // Expansion persistence is best effort only.
        }

        renderChatWidget();
    }

    function handleViewerLoaded() {
        if (!activeSource) {
            return;
        }

        viewerLoadedSourceId = activeSource.id || "";
        viewerLoadedUrl = getCurrentViewerDocumentUrl();

        const viewerUrl = getViewerUrl(activeSource);
        if (!viewerUrl || isPdfLikeSource(activeSource, viewerUrl)) {
            return;
        }

        refreshActiveDocumentContext(true).catch(() => {
            // Viewer-driven refresh is best effort only.
        });
    }

    function loadAiChatConfig() {
        const fallback = {
            mode: "remote",
            remote: {
                baseUrl: "https://api.openai.com/v1",
                apiKey: "",
                model: "gpt-4.1-mini",
                models: [],
                modelsEndpoint: "",
                apiFlavor: "openai-compatible",
            },
            local: {
                baseUrl: "http://localhost:1234",
                apiKey: "",
                model: "",
                models: [],
                modelsEndpoint: "",
                apiFlavor: "",
            },
            instructions: {
                activeId: "",
                presets: [],
            },
            documentContextMaxChars: defaultDocumentContextMaxChars,
        };
        const cloneFallback = () => ({
            mode: fallback.mode,
            remote: { ...fallback.remote, models: [...fallback.remote.models] },
            local: { ...fallback.local, models: [...fallback.local.models] },
            instructions: {
                activeId: fallback.instructions.activeId,
                presets: fallback.instructions.presets.map((preset) => ({ ...preset })),
            },
            documentContextMaxChars: fallback.documentContextMaxChars,
        });

        try {
            const raw = localStorage.getItem(aiChatConfigStorageKey);
            if (!raw) {
                return cloneFallback();
            }

            const parsed = JSON.parse(raw);
            if (!parsed || typeof parsed !== "object") {
                return cloneFallback();
            }

            if (!parsed.remote && !parsed.local) {
                const migrated = cloneFallback();
                const legacyMode = parsed.mode === "local" ? "local" : "remote";
                migrated.mode = legacyMode;
                migrated.remote.apiKey = parsed.apiKey || "";
                migrated.instructions = normalizeAiInstructionConfig({
                    presets: parsed.savedInstructions || parsed.aiInstructionPresets || [],
                    activeId: parsed.activeInstructionId || parsed.selectedInstructionId || "",
                });
                migrated.documentContextMaxChars = normalizeDocumentContextCharLimit(
                    parsed.documentContextMaxChars || parsed.maxDocumentContextChars || migrated.documentContextMaxChars
                );

                if (legacyMode === "remote") {
                    migrated.remote.baseUrl = cleanMetadataValue(parsed.baseUrl) || migrated.remote.baseUrl;
                    migrated.remote.model = cleanMetadataValue(parsed.model) || migrated.remote.model;
                } else {
                    migrated.local.baseUrl = cleanMetadataValue(parsed.baseUrl) || migrated.local.baseUrl;
                    migrated.local.model = cleanMetadataValue(parsed.model) || migrated.local.model;
                }

                return migrated;
            }

            return {
                mode: parsed.mode === "local" ? "local" : "remote",
                remote: normalizeAiModeConfig(parsed.remote, fallback.remote),
                local: normalizeAiModeConfig(parsed.local, fallback.local),
                instructions: normalizeAiInstructionConfig(
                    parsed.instructions
                    || {
                        presets: parsed.savedInstructions || parsed.aiInstructionPresets || [],
                        activeId: parsed.activeInstructionId || parsed.selectedInstructionId || "",
                    }
                ),
                documentContextMaxChars: normalizeDocumentContextCharLimit(
                    parsed.documentContextMaxChars || parsed.maxDocumentContextChars || fallback.documentContextMaxChars
                ),
            };
        } catch (error) {
            return cloneFallback();
        }
    }

    function normalizeDocumentContextCharLimit(value) {
        const numericValue = Number.parseInt(String(value || "").replace(/[^\d]/g, ""), 10);
        if (!Number.isFinite(numericValue)) {
            return defaultDocumentContextMaxChars;
        }

        return Math.min(maxDocumentContextMaxChars, Math.max(minDocumentContextMaxChars, numericValue));
    }

    function getDocumentContextCharLimit() {
        return normalizeDocumentContextCharLimit(aiChatConfig.documentContextMaxChars);
    }

    function normalizeAiModeConfig(config, fallback) {
        return {
            baseUrl: cleanMetadataValue(config?.baseUrl) || fallback.baseUrl,
            apiKey: config?.apiKey || fallback.apiKey || "",
            model: cleanMetadataValue(config?.model) || fallback.model || "",
            models: normalizeAiModelIds(config?.models),
            modelsEndpoint: cleanMetadataValue(config?.modelsEndpoint),
            apiFlavor: normalizeAiApiFlavor(config?.apiFlavor || fallback.apiFlavor || ""),
        };
    }

    function normalizeAiApiFlavor(value) {
        return value === "lmstudio-native" || value === "openai-compatible" ? value : "";
    }

    function normalizeAiModelIds(models) {
        if (!Array.isArray(models)) {
            return [];
        }

        return [...new Set(models
            .map((entry) => cleanMetadataValue(entry))
            .filter(Boolean))]
            .sort((left, right) => left.localeCompare(right));
    }

    function normalizeAiInstructionConfig(config) {
        const rawConfig = config && typeof config === "object" && !Array.isArray(config) ? config : {};
        const rawPresets = Array.isArray(config)
            ? config
            : (Array.isArray(rawConfig.presets)
                ? rawConfig.presets
                : (Array.isArray(rawConfig.instructions)
                    ? rawConfig.instructions
                    : (Array.isArray(rawConfig.saved) ? rawConfig.saved : [])));
        const presets = normalizeAiInstructionPresets(rawPresets);
        const requestedActiveId = cleanMetadataValue(
            Array.isArray(config)
                ? ""
                : (rawConfig.activeId || rawConfig.selectedId || rawConfig.currentId || "")
        );

        return {
            activeId: presets.some((preset) => preset.id === requestedActiveId) ? requestedActiveId : "",
            presets,
        };
    }

    function normalizeAiInstructionPresets(presets) {
        const normalized = [];
        const seenIds = new Set();

        (Array.isArray(presets) ? presets : []).forEach((entry, index) => {
            const name = cleanMetadataValue(entry?.name || entry?.label || entry?.title);
            const content = normalizeDocumentText(entry?.content || entry?.instruction || entry?.prompt || entry?.text || "");
            if (!name || !content) {
                return;
            }

            const baseId = normalizeModuleKey(entry?.id || name) || `instruction-${index + 1}`;
            let id = baseId;
            let suffix = 2;
            while (seenIds.has(id)) {
                id = `${baseId}-${suffix}`;
                suffix += 1;
            }

            seenIds.add(id);
            normalized.push({ id, name, content });
        });

        return normalized;
    }

    function getAiModeConfig(mode = aiChatConfig.mode) {
        return mode === "local" ? aiChatConfig.local : aiChatConfig.remote;
    }

    function getAiInstructionById(instructionId = "") {
        const normalizedId = cleanMetadataValue(instructionId);
        return aiChatConfig.instructions.presets.find((preset) => preset.id === normalizedId) || null;
    }

    function getActiveAiInstruction() {
        return getAiInstructionById(aiChatConfig.instructions.activeId);
    }

    function buildUniqueAiInstructionId(baseId, excludeId = "") {
        const normalizedBaseId = normalizeModuleKey(baseId) || `instruction-${Date.now()}`;
        const usedIds = new Set(
            aiChatConfig.instructions.presets
                .filter((preset) => preset.id !== excludeId)
                .map((preset) => preset.id)
        );

        let candidateId = normalizedBaseId;
        let suffix = 2;
        while (usedIds.has(candidateId)) {
            candidateId = `${normalizedBaseId}-${suffix}`;
            suffix += 1;
        }

        return candidateId;
    }

    function getAiModelsEndpointKey(mode = aiChatConfig.mode) {
        const modeConfig = getAiModeConfig(mode);
        const baseUrl = cleanMetadataValue(modeConfig.baseUrl).replace(/\/+$/, "");
        return baseUrl ? `${mode}:${baseUrl}` : "";
    }

    function getAiRequestConfigError(mode = aiChatConfig.mode) {
        const modeConfig = getAiModeConfig(mode);
        if (!cleanMetadataValue(modeConfig.baseUrl) || !cleanMetadataValue(modeConfig.model)) {
            return "Complete AI Chat Config first: mode, base URL, and model are required.";
        }

        if (mode === "remote" && !aiChatConfig.remote.apiKey) {
            return "Remote mode also needs an API key.";
        }

        return "";
    }

    function saveAiChatConfig() {
        localStorage.setItem(aiChatConfigStorageKey, JSON.stringify(aiChatConfig));
    }

    function renderAiConfig() {
        const modeConfig = getAiModeConfig();
        aiBaseUrl.value = modeConfig.baseUrl || "";
        aiApiKey.value = aiChatConfig.remote.apiKey || "";
        aiModel.value = modeConfig.model || "";
        aiContextLimit.value = String(getDocumentContextCharLimit());
        aiApiKeyRow.style.display = aiChatConfig.mode === "remote" ? "flex" : "none";

        aiModeToggle.querySelectorAll("[data-ai-mode]").forEach((button) => {
            button.classList.toggle("is-active", button.dataset.aiMode === aiChatConfig.mode);
        });

        renderAiModelList();
        renderAiConfigStatus();
        renderMetadataAiAction();
    }

    function initializeAiInstructionEditor() {
        loadAiInstructionEditor(aiChatConfig.instructions.activeId);
    }

    function loadAiInstructionEditor(instructionId = "") {
        const preset = getAiInstructionById(instructionId);
        aiInstructionEditorPresetId = preset ? preset.id : "";
        aiInstructionName.value = preset ? preset.name : "";
        aiInstructionText.value = preset ? preset.content : "";
    }

    function getAiInstructionEditorValues() {
        return {
            name: cleanMetadataValue(aiInstructionName.value),
            content: normalizeDocumentText(aiInstructionText.value),
        };
    }

    function isAiInstructionEditorDirty() {
        const current = getAiInstructionEditorValues();
        const saved = getAiInstructionById(aiInstructionEditorPresetId);
        if (!saved) {
            return Boolean(current.name || current.content);
        }

        return current.name !== saved.name || current.content !== saved.content;
    }

    function setActiveAiInstruction(instructionId, options = {}) {
        const preset = getAiInstructionById(instructionId);
        aiChatConfig.instructions.activeId = preset ? preset.id : "";
        saveAiChatConfig();

        if (options.loadEditor !== false) {
            loadAiInstructionEditor(aiChatConfig.instructions.activeId);
        }

        renderAiInstructions();
        renderChatWidget();
    }

    function renderAiInstructions() {
        const activePreset = getActiveAiInstruction();
        const editingPreset = getAiInstructionById(aiInstructionEditorPresetId);
        const editorValues = getAiInstructionEditorValues();
        const isDirty = isAiInstructionEditorDirty();

        aiInstructionSelect.innerHTML = "";

        const emptyOption = document.createElement("option");
        emptyOption.value = "";
        emptyOption.textContent = "No extra instruction";
        aiInstructionSelect.appendChild(emptyOption);

        aiChatConfig.instructions.presets.forEach((preset) => {
            const option = document.createElement("option");
            option.value = preset.id;
            option.textContent = preset.name;
            aiInstructionSelect.appendChild(option);
        });

        aiInstructionSelect.value = activePreset ? activePreset.id : "";
        aiInstructionSummary.innerHTML = [
            `<span class="link-pill is-accent">Active: ${escapeHtml(activePreset ? activePreset.name : "None")}</span>`,
            `<span class="link-pill">Editing: ${escapeHtml(editingPreset ? editingPreset.name : "New draft")}</span>`,
        ].join("");

        aiInstructionSaveBtn.disabled = !(editorValues.name && editorValues.content);
        aiInstructionSaveBtn.textContent = editingPreset ? "Update Instruction" : "Save Instruction";
        aiInstructionDeleteBtn.disabled = !editingPreset;

        if (aiInstructionStatusMessage) {
            aiInstructionStatus.textContent = aiInstructionStatusMessage;
            return;
        }

        if (isDirty) {
            aiInstructionStatus.textContent = editingPreset
                ? "Unsaved changes. Save to update this instruction preset."
                : "New instruction draft. Save it to add it to the preset list and make it active.";
            return;
        }

        if (activePreset) {
            aiInstructionStatus.textContent = `Using "${activePreset.name}" for new chat requests until you switch presets.`;
            return;
        }

        aiInstructionStatus.textContent = aiChatConfig.instructions.presets.length
            ? "No extra instruction is active right now. Select a preset when you want a different response style or task."
            : "Save named instruction presets and switch between them when you want different chat behaviour.";
    }

    function startNewAiInstructionDraft() {
        aiInstructionEditorPresetId = "";
        aiInstructionName.value = "";
        aiInstructionText.value = "";
        aiInstructionStatusMessage = "Started a new instruction draft. Save it to add it to the preset list.";
        renderAiInstructions();
        aiInstructionName.focus();
    }

    function saveAiInstructionPreset() {
        const editorValues = getAiInstructionEditorValues();
        if (!editorValues.name) {
            aiInstructionStatusMessage = "Give the instruction a name first.";
            renderAiInstructions();
            aiInstructionName.focus();
            return false;
        }

        if (!editorValues.content) {
            aiInstructionStatusMessage = "Write the instruction text first.";
            renderAiInstructions();
            aiInstructionText.focus();
            return false;
        }

        const existingIndex = aiChatConfig.instructions.presets.findIndex((preset) => preset.id === aiInstructionEditorPresetId);
        const nextId = existingIndex >= 0
            ? aiChatConfig.instructions.presets[existingIndex].id
            : buildUniqueAiInstructionId(editorValues.name, aiInstructionEditorPresetId);
        const nextPreset = {
            id: nextId,
            name: editorValues.name,
            content: editorValues.content,
        };

        if (existingIndex >= 0) {
            aiChatConfig.instructions.presets.splice(existingIndex, 1, nextPreset);
        } else {
            aiChatConfig.instructions.presets.push(nextPreset);
        }

        aiChatConfig.instructions.activeId = nextId;
        aiInstructionEditorPresetId = nextId;
        aiInstructionName.value = nextPreset.name;
        aiInstructionText.value = nextPreset.content;
        saveAiChatConfig();

        aiInstructionStatusMessage = existingIndex >= 0
            ? `Saved "${nextPreset.name}".`
            : `Saved "${nextPreset.name}" and made it the active chat instruction.`;

        renderAiInstructions();
        renderChatWidget();
        return true;
    }

    function deleteAiInstructionPreset() {
        const preset = getAiInstructionById(aiInstructionEditorPresetId);
        if (!preset) {
            aiInstructionStatusMessage = "Select a saved instruction to delete.";
            renderAiInstructions();
            return false;
        }

        aiChatConfig.instructions.presets = aiChatConfig.instructions.presets
            .filter((entry) => entry.id !== preset.id);
        if (aiChatConfig.instructions.activeId === preset.id) {
            aiChatConfig.instructions.activeId = "";
        }

        aiInstructionEditorPresetId = "";
        aiInstructionName.value = "";
        aiInstructionText.value = "";
        saveAiChatConfig();

        aiInstructionStatusMessage = `Deleted "${preset.name}".`;
        renderAiInstructions();
        renderChatWidget();
        return true;
    }

    function renderAiModelList() {
        const modeConfig = getAiModeConfig();
        const endpointKey = getAiModelsEndpointKey();
        const availableModels = modeConfig.modelsEndpoint === endpointKey ? modeConfig.models : [];
        const currentModel = cleanMetadataValue(modeConfig.model);
        const canFetchModels = Boolean(cleanMetadataValue(modeConfig.baseUrl))
            && (aiChatConfig.mode === "local" || Boolean(aiChatConfig.remote.apiKey));

        aiModelList.innerHTML = "";

        const placeholderOption = document.createElement("option");
        placeholderOption.value = "";
        placeholderOption.textContent = aiModelsLoading
            ? "Fetching models..."
            : (availableModels.length ? "Choose a fetched model" : "Fetch models for this endpoint");
        aiModelList.appendChild(placeholderOption);

        availableModels.forEach((modelId) => {
            const option = document.createElement("option");
            option.value = modelId;
            option.textContent = modelId;
            aiModelList.appendChild(option);
        });

        aiModelList.disabled = aiModelsLoading || !availableModels.length;
        aiModelList.value = availableModels.includes(currentModel) ? currentModel : "";
        aiFetchModelsBtn.disabled = aiModelsLoading || !canFetchModels;
        aiFetchModelsBtn.textContent = aiModelsLoading ? "Fetching Models..." : "Fetch Models";
    }

    function renderAiConfigStatus() {
        const contextLimitStatus = `Document context limit: ${formatCount(getDocumentContextCharLimit())} characters.`;
        if (aiConfigStatusMessage) {
            aiConfigStatus.textContent = `${aiConfigStatusMessage} ${contextLimitStatus}`;
            return;
        }

        const modeConfig = getAiModeConfig();
        const hasBaseUrl = Boolean(cleanMetadataValue(modeConfig.baseUrl));
        const hasModel = Boolean(cleanMetadataValue(modeConfig.model));
        const hasApiKey = Boolean(aiChatConfig.remote.apiKey);

        if (aiChatConfig.mode === "remote") {
            aiConfigStatus.textContent = hasBaseUrl && hasModel && hasApiKey
                ? `Remote mode is configured for an OpenAI-compatible endpoint. ${contextLimitStatus}`
                : `Remote mode needs an OpenAI-compatible base URL, API key, and model. ${contextLimitStatus}`;
            return;
        }

        aiConfigStatus.textContent = hasBaseUrl && hasModel
            ? `Local mode is configured. Root LM Studio URLs are resolved automatically to /api/v1 or /v1. ${contextLimitStatus}`
            : `Local mode needs an LM Studio URL and model. Root URLs are resolved automatically. No API key is required. ${contextLimitStatus}`;
    }

    function renderMetadataAiAction() {
        if (!metaAiPopulateBtn) {
            return;
        }

        const configError = getAiRequestConfigError();
        const hasSource = Boolean(activeSource);
        metaAiPopulateBtn.disabled = metadataAiRequestInFlight || !hasSource || Boolean(configError);
        metaAiPopulateBtn.textContent = metadataAiRequestInFlight ? "Reading Metadata..." : "Fill Metadata With AI";

        if (metadataAiRequestInFlight) {
            metaAiPopulateBtn.title = "The model is extracting metadata from the current document.";
            return;
        }

        if (!hasSource) {
            metaAiPopulateBtn.title = "Select or import a source first.";
            return;
        }

        metaAiPopulateBtn.title = configError || "Ask the configured model to inspect the current document text and fill these fields.";
    }

    function renderCollapsibleSections() {
        collapsibleCards.forEach((card) => {
            setCollapsibleSectionState(card.dataset.collapseId, Boolean(collapsedRightPanels[card.dataset.collapseId]), { persist: false });
        });
    }

    function toggleCollapsibleSection(sectionId) {
        const normalizedId = cleanMetadataValue(sectionId);
        if (!normalizedId) {
            return;
        }

        setCollapsibleSectionState(normalizedId, !collapsedRightPanels[normalizedId]);
    }

    function setCollapsibleSectionState(sectionId, collapsed, options = {}) {
        const normalizedId = cleanMetadataValue(sectionId);
        const card = collapsibleCards.find((entry) => entry.dataset.collapseId === normalizedId);
        if (!card) {
            return;
        }

        const nextCollapsed = Boolean(collapsed);
        const toggle = card.querySelector(`[data-collapse-target="${normalizedId}"]`);
        const label = toggle?.querySelector(".collapsible-card-toggle-label");

        card.classList.toggle("is-collapsed", nextCollapsed);
        if (toggle) {
            toggle.setAttribute("aria-expanded", String(!nextCollapsed));
        }
        if (label) {
            label.textContent = nextCollapsed ? "Show" : "Hide";
        }

        if (nextCollapsed) {
            collapsedRightPanels[normalizedId] = true;
        } else {
            delete collapsedRightPanels[normalizedId];
        }

        if (options.persist === false) {
            return;
        }

        saveCollapsedRightPanels();
    }

    function maybeAutoFetchAiModels() {
        const modeConfig = getAiModeConfig();
        const hasBaseUrl = Boolean(cleanMetadataValue(modeConfig.baseUrl));
        const hasApiKey = aiChatConfig.mode === "local" || Boolean(aiChatConfig.remote.apiKey);

        if (!hasBaseUrl || !hasApiKey) {
            renderAiModelList();
            renderAiConfigStatus();
            return Promise.resolve([]);
        }

        return fetchAiModels({ automatic: true });
    }

    function primeChatNotificationAudio() {
        const AudioContextCtor = window.AudioContext || window.webkitAudioContext;
        if (!AudioContextCtor) {
            return null;
        }

        try {
            if (!chatAudioContext) {
                chatAudioContext = new AudioContextCtor();
            }

            if (chatAudioContext.state === "suspended") {
                chatAudioContext.resume().catch(() => {});
            }

            return chatAudioContext;
        } catch (error) {
            return null;
        }
    }

    function playChatResponseSound() {
        const audioContext = primeChatNotificationAudio();
        if (!audioContext) {
            return;
        }

        const startAt = audioContext.currentTime + 0.02;
        const master = audioContext.createGain();
        const filter = audioContext.createBiquadFilter();
        filter.type = "lowpass";
        filter.frequency.setValueAtTime(1800, startAt);
        filter.Q.setValueAtTime(0.5, startAt);
        master.gain.setValueAtTime(0.0001, startAt);
        master.gain.exponentialRampToValueAtTime(0.024, startAt + 0.03);
        master.gain.exponentialRampToValueAtTime(0.0001, startAt + 0.52);
        filter.connect(master);
        master.connect(audioContext.destination);

        [
            { frequency: 587.33, type: "triangle", offset: 0, duration: 0.16, gain: 0.28 },
            { frequency: 783.99, type: "sine", offset: 0.1, duration: 0.24, gain: 0.22 },
        ].forEach((note) => {
            const oscillator = audioContext.createOscillator();
            const noteGain = audioContext.createGain();
            const noteStart = startAt + note.offset;
            const noteEnd = noteStart + note.duration;

            oscillator.type = note.type;
            oscillator.frequency.setValueAtTime(note.frequency, noteStart);
            noteGain.gain.setValueAtTime(0.0001, noteStart);
            noteGain.gain.exponentialRampToValueAtTime(note.gain, noteStart + 0.03);
            noteGain.gain.exponentialRampToValueAtTime(0.0001, noteEnd);
            oscillator.connect(noteGain);
            noteGain.connect(filter);
            oscillator.start(noteStart);
            oscillator.stop(noteEnd + 0.04);
        });
    }

    function notifyChatResponseReceived() {
        chatResponseReady = !chatWidgetOpen;
        playChatResponseSound();
    }

    function toggleChatWidget(forceOpen) {
        chatWidgetOpen = typeof forceOpen === "boolean" ? forceOpen : !chatWidgetOpen;
        if (chatWidgetOpen) {
            chatResponseReady = false;
        }
        renderChatWidget();

        if (chatWidgetOpen) {
            requestAnimationFrame(() => chatInput.focus());
        }
    }

    function clearChatMessages(options = {}) {
        chatThread = [];
        chatResponseReady = false;

        if (options.cancelPending !== false) {
            chatRequestToken += 1;
            chatRequestInFlight = false;
        }

        if (!options.preserveInput) {
            chatInput.value = "";
        }

        if (!options.silent) {
            chatStatusMessage = "Started a fresh chat for this document.";
        }

        persistChatThreadForActiveSource();
        renderChatWidget();
    }

    function renderChatWidget() {
        const activeInstruction = getActiveAiInstruction();
        const baseStatus = chatStatusMessage || activeDocumentContext.note || "Open a source or import a document to prepare document context.";
        chatWidget.classList.toggle("is-open", chatWidgetOpen);
        chatWidget.classList.toggle("is-expanded", chatWidgetExpanded);
        chatWidget.classList.toggle("is-busy", chatRequestInFlight);
        chatWidget.setAttribute("aria-hidden", String(!chatWidgetOpen));
        chatLauncher.classList.toggle("is-open", chatWidgetOpen);
        chatLauncher.classList.toggle("is-busy", chatRequestInFlight && !chatWidgetOpen);
        chatLauncher.classList.toggle("is-ready", chatResponseReady && !chatWidgetOpen && !chatRequestInFlight);
        chatLauncher.textContent = chatWidgetOpen
            ? "Minimize AI Chat"
            : (chatRequestInFlight ? "AI Chat Waiting..." : (chatResponseReady ? "AI Chat Ready" : "AI Chat"));
        chatLauncher.title = chatRequestInFlight && !chatWidgetOpen
            ? "The response is still loading. Click to reopen the chat."
            : (chatResponseReady && !chatWidgetOpen
                ? "A new response is ready. Click to reopen the chat."
                : (chatWidgetOpen ? "Minimize the chat window" : "Open the chat window"));
        chatLauncher.setAttribute("aria-expanded", String(chatWidgetOpen));
        chatSourceLabel.textContent = activeDocumentContext.label || "No active document";
        chatContextStatus.textContent = activeInstruction
            ? `${baseStatus} Active instruction: ${activeInstruction.name}.`
            : baseStatus;
        chatSendBtn.disabled = !activeSource || chatRequestInFlight;
        chatSendBtn.textContent = chatRequestInFlight ? "Thinking..." : "Ask About Document";
        chatExpandBtn.textContent = chatWidgetExpanded ? "Restore" : "Expand";
        if (chatMinimizeBtn) {
            chatMinimizeBtn.textContent = "Minimize";
            chatMinimizeBtn.title = chatRequestInFlight
                ? "Hide the chat while the current request keeps running"
                : "Hide the chat window";
        }

        chatMessages.innerHTML = "";
        chatEmpty.style.display = (chatThread.length || chatRequestInFlight) ? "none" : "block";
        if (!chatThread.length && !chatRequestInFlight) {
            chatMessages.appendChild(chatEmpty);
            return;
        }

        chatThread.forEach((message) => {
            chatMessages.appendChild(buildChatMessageElement(message));
        });

        if (chatRequestInFlight) {
            chatMessages.appendChild(buildTypingIndicatorMessage());
        }

        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    function buildChatMessageElement(message) {
        const role = message.role === "assistant" || message.role === "system" ? message.role : "user";
        const row = document.createElement("article");
        row.className = `chat-message-row ${role}`;

        const bubble = document.createElement("div");
        bubble.className = `chat-message ${role}`;

        const label = document.createElement("span");
        label.className = "chat-message-label";
        label.textContent = role === "assistant" ? "Assistant" : (role === "system" ? "System" : "You");
        bubble.appendChild(label);

        const content = document.createElement("div");
        if (role === "assistant") {
            content.className = "chat-markdown";
            setSanitizedHtml(content, renderAssistantMarkdown(message.content));
        } else {
            content.className = "chat-plain";
            content.textContent = message.content;
        }
        bubble.appendChild(content);
        row.appendChild(bubble);
        return row;
    }

    function buildTypingIndicatorMessage() {
        const row = document.createElement("article");
        row.className = "chat-message-row assistant";

        const bubble = document.createElement("div");
        bubble.className = "chat-message assistant is-loading";

        const label = document.createElement("span");
        label.className = "chat-message-label";
        label.textContent = "Assistant";
        bubble.appendChild(label);

        const thinking = document.createElement("div");
        thinking.className = "chat-thinking";

        const spinner = document.createElement("div");
        spinner.className = "chat-spinner";
        spinner.setAttribute("aria-hidden", "true");
        thinking.appendChild(spinner);

        const copy = document.createElement("div");
        copy.className = "chat-thinking-copy";

        const title = document.createElement("strong");
        title.textContent = "Working on it";
        copy.appendChild(title);

        const subtitle = document.createElement("span");
        subtitle.textContent = chatStatusMessage || "The model is reading your document and building a response.";
        copy.appendChild(subtitle);

        const bars = document.createElement("div");
        bars.className = "chat-thinking-bars";
        bars.innerHTML = "<span></span><span></span><span></span><span></span>";
        copy.appendChild(bars);

        thinking.appendChild(copy);
        bubble.appendChild(thinking);

        row.appendChild(bubble);
        return row;
    }

    function renderAssistantMarkdown(content) {
        const text = String(content || "")
            .replace(/\0/g, " ")
            .replace(/\r/g, "")
            .trim();

        if (!text) {
            return "";
        }

        if (window.marked?.parse) {
            return window.marked.parse(text);
        }

        return escapeHtml(text).replace(/\n/g, "<br>");
    }

    function setSanitizedHtml(element, html) {
        const safeHtml = window.DOMPurify?.sanitize
            ? window.DOMPurify.sanitize(html)
            : html;

        element.innerHTML = safeHtml;
        renderMathContent(element);
        element.querySelectorAll("a").forEach((link) => {
            link.setAttribute("target", "_blank");
            link.setAttribute("rel", "noreferrer noopener");
        });
    }

    function renderMathContent(element) {
        if (!element || !window.renderMathInElement) {
            return;
        }

        try {
            window.renderMathInElement(element, {
                delimiters: [
                    { left: "$$", right: "$$", display: true },
                    { left: "\\[", right: "\\]", display: true },
                    { left: "\\(", right: "\\)", display: false },
                    { left: "$", right: "$", display: false },
                ],
                throwOnError: false,
                strict: "ignore",
                ignoredTags: ["script", "noscript", "style", "textarea", "pre", "code"],
            });
        } catch (error) {
            // Leave the sanitized markdown/html content in place if math rendering fails.
        }
    }

    function normalizeEditorMode(mode) {
        return ["edit", "preview", "split"].includes(mode) ? mode : "edit";
    }

    function normalizeMarkdownEditorText(value) {
        return String(value || "")
            .replace(/\u0000/g, " ")
            .replace(/\r\n?/g, "\n");
    }

    function loadPanelFrame(storageKey) {
        try {
            const raw = localStorage.getItem(storageKey);
            if (!raw) {
                return null;
            }

            const parsed = JSON.parse(raw);
            if (!parsed || typeof parsed !== "object") {
                return null;
            }

            const frame = {
                left: Number(parsed.left),
                top: Number(parsed.top),
            };

            return Number.isFinite(frame.left) && Number.isFinite(frame.top) ? frame : null;
        } catch (error) {
            return null;
        }
    }

    function loadDraftPanelFrame() {
        return loadPanelFrame(draftPanelFrameStorageKey);
    }

    function loadPaperNotesFrame() {
        return loadPanelFrame(paperNotesFrameStorageKey);
    }

    function getPanelDimensions(panel, fallbackWidth, fallbackHeight) {
        const rect = panel?.getBoundingClientRect?.();
        return {
            width: Math.max(Math.round(rect?.width || 0), fallbackWidth),
            height: Math.max(Math.round(rect?.height || 0), fallbackHeight),
        };
    }

    function clampPanelPosition(panel, frame, fallbackWidth, fallbackHeight) {
        const viewportWidth = Math.max(window.innerWidth || 0, 720);
        const viewportHeight = Math.max(window.innerHeight || 0, 560);
        const safeMargin = 12;
        const { width, height } = getPanelDimensions(panel, fallbackWidth, fallbackHeight);
        const left = Math.min(
            Math.max(Math.round(Number(frame?.left) || safeMargin), safeMargin),
            Math.max(safeMargin, viewportWidth - width - safeMargin)
        );
        const top = Math.min(
            Math.max(Math.round(Number(frame?.top) || safeMargin), safeMargin),
            Math.max(safeMargin, viewportHeight - height - safeMargin)
        );
        return { left, top };
    }

    function savePanelFrame(storageKey, frame) {
        if (!frame) {
            localStorage.removeItem(storageKey);
            return;
        }

        localStorage.setItem(storageKey, JSON.stringify(frame));
    }

    function getDefaultDraftPanelFrame() {
        const viewportWidth = window.innerWidth || 1280;
        const viewportHeight = window.innerHeight || 900;
        const { width, height } = getPanelDimensions(draftPanel, 900, 660);
        return clampPanelPosition(
            draftPanel,
            {
                left: viewportWidth - width - 28,
                top: Math.max(82, viewportHeight - height - 108),
            },
            900,
            660
        );
    }

    function getDefaultPaperNotesFrame() {
        const viewportWidth = window.innerWidth || 1280;
        const viewportHeight = window.innerHeight || 900;
        const { width, height } = getPanelDimensions(paperNotesCard, 560, 420);
        return clampPanelPosition(
            paperNotesCard,
            {
                left: viewportWidth - width - 28,
                top: Math.max(104, viewportHeight - height - 108),
            },
            560,
            420
        );
    }

    function applyDraftPanelFrame(frame, options = {}) {
        if (!draftPanel) {
            return;
        }

        const resolvedFrame = clampPanelPosition(draftPanel, frame || draftPanelFrame || getDefaultDraftPanelFrame(), 900, 660);
        draftPanelFrame = resolvedFrame;
        draftPanel.style.left = `${resolvedFrame.left}px`;
        draftPanel.style.top = `${resolvedFrame.top}px`;

        if (options.persist === false) {
            return;
        }

        savePanelFrame(draftPanelFrameStorageKey, draftPanelFrame);
    }

    function applyPaperNotesFrame(frame, options = {}) {
        if (!paperNotesCard) {
            return;
        }

        const resolvedFrame = clampPanelPosition(
            paperNotesCard,
            frame || paperNotesFrame || getDefaultPaperNotesFrame(),
            560,
            420
        );
        paperNotesFrame = resolvedFrame;
        paperNotesCard.style.left = `${resolvedFrame.left}px`;
        paperNotesCard.style.top = `${resolvedFrame.top}px`;

        if (options.persist === false) {
            return;
        }

        savePanelFrame(paperNotesFrameStorageKey, paperNotesFrame);
    }

    function clearDraftPanelFrameStyles() {
        if (!draftPanel) {
            return;
        }

        draftPanel.style.removeProperty("left");
        draftPanel.style.removeProperty("top");
    }

    function clearPaperNotesFrameStyles() {
        if (!paperNotesCard) {
            return;
        }

        paperNotesCard.style.removeProperty("left");
        paperNotesCard.style.removeProperty("top");
    }

    function isFloatingPanelDragTargetInteractive(target) {
        return Boolean(target?.closest("button, input, textarea, select, a, label"));
    }

    function startDraftPanelDrag(event) {
        if (!draftPanelDetached || !draftPanelHeader || event.button !== 0) {
            return;
        }

        if (isFloatingPanelDragTargetInteractive(event.target)) {
            return;
        }

        event.preventDefault();
        const rect = draftPanel.getBoundingClientRect();
        draftPanelDragState = {
            offsetX: event.clientX - rect.left,
            offsetY: event.clientY - rect.top,
        };
        document.body.classList.add("is-dragging-floating-panel");
        window.addEventListener("mousemove", handleDraftPanelDrag);
        window.addEventListener("mouseup", stopDraftPanelDrag);
    }

    function handleDraftPanelDrag(event) {
        if (!draftPanelDragState || !draftPanelDetached) {
            return;
        }

        applyDraftPanelFrame(
            {
                left: event.clientX - draftPanelDragState.offsetX,
                top: event.clientY - draftPanelDragState.offsetY,
            },
            { persist: false }
        );
    }

    function stopDraftPanelDrag() {
        if (!draftPanelDragState) {
            return;
        }

        const rect = draftPanel?.getBoundingClientRect?.();
        draftPanelDragState = null;
        document.body.classList.remove("is-dragging-floating-panel");
        window.removeEventListener("mousemove", handleDraftPanelDrag);
        window.removeEventListener("mouseup", stopDraftPanelDrag);
        if (rect) {
            applyDraftPanelFrame({ left: rect.left, top: rect.top });
        }
    }

    function startPaperNotesDrag(event) {
        if (!paperNotesExpanded || !paperNotesHeader || event.button !== 0) {
            return;
        }

        if (isFloatingPanelDragTargetInteractive(event.target)) {
            return;
        }

        event.preventDefault();
        const rect = paperNotesCard.getBoundingClientRect();
        paperNotesDragState = {
            offsetX: event.clientX - rect.left,
            offsetY: event.clientY - rect.top,
        };
        document.body.classList.add("is-dragging-floating-panel");
        window.addEventListener("mousemove", handlePaperNotesDrag);
        window.addEventListener("mouseup", stopPaperNotesDrag);
    }

    function handlePaperNotesDrag(event) {
        if (!paperNotesDragState || !paperNotesExpanded) {
            return;
        }

        applyPaperNotesFrame(
            {
                left: event.clientX - paperNotesDragState.offsetX,
                top: event.clientY - paperNotesDragState.offsetY,
            },
            { persist: false }
        );
    }

    function stopPaperNotesDrag() {
        if (!paperNotesDragState) {
            return;
        }

        const rect = paperNotesCard?.getBoundingClientRect?.();
        paperNotesDragState = null;
        document.body.classList.remove("is-dragging-floating-panel");
        window.removeEventListener("mousemove", handlePaperNotesDrag);
        window.removeEventListener("mouseup", stopPaperNotesDrag);
        if (rect) {
            applyPaperNotesFrame({ left: rect.left, top: rect.top });
        }
    }

    function handleWindowResize() {
        if (draftPanelDetached) {
            applyDraftPanelFrame(draftPanelFrame || getDefaultDraftPanelFrame());
        }

        if (paperNotesExpanded) {
            applyPaperNotesFrame(paperNotesFrame || getDefaultPaperNotesFrame());
        }
    }

    function getMarkdownEditorInput(editorKey) {
        if (editorKey === "draft") {
            return notepad;
        }

        if (editorKey === "paper-notes") {
            return paperNotesInput;
        }

        return null;
    }

    function setMarkdownToolbarDisabled(editorKey, disabled) {
        document
            .querySelectorAll(`[data-markdown-toolbar="${editorKey}"] .markdown-toolbar-btn`)
            .forEach((button) => {
                button.disabled = Boolean(disabled);
            });
    }

    function replaceMarkdownSelection(textarea, nextState) {
        if (!textarea || !nextState) {
            return;
        }

        textarea.value = nextState.value;
        textarea.dispatchEvent(new Event("input", { bubbles: true }));
        textarea.focus();
        textarea.setSelectionRange(nextState.selectionStart, nextState.selectionEnd);
    }

    function wrapMarkdownSelection(value, start, end, prefix, suffix, placeholder) {
        const selected = value.slice(start, end);
        const content = selected || placeholder;
        const replacement = `${prefix}${content}${suffix}`;
        return {
            value: `${value.slice(0, start)}${replacement}${value.slice(end)}`,
            selectionStart: start + prefix.length,
            selectionEnd: start + prefix.length + content.length,
        };
    }

    function prefixMarkdownLines(value, start, end, buildPrefix) {
        const blockStart = value.lastIndexOf("\n", Math.max(0, start - 1)) + 1;
        const nextLineBreak = value.indexOf("\n", end);
        const blockEnd = nextLineBreak === -1 ? value.length : nextLineBreak;
        const block = value.slice(blockStart, blockEnd);
        const lines = block.split("\n");
        const hasContent = lines.some((line) => line.trim());
        let itemIndex = 1;

        const formatted = lines
            .map((line, index) => {
                if (!line.trim()) {
                    return !hasContent && index === 0 ? buildPrefix(itemIndex, line) : line;
                }

                const prefix = buildPrefix(itemIndex, line);
                itemIndex += 1;
                return `${prefix}${line}`;
            })
            .join("\n");

        return {
            value: `${value.slice(0, blockStart)}${formatted}${value.slice(blockEnd)}`,
            selectionStart: blockStart,
            selectionEnd: blockStart + formatted.length,
        };
    }

    function insertMarkdownLink(value, start, end) {
        const selected = value.slice(start, end);
        const label = selected || "link text";
        const url = "https://example.com";
        const replacement = `[${label}](${url})`;
        const labelStart = start + 1;
        const urlStart = start + label.length + 3;

        return {
            value: `${value.slice(0, start)}${replacement}${value.slice(end)}`,
            selectionStart: selected ? urlStart : labelStart,
            selectionEnd: selected ? urlStart + url.length : labelStart + label.length,
        };
    }

    function insertMarkdownDivider(value, start, end) {
        const divider = "\n\n---\n\n";
        const nextValue = `${value.slice(0, start)}${divider}${value.slice(end)}`;
        const caretPosition = start + divider.length;
        return {
            value: nextValue,
            selectionStart: caretPosition,
            selectionEnd: caretPosition,
        };
    }

    function buildMarkdownFormatResult(value, start, end, action) {
        switch (action) {
            case "heading":
                return prefixMarkdownLines(value, start, end, () => "## ");
            case "bold":
                return wrapMarkdownSelection(value, start, end, "**", "**", "Bold text");
            case "italic":
                return wrapMarkdownSelection(value, start, end, "*", "*", "Italic text");
            case "link":
                return insertMarkdownLink(value, start, end);
            case "quote":
                return prefixMarkdownLines(value, start, end, () => "> ");
            case "bullet-list":
                return prefixMarkdownLines(value, start, end, () => "- ");
            case "number-list":
                return prefixMarkdownLines(value, start, end, (index) => `${index}. `);
            case "code": {
                const selected = value.slice(start, end);
                if (selected.includes("\n")) {
                    return wrapMarkdownSelection(value, start, end, "```\n", "\n```", "code");
                }
                return wrapMarkdownSelection(value, start, end, "`", "`", "code");
            }
            case "divider":
                return insertMarkdownDivider(value, start, end);
            default:
                return null;
        }
    }

    function applyMarkdownFormat(editorKey, action) {
        const textarea = getMarkdownEditorInput(editorKey);
        if (!textarea || textarea.disabled) {
            return;
        }

        const value = normalizeMarkdownEditorText(textarea.value);
        const start = Number.isInteger(textarea.selectionStart) ? textarea.selectionStart : value.length;
        const end = Number.isInteger(textarea.selectionEnd) ? textarea.selectionEnd : value.length;
        const nextState = buildMarkdownFormatResult(value, start, end, action);
        replaceMarkdownSelection(textarea, nextState);
    }

    function updateEditorModeToggle(toggleElement, mode) {
        if (!toggleElement) {
            return;
        }

        toggleElement.querySelectorAll("[data-editor-mode]").forEach((button) => {
            button.classList.toggle("is-active", button.dataset.editorMode === mode);
        });
    }

    function applyMarkdownEditorMode(bodyElement, mode) {
        if (!bodyElement) {
            return;
        }

        bodyElement.classList.remove("is-edit", "is-preview", "is-split");
        bodyElement.classList.add(mode === "split" ? "is-split" : (mode === "preview" ? "is-preview" : "is-edit"));
    }

    function renderMarkdownPreview(previewElement, markdown, emptyMessage) {
        if (!previewElement) {
            return;
        }

        const text = normalizeMarkdownEditorText(markdown);
        if (!text.trim()) {
            previewElement.classList.add("is-empty");
            previewElement.innerHTML = `<p>${escapeHtml(emptyMessage)}</p>`;
            return;
        }

        previewElement.classList.remove("is-empty");
        setSanitizedHtml(previewElement, renderAssistantMarkdown(text));
    }

    function countWords(text) {
        const normalized = String(text || "").trim();
        return normalized ? normalized.split(/\s+/).length : 0;
    }

    function formatCount(value) {
        const numeric = Number(value) || 0;
        return numeric.toLocaleString();
    }

    function appendChatMessage(role, content) {
        chatThread.push({
            role,
            content: String(content || "")
                .replace(/\0/g, " ")
                .replace(/\r/g, "")
                .trim(),
        });
        persistChatThreadForActiveSource();
        renderChatWidget();
    }

    function syncChatToActiveSource(source) {
        const nextSourceId = source ? source.id : "";
        const sourceChanged = chatDocumentSourceId !== nextSourceId;

        if (sourceChanged) {
            chatRequestToken += 1;
            chatRequestInFlight = false;
        }

        chatDocumentSourceId = nextSourceId;
        chatThread = nextSourceId ? getStoredChatThread(nextSourceId) : [];
        chatResponseReady = false;
        chatStatusMessage = "";
        activeDocumentContextPromise = null;
        activeDocumentContext = source
            ? {
                ...buildEmptyDocumentContext(),
                sourceId: source.id,
                label: source.title || "Untitled source",
                note: "Preparing document text...",
            }
            : buildEmptyDocumentContext();

        renderChatWidget();

        if (source) {
            refreshActiveDocumentContext(false);
        }
    }

    function normalizeStoredChatMessage(message) {
        const role = message?.role === "assistant" || message?.role === "system" ? message.role : "user";
        const content = String(message?.content || "")
            .replace(/\0/g, " ")
            .replace(/\r/g, "")
            .trim();

        if (!content) {
            return null;
        }

        return { role, content };
    }

    function normalizeStoredChatThread(thread) {
        if (!Array.isArray(thread)) {
            return [];
        }

        return thread
            .map(normalizeStoredChatMessage)
            .filter(Boolean)
            .slice(-maxPersistedChatMessagesPerSource);
    }

    function getStoredChatThread(sourceId) {
        if (!sourceId) {
            return [];
        }

        return normalizeStoredChatThread(chatThreadsBySource[sourceId]);
    }

    function persistChatThreadForSource(sourceId, thread = chatThread) {
        if (!sourceId) {
            return;
        }

        const normalizedThread = normalizeStoredChatThread(thread);
        if (normalizedThread.length) {
            chatThreadsBySource[sourceId] = normalizedThread;
        } else {
            delete chatThreadsBySource[sourceId];
        }

        saveChatThreadsBySource();
    }

    function persistChatThreadForActiveSource() {
        persistChatThreadForSource(chatDocumentSourceId);
    }

    function migrateStoredChatThread(sourceId, targetSourceId) {
        const fromId = cleanMetadataValue(sourceId);
        const toId = cleanMetadataValue(targetSourceId);
        if (!fromId || !toId || fromId === toId) {
            return;
        }

        const sourceThread = getStoredChatThread(fromId);
        if (!sourceThread.length) {
            return;
        }

        const targetThread = getStoredChatThread(toId);
        chatThreadsBySource[toId] = normalizeStoredChatThread([...targetThread, ...sourceThread]);
        delete chatThreadsBySource[fromId];
        saveChatThreadsBySource();

        if (chatDocumentSourceId === fromId) {
            chatDocumentSourceId = toId;
            chatThread = getStoredChatThread(toId);
        }
    }

    function buildEmptyDocumentContext() {
        return {
            sourceId: "",
            signature: "",
            label: "No active document",
            kind: "none",
            text: "",
            note: "Open a source or import a document to prepare document context.",
            available: false,
            truncated: false,
            charCount: 0,
        };
    }

    function buildDocumentSignature(source) {
        return [
            source.id || "",
            getViewerUrl(source),
            source.sourceKind || "",
            source.fileName || "",
            source.localOverrideLabel || "",
            source.title || "",
            source.author || "",
            source.year || "",
            getDocumentContextCharLimit(),
        ].join("|");
    }

    function invalidateDocumentContextForSource(source, note = "") {
        if (!source || !source.id) {
            return;
        }

        const nextSignature = buildDocumentSignature(source);
        const cached = documentContextCache.get(source.id);
        if (cached && cached.signature === nextSignature && activeDocumentContext.sourceId === source.id) {
            activeDocumentContext = {
                ...cached,
                label: source.title || cached.label || "Untitled source",
            };
            renderChatWidget();
            return;
        }

        documentContextCache.delete(source.id);

        if (activeDocumentContext.sourceId !== source.id) {
            return;
        }

        activeDocumentContextPromise = null;
        activeDocumentContext = {
            ...buildEmptyDocumentContext(),
            sourceId: source.id,
            signature: nextSignature,
            label: source.title || "Untitled source",
            note: note || "Document details changed. The chat will use the updated document text on your next question.",
        };

        if (!chatRequestInFlight) {
            chatStatusMessage = "";
        }

        renderChatWidget();
    }

    async function refreshActiveDocumentContext(forceRefresh = false) {
        if (!activeSource) {
            activeDocumentContext = buildEmptyDocumentContext();
            if (!chatRequestInFlight) {
                chatStatusMessage = "";
            }
            renderChatWidget();
            return activeDocumentContext;
        }

        const signature = buildDocumentSignature(activeSource);
        const cached = documentContextCache.get(activeSource.id);
        if (!forceRefresh && cached && cached.signature === signature) {
            activeDocumentContext = cached;
            if (!chatRequestInFlight) {
                chatStatusMessage = "";
            }
            renderChatWidget();
            return cached;
        }

        activeDocumentContext = {
            ...buildEmptyDocumentContext(),
            sourceId: activeSource.id,
            signature,
            label: activeSource.title || "Untitled source",
            note: "Preparing document text...",
        };
        if (!chatRequestInFlight) {
            chatStatusMessage = "";
        }
        renderChatWidget();

        const extractionPromise = extractDocumentContext(activeSource, signature);
        activeDocumentContextPromise = extractionPromise;

        try {
            const context = await extractionPromise;
            if (activeDocumentContextPromise !== extractionPromise) {
                return context;
            }

            activeDocumentContext = context;
            documentContextCache.set(activeSource.id, context);
            renderChatWidget();
            return context;
        } catch (error) {
            const fallback = buildMetadataFallbackContext(
                activeSource,
                `Full document text could not be extracted: ${error.message || "Unknown error"}`,
                signature
            );
            activeDocumentContext = fallback;
            documentContextCache.set(activeSource.id, fallback);
            renderChatWidget();
            return fallback;
        }
    }

    async function extractDocumentContext(source, signature) {
        const documentSource = buildDocumentLoadSource(source, signature);
        if (!documentSource) {
            return buildMetadataFallbackContext(source, "No document URL is attached to this source.", signature);
        }

        try {
            return await loadDocument(documentSource, source, signature);
        } catch (error) {
            const message = cleanMetadataValue(error?.message || "");
            return buildMetadataFallbackContext(
                source,
                message || "This document could not be downloaded or converted into clean plain text for chat context.",
                signature
            );
        }
    }

    function isBlobBackedDocumentUrl(url) {
        return /^(blob:|data:)/i.test(cleanMetadataValue(url));
    }

    function buildDocumentLoadSource(source, signature) {
        if (!source) {
            return null;
        }

        if (source.localOverrideBlob instanceof Blob) {
            return {
                type: "local",
                file: createDocumentFile(
                    source.localOverrideBlob,
                    source.localOverrideLabel || source.fileName || guessTitleFromFilename(source.title || "attached-document")
                ),
                label: "attached local copy",
            };
        }

        const localOverrideUrl = cleanMetadataValue(source.localOverrideUrl);
        if (localOverrideUrl) {
            if (isBlobBackedDocumentUrl(localOverrideUrl)) {
                return {
                    type: "url",
                    url: localOverrideUrl,
                    label: "attached local copy",
                    shouldPersistLocalCopy: false,
                    warningPrefix: "The attached document could not be read automatically.",
                };
            }

            if (/^file:/i.test(localOverrideUrl)) {
                return {
                    type: "file-url",
                    url: localOverrideUrl,
                    label: "attached local file",
                };
            }

            const isRemoteHttpOverride = /^https?:\/\//i.test(localOverrideUrl);
            return {
                type: "url",
                url: localOverrideUrl,
                label: "attached URL",
                shouldPersistLocalCopy: isRemoteHttpOverride,
                warningPrefix: "The attached document could not be downloaded automatically.",
            };
        }

        if (source.fileBlob instanceof Blob) {
            return {
                type: "local",
                file: createDocumentFile(
                    source.fileBlob,
                    source.fileName || inferDownloadFileNameFromUrl(source.url || source.objectUrl || "", source)
                ),
                label: source.isImported ? "imported document" : "cached local copy",
            };
        }

        const objectUrl = cleanMetadataValue(source.objectUrl);
        if (isBlobBackedDocumentUrl(objectUrl)) {
            return {
                type: "url",
                url: objectUrl,
                label: source.isImported ? "imported document" : "cached local copy",
                shouldPersistLocalCopy: false,
                warningPrefix: "The cached document could not be read automatically.",
            };
        }

        const remoteUrl = cleanMetadataValue(source.url ? normaliseUrl(source.url) : "");
        if (remoteUrl) {
            return {
                type: "url",
                url: remoteUrl,
                label: "remote URL",
                shouldPersistLocalCopy: true,
                warningPrefix: "Automatic download failed for this URL.",
            };
        }

        const liveViewerContext = extractLiveViewerHtmlContext(source, signature);
        if (liveViewerContext) {
            return {
                type: "parsed-context",
                context: liveViewerContext,
            };
        }

        return null;
    }

    async function loadDocument(documentSource, source, signature) {
        if (documentSource.type === "parsed-context") {
            clearAutomaticDownloadWarning(source);
            return documentSource.context;
        }

        if (documentSource.type === "local") {
            clearAutomaticDownloadWarning(source);
            return parseDocument(documentSource.file, source, signature);
        }

        if (documentSource.type === "file-url") {
            throw new Error(
                "Browser file paths cannot be read directly for chat context. Reattach the document with the file picker or import it so the file contents can be parsed."
            );
        }

        if (documentSource.type === "url") {
            const file = await downloadDocumentFromUrl(source, documentSource);
            clearAutomaticDownloadWarning(source);
            return parseDocument(file, source, signature);
        }

        throw new Error("Unsupported document source.");
    }

    async function parseDocument(file, source, signature) {
        const kind = detectDocumentKind(
            {
                sourceKind: source?.sourceKind || "",
                fileName: file?.name || source?.fileName || "",
                localOverrideLabel: source?.localOverrideLabel || "",
            },
            file?.name || source?.url || "",
            file?.type || ""
        );

        if (kind === "pdf") {
            return extractPdfDocumentContext(source, file, signature);
        }

        if (kind === "docx") {
            return extractDocxDocumentContext(source, file, signature);
        }

        if (kind === "odt") {
            return extractOdtDocumentContext(source, file, signature);
        }

        if (kind === "html") {
            return extractHtmlDocumentContext(source, signature, {
                html: await safeReadBlobAsText(file),
                kind: "html",
            });
        }

        if (kind === "markdown" || kind === "text" || kind === "rtf") {
            return extractPlainTextDocumentContext(source, file, signature, kind);
        }

        if (kind === "doc") {
            throw new Error("Legacy .doc files are not supported for reliable browser parsing. Save the file as .docx or .pdf, then import or link it manually.");
        }

        const fallbackText = await safeReadBlobAsText(file);
        const inferredTextKind = inferTextPayloadKind(fallbackText, file?.type || "");

        if (inferredTextKind === "html") {
            return extractHtmlDocumentContext(source, signature, {
                html: fallbackText,
                kind: "html",
            });
        }

        if (inferredTextKind === "markdown" || inferredTextKind === "text" || inferredTextKind === "rtf") {
            return extractPlainTextDocumentContext(source, file, signature, inferredTextKind, fallbackText);
        }

        throw new Error("The downloaded file format is not supported for automatic parsing. Download it manually, then import or link a local copy.");
    }

    async function downloadDocumentFromUrl(source, documentSource) {
        let response;

        try {
            response = await fetch(documentSource.url, {
                credentials: "include",
            });
        } catch (error) {
            const message = `${documentSource.warningPrefix} Download or save the document manually, then import or link the local copy so it can be parsed reliably.`;
            setAutomaticDownloadWarning(source, message);
            throw new Error(message);
        }

        if (!response.ok) {
            const message = `${documentSource.warningPrefix} The site returned ${response.status}. Download the document manually, then import or link the local copy.`;
            setAutomaticDownloadWarning(source, message);
            throw new Error(message);
        }

        const blob = await response.blob();
        if (!(blob instanceof Blob) || blob.size === 0) {
            const message = `${documentSource.warningPrefix} The response did not contain a readable file. Download the document manually, then import or link the local copy.`;
            setAutomaticDownloadWarning(source, message);
            throw new Error(message);
        }

        const fileName = inferDownloadFileName(response, documentSource.url, source, blob);
        const file = createDocumentFile(blob, fileName);

        if (documentSource.shouldPersistLocalCopy) {
            await cacheDownloadedDocument(source, file);
        }

        return file;
    }

    function createDocumentFile(blob, fileName = "document") {
        const safeName = cleanMetadataValue(fileName) || "document";
        try {
            return new File([blob], safeName, {
                type: blob.type || "application/octet-stream",
            });
        } catch (error) {
            blob.name = safeName;
            return blob;
        }
    }

    function inferDownloadFileName(response, url, source, blob) {
        const contentDisposition = response.headers.get("content-disposition") || "";
        const dispositionMatch = contentDisposition.match(/filename\*=UTF-8''([^;]+)|filename="?([^";]+)"?/i);
        const dispositionName = cleanMetadataValue(
            dispositionMatch?.[1] ? decodeURIComponent(dispositionMatch[1]) : (dispositionMatch?.[2] || "")
        );

        if (dispositionName) {
            return dispositionName;
        }

        return inferDownloadFileNameFromUrl(url, source, blob?.type || "");
    }

    function inferDownloadFileNameFromUrl(url, source, contentType = "") {
        const preferred = cleanMetadataValue(source?.fileName || source?.localOverrideLabel || "");
        if (preferred) {
            return preferred;
        }

        let baseName = "";
        try {
            const parsed = new URL(cleanMetadataValue(url), window.location.href);
            baseName = decodeURIComponent(parsed.pathname.split("/").filter(Boolean).pop() || "");
        } catch (error) {
            baseName = "";
        }

        const cleanedBaseName = cleanMetadataValue(baseName) || guessTitleFromFilename(source?.title || "downloaded-document");
        if (/\.[a-z0-9]{2,8}$/i.test(cleanedBaseName)) {
            return cleanedBaseName;
        }

        const extension = getDocumentExtensionForType(contentType) || getDocumentExtensionForType(detectDocumentKind(source, url, contentType));
        return extension ? `${cleanedBaseName}.${extension}` : cleanedBaseName;
    }

    function getDocumentExtensionForType(typeOrKind) {
        const normalized = cleanMetadataValue(typeOrKind).toLowerCase();
        const map = {
            pdf: "pdf",
            docx: "docx",
            odt: "odt",
            html: "html",
            markdown: "md",
            text: "txt",
            rtf: "rtf",
            "application/pdf": "pdf",
            "application/vnd.openxmlformats-officedocument.wordprocessingml.document": "docx",
            "application/vnd.oasis.opendocument.text": "odt",
            "text/html": "html",
            "application/xhtml+xml": "html",
            "text/markdown": "md",
            "text/plain": "txt",
            "application/rtf": "rtf",
            "text/rtf": "rtf",
        };

        return map[normalized] || "";
    }

    async function cacheDownloadedDocument(source, file) {
        if (!source || !(file instanceof Blob)) {
            return;
        }

        releaseObjectUrl(source.objectUrl);
        source.objectUrl = URL.createObjectURL(file);
        source.fileBlob = file;
        source.fileName = file.name || source.fileName || "downloaded-document";
        source.sourceKind = detectDocumentKind(
            {
                sourceKind: source.sourceKind || "",
                fileName: source.fileName,
                localOverrideLabel: source.localOverrideLabel || "",
            },
            source.fileName,
            file.type || ""
        ) || source.sourceKind;
        source.sourceUrl = getViewerUrl(source);

        if (source.id) {
            await storePersistedPdfAttachment(source.id, "object", file, source.fileName || file.name || "");
        }

        if (source.isCustom) {
            saveCustomSources();
        } else {
            saveActiveSourceState(source);
        }

        if (activeSource && activeSource.id === source.id) {
            updateViewerHelp(source);
        }
    }

    function setAutomaticDownloadWarning(source, message) {
        if (!source) {
            return;
        }

        source.autoDownloadWarning = cleanMetadataValue(message);

        if (activeSource && activeSource.id === source.id) {
            updateViewerHelp(source);
        }
    }

    function clearAutomaticDownloadWarning(source) {
        if (!source) {
            return;
        }

        delete source.autoDownloadWarning;

        if (activeSource && activeSource.id === source.id) {
            updateViewerHelp(source);
        }
    }

    function isPdfLikeSource(source, url) {
        return Boolean(
            (source && source.sourceKind === "pdf") ||
            (source && source.fileName && /\.pdf$/i.test(source.fileName)) ||
            (source && source.localOverrideLabel && /\.pdf$/i.test(source.localOverrideLabel)) ||
            /\.pdf(?:$|[?#])/i.test(url || "")
        );
    }

    function detectDocumentKind(source, url = "", contentType = "") {
        const type = cleanMetadataValue(contentType).toLowerCase();
        const candidates = [
            cleanMetadataValue(source?.sourceKind).toLowerCase(),
            cleanMetadataValue(source?.fileName).toLowerCase(),
            cleanMetadataValue(source?.localOverrideLabel).toLowerCase(),
            cleanMetadataValue(url).toLowerCase(),
        ].filter(Boolean);

        if (candidates.some((value) => value === "pdf" || /\.pdf(?:$|[?#])/i.test(value)) || /application\/pdf/i.test(type)) {
            return "pdf";
        }

        if (candidates.some((value) => value === "docx" || /\.docx(?:$|[?#])/i.test(value))
            || /application\/vnd\.openxmlformats-officedocument\.wordprocessingml\.document/i.test(type)) {
            return "docx";
        }

        if (candidates.some((value) => value === "odt" || /\.odt(?:$|[?#])/i.test(value))
            || /application\/vnd\.oasis\.opendocument\.text/i.test(type)) {
            return "odt";
        }

        if (candidates.some((value) => value === "doc" || /\.doc(?:$|[?#])/i.test(value))
            || /application\/msword/i.test(type)) {
            return "doc";
        }

        if (candidates.some((value) => value === "markdown" || /\.md(?:$|[?#])/i.test(value) || /\.markdown(?:$|[?#])/i.test(value))
            || /text\/markdown/i.test(type)) {
            return "markdown";
        }

        if (candidates.some((value) => value === "rtf" || /\.rtf(?:$|[?#])/i.test(value))
            || /application\/rtf|text\/rtf/i.test(type)) {
            return "rtf";
        }

        if (candidates.some((value) => value === "html" || /\.html?(?:$|[?#])/i.test(value) || /\.xhtml(?:$|[?#])/i.test(value))
            || /text\/html|application\/xhtml\+xml/i.test(type)) {
            return "html";
        }

        if (candidates.some((value) => value === "text" || /\.txt(?:$|[?#])/i.test(value) || /\.json(?:$|[?#])/i.test(value) || /\.xml(?:$|[?#])/i.test(value))
            || /^text\//i.test(type)
            || /application\/(json|xml|javascript|csv)/i.test(type)) {
            return "text";
        }

        return "";
    }

    function isExplicitDocumentKind(kind) {
        return [
            "pdf",
            "docx",
            "odt",
            "doc",
            "html",
            "markdown",
            "text",
            "rtf",
        ].includes(cleanMetadataValue(kind).toLowerCase());
    }

    function getDocumentKindLabel(kind) {
        const normalized = cleanMetadataValue(kind).toLowerCase();
        if (normalized === "pdf") {
            return "PDF";
        }
        if (normalized === "docx") {
            return "DOCX";
        }
        if (normalized === "odt") {
            return "ODT";
        }
        if (normalized === "html") {
            return "HTML";
        }
        if (normalized === "markdown") {
            return "Markdown";
        }
        if (normalized === "rtf") {
            return "RTF";
        }
        if (normalized === "text") {
            return "Text";
        }
        if (normalized === "doc") {
            return "DOC";
        }
        return "document";
    }

    function getFileDocumentKind(file) {
        if (!(file instanceof File || file instanceof Blob)) {
            return "";
        }

        return detectDocumentKind(
            {
                fileName: file.name || "",
                sourceKind: "",
            },
            file.name || "",
            file.type || ""
        );
    }

    function getSupportedDocumentFiles(fileList) {
        return Array.from(fileList || []).filter((file) => Boolean(getFileDocumentKind(file)));
    }

    async function extractPdfDocumentContext(source, blob, signature) {
        if (!window.pdfjsLib) {
            return buildMetadataFallbackContext(
                source,
                "PDF.js is unavailable, so the chat can only use citation metadata right now.",
                signature
            );
        }

        const buffer = await blob.arrayBuffer();
        const pdf = await window.pdfjsLib.getDocument({ data: new Uint8Array(buffer) }).promise;
        const pageTexts = [];
        const documentContextCharLimit = getDocumentContextCharLimit();
        let truncated = false;

        for (let pageNumber = 1; pageNumber <= pdf.numPages; pageNumber += 1) {
            const page = await pdf.getPage(pageNumber);
            const textContent = await page.getTextContent();
            const pageText = normalizeDocumentText(
                textContent.items
                    .map((item) => item.str)
                    .join(" ")
            );

            if (pageText) {
                pageTexts.push(pageText);
            }

            const combinedLength = pageTexts.join("\n\n").length;
            if (combinedLength >= documentContextCharLimit) {
                truncated = true;
                break;
            }
        }

        const text = truncateDocumentText(pageTexts.join("\n\n"), documentContextCharLimit);

        if (!text) {
            return buildMetadataFallbackContext(
                source,
                "The PDF loaded, but no readable text was extracted from it.",
                signature
            );
        }

        return {
            sourceId: source.id,
            signature,
            label: source.title || source.fileName || "PDF document",
            kind: "pdf",
            text,
            available: true,
            truncated,
            charCount: text.length,
            note: `Document context ready from PDF (${pdf.numPages} pages, ${formatCount(text.length)} chars${truncated ? `, truncated at ${formatCount(documentContextCharLimit)} chars` : ""}).`,
        };
    }

    async function extractDocxDocumentContext(source, blob, signature) {
        if (!window.mammoth?.extractRawText) {
            return buildMetadataFallbackContext(
                source,
                "DOCX extraction is unavailable because Mammoth did not load.",
                signature
            );
        }

        const result = await window.mammoth.extractRawText({
            arrayBuffer: await blob.arrayBuffer(),
        });
        const documentContextCharLimit = getDocumentContextCharLimit();
        const normalizedDocxText = normalizeDocumentText(result?.value || "");
        const text = truncateDocumentText(result?.value || "", documentContextCharLimit);

        if (!text) {
            return buildMetadataFallbackContext(
                source,
                "The DOCX file loaded, but no readable plain text was extracted from it.",
                signature
            );
        }

        return {
            sourceId: source.id,
            signature,
            label: source.title || source.fileName || "DOCX document",
            kind: "docx",
            text,
            available: true,
            truncated: normalizedDocxText.length > text.length,
            charCount: text.length,
            note: `Document context ready from DOCX (${formatCount(text.length)} chars${normalizedDocxText.length > text.length ? `, truncated at ${formatCount(documentContextCharLimit)} chars` : ""}).`,
        };
    }

    async function extractOdtDocumentContext(source, blob, signature) {
        if (!window.JSZip?.loadAsync) {
            return buildMetadataFallbackContext(
                source,
                "ODT extraction is unavailable because JSZip did not load.",
                signature
            );
        }

        const zip = await window.JSZip.loadAsync(await blob.arrayBuffer());
        const contentFile = zip.file("content.xml");

        if (!contentFile) {
            return buildMetadataFallbackContext(
                source,
                "The ODT file did not contain a readable content.xml payload.",
                signature
            );
        }

        const xml = await contentFile.async("string");
        const extractedText = extractPlainTextFromOdtXml(xml);
        const documentContextCharLimit = getDocumentContextCharLimit();
        const normalizedOdtText = normalizeDocumentText(extractedText);
        const text = truncateDocumentText(extractedText, documentContextCharLimit);

        if (!text) {
            return buildMetadataFallbackContext(
                source,
                "The ODT file loaded, but no readable plain text was extracted from it.",
                signature
            );
        }

        return {
            sourceId: source.id,
            signature,
            label: source.title || source.fileName || "ODT document",
            kind: "odt",
            text,
            available: true,
            truncated: normalizedOdtText.length > text.length,
            charCount: text.length,
            note: `Document context ready from ODT (${formatCount(text.length)} chars${normalizedOdtText.length > text.length ? `, truncated at ${formatCount(documentContextCharLimit)} chars` : ""}).`,
        };
    }

    async function extractHtmlDocumentContext(source, signature, options = {}) {
        let html = String(options.html || "");

        if (!html && options.blob instanceof Blob) {
            html = await safeReadBlobAsText(options.blob);
        }

        if (!html) {
            return buildMetadataFallbackContext(
                source,
                "The HTML page could not be fetched for text extraction.",
                signature
            );
        }

        const parsed = extractReadableHtmlText(html, source);
        if (!parsed.text) {
            return buildMetadataFallbackContext(
                source,
                "The HTML page loaded, but no readable text was extracted from it.",
                signature
            );
        }

        const documentContextCharLimit = getDocumentContextCharLimit();
        const text = truncateDocumentText(parsed.text, documentContextCharLimit);
        return {
            sourceId: source.id,
            signature,
            label: parsed.title || source.title || "HTML document",
            kind: "html",
            text,
            available: true,
            truncated: parsed.text.length > text.length,
            charCount: text.length,
            note: `Document context ready from HTML (${formatCount(text.length)} chars${parsed.text.length > text.length ? `, truncated at ${formatCount(documentContextCharLimit)} chars` : ""}).`,
        };
    }

    async function extractPlainTextDocumentContext(source, blob, signature, kind = "text", preloadedText = "") {
        const rawText = preloadedText || await safeReadBlobAsText(blob);
        let plainText = rawText;

        if (kind === "markdown") {
            plainText = convertMarkdownToPlainText(rawText);
        } else if (kind === "rtf") {
            plainText = extractPlainTextFromRtf(rawText);
        }

        const normalizedText = normalizeDocumentText(plainText);
        const documentContextCharLimit = getDocumentContextCharLimit();
        const text = truncateDocumentText(normalizedText, documentContextCharLimit);

        if (!text) {
            return buildMetadataFallbackContext(
                source,
                `The ${kind.toUpperCase()} document loaded, but no readable plain text was extracted from it.`,
                signature
            );
        }

        return {
            sourceId: source.id,
            signature,
            label: source.title || source.fileName || "Text document",
            kind: kind === "markdown" ? "text" : kind,
            text,
            available: true,
            truncated: normalizedText.length > text.length,
            charCount: text.length,
            note: `Document context ready from ${kind.toUpperCase()} plain text (${formatCount(text.length)} chars${normalizedText.length > text.length ? `, truncated at ${formatCount(documentContextCharLimit)} chars` : ""}).`,
        };
    }

    function getCurrentViewerDocumentUrl() {
        try {
            return cleanMetadataValue(viewer.contentWindow?.location?.href || viewer.src || "");
        } catch (error) {
            return cleanMetadataValue(viewer.src || "");
        }
    }

    function extractLiveViewerHtmlContext(source, signature) {
        try {
            if (!source || !viewer.contentDocument || !viewer.contentDocument.documentElement) {
                return null;
            }

            if (viewerLoadedSourceId && source.id && viewerLoadedSourceId !== source.id) {
                return null;
            }

            const liveDocumentUrl = getCurrentViewerDocumentUrl();
            const currentViewerUrl = getViewerUrl(source);
            const sameDocument = viewerLoadedSourceId === source.id
                || normalizeComparableDocumentUrl(liveDocumentUrl) === normalizeComparableDocumentUrl(currentViewerUrl)
                || normalizeComparableDocumentUrl(viewerLoadedUrl) === normalizeComparableDocumentUrl(currentViewerUrl);

            if (!sameDocument) {
                return null;
            }

            const parsed = extractReadableHtmlText(viewer.contentDocument, source);
            if (!parsed.text) {
                return null;
            }

            const documentContextCharLimit = getDocumentContextCharLimit();
            const text = truncateDocumentText(parsed.text, documentContextCharLimit);
            return {
                sourceId: source.id,
                signature,
                label: parsed.title || source.title || "HTML document",
                kind: "html",
                text,
                available: true,
                truncated: parsed.text.length > text.length,
                charCount: text.length,
                note: `Document context ready from the live page (${formatCount(text.length)} chars${parsed.text.length > text.length ? `, truncated at ${formatCount(documentContextCharLimit)} chars` : ""}).`,
            };
        } catch (error) {
            return null;
        }
    }

    function normalizeComparableDocumentUrl(url) {
        const cleaned = cleanMetadataValue(url);
        if (!cleaned) {
            return "";
        }

        try {
            const parsed = new URL(cleaned, window.location.href);
            parsed.hash = "";
            return parsed.toString().replace(/\/+$/, "");
        } catch (error) {
            return cleaned.replace(/#.*$/, "").replace(/\/+$/, "");
        }
    }

    async function safeReadBlobAsText(blob) {
        if (!(blob instanceof Blob)) {
            return "";
        }

        try {
            return await blob.text();
        } catch (error) {
            try {
                const buffer = await blob.arrayBuffer();
                return new TextDecoder("utf-8", { fatal: false }).decode(buffer);
            } catch (decodeError) {
                return "";
            }
        }
    }

    function extractReadableHtmlText(htmlOrDocument, source) {
        const doc = buildHtmlExtractionDocument(htmlOrDocument);
        if (!doc) {
            return {
                title: cleanMetadataValue(source.title),
                text: "",
            };
        }

        stripLikelyNonContentNodes(doc);

        let title = cleanMetadataValue(source.title) || cleanMetadataValue(doc.title);
        let text = "";

        if (window.Readability) {
            try {
                const article = new window.Readability(doc.cloneNode(true)).parse();
                if (article && article.textContent) {
                    text = article.textContent;
                    title = cleanMetadataValue(article.title) || title;
                }
            } catch (error) {
                text = "";
            }
        }

        if (!text) {
            const contentRoot = selectPrimaryContentRoot(doc);
            text = extractTextFromHtmlNode(contentRoot || doc.body || doc.documentElement || doc);
        }

        return {
            title,
            text: normalizeDocumentText(cleanExtractedDocumentText(text)),
        };
    }

    function buildHtmlExtractionDocument(htmlOrDocument) {
        if (!htmlOrDocument) {
            return null;
        }

        if (typeof htmlOrDocument === "string") {
            return new DOMParser().parseFromString(htmlOrDocument, "text/html");
        }

        if (htmlOrDocument.documentElement) {
            return htmlOrDocument.cloneNode(true);
        }

        return null;
    }

    function stripLikelyNonContentNodes(doc) {
        doc.querySelectorAll([
            "script",
            "style",
            "noscript",
            "svg",
            "canvas",
            "form",
            "nav",
            "footer",
            "header",
            "aside",
            "dialog",
            "iframe",
            "button",
            "input",
            "select",
            "textarea",
            "option",
            "template",
            "[hidden]",
            "[aria-hidden='true']",
            "[role='dialog']",
            "[role='navigation']",
            "[role='banner']",
            "[role='contentinfo']",
            "[role='search']",
            "[role='complementary']",
            ".sr-only",
            ".visually-hidden",
            ".hidden",
            ".feedback",
            ".feedback-widget",
            ".cookie-banner",
            ".cookies",
            ".share",
            ".sharing",
            ".social",
            ".toolbar",
            ".page-tools",
            ".page-actions",
            ".advertisement",
            ".ads",
            ".ad",
            ".references",
            ".reference-list",
            ".bibliography",
            ".footnotes",
            ".related-content",
            ".recommended-articles",
        ].join(",")).forEach((node) => {
            node.remove();
        });

        doc.querySelectorAll("*").forEach((node) => {
            const tag = node.tagName ? node.tagName.toLowerCase() : "";
            const marker = `${node.id || ""} ${typeof node.className === "string" ? node.className : ""}`.toLowerCase();

            if (/(cookie|consent|subscribe|newsletter|login|sign-in|signin|feedback|toolbar|breadcrumb|share|social|advert|promo|recommend|related|reference-list|bibliograph|footnote)/.test(marker)) {
                node.remove();
                return;
            }

            if ((tag === "a" || tag === "sup" || tag === "sub") && looksLikeCitationOnlyText(node.textContent)) {
                node.remove();
                return;
            }

            if (tag === "img") {
                const altText = cleanMetadataValue(node.getAttribute("alt"));
                if (!altText) {
                    node.remove();
                    return;
                }

                node.replaceWith(doc.createTextNode(` ${altText} `));
            }
        });
    }

    function looksLikeCitationOnlyText(text) {
        const cleaned = cleanMetadataValue(text);
        if (!cleaned) {
            return false;
        }

        return /^\[(?:\d+[\s,;:-]*)+\]$/.test(cleaned)
            || /^\(?\d+(?:[\s,;:-]+\d+)*\)?$/.test(cleaned)
            || /^(fig|table|supplementary)\.?\s*\d+[a-z]?$/i.test(cleaned);
    }

    function selectPrimaryContentRoot(doc) {
        const candidates = [
            doc.querySelector("article"),
            doc.querySelector("main"),
            doc.querySelector("[role='main']"),
            doc.querySelector(".article-content"),
            doc.querySelector(".article-body"),
            doc.querySelector(".article-main"),
            doc.querySelector("#main-content"),
            doc.querySelector(".main-content"),
            doc.querySelector(".content"),
            doc.querySelector(".page-content"),
        ].filter(Boolean);

        if (!candidates.length) {
            return doc.body || null;
        }

        return candidates
            .map((node) => ({ node, length: extractTextFromHtmlNode(node).length }))
            .sort((left, right) => right.length - left.length)[0]?.node || (doc.body || null);
    }

    function extractTextFromHtmlNode(node) {
        if (!node) {
            return "";
        }

        const text = typeof node.innerText === "string" && node.innerText.trim()
            ? node.innerText
            : (node.textContent || "");

        return text || "";
    }

    function cleanExtractedDocumentText(text) {
        const uiOnlyLine = /^(view pdf|download( full issue| pdf)?|open url|import document|search [\w .:-]+|feedback|new chat|expand|minimize|minimize ai chat|ask about document)$/i;

        return String(text || "")
            .replace(/\u00a0/g, " ")
            .replace(/\[(?:\d+[\s,;:-]*)+\]/g, " ")
            .split("\n")
            .map((line) => line.trim())
            .filter((line) => line && !uiOnlyLine.test(line))
            .join("\n");
    }

    function convertMarkdownToPlainText(markdown) {
        const raw = String(markdown || "");
        if (!raw) {
            return "";
        }

        if (window.marked?.parse) {
            const parser = new DOMParser();
            const html = window.marked.parse(raw);
            const doc = parser.parseFromString(html, "text/html");
            return doc.body ? doc.body.textContent || "" : doc.textContent || "";
        }

        return raw
            .replace(/^#{1,6}\s+/gm, "")
            .replace(/`{1,3}([^`]+)`{1,3}/g, "$1")
            .replace(/[*_~>-]+/g, " ");
    }

    function extractPlainTextFromRtf(rtf) {
        return String(rtf || "")
            .replace(/\\par[d]?/gi, "\n")
            .replace(/\\line/gi, "\n")
            .replace(/\\tab/gi, "\t")
            .replace(/\\'[0-9a-f]{2}/gi, (match) => {
                const hex = match.slice(2);
                return String.fromCharCode(parseInt(hex, 16));
            })
            .replace(/\\u-?\d+\??/gi, " ")
            .replace(/\\[a-z]+\d* ?/gi, "")
            .replace(/[{}]/g, " ");
    }

    function extractPlainTextFromOdtXml(xml) {
        const doc = new DOMParser().parseFromString(xml, "application/xml");
        if (doc.querySelector("parsererror")) {
            return "";
        }

        const root = Array.from(doc.getElementsByTagName("*")).find((node) => {
            const name = node.nodeName.toLowerCase();
            return name === "office:text" || name.endsWith(":text");
        });

        if (!root) {
            return "";
        }

        const parts = [];
        walkOdtTextNode(root, parts);
        return normalizeDocumentText(parts.join(""));
    }

    function walkOdtTextNode(node, parts) {
        if (!node) {
            return;
        }

        node.childNodes.forEach((child) => {
            if (child.nodeType === Node.TEXT_NODE) {
                parts.push(child.nodeValue || "");
                return;
            }

            if (child.nodeType !== Node.ELEMENT_NODE) {
                return;
            }

            const name = child.nodeName.toLowerCase();
            if (name.endsWith(":line-break")) {
                parts.push("\n");
                return;
            }

            if (name.endsWith(":tab")) {
                parts.push("\t");
                return;
            }

            walkOdtTextNode(child, parts);

            if (name.endsWith(":table-cell")) {
                parts.push("\t");
            }

            if (
                name.endsWith(":p")
                || name.endsWith(":h")
                || name.endsWith(":list-item")
                || name.endsWith(":table-row")
                || name.endsWith(":section")
            ) {
                parts.push("\n\n");
            }
        });
    }

    function inferTextPayloadKind(text, contentType = "") {
        const normalizedContentType = cleanMetadataValue(contentType).toLowerCase();
        const sample = String(text || "").trim();

        if (!sample) {
            return normalizedContentType.includes("rtf") ? "rtf" : "";
        }

        if (normalizedContentType.includes("rtf") || sample.startsWith("{\\rtf")) {
            return "rtf";
        }

        if (normalizedContentType.includes("markdown")) {
            return "markdown";
        }

        if (normalizedContentType.includes("html")
            || /<!doctype html/i.test(sample)
            || /<html[\s>]/i.test(sample)
            || /<body[\s>]/i.test(sample)) {
            return "html";
        }

        if (/^#{1,6}\s+\S+/m.test(sample) || /\[[^\]]+\]\([^)]+\)/.test(sample)) {
            return "markdown";
        }

        return "text";
    }

    function normalizeDocumentText(text) {
        return String(text || "")
            .replace(/\u0000/g, " ")
            .replace(/\r/g, "\n")
            .replace(/[ \t]+\n/g, "\n")
            .replace(/\n[ \t]+/g, "\n")
            .replace(/[ \t]{2,}/g, " ")
            .replace(/\n{3,}/g, "\n\n")
            .split("\n")
            .map((line) => line.trim())
            .join("\n")
            .replace(/\n{3,}/g, "\n\n")
            .trim();
    }

    function truncateDocumentText(text, limit) {
        const cleaned = normalizeDocumentText(text);
        if (cleaned.length <= limit) {
            return cleaned;
        }

        return cleaned.slice(0, limit).trimEnd();
    }

    function buildMetadataFallbackContext(source, reason, signature = buildDocumentSignature(source)) {
        const linkedLabels = getLinkedSectionKeys(source)
            .map((sectionKey) => getSectionOptionLabel(sectionKey))
            .filter(Boolean);
        const parts = [
            source.title ? `Title: ${source.title}` : "",
            source.author ? `Author: ${source.author}` : "",
            source.year ? `Year: ${source.year}` : "",
            source.publisher ? `Publisher: ${source.publisher}` : "",
            source.url ? `URL: ${source.url}` : "",
            source.fullRef ? `Full reference: ${source.fullRef}` : "",
            linkedLabels.length ? `Linked sections: ${linkedLabels.join(", ")}` : "Linked sections: Sources only",
            reason ? `Context limitation: ${reason}` : "",
        ].filter(Boolean).join("\n");

        return {
            sourceId: source.id,
            signature,
            label: source.title || "Active source",
            kind: "metadata",
            text: parts,
            available: false,
            truncated: false,
            charCount: parts.length,
            note: reason || "Full document text is unavailable, so chat is using source metadata only.",
        };
    }

    function buildDocumentChatSystemPrompt(context) {
        const activeInstruction = getActiveAiInstruction();
        return [
            "You answer questions about a single active document.",
            "Use the supplied plain-text document context first.",
            "The document context contains extracted raw text only, not rendered HTML or markdown.",
            "Do not reveal hidden reasoning, internal analysis, or chain-of-thought.",
            "Reply directly to the user in normal prose.",
            "If the answer is not in the document context, say that clearly instead of inventing it.",
            "If the context type is metadata, say that only source metadata was available and that a full-text answer is limited.",
            "Quote short phrases only when useful and keep answers concise and document-focused.",
            activeInstruction ? "Also follow this user-selected instruction for the response task, structure, or emphasis, but never invent facts beyond the supplied document context:" : "",
            activeInstruction ? `Instruction preset: ${activeInstruction.name}` : "",
            activeInstruction ? activeInstruction.content : "",
            `Document label: ${context.label}`,
            `Context type: ${context.kind}`,
            `Context note: ${context.note}`,
            "Document context:",
            context.text,
        ].filter(Boolean).join("\n\n");
    }

    function buildChatMessages(question, context) {
        const history = chatThread
            .filter((message) => message.role === "user" || message.role === "assistant")
            .slice(-8)
            .map((message) => ({
                role: message.role,
                content: message.content,
            }));

        return [
            {
                role: "system",
                content: buildDocumentChatSystemPrompt(context),
            },
            ...history,
            {
                role: "user",
                content: question,
            },
        ];
    }

    function buildLmStudioNativeInput(question) {
        const history = chatThread
            .filter((message) => message.role === "user" || message.role === "assistant")
            .slice(-8)
            .map((message) => `${message.role === "assistant" ? "Assistant" : "User"}: ${message.content}`)
            .join("\n\n");

        return history
            ? `Previous conversation:\n${history}\n\nCurrent question:\n${question}`
            : question;
    }

    function addAiEndpointCandidate(candidates, seen, url, apiFlavor, extra = {}) {
        const normalizedUrl = cleanMetadataValue(url);
        if (!normalizedUrl || seen.has(normalizedUrl)) {
            return;
        }

        seen.add(normalizedUrl);
        candidates.push({
            url: normalizedUrl,
            apiFlavor,
            ...extra,
        });
    }

    function prioritizeAiEndpointCandidates(candidates, preferredFlavor = "") {
        const normalizedPreferredFlavor = normalizeAiApiFlavor(preferredFlavor);
        if (!normalizedPreferredFlavor) {
            return candidates;
        }

        return [
            ...candidates.filter((candidate) => candidate.apiFlavor === normalizedPreferredFlavor),
            ...candidates.filter((candidate) => candidate.apiFlavor !== normalizedPreferredFlavor),
        ];
    }

    function buildModelsEndpointCandidates(baseUrl, mode, preferredFlavor = getAiModeConfig(mode).apiFlavor) {
        const trimmed = cleanMetadataValue(baseUrl).replace(/\/+$/, "");
        if (!trimmed) {
            return [];
        }

        const candidates = [];
        const seen = new Set();

        if (/\/api\/v1\/models$/i.test(trimmed)) {
            addAiEndpointCandidate(candidates, seen, trimmed, "lmstudio-native");
        } else if (/\/api\/v1\/chat$/i.test(trimmed)) {
            addAiEndpointCandidate(candidates, seen, trimmed.replace(/\/chat$/i, "/models"), "lmstudio-native");
        } else if (/\/v1\/models$/i.test(trimmed)) {
            addAiEndpointCandidate(candidates, seen, trimmed, "openai-compatible");
        } else if (/\/v1\/chat\/completions$/i.test(trimmed)) {
            addAiEndpointCandidate(candidates, seen, trimmed.replace(/\/chat\/completions$/i, "/models"), "openai-compatible");
        } else if (/\/models$/i.test(trimmed)) {
            addAiEndpointCandidate(candidates, seen, trimmed, mode === "local" ? "lmstudio-native" : "openai-compatible");
        } else if (/\/chat\/completions$/i.test(trimmed)) {
            addAiEndpointCandidate(candidates, seen, trimmed.replace(/\/chat\/completions$/i, "/models"), "openai-compatible");
        } else if (/\/chat$/i.test(trimmed)) {
            addAiEndpointCandidate(candidates, seen, trimmed.replace(/\/chat$/i, "/models"), "lmstudio-native");
        } else if (/\/api\/v1$/i.test(trimmed)) {
            addAiEndpointCandidate(candidates, seen, `${trimmed}/models`, "lmstudio-native");
        } else if (/\/v1$/i.test(trimmed)) {
            addAiEndpointCandidate(candidates, seen, `${trimmed}/models`, "openai-compatible");
        } else {
            if (mode === "local") {
                addAiEndpointCandidate(candidates, seen, `${trimmed}/api/v1/models`, "lmstudio-native");
                addAiEndpointCandidate(candidates, seen, `${trimmed}/v1/models`, "openai-compatible");
            } else {
                addAiEndpointCandidate(candidates, seen, `${trimmed}/v1/models`, "openai-compatible");
                addAiEndpointCandidate(candidates, seen, `${trimmed}/models`, "openai-compatible");
            }
        }

        return prioritizeAiEndpointCandidates(candidates, preferredFlavor);
    }

    function buildSingleTurnAiRequestPlans(
        baseUrl,
        mode,
        model,
        systemPrompt,
        userPrompt,
        options = {},
        preferredFlavor = getAiModeConfig(mode).apiFlavor,
    ) {
        const trimmed = cleanMetadataValue(baseUrl).replace(/\/+$/, "");
        if (!trimmed) {
            return [];
        }

        const candidates = [];
        const seen = new Set();
        const temperature = typeof options.temperature === "number" ? options.temperature : 0.2;
        const openAiMessages = Array.isArray(options.messages) && options.messages.length
            ? options.messages
            : [
                { role: "system", content: systemPrompt },
                { role: "user", content: userPrompt },
            ];
        const lmStudioInput = cleanMetadataValue(options.lmStudioInput || userPrompt) || userPrompt;
        const addOpenAiCandidate = (url) => {
            addAiEndpointCandidate(candidates, seen, url, "openai-compatible", {
                body: {
                    model,
                    temperature,
                    messages: openAiMessages,
                    ...(options.openAiBody && typeof options.openAiBody === "object" ? options.openAiBody : {}),
                },
            });
        };
        const addLmStudioNativeCandidate = (url) => {
            addAiEndpointCandidate(candidates, seen, url, "lmstudio-native", {
                body: {
                    model,
                    temperature,
                    input: lmStudioInput,
                    system_prompt: systemPrompt,
                    stream: false,
                    ...(options.lmStudioBody && typeof options.lmStudioBody === "object" ? options.lmStudioBody : {}),
                },
            });
        };

        if (/\/api\/v1\/chat$/i.test(trimmed)) {
            addLmStudioNativeCandidate(trimmed);
        } else if (/\/api\/v1\/models$/i.test(trimmed)) {
            addLmStudioNativeCandidate(trimmed.replace(/\/models$/i, "/chat"));
        } else if (/\/v1\/chat\/completions$/i.test(trimmed)) {
            addOpenAiCandidate(trimmed);
        } else if (/\/v1\/models$/i.test(trimmed)) {
            addOpenAiCandidate(trimmed.replace(/\/models$/i, "/chat/completions"));
        } else if (/\/chat\/completions$/i.test(trimmed)) {
            addOpenAiCandidate(trimmed);
        } else if (/\/models$/i.test(trimmed)) {
            if (mode === "local") {
                addLmStudioNativeCandidate(trimmed.replace(/\/models$/i, "/chat"));
                addOpenAiCandidate(trimmed.replace(/\/models$/i, "/chat/completions"));
            } else {
                addOpenAiCandidate(trimmed.replace(/\/models$/i, "/chat/completions"));
            }
        } else if (/\/chat$/i.test(trimmed)) {
            addLmStudioNativeCandidate(trimmed);
        } else if (/\/api\/v1$/i.test(trimmed)) {
            addLmStudioNativeCandidate(`${trimmed}/chat`);
        } else if (/\/v1$/i.test(trimmed)) {
            addOpenAiCandidate(`${trimmed}/chat/completions`);
        } else {
            if (mode === "local") {
                addLmStudioNativeCandidate(`${trimmed}/api/v1/chat`);
                addOpenAiCandidate(`${trimmed}/v1/chat/completions`);
            } else {
                addOpenAiCandidate(`${trimmed}/v1/chat/completions`);
                addOpenAiCandidate(`${trimmed}/chat/completions`);
            }
        }

        return prioritizeAiEndpointCandidates(candidates, preferredFlavor);
    }

    function buildChatRequestPlans(baseUrl, mode, model, question, context, preferredFlavor = getAiModeConfig(mode).apiFlavor) {
        return buildSingleTurnAiRequestPlans(
            baseUrl,
            mode,
            model,
            buildDocumentChatSystemPrompt(context),
            question,
            {
                temperature: 0.2,
                messages: buildChatMessages(question, context),
                lmStudioInput: buildLmStudioNativeInput(question),
            },
            preferredFlavor,
        );
    }

    async function resolveAiTextFromPlans(plans, requestMode) {
        let lastError = new Error("No AI endpoint succeeded.");

        for (const plan of plans) {
            try {
                const response = await fetch(plan.url, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        ...(requestMode === "remote" ? { Authorization: `Bearer ${aiChatConfig.remote.apiKey}` } : {}),
                    },
                    body: JSON.stringify(plan.body),
                });

                const payload = await response.json().catch(() => ({}));
                if (!response.ok) {
                    throw new Error(payload.error?.message || `Request failed with ${response.status}`);
                }

                const candidateText = extractAssistantMessageText(payload, plan.apiFlavor);
                if (!candidateText) {
                    throw new Error("The model returned an empty response.");
                }

                return {
                    text: candidateText,
                    apiFlavor: plan.apiFlavor,
                };
            } catch (error) {
                lastError = error instanceof Error ? error : new Error(String(error));
            }
        }

        throw lastError;
    }

    function extractModelIds(payload) {
        const collections = [
            payload?.data,
            payload?.models,
            payload?.items,
            Array.isArray(payload) ? payload : null,
        ];
        const modelIds = [];

        collections.forEach((collection) => {
            if (!Array.isArray(collection)) {
                return;
            }

            collection.forEach((entry) => {
                const modelId = typeof entry === "string"
                    ? cleanMetadataValue(entry)
                    : cleanMetadataValue(entry?.key || entry?.id || entry?.name || entry?.model || entry?.display_name);

                if (modelId) {
                    modelIds.push(modelId);
                }
            });
        });

        return normalizeAiModelIds(modelIds);
    }

    async function fetchAiModels(options = {}) {
        const requestMode = aiChatConfig.mode;
        const modeConfig = getAiModeConfig(requestMode);
        const baseUrl = cleanMetadataValue(modeConfig.baseUrl);
        const apiKey = aiChatConfig.remote.apiKey || "";
        const requestEndpointKey = getAiModelsEndpointKey(requestMode);

        if (!baseUrl) {
            if (!options.automatic) {
                aiConfigStatusMessage = "Add a base URL first.";
                renderAiConfigStatus();
            }
            return [];
        }

        if (requestMode === "remote" && !apiKey) {
            if (!options.automatic) {
                aiConfigStatusMessage = "Remote mode needs an API key before models can be fetched.";
                renderAiConfigStatus();
            }
            return [];
        }

        const requestToken = ++aiModelsRequestToken;
        aiModelsLoading = true;
        aiConfigStatusMessage = options.automatic
            ? `Refreshing ${requestMode} models...`
            : `Fetching available models for ${requestMode} mode...`;
        renderAiConfig();

        try {
            const candidates = buildModelsEndpointCandidates(baseUrl, requestMode);
            if (!candidates.length) {
                throw new Error("No valid models endpoint could be derived from the base URL.");
            }

            let modelIds = [];
            let resolvedApiFlavor = "";
            let lastError = new Error("No models endpoint succeeded.");

            for (const candidate of candidates) {
                try {
                    const response = await fetch(candidate.url, {
                        headers: {
                            Accept: "application/json",
                            ...(requestMode === "remote" ? { Authorization: `Bearer ${apiKey}` } : {}),
                        },
                    });

                    const payload = await response.json().catch(() => ({}));
                    if (!response.ok) {
                        throw new Error(payload.error?.message || `Request failed with ${response.status}`);
                    }

                    const candidateModelIds = extractModelIds(payload);
                    if (!candidateModelIds.length) {
                        throw new Error("No models were returned by this endpoint.");
                    }

                    modelIds = candidateModelIds;
                    resolvedApiFlavor = candidate.apiFlavor;
                    break;
                } catch (error) {
                    lastError = error instanceof Error ? error : new Error(String(error));
                }
            }

            if (!modelIds.length) {
                throw lastError;
            }

            if (getAiModelsEndpointKey(requestMode) !== requestEndpointKey) {
                return modelIds;
            }

            modeConfig.models = modelIds;
            modeConfig.modelsEndpoint = requestEndpointKey;
            modeConfig.apiFlavor = resolvedApiFlavor;
            if (!cleanMetadataValue(modeConfig.model) || !modelIds.includes(cleanMetadataValue(modeConfig.model))) {
                modeConfig.model = modelIds[0];
            }

            saveAiChatConfig();
            if (requestToken === aiModelsRequestToken) {
                aiConfigStatusMessage = `Fetched ${modelIds.length} model${modelIds.length === 1 ? "" : "s"} for ${requestMode} mode.`;
            }
            return modelIds;
        } catch (error) {
            if (requestToken === aiModelsRequestToken) {
                aiConfigStatusMessage = `Could not fetch models: ${error.message || "Unknown error"}`;
            }
            return [];
        } finally {
            if (requestToken === aiModelsRequestToken) {
                aiModelsLoading = false;
                renderAiConfig();
            }
        }
    }

    async function sendChatMessage() {
        const question = cleanMetadataValue(chatInput.value);
        if (!question) {
            chatStatusMessage = "Write a question first.";
            renderChatWidget();
            return;
        }

        if (!activeSource) {
            chatStatusMessage = "Open or import a document first.";
            renderChatWidget();
            return;
        }

        const configError = getAiRequestConfigError();
        if (configError) {
            chatStatusMessage = configError;
            renderChatWidget();
            return;
        }

        const modeConfig = getAiModeConfig();
        primeChatNotificationAudio();
        toggleChatWidget(true);
        chatInput.value = "";
        chatRequestInFlight = true;
        chatResponseReady = false;
        const requestToken = ++chatRequestToken;
        const requestSourceId = activeSource.id;
        const requestMode = aiChatConfig.mode;
        const requestEndpointKey = getAiModelsEndpointKey(requestMode);
        appendChatMessage("user", question);
        chatStatusMessage = "Preparing document context for the model...";
        renderChatWidget();

        const context = await refreshActiveDocumentContext(false);
        if (requestToken !== chatRequestToken || !activeSource || activeSource.id !== requestSourceId) {
            return;
        }

        chatStatusMessage = context.available
            ? "Waiting for the model response..."
            : "The model is working from source metadata because full document text is unavailable.";
        renderChatWidget();

        const chatPlans = buildChatRequestPlans(modeConfig.baseUrl, requestMode, modeConfig.model, question, context);
        if (!chatPlans.length) {
            appendChatMessage("system", "Chat request failed: No valid chat endpoint could be derived from the base URL.");
            chatStatusMessage = "Chat request failed. Check the configured base URL.";
            chatRequestInFlight = false;
            renderChatWidget();
            return;
        }

        try {
            const result = await resolveAiTextFromPlans(chatPlans, requestMode);

            if (requestToken !== chatRequestToken || !activeSource || activeSource.id !== requestSourceId) {
                return;
            }

            if (getAiModelsEndpointKey(requestMode) === requestEndpointKey) {
                modeConfig.apiFlavor = result.apiFlavor;
                saveAiChatConfig();
            }

            appendChatMessage("assistant", result.text);
            notifyChatResponseReceived();
            chatStatusMessage = `Response received using ${context.kind} document context.`;
        } catch (error) {
            if (requestToken !== chatRequestToken || !activeSource || activeSource.id !== requestSourceId) {
                return;
            }

            appendChatMessage("system", `Chat request failed: ${error.message || "Unknown error"}`);
            chatStatusMessage = "Chat request failed. Check the model config, endpoint, and document access.";
        } finally {
            if (requestToken === chatRequestToken) {
                chatRequestInFlight = false;
                renderChatWidget();
            }
        }
    }

    function extractAssistantMessageText(payload, apiFlavor = "openai-compatible") {
        if (apiFlavor === "lmstudio-native") {
            const outputItems = Array.isArray(payload?.output) ? payload.output : [];
            const nativeText = outputItems
                .map((item) => {
                    if (typeof item === "string") {
                        return item;
                    }

                    if (typeof item?.content === "string") {
                        return item.content;
                    }

                    if (Array.isArray(item?.content)) {
                        return item.content
                            .map((part) => (typeof part === "string" ? part : (part?.text || part?.content || "")))
                            .filter(Boolean)
                            .join("\n\n");
                    }

                    return item?.text || "";
                })
                .filter(Boolean)
                .join("\n\n");

            return nativeText
                || cleanMetadataValue(payload?.output_text || payload?.response || payload?.content || payload?.text);
        }

        const content = payload?.choices?.[0]?.message?.content;

        if (Array.isArray(content)) {
            return content
                .map((part) => (typeof part === "string" ? part : (part?.text || part?.content || "")))
                .filter(Boolean)
                .join("\n\n");
        }

        return typeof content === "string" ? content : "";
    }

    function buildMetadataExtractionPromptContext(context) {
        const excerptLimit = 18000;
        const excerpt = truncateDocumentText(context?.text || "", excerptLimit);
        return excerpt || "";
    }

    function buildMetadataExtractionSystemPrompt() {
        return [
            "You extract bibliographic metadata from a single document.",
            "Return only a valid JSON object.",
            "Do not include markdown fences, commentary, or extra text.",
            "Use only evidence from the supplied document excerpt and current metadata snapshot.",
            "Prefer the title page, heading block, abstract header, and publication details near the start of the document.",
            "Do not invent missing facts.",
            "If a field is unclear, use an empty string. If no good tags are obvious, use an empty array.",
            "Use this exact JSON shape:",
            "{\"title\":\"\",\"author\":\"\",\"year\":\"\",\"publisher\":\"\",\"tags\":[]}",
            "Rules:",
            "- title: the best full document title, not a running header.",
            "- author: a single string. For multiple authors, join them with '; '. Use an organisation only if the document presents one instead of named authors.",
            "- year: four digits only, or an empty string.",
            "- publisher: journal, conference, publisher, institution, or report body if clearly stated.",
            "- tags: 3 to 6 short lowercase topical tags when possible.",
        ].join("\n");
    }

    function buildMetadataExtractionUserPrompt(source, context) {
        const currentMetadata = [
            `Title: ${cleanMetadataValue(source?.title) || ""}`,
            `Author: ${cleanMetadataValue(source?.author) || ""}`,
            `Year: ${cleanMetadataValue(source?.year) || ""}`,
            `Publisher: ${cleanMetadataValue(source?.publisher) || ""}`,
            `URL: ${cleanMetadataValue(source?.url) || ""}`,
            `Tags: ${formatSourceTagsInput(getSourceTags(source))}`,
        ].join("\n");
        const excerpt = buildMetadataExtractionPromptContext(context);

        return [
            "Current metadata snapshot (may be wrong):",
            currentMetadata,
            "",
            `Document label: ${context.label}`,
            `Context type: ${context.kind}`,
            `Context note: ${context.note}`,
            "",
            "Document excerpt to inspect:",
            excerpt,
        ].join("\n");
    }

    function collectLikelyJsonObjectStrings(text) {
        const cleaned = String(text || "").trim();
        if (!cleaned) {
            return [];
        }

        const candidates = [];
        const fencedPattern = /```(?:json)?\s*([\s\S]*?)```/gi;
        let fencedMatch = fencedPattern.exec(cleaned);
        while (fencedMatch) {
            if (fencedMatch[1]) {
                candidates.push(fencedMatch[1].trim());
            }
            fencedMatch = fencedPattern.exec(cleaned);
        }

        for (let start = cleaned.indexOf("{"); start !== -1; start = cleaned.indexOf("{", start + 1)) {
            let depth = 0;
            let inString = false;
            let isEscaped = false;

            for (let index = start; index < cleaned.length; index += 1) {
                const char = cleaned[index];
                if (inString) {
                    if (isEscaped) {
                        isEscaped = false;
                    } else if (char === "\\") {
                        isEscaped = true;
                    } else if (char === "\"") {
                        inString = false;
                    }
                    continue;
                }

                if (char === "\"") {
                    inString = true;
                    continue;
                }

                if (char === "{") {
                    depth += 1;
                    continue;
                }

                if (char === "}") {
                    depth -= 1;
                    if (depth === 0) {
                        candidates.push(cleaned.slice(start, index + 1));
                        break;
                    }
                }
            }
        }

        candidates.push(cleaned);
        return [...new Set(candidates.filter(Boolean))];
    }

    function parseJsonObjectFromText(text) {
        const candidates = collectLikelyJsonObjectStrings(text);

        for (const candidate of candidates) {
            const normalizedCandidate = candidate
                .replace(/^\uFEFF/, "")
                .replace(/[“”]/g, "\"")
                .replace(/[‘’]/g, "'")
                .replace(/,\s*([}\]])/g, "$1")
                .trim();

            try {
                const parsed = JSON.parse(normalizedCandidate);
                if (parsed && typeof parsed === "object" && !Array.isArray(parsed)) {
                    return parsed;
                }
            } catch (error) {
                // Try the next candidate.
            }
        }

        return null;
    }

    function normalizeAuthorDisplayValue(value) {
        const cleaned = cleanMetadataValue(value);
        if (!cleaned || cleaned === "Unknown author") {
            return cleaned;
        }

        const hasLetters = /[A-Za-zÀ-ÖØ-öø-ÿ]/.test(cleaned);
        if (!hasLetters) {
            return cleaned;
        }

        const shouldNormalize = cleaned === cleaned.toUpperCase() || cleaned === cleaned.toLowerCase();
        if (!shouldNormalize) {
            return cleaned;
        }

        return cleaned.replace(/[A-Za-zÀ-ÖØ-öø-ÿ][A-Za-zÀ-ÖØ-öø-ÿ'’.-]*/g, (word) => normalizeAuthorWord(word));
    }

    function normalizeAuthorWord(word) {
        if (!word) {
            return "";
        }

        if (/^[A-Z]{2,5}$/.test(word)) {
            return word;
        }

        if (/^[A-Z](?:\.[A-Z])+\.?$/i.test(word) || /^[A-Z]\.$/i.test(word)) {
            return word.toUpperCase();
        }

        return word
            .split(/([-'’])/)
            .map((part) => {
                if (!part || /^[-'’]$/.test(part)) {
                    return part;
                }

                if (/^[A-Z]{2,5}$/i.test(part) && word === word.toUpperCase()) {
                    return part.toUpperCase();
                }

                return part.charAt(0).toUpperCase() + part.slice(1).toLowerCase();
            })
            .join("");
    }

    function normalizeAiAuthorValue(value) {
        if (Array.isArray(value)) {
            return normalizeAuthorDisplayValue(value
                .map((entry) => {
                    if (typeof entry === "string") {
                        return entry;
                    }

                    return entry?.name || entry?.author || entry?.full_name || entry?.display_name || "";
                })
                .filter(Boolean)
                .join("; "));
        }

        return normalizeAuthorDisplayValue(value);
    }

    function normalizeAiYearValue(value) {
        const cleaned = cleanMetadataValue(value);
        const match = cleaned.match(/\b(19|20)\d{2}\b/);
        return match ? match[0] : "";
    }

    function normalizeAiMetadataUrl(value) {
        const cleaned = cleanMetadataValue(value);
        if (!cleaned) {
            return "";
        }

        if (/^10\.\d{4,9}\//i.test(cleaned)) {
            return `https://doi.org/${cleaned}`;
        }

        return normaliseUrl(cleaned);
    }

    function normalizeAiMetadataPayload(payload) {
        const normalized = payload && typeof payload === "object" && !Array.isArray(payload) ? payload : {};
        return {
            title: cleanMetadataValue(normalized.title || normalized.document_title || normalized.paper_title || ""),
            author: normalizeAiAuthorValue(normalized.author || normalized.authors || normalized.author_list || normalized.creators || ""),
            year: normalizeAiYearValue(normalized.year || normalized.publication_year || normalized.published_year || normalized.date || ""),
            publisher: cleanMetadataValue(
                normalized.publisher
                || normalized.journal
                || normalized.venue
                || normalized.source
                || normalized.booktitle
                || normalized.institution
                || "",
            ),
            tags: normalizeSourceTags(normalized.tags || normalized.keywords || normalized.topics || normalized.subjects || []),
            url: normalizeAiMetadataUrl(normalized.url || normalized.doi_url || normalized.doi || normalized.link || ""),
        };
    }

    function listAiMetadataUpdates(metadata) {
        const labels = [];
        if (metadata.title) {
            labels.push("title");
        }
        if (metadata.author) {
            labels.push("author");
        }
        if (metadata.year) {
            labels.push("year");
        }
        if (metadata.publisher) {
            labels.push("publisher");
        }
        if (metadata.tags.length) {
            labels.push("tags");
        }
        if (metadata.url) {
            labels.push("URL");
        }
        return labels;
    }

    function applyAiMetadataToSource(source, metadata) {
        if (!source) {
            return;
        }

        source.title = metadata.title;
        source.author = metadata.author;
        source.year = metadata.year;
        source.publisher = metadata.publisher;

        if (metadata.tags.length) {
            source.tags = metadata.tags;
        }

        if (metadata.url && !cleanMetadataValue(source.url)) {
            source.url = metadata.url;
        }
    }

    function syncDocumentContextLabel(source) {
        if (!source?.id) {
            return;
        }

        const nextLabel = cleanMetadataValue(source.title) || activeDocumentContext.label || "Untitled source";
        const cached = documentContextCache.get(source.id);
        if (cached) {
            documentContextCache.set(source.id, {
                ...cached,
                label: nextLabel,
            });
        }

        if (activeDocumentContext.sourceId === source.id) {
            activeDocumentContext = {
                ...activeDocumentContext,
                label: nextLabel,
            };
            renderChatWidget();
        }
    }

    async function populateMetadataWithAi() {
        const source = syncActiveSourceFromForm();
        if (!source) {
            metaStatus.textContent = "Select or open a source first.";
            return;
        }

        const configError = getAiRequestConfigError();
        if (configError) {
            metaStatus.textContent = configError;
            renderMetadataAiAction();
            return;
        }

        const requestMode = aiChatConfig.mode;
        const modeConfig = getAiModeConfig(requestMode);
        const requestEndpointKey = getAiModelsEndpointKey(requestMode);
        const requestSourceId = source.id;
        const requestToken = ++metadataAiRequestToken;

        metadataAiRequestInFlight = true;
        renderMetadataAiAction();
        metaStatus.textContent = "Preparing readable document text for AI metadata extraction...";

        try {
            const context = await refreshActiveDocumentContext(false);
            if (requestToken !== metadataAiRequestToken || !activeSource || activeSource.id !== requestSourceId) {
                return;
            }

            if (!context.available || !cleanMetadataValue(context.text) || context.kind === "metadata") {
                metaStatus.textContent = "AI metadata fill needs readable document text. Import or attach the document file first so the app can inspect the actual content.";
                return;
            }

            const plans = buildSingleTurnAiRequestPlans(
                modeConfig.baseUrl,
                requestMode,
                modeConfig.model,
                buildMetadataExtractionSystemPrompt(),
                buildMetadataExtractionUserPrompt(source, context),
                {
                    temperature: 0.1,
                },
            );

            if (!plans.length) {
                metaStatus.textContent = "AI metadata fill failed. Check the configured base URL.";
                return;
            }

            const result = await resolveAiTextFromPlans(plans, requestMode);
            if (requestToken !== metadataAiRequestToken || !activeSource || activeSource.id !== requestSourceId) {
                return;
            }

            if (getAiModelsEndpointKey(requestMode) === requestEndpointKey) {
                modeConfig.apiFlavor = result.apiFlavor;
                saveAiChatConfig();
            }

            const parsedPayload = parseJsonObjectFromText(result.text);
            if (!parsedPayload) {
                throw new Error("The model did not return valid JSON metadata.");
            }

            const metadata = normalizeAiMetadataPayload(parsedPayload);
            const updatedFields = listAiMetadataUpdates(metadata);
            if (!updatedFields.length) {
                throw new Error("The model returned JSON, but it did not contain usable metadata fields.");
            }

            applyAiMetadataToSource(source, metadata);
            fillMetadataForm(source);
            curName.innerText = source.title || "Untitled source";
            updateViewerHelp(source);
            syncDocumentContextLabel(source);
            saveActiveSourceState(source);

            if (source.isCustom || source.id?.startsWith("static-")) {
                persistMetadataForSource(source);
                renderList();
            } else {
                updateSaveToArticlesButtonState(source);
                updateDeleteArticleButtonState(source);
            }

            renderPaperNotesEditor();
            metaStatus.textContent = `AI filled ${updatedFields.join(", ")} from the document text. Review the result, then click Generate Citation if you want to refresh the citation.`;
        } catch (error) {
            if (requestToken !== metadataAiRequestToken || !activeSource || activeSource.id !== requestSourceId) {
                return;
            }

            metaStatus.textContent = `AI metadata fill failed: ${error.message || "Unknown error"}`;
        } finally {
            if (requestToken === metadataAiRequestToken) {
                metadataAiRequestInFlight = false;
                renderMetadataAiAction();
            }
        }
    }

    function getKnownSectionKeys() {
        return [
            ...staticSectionDefs.map((section) => section.key),
            ...customSections.map((section) => section.key),
        ];
    }

    function getContentSections() {
        return [
            ...staticSections.map((section) => ({
                key: section.key,
                label: section.section,
                isCustom: false,
                papers: section.papers,
            })),
            ...customSections.map((section) => ({
                key: section.key,
                label: section.label,
                isCustom: true,
                papers: [],
            })),
        ];
    }

    function getStaticSectionByKey(sectionKey) {
        return staticSections.find((section) => section.key === sectionKey) || null;
    }

    function getSectionOptionLabel(sectionKey) {
        return getContentSections().find((section) => section.key === sectionKey)?.label || "Unknown section";
    }

    function isCustomSectionKey(sectionKey) {
        return customSections.some((section) => section.key === sectionKey);
    }

    function normalizeLinkedSectionKeys(linkedSectionKeys, legacySectionKey = "", isCustomSource = false) {
        const validKeys = new Set(getKnownSectionKeys());
        const candidates = Array.isArray(linkedSectionKeys)
            ? linkedSectionKeys
            : (isCustomSource && legacySectionKey && legacySectionKey !== extraSectionKey ? [legacySectionKey] : []);

        return [...new Set(
            candidates
                .map((sectionKey) => cleanMetadataValue(sectionKey))
                .filter((sectionKey) => validKeys.has(sectionKey))
        )];
    }

    function getDefaultLinkedSectionKeys(source) {
        if (!source || source.isCustom) {
            return [];
        }

        const defaultSectionKey = cleanMetadataValue(source.defaultSectionKey || source.sectionKey);
        return defaultSectionKey && defaultSectionKey !== extraSectionKey ? [defaultSectionKey] : [];
    }

    function getLinkedSectionKeys(source) {
        if (!source) {
            return [];
        }

        if (source.isCustom) {
            return normalizeLinkedSectionKeys(source.linkedSectionKeys, source.sectionKey, true);
        }

        const override = articleLinkOverrides[source.id];
        if (override && Array.isArray(override.linkedSectionKeys)) {
            return normalizeLinkedSectionKeys(override.linkedSectionKeys, "", false);
        }

        return getDefaultLinkedSectionKeys(source);
    }

    function isSameSectionKeySet(left = [], right = []) {
        const leftKeys = [...new Set(left)].sort();
        const rightKeys = [...new Set(right)].sort();
        return leftKeys.length === rightKeys.length && leftKeys.every((key, index) => key === rightKeys[index]);
    }

    function setLinkedSectionKeys(source, sectionKeys) {
        if (!source) {
            return source;
        }

        const normalizedKeys = normalizeLinkedSectionKeys(sectionKeys, "", Boolean(source.isCustom));
        source.linkedSectionKeys = normalizedKeys;

        if (source.isCustom) {
            source.sectionKey = normalizedKeys[0] || extraSectionKey;
            return source;
        }

        const defaultKeys = getDefaultLinkedSectionKeys(source);
        if (isSameSectionKeySet(normalizedKeys, defaultKeys)) {
            delete articleLinkOverrides[source.id];
        } else {
            articleLinkOverrides[source.id] = {
                linkedSectionKeys: normalizedKeys,
            };
        }

        source.sectionKey = source.defaultSectionKey || normalizedKeys[0] || extraSectionKey;
        saveArticleLinkOverrides();
        return source;
    }

    function isArticleLinked(source) {
        return getLinkedSectionKeys(source).length > 0;
    }

    function getStaticArticles() {
        return staticSections.flatMap((section) => section.papers);
    }

    function findMatchingStaticArticle(source, options = {}) {
        if (!source) {
            return null;
        }

        const sourceCandidates = buildArticleIdentityCandidates(source);
        if (!sourceCandidates.length) {
            return null;
        }

        return getStaticArticles().find((paper) => {
            if (options.excludeId && paper.id === options.excludeId) {
                return false;
            }

            const paperCandidates = buildArticleIdentityCandidates(paper);
            return paperCandidates.some((candidate) => sourceCandidates.includes(candidate));
        }) || null;
    }

    function getVisibleCustomArticles() {
        const seenCandidates = new Set();

        return customSources.filter((paper) => {
            if (findMatchingStaticArticle(paper, { excludeId: paper.id })) {
                return false;
            }

            const candidates = buildArticleIdentityCandidates(paper);
            const uniqueCandidates = candidates.filter((candidate) => !seenCandidates.has(candidate));

            if (!candidates.length || uniqueCandidates.length === candidates.length) {
                candidates.forEach((candidate) => seenCandidates.add(candidate));
                return true;
            }

            return false;
        });
    }

    function getAllArticles() {
        return [
            ...getStaticArticles(),
            ...getVisibleCustomArticles(),
        ];
    }

    function filterArticlesByTags(papers) {
        const requestedTerms = buildTagFilterTerms();
        if (!requestedTerms.length) {
            return papers;
        }

        return papers.filter((paper) => matchesSourceTagFilter(paper, requestedTerms));
    }

    function filterArticles(papers) {
        let filtered = papers;

        if (articleFilter === "linked") {
            filtered = filtered.filter((paper) => isArticleLinked(paper));
        }

        if (articleFilter === "unlinked") {
            filtered = filtered.filter((paper) => !isArticleLinked(paper));
        }

        return filterArticlesByTags(filtered);
    }

    function getArticlesEmptyMessage() {
        const requestedTags = buildTagFilterTerms();
        if (requestedTags.length) {
            return `No sources match the current tag filter: ${requestedTags.join(", ")}.`;
        }

        if (articleFilter === "linked") {
            return "No linked sources yet. Use Link To Section to add sources to one or more sections.";
        }

        if (articleFilter === "unlinked") {
            return "No unlinked sources. Sources without section links stay here only.";
        }

        return "Saved sources appear here. Create custom sections on the right to organise this module.";
    }

    function renderList() {
        list.innerHTML = "";

        appendSection(
            "Sources",
            filterArticles(getAllArticles()),
            getArticlesEmptyMessage(),
            extraSectionKey
        );

        getContentSections().forEach((section) => {
            const linkedArticles = filterArticlesByTags(
                getAllArticles().filter((paper) => getLinkedSectionKeys(paper).includes(section.key))
            );
            const emptyMessage = !linkedArticles.length && section.isCustom
                ? "No sources linked to this custom section yet."
                : "";
            appendSection(section.label, linkedArticles, emptyMessage, section.key);
        });

        updateActiveListItem(activeSource ? activeSource.id : "");
        updateUndoDeleteButton();
        updateSaveToArticlesButtonState(activeSource);
    }

    function appendSection(title, papers, emptyMessage = "", draftSectionKey = "") {
        const heading = document.createElement("h2");
        heading.innerText = title;
        if (draftSectionKey) {
            heading.classList.add("is-selectable");
            heading.addEventListener("click", () => setActiveDraftSection(draftSectionKey, { focus: false }));
        }
        list.appendChild(heading);

        if (!papers.length && emptyMessage) {
            const placeholder = document.createElement("div");
            placeholder.className = "ref-item placeholder";
            placeholder.textContent = emptyMessage;
            list.appendChild(placeholder);
            return;
        }

        papers.forEach((paper) => {
            const item = document.createElement("div");
            const year = paper.year || "n.d.";
            const isArticlesSection = draftSectionKey === extraSectionKey;
            const showDelete = isArticlesSection && paper.isCustom;
            const showUnlink = !isArticlesSection && getLinkedSectionKeys(paper).includes(draftSectionKey);
            const actionMarkup = showDelete
                ? '<div class="ref-item-actions"><button class="ref-item-btn" data-action="delete" type="button">Delete</button></div>'
                : (showUnlink
                    ? '<div class="ref-item-actions"><button class="ref-item-btn unlink" data-action="unlink" type="button">Unlink</button></div>'
                    : "");
            item.className = "ref-item";
            item.dataset.paperId = paper.id;
            item.innerHTML = `
                <div class="ref-item-row">
                    <div class="ref-item-main">
                        <strong>${escapeHtml(paper.author || "Unknown author")} (${escapeHtml(year)})</strong><br>
                        ${escapeHtml(paper.title || "Untitled source")}
                        ${buildSourceTagMarkup(paper)}
                        ${getListItemStatus(paper, draftSectionKey)}
                    </div>
                    ${actionMarkup}
                </div>
            `;
            item.addEventListener("click", () => {
                if (activeSource && activeSource.id === paper.id) {
                    return;
                }

                setActiveSource(paper);
            });
            const actionButton = item.querySelector(".ref-item-btn");
            if (actionButton) {
                actionButton.addEventListener("click", (event) => {
                    event.stopPropagation();
                    if (actionButton.dataset.action === "unlink") {
                        unlinkArticleFromSection(paper.id, draftSectionKey);
                        return;
                    }

                    deleteArticleFromList(paper.id);
                });
            }
            list.appendChild(item);
        });
    }

    function getListItemStatus(paper, contextSectionKey = extraSectionKey) {
        const parts = [];
        const linkedSections = getLinkedSectionKeys(paper);
        const linkedSectionLabels = linkedSections.map((sectionKey) => getSectionOptionLabel(sectionKey));

        parts.push("Source");
        if (isExplicitDocumentKind(paper.sourceKind)) {
            parts.push(getDocumentKindLabel(paper.sourceKind));
        } else if (paper.localOverrideUrl) {
            parts.push(paper.localOverrideLabel || "Local copy");
        } else if (paper.url) {
            parts.push("URL");
        }

        let sectionsLabel = linkedSectionLabels.length
            ? `Sections: ${linkedSectionLabels.join(", ")}`
            : "Sections: Sources only";

        if (contextSectionKey && contextSectionKey !== extraSectionKey && linkedSectionLabels.length) {
            const otherLabels = linkedSectionLabels.filter((label) => label !== getSectionOptionLabel(contextSectionKey));
            sectionsLabel = otherLabels.length
                ? `Also in: ${otherLabels.join(", ")}`
                : `Linked here`;
        }

        return `<small>${escapeHtml(parts.join(" · "))}</small><small>${escapeHtml(sectionsLabel)}</small>`;
    }

    function normalizeSourceTags(tags) {
        const values = Array.isArray(tags)
            ? tags
            : String(tags || "").split(",");
        const seen = new Set();

        return values
            .map((value) => cleanMetadataValue(value))
            .filter(Boolean)
            .filter((value) => {
                const normalizedKey = value.toLowerCase();
                if (seen.has(normalizedKey)) {
                    return false;
                }
                seen.add(normalizedKey);
                return true;
            });
    }

    function formatSourceTagsInput(tags) {
        return normalizeSourceTags(tags).join(", ");
    }

    function buildTagFilterTerms(value = articleTagFilter) {
        return String(value || "")
            .split(",")
            .map((term) => cleanMetadataValue(term).toLowerCase())
            .filter(Boolean);
    }

    function getSourceTags(source) {
        return Array.isArray(source?.tags) ? source.tags : [];
    }

    function matchesSourceTagFilter(source, requestedTerms = buildTagFilterTerms()) {
        if (!requestedTerms.length) {
            return true;
        }

        const sourceTags = getSourceTags(source).map((tag) => tag.toLowerCase());
        if (!sourceTags.length) {
            return false;
        }

        return requestedTerms.every((term) => sourceTags.some((tag) => tag.includes(term)));
    }

    function buildSourceTagMarkup(source) {
        const tags = getSourceTags(source);
        if (!tags.length) {
            return "";
        }

        return `<div class="ref-item-tags">${tags
            .map((tag) => `<span class="ref-item-tag">${escapeHtml(tag)}</span>`)
            .join("")}</div>`;
    }

    function normalizePaper(paper) {
        const metadataOverride = metadataOverrides[paper.id] || {};
        const title = cleanMetadataValue(metadataOverride.title || paper.t || paper.title || "");
        const author = normalizeAuthorDisplayValue(metadataOverride.author || paper.a || paper.author || "");
        const year = cleanMetadataValue(metadataOverride.year || paper.y || paper.year || "");
        const url = cleanMetadataValue(metadataOverride.url || paper.u || paper.url || "");
        const tags = normalizeSourceTags(metadataOverride.tags || paper.tags || paper.tagList || "");
        const override = localOverrides[paper.id] || {};
        const referenceOverride = referenceOverrides[paper.id] || {};
        const isCustomSource = Boolean(paper.isCustom);
        const cleanedSectionKey = cleanMetadataValue(paper.sectionKey);
        const defaultSectionKey = (!isCustomSource && getKnownSectionKeys().includes(cleanedSectionKey) && cleanedSectionKey !== extraSectionKey)
            ? cleanedSectionKey
            : "";
        const linkOverride = articleLinkOverrides[paper.id] || {};
        const baseParentheticalRef = cleanMetadataValue(
            paper.i || paper.baseParentheticalRef || paper.baseInlineRef || paper.parentheticalRef || paper.inlineRef || ""
        );
        const resolvedParentheticalRef = cleanMetadataValue(
            resolveReferenceValue(
                referenceOverride,
                "parentheticalRef",
                resolveReferenceValue(referenceOverride, "inlineRef", paper.i || paper.parentheticalRef || paper.inlineRef || "")
            )
        );
        const linkedSectionKeys = isCustomSource
            ? normalizeLinkedSectionKeys(paper.linkedSectionKeys, paper.sectionKey, true)
            : normalizeLinkedSectionKeys(linkOverride.linkedSectionKeys || paper.linkedSectionKeys, "", false);
        const resolvedSectionKey = defaultSectionKey || linkedSectionKeys[0] || extraSectionKey;

        return {
            id: paper.id || `temp-${nextTempId++}`,
            title: title || inferTitleFromUrl(url) || "Untitled source",
            author: author || inferPublisherFromUrl(url) || "Unknown author",
            year: year || extractYear(url) || "",
            url,
            publisher: cleanMetadataValue(metadataOverride.publisher || paper.publisher || inferPublisherFromUrl(url)),
            tags,
            baseFullRef: cleanMetadataValue(paper.r || paper.baseFullRef || paper.fullRef || ""),
            baseNarrativeRef: cleanMetadataValue(paper.n || paper.baseNarrativeRef || paper.narrativeRef || ""),
            baseParentheticalRef,
            baseInlineRef: baseParentheticalRef,
            fullRef: cleanMetadataValue(resolveReferenceValue(referenceOverride, "fullRef", paper.r || paper.fullRef || "")),
            narrativeRef: cleanMetadataValue(resolveReferenceValue(referenceOverride, "narrativeRef", paper.n || paper.narrativeRef || "")),
            parentheticalRef: resolvedParentheticalRef,
            inlineRef: resolvedParentheticalRef,
            sourceUrl: paper.sourceUrl || paper.localOverrideUrl || override.url || paper.objectUrl || url || "",
            objectUrl: paper.objectUrl || "",
            isImported: Boolean(paper.isImported),
            isCustom: isCustomSource,
            sectionKey: resolvedSectionKey,
            defaultSectionKey,
            linkedSectionKeys,
            sourceKind: cleanMetadataValue(metadataOverride.sourceKind)
                || paper.sourceKind
                || detectDocumentKind(
                    {
                        sourceKind: "",
                        fileName: paper.fileName || "",
                        localOverrideLabel: paper.localOverrideLabel || override.label || "",
                    },
                    cleanMetadataValue(paper.localOverrideUrl || override.url || paper.objectUrl || url),
                    paper.fileBlob?.type || ""
                )
                || ((paper.isImported || paper.objectUrl) ? "pdf" : (url ? "url" : "manual")),
            fileName: paper.fileName || "",
            fileBlob: paper.fileBlob || null,
            localOverrideUrl: cleanMetadataValue(paper.localOverrideUrl || override.url || ""),
            localOverrideLabel: cleanMetadataValue(paper.localOverrideLabel || override.label || ""),
            localOverrideBlob: paper.localOverrideBlob || null,
        };
    }

    function setActiveSource(source, options = {}) {
        const loadViewer = options.loadViewer !== false;
        activeSource = source;
        curName.innerText = source.title || "Untitled source";
        urlInput.value = getDisplayedSourceUrl(source);
        fillMetadataForm(source);
        fillReferenceForm(source);
        syncSectionLinkSelection(source);
        renderLinkedSectionsSummary(source);
        setActiveDraftSection(resolveDraftSectionKey(source), { focus: false });
        renderReferenceBox(buildPreviewReference(source));
        updateActiveListItem(source.id);
        updateSaveToArticlesButtonState(source);
        updateDeleteArticleButtonState(source);
        renderMetadataAiAction();

        if (loadViewer) {
            loadViewerSource(getViewerUrl(source));
        }

        if (source.isImported && source.isCustom) {
            metaStatus.textContent = `${getDocumentKindLabel(source.sourceKind)} imported into Sources. Review the fields and regenerate the citation if needed.`;
        } else if (source.isImported) {
            metaStatus.textContent = `${getDocumentKindLabel(source.sourceKind)} metadata extracted where available. Review the fields and regenerate if needed.`;
        } else if (source.isCustom) {
            metaStatus.textContent = "Source loaded. It stays in Sources and can also be linked into one or more sections.";
        } else if (source.fullRef) {
            metaStatus.textContent = "Curated citation loaded. Edit the fields only if you want to regenerate it.";
        } else if (source.url) {
            metaStatus.textContent = "URL loaded. Fill or correct any missing metadata, then generate the citation.";
        } else {
            metaStatus.textContent = "Source loaded. Add metadata and generate the citation.";
        }

        updateViewerHelp(source);
        syncChatToActiveSource(source);
        renderPaperNotesEditor();
        saveActiveSourceState(source);
    }

    function getParentheticalReferenceValue(source) {
        return cleanMetadataValue((source && (source.parentheticalRef || source.inlineRef)) || "");
    }

    function applyReferenceFields(source, reference) {
        if (!source) {
            return null;
        }

        source.fullRef = cleanMetadataValue(reference.full);
        source.narrativeRef = cleanMetadataValue(reference.narrative);
        source.parentheticalRef = cleanMetadataValue(reference.parenthetical);
        source.inlineRef = source.parentheticalRef;
        return source;
    }

    function buildPreviewReference(source) {
        const generated = buildReferenceFromMetadata(source);
        return {
            full: source.fullRef || generated.full,
            narrative: source.narrativeRef || generated.narrative,
            parenthetical: getParentheticalReferenceValue(source) || generated.parenthetical,
        };
    }

    function getReferenceInputs() {
        return {
            full: cleanMetadataValue(refFullInput.value),
            narrative: cleanMetadataValue(refNarrativeInput.value),
            parenthetical: cleanMetadataValue(refParentheticalInput.value),
        };
    }

    function resolveReferenceInputs(source, referenceInputs = getReferenceInputs()) {
        const preview = buildPreviewReference(source);
        return {
            full: cleanMetadataValue(referenceInputs.full) || cleanMetadataValue(preview.full),
            narrative: cleanMetadataValue(referenceInputs.narrative) || cleanMetadataValue(preview.narrative),
            parenthetical: cleanMetadataValue(referenceInputs.parenthetical) || cleanMetadataValue(preview.parenthetical),
        };
    }

    function resolveReferenceValue(override, key, fallbackValue) {
        return Object.prototype.hasOwnProperty.call(override, key)
            ? override[key]
            : fallbackValue;
    }

    function renderReferenceBox(reference) {
        currentRef = reference;

        const parts = [];
        if (reference.full) {
            parts.push(`<strong>Full:</strong> ${escapeHtml(reference.full)}`);
        }
        if (reference.narrative) {
            parts.push(`<strong>Narrative:</strong> ${escapeHtml(reference.narrative)}`);
        }
        if (reference.parenthetical) {
            parts.push(`<strong>Parenthetical:</strong> ${escapeHtml(reference.parenthetical)}`);
        }

        if (!parts.length) {
            refBox.style.display = "none";
            refBox.innerHTML = "";
            return;
        }

        refBox.style.display = "block";
        refBox.innerHTML = parts.join("<br>");
    }

    function fillMetadataForm(source) {
        metaTitle.value = source.title || "";
        metaAuthor.value = source.author || "";
        metaYear.value = source.year || "";
        metaPublisher.value = source.publisher || "";
        metaTags.value = formatSourceTagsInput(source.tags);
        metaUrl.value = source.url || "";
        metaLocalUrl.value = source.localOverrideUrl || "";
    }

    function fillReferenceForm(source) {
        const preview = buildPreviewReference(source);
        refFullInput.value = preview.full || "";
        refNarrativeInput.value = preview.narrative || "";
        refParentheticalInput.value = preview.parenthetical || "";
    }

    function hasSavableSourceContent(source) {
        return Boolean(source && (source.title || source.url || source.objectUrl || source.localOverrideUrl));
    }

    function buildArticleIdentityCandidates(source) {
        if (!source) {
            return [];
        }

        const candidates = [];
        const url = cleanMetadataValue(source.url);
        const localOverrideUrl = cleanMetadataValue(source.localOverrideUrl);
        const title = cleanMetadataValue(source.title).toLowerCase();
        const author = cleanMetadataValue(source.author).toLowerCase();
        const year = cleanMetadataValue(source.year).toLowerCase();
        const fileName = cleanMetadataValue(source.fileName).toLowerCase();

        if (url) {
            candidates.push(`url:${normaliseUrl(url).toLowerCase()}`);
        }

        if (localOverrideUrl && !localOverrideUrl.startsWith("blob:")) {
            candidates.push(`local:${normaliseLocalOverride(localOverrideUrl).toLowerCase()}`);
        }

        if (fileName) {
            candidates.push(`file:${fileName}`);
        }

        if (title && author && year) {
            candidates.push(`meta:${title}|${author}|${year}`);
        }

        if (title && year) {
            candidates.push(`title-year:${title}|${year}`);
        }

        return [...new Set(candidates)];
    }

    function findMatchingArticle(source, options = {}) {
        if (!source) {
            return null;
        }

        const sourceCandidates = buildArticleIdentityCandidates(source);
        if (!sourceCandidates.length) {
            return null;
        }

        return getAllArticles().find((paper) => {
            if (options.excludeId && paper.id === options.excludeId) {
                return false;
            }

            const paperCandidates = buildArticleIdentityCandidates(paper);
            return paperCandidates.some((candidate) => sourceCandidates.includes(candidate));
        }) || null;
    }

    function formatArticleLabel(source) {
        if (!source) {
            return "Untitled source";
        }

        const author = cleanMetadataValue(source.author) || "Unknown author";
        const year = cleanMetadataValue(source.year) || "n.d.";
        const title = cleanMetadataValue(source.title) || "Untitled source";
        return `${author} (${year}) ${title}`;
    }

    function formatViewerSourceTitle(source) {
        if (!source) {
            return "";
        }

        return cleanMetadataValue(
            source.title
            || source.fileName
            || source.localOverrideLabel
            || source.url
            || source.localOverrideUrl,
        );
    }

    function formatArticleLocation(source) {
        if (!source) {
            return "It appears in Sources.";
        }

        const linkedLabels = getLinkedSectionKeys(source)
            .map((sectionKey) => getSectionOptionLabel(sectionKey))
            .filter(Boolean);

        if (!linkedLabels.length) {
            return "It appears in Sources only.";
        }

        return `It appears in Sources and is linked to ${linkedLabels.join(", ")}.`;
    }

    function revealArticleInList(source) {
        if (!source) {
            return;
        }

        if (layout.classList.contains("hide-refs")) {
            layout.classList.remove("hide-refs");
            updateColumnToggleButtons();
        }

        if (articleFilter !== "all") {
            articleFilter = "all";
            if (articleFilterSelect) {
                articleFilterSelect.value = "all";
            }
        }

        if (cleanMetadataValue(articleTagFilter)) {
            articleTagFilter = "";
            if (articleTagFilterInput) {
                articleTagFilterInput.value = "";
            }
        }

        renderList();
        setActiveSource(source);

        const listItem = Array.from(list.querySelectorAll(".ref-item"))
            .find((item) => item.dataset.paperId === source.id);

        if (listItem) {
            listItem.scrollIntoView({ block: "nearest" });
        }
    }

    function showDuplicateArticleMessage(duplicate) {
        if (!duplicate) {
            return;
        }

        revealArticleInList(duplicate);
        metaStatus.textContent = `Already saved as "${formatArticleLabel(duplicate)}". ${formatArticleLocation(duplicate)}`;
    }

    function migrateCustomSourcesIntoStaticArticles() {
        let didChange = false;
        let savedActiveSource = null;

        try {
            const rawActiveSource = localStorage.getItem(activeSourceStorageKey);
            savedActiveSource = rawActiveSource ? JSON.parse(rawActiveSource) : null;
        } catch (error) {
            savedActiveSource = null;
        }

        for (let index = customSources.length - 1; index >= 0; index -= 1) {
            const customSource = customSources[index];
            const staticSource = findMatchingStaticArticle(customSource, { excludeId: customSource.id });

            if (!staticSource) {
                continue;
            }

            const mergedSectionKeys = [...new Set([
                ...getLinkedSectionKeys(staticSource),
                ...getLinkedSectionKeys(customSource),
            ])];
            setLinkedSectionKeys(staticSource, mergedSectionKeys);

            const migratedLocalUrl = customSource.localOverrideUrl || customSource.objectUrl || "";
            if (migratedLocalUrl) {
                staticSource.localOverrideUrl = migratedLocalUrl;
                staticSource.localOverrideLabel = customSource.localOverrideLabel || customSource.fileName || inferLocalOverrideLabel(migratedLocalUrl);
                if (!migratedLocalUrl.startsWith("blob:")) {
                    localOverrides[staticSource.id] = {
                        url: migratedLocalUrl,
                        label: staticSource.localOverrideLabel,
                    };
                }
            }

            if (customSource.fullRef || customSource.narrativeRef || getParentheticalReferenceValue(customSource)) {
                referenceOverrides[staticSource.id] = {
                    fullRef: customSource.fullRef || staticSource.fullRef || "",
                    narrativeRef: customSource.narrativeRef || staticSource.narrativeRef || "",
                    parentheticalRef: getParentheticalReferenceValue(customSource) || getParentheticalReferenceValue(staticSource) || "",
                    inlineRef: getParentheticalReferenceValue(customSource) || getParentheticalReferenceValue(staticSource) || "",
                };
            }

            metadataOverrides[staticSource.id] = {
                title: cleanMetadataValue(customSource.title || staticSource.title),
                author: cleanMetadataValue(customSource.author || staticSource.author),
                year: cleanMetadataValue(customSource.year || staticSource.year),
                publisher: cleanMetadataValue(customSource.publisher || staticSource.publisher),
                tags: normalizeSourceTags([
                    ...getSourceTags(staticSource),
                    ...getSourceTags(customSource),
                ]),
                url: cleanMetadataValue(customSource.url || staticSource.url),
                sourceKind: isExplicitDocumentKind(customSource.sourceKind) ? customSource.sourceKind : (staticSource.sourceKind || ""),
            };

            migrateStoredChatThread(customSource.id, staticSource.id);
            delete localOverrides[customSource.id];
            removeMetadataOverride(customSource.id, { persist: false });
            removeReferenceOverride(customSource.id, { persist: false });
            customSources.splice(index, 1);
            didChange = true;

            if (savedActiveSource?.mode === "id" && savedActiveSource.id === customSource.id) {
                savedActiveSource.id = staticSource.id;
            }
        }

        if (!didChange) {
            return;
        }

        saveLocalOverrides();
        saveMetadataOverrides();
        saveReferenceOverrides();
        saveCustomSources();
        saveArticleLinkOverrides();

        if (savedActiveSource) {
            localStorage.setItem(activeSourceStorageKey, JSON.stringify(savedActiveSource));
        }
    }

    function updateSaveToArticlesButtonState(source = activeSource) {
        if (!saveArticleBtn) {
            return;
        }

        if (!hasSavableSourceContent(source)) {
            saveArticleBtn.disabled = true;
            saveArticleBtn.textContent = "Save This Source To Sources";
            saveArticleBtn.title = "";
            return;
        }

        if (source.isCustom || source.id?.startsWith("static-")) {
            saveArticleBtn.disabled = true;
            saveArticleBtn.textContent = source.isImported ? "Imported Into Sources" : "Already In Sources";
            saveArticleBtn.title = formatArticleLabel(source);
            return;
        }

        const matchingArticle = findMatchingArticle(source, { excludeId: source.id });
        if (matchingArticle) {
            saveArticleBtn.disabled = true;
            saveArticleBtn.textContent = "Already In Sources";
            saveArticleBtn.title = formatArticleLabel(matchingArticle);
            return;
        }

        saveArticleBtn.disabled = false;
        saveArticleBtn.textContent = "Save This Source To Sources";
        saveArticleBtn.title = "";
    }

    function updateDeleteArticleButtonState(source = activeSource) {
        if (!deleteArticleBtn) {
            return;
        }

        const isDeletableCustomArticle = Boolean(source && source.isCustom);
        deleteArticleBtn.disabled = !isDeletableCustomArticle;
    }

    function clearMetadataForm() {
        metaTitle.value = "";
        metaAuthor.value = "";
        metaYear.value = "";
        metaPublisher.value = "";
        metaTags.value = "";
        metaUrl.value = "";
        metaLocalUrl.value = "";
        refFullInput.value = "";
        refNarrativeInput.value = "";
        refParentheticalInput.value = "";
        syncSectionLinkSelection(null);
        renderLinkedSectionsSummary(null);
        updateSaveToArticlesButtonState(null);
        updateDeleteArticleButtonState(null);
        renderMetadataAiAction();
    }

    function markMetadataDirty(event) {
        if (!activeSource) {
            activeSource = normalizePaper({
                id: `manual-${nextTempId++}`,
                title: "",
                author: "",
                year: "",
                url: "",
            });
        }

        syncActiveSourceFromForm();
        curName.innerText = activeSource.title || "Untitled source";
        invalidateDocumentContextForSource(activeSource);
        renderMetadataAiAction();

        if (event?.target === metaLocalUrl) {
            metaStatus.textContent = "Local document path edited. Click Attach Local Document To Source to store it against this source.";
        } else if (activeSource.isCustom || activeSource.id?.startsWith("static-")) {
            persistMetadataForSource(activeSource);
            renderList();
            metaStatus.textContent = activeSource.isCustom
                ? "Metadata edited. Saved source updated locally. Click Generate Citation to refresh the citation."
                : "Metadata edited. Saved against this source locally. Click Generate Citation to refresh the citation.";
        } else {
            metaStatus.textContent = "Metadata edited. Click Generate Citation to refresh the citation.";
        }

        updateSaveToArticlesButtonState(activeSource);
    }

    function markReferenceDirty() {
        const source = syncActiveSourceFromForm();
        if (!source) {
            return;
        }

        renderReferenceBox(resolveReferenceInputs(source));
        metaStatus.textContent = "Citation edited. Save Citation To Source to store it against this source.";
    }

    function syncActiveSourceFromForm() {
        if (!activeSource) {
            return null;
        }

        activeSource.title = cleanMetadataValue(metaTitle.value) || inferTitleFromUrl(metaUrl.value) || "Untitled source";
        activeSource.author = normalizeAuthorDisplayValue(metaAuthor.value) || inferPublisherFromUrl(metaUrl.value) || "Unknown author";
        activeSource.year = cleanMetadataValue(metaYear.value) || extractYear(metaUrl.value) || "";
        activeSource.publisher = cleanMetadataValue(metaPublisher.value) || inferPublisherFromUrl(metaUrl.value);
        activeSource.tags = normalizeSourceTags(metaTags.value);
        activeSource.url = normaliseUrl(metaUrl.value);
        if (!isExplicitDocumentKind(activeSource.sourceKind)) {
            activeSource.sourceKind = activeSource.url ? "url" : "manual";
        }
        activeSource.sourceUrl = getViewerUrl(activeSource);
        return activeSource;
    }

    function updateActiveListItem(activeId) {
        list.querySelectorAll(".ref-item").forEach((item) => {
            item.classList.toggle("is-active", item.dataset.paperId === activeId);
        });
    }

    function loadViewerSource(sourceUrl) {
        viewerLoadedSourceId = "";
        viewerLoadedUrl = "";

        if (!sourceUrl) {
            viewer.removeAttribute("src");
            viewerEmpty.classList.remove("is-hidden");
            return;
        }

        viewer.src = sourceUrl;
        viewerEmpty.classList.add("is-hidden");
    }

    function updateViewerHelp(source) {
        if (!source) {
            viewerHelp.innerHTML = "No source selected. Choose a source from the left, paste a URL in the header, or drop documents anywhere in this window. Some library and publisher sites refuse iframe embedding, so download the file in your browser and import it here.";
            return;
        }

        const sourceTitle = formatViewerSourceTitle(source);
        const sourceLead = sourceTitle
            ? `Selected source: <strong>${escapeHtml(sourceTitle)}</strong>. `
            : "Selected source. ";

        if (source.autoDownloadWarning) {
            viewerHelp.innerHTML = `${sourceLead}${escapeHtml(source.autoDownloadWarning)}`;
            return;
        }

        if (source.isImported) {
            viewerHelp.innerHTML = `${sourceLead}Local ${escapeHtml(getDocumentKindLabel(source.sourceKind))} loaded${source.fileName ? ` from <strong>${escapeHtml(source.fileName)}</strong>` : ""}. The chat parser extracts plain text from the file for AI context where supported.`;
            return;
        }

        if (source.localOverrideUrl) {
            if (/^file:/i.test(source.localOverrideUrl) && !(source.localOverrideBlob instanceof Blob)) {
                viewerHelp.innerHTML = `${sourceLead}A local file path is attached, but the browser cannot read a filesystem path directly for chat parsing. Reattach the file with <strong>Attach Local Document To Source</strong> or use <strong>Import Document</strong> so chat can use the full document text.`;
                return;
            }

            viewerHelp.innerHTML = `${sourceLead}This source is using an attached local copy${source.localOverrideLabel ? ` from <strong>${escapeHtml(source.localOverrideLabel)}</strong>` : ""}. The viewer uses that local file or local URL instead of the blocked publisher page, and the chat parser extracts plain text from it where supported.`;
            return;
        }

        if (source.url && source.fileBlob instanceof Blob) {
            viewerHelp.innerHTML = `${sourceLead}A local cached copy was downloaded automatically from this URL for clean text extraction. The viewer still shows the live page, but chat uses the downloaded copy when possible.`;
            return;
        }

        if (source.url && isLikelyFrameBlocked(source.url)) {
            viewerHelp.innerHTML = `${sourceLead}This host usually blocks iframe viewing. Download the source through your library or publisher portal, then use <strong>Import Document</strong> to work from a local copy here.`;
            return;
        }

        if (source.url) {
            viewerHelp.innerHTML = `${sourceLead}If the source looks blank or shows "refused to connect", it is being blocked by the site rather than this page. Download the file in your browser, then bring it in with <strong>Import Document</strong>.`;
            return;
        }

        viewerHelp.innerHTML = `${sourceLead}This item is loaded in the workspace, but it does not have a viewer URL yet. You can still edit metadata, attach a local document, or save it into Sources.`;
    }

    function generateReference() {
        const source = syncActiveSourceFromForm();

        if (!source || (!source.title && !source.url && !source.localOverrideUrl && !source.objectUrl)) {
            metaStatus.textContent = "Add at least a title or URL before generating a citation.";
            return;
        }

        const generated = buildReferenceFromMetadata(source);
        applyReferenceFields(source, generated);
        fillReferenceForm(source);
        renderReferenceBox(generated);
        curName.innerText = source.title || "Untitled source";

        if (source.isCustom || source.isImported) {
            renderList();
        }

        persistReferenceForSource(source);
        metaStatus.textContent = "Citation generated from the current metadata.";
    }

    function saveReferenceToPaper() {
        const source = syncActiveSourceFromForm();
        if (!source) {
            metaStatus.textContent = "Select or open a source first.";
            return;
        }

        const manualReference = getReferenceInputs();
        if (!manualReference.full && !manualReference.narrative && !manualReference.parenthetical) {
            metaStatus.textContent = "Add at least one citation field before saving.";
            return;
        }

        const resolvedReference = resolveReferenceInputs(source, manualReference);
        applyReferenceFields(source, resolvedReference);
        persistReferenceForSource(source);
        fillReferenceForm(source);
        renderReferenceBox(resolvedReference);
        metaStatus.textContent = "Citation saved against the active source.";
    }

    function buildReferenceFromMetadata(source) {
        const title = cleanMetadataValue(source.title) || inferTitleFromUrl(source.url) || "Untitled source";
        const author = cleanMetadataValue(source.author) || inferPublisherFromUrl(source.url) || "Unknown author";
        const year = cleanMetadataValue(source.year) || extractYear(source.url) || "n.d.";
        const publisher = cleanMetadataValue(source.publisher);
        const url = normaliseUrl(source.url);
        const citationAuthor = buildInlineAuthor(author);
        const parts = [`${author} (${year}) ${title}.`];

        if (publisher && publisher.toLowerCase() !== author.toLowerCase()) {
            parts.push(`${publisher}.`);
        }

        if (url) {
            parts.push(`Available at: ${url}.`);
        } else if (source.isImported || isExplicitDocumentKind(source.sourceKind)) {
            parts.push(`Local ${getDocumentKindLabel(source.sourceKind)} file.`);
        }

        return {
            full: parts.join(" ").replace(/\s+/g, " ").trim(),
            narrative: `${citationAuthor} (${year})`,
            parenthetical: `(${citationAuthor}, ${year})`,
        };
    }

    function buildInlineAuthor(author) {
        const cleaned = cleanMetadataValue(author) || "Unknown author";

        if (/et al\.?$/i.test(cleaned)) {
            return cleaned.replace(/\.$/, "");
        }

        if (looksLikeOrganisation(cleaned)) {
            return cleaned;
        }

        const multiAuthors = cleaned.split(/\s*(?:;| and )\s*/i).filter(Boolean);
        if (multiAuthors.length > 1) {
            return `${extractSurname(multiAuthors[0])} et al.`;
        }

        return extractSurname(cleaned);
    }

    function extractSurname(name) {
        const cleaned = cleanMetadataValue(name);
        if (!cleaned) {
            return "Unknown author";
        }

        if (cleaned.includes(",")) {
            return cleaned.split(",")[0].trim();
        }

        const bits = cleaned.split(/\s+/).filter(Boolean);
        return bits.length ? bits[bits.length - 1] : cleaned;
    }

    function looksLikeOrganisation(value) {
        return /^[A-Z0-9&.\- ]{3,}$/.test(value) || /\b(agency|association|centre|center|college|commission|department|government|group|institute|journal|lancet|ministry|nhs|organisation|organization|press|society|university|who)\b/i.test(value);
    }

    function looksLikeLocalSourceInput(value) {
        const trimmed = stripWrappingQuotes(cleanMetadataValue(value));
        return Boolean(
            normaliseLocalFilePath(trimmed) ||
            /^(file:|blob:)/i.test(trimmed)
        );
    }

    function openTypedUrl() {
        const rawValue = stripWrappingQuotes(cleanMetadataValue(urlInput.value || metaUrl.value));
        if (!rawValue) {
            metaStatus.textContent = "Paste a valid URL first.";
            return;
        }

        if (looksLikeLocalSourceInput(rawValue)) {
            const localUrl = normaliseLocalOverride(rawValue);
            const localSourceKind = detectDocumentKind(
                {
                    sourceKind: "",
                    fileName: inferLocalOverrideLabel(localUrl),
                },
                localUrl
            ) || "manual";
            const localSource = normalizePaper({
                id: `manual-${nextTempId++}`,
                title: inferTitleFromUrl(localUrl) || inferLocalOverrideLabel(localUrl),
                author: "Unknown author",
                year: extractYear(localUrl),
                publisher: "",
                localOverrideUrl: localUrl,
                localOverrideLabel: inferLocalOverrideLabel(localUrl),
                sourceKind: localSourceKind,
            });
            const matchingLocalArticle = findMatchingArticle(localSource, { excludeId: localSource.id });

            if (matchingLocalArticle) {
                showDuplicateArticleMessage(matchingLocalArticle);
                return;
            }

            setActiveSource(localSource);
            metaStatus.textContent = "Local document opened. Save it to Sources if you want it listed on the left.";
            return;
        }

        const url = normaliseUrl(rawValue);
        if (!url) {
            metaStatus.textContent = "Paste a valid URL first.";
            return;
        }

        const manualSource = normalizePaper({
            id: `manual-${nextTempId++}`,
            title: inferTitleFromUrl(url),
            author: inferPublisherFromUrl(url),
            year: extractYear(url),
            publisher: inferPublisherFromUrl(url),
            url,
            sourceKind: "url",
        });
        const matchingArticle = findMatchingArticle(manualSource, { excludeId: manualSource.id });

        if (matchingArticle) {
            showDuplicateArticleMessage(matchingArticle);
            return;
        }

        setActiveSource(manualSource);
        metaStatus.textContent = "Direct URL opened. Correct the metadata if the guessed details are too rough.";
    }

    function openPdfPicker(mode) {
        pdfPickerMode = mode === "link" ? "link" : "import";
        pdfInput.click();
    }

    async function attachLocalPdfToPaper() {
        if (!activeSource) {
            metaStatus.textContent = "Select a source first, then attach a local document or local URL.";
            return;
        }

        const localUrl = normaliseLocalOverride(metaLocalUrl.value);
        if (!localUrl) {
            openPdfPicker("link");
            metaStatus.textContent = "Choose a local document to attach to the active source.";
            return;
        }

        if (/^file:/i.test(localUrl)) {
            openPdfPicker("link");
            metaStatus.textContent = "Choose the local file so chat can parse its full text. Typed filesystem paths cannot be read directly by the browser.";
            return;
        }

        await removePersistedPdfAttachment(activeSource.id, "local");
        const detectedKind = detectDocumentKind(
            {
                sourceKind: "",
                fileName: inferLocalOverrideLabel(localUrl),
            },
            localUrl
        );
        attachLocalOverride(activeSource, {
            url: localUrl,
            label: inferLocalOverrideLabel(localUrl),
            persist: !localUrl.startsWith("blob:"),
        });
        activeSource.localOverrideBlob = null;
        if (detectedKind) {
            activeSource.sourceKind = detectedKind;
        }

        setActiveSource(activeSource);
        if (activeSource.isCustom) {
            saveCustomSources();
        }
        metaStatus.textContent = "Local copy attached to the active source. Use Remove Attached Local Copy to remove or replace it.";
    }

    async function attachFilesToActiveSource(fileList) {
        if (!activeSource) {
            metaStatus.textContent = "Select a source first, then attach a downloaded document to it.";
            return;
        }

        const files = getSupportedDocumentFiles(fileList);

        if (!files.length) {
            metaStatus.textContent = "Choose a supported document file.";
            return;
        }

        const file = files[0];
        const documentKind = getFileDocumentKind(file) || "document";
        let metadata = {};

        try {
            if (documentKind === "pdf") {
                metadata = await extractPdfMetadata(file);
            }
        } catch (error) {
            metadata = {};
        }

        const storedForReload = await storePersistedPdfAttachment(activeSource.id, "local", file, file.name);
        attachLocalOverride(activeSource, {
            url: URL.createObjectURL(file),
            label: file.name,
            persist: false,
        });
        activeSource.localOverrideBlob = file;
        activeSource.sourceKind = documentKind;

        if (!cleanMetadataValue(activeSource.title) && metadata.title) {
            activeSource.title = metadata.title;
        }

        if ((!cleanMetadataValue(activeSource.author) || activeSource.author === "Unknown author") && metadata.author) {
            activeSource.author = metadata.author;
        }

        if (!cleanMetadataValue(activeSource.year) && metadata.year) {
            activeSource.year = metadata.year;
        }

        if (!cleanMetadataValue(activeSource.publisher) && metadata.publisher) {
            activeSource.publisher = metadata.publisher;
        }

        setActiveSource(activeSource);
        if (activeSource.isCustom) {
            saveCustomSources();
        }
        metaStatus.textContent = storedForReload
            ? `Local ${getDocumentKindLabel(documentKind)} attached to the active source and saved for refreshes.`
            : `Local ${getDocumentKindLabel(documentKind)} attached to the active source for this session.`;
    }

    function attachLocalOverride(source, override) {
        if (!source) {
            return;
        }

        releaseObjectUrl(source.localOverrideUrl);
        source.localOverrideUrl = override.url || "";
        source.localOverrideLabel = override.label || "";
        source.sourceUrl = getViewerUrl(source);

        if (override.persist) {
            localOverrides[source.id] = {
                url: source.localOverrideUrl,
                label: source.localOverrideLabel,
            };
            saveLocalOverrides();
        } else {
            delete localOverrides[source.id];
            saveLocalOverrides();
        }

        renderList();
    }

    async function clearLocalOverride() {
        if (!activeSource) {
            metaStatus.textContent = "Select a source first.";
            return;
        }

        if (!activeSource.localOverrideUrl) {
            metaStatus.textContent = "This source does not have an attached local copy.";
            return;
        }

        releaseObjectUrl(activeSource.localOverrideUrl);
        activeSource.localOverrideUrl = "";
        activeSource.localOverrideLabel = "";
        activeSource.localOverrideBlob = null;
        if (!activeSource.objectUrl) {
            activeSource.fileBlob = null;
        }
        activeSource.sourceKind = detectDocumentKind(
            {
                sourceKind: "",
                fileName: activeSource.fileName || "",
                localOverrideLabel: "",
            },
            activeSource.objectUrl || activeSource.url || ""
        ) || (activeSource.url ? "url" : "manual");
        activeSource.sourceUrl = getViewerUrl(activeSource);
        delete localOverrides[activeSource.id];
        saveLocalOverrides();
        await removePersistedPdfAttachment(activeSource.id, "local");
        setActiveSource(activeSource);
        if (activeSource.isCustom) {
            saveCustomSources();
        }
        metaStatus.textContent = "Attached local copy removed from the active source.";
    }

    function buildCustomSourceFromSource(source, overrides = {}) {
        const nextLinkedSectionKeys = normalizeLinkedSectionKeys(
            overrides.linkedSectionKeys !== undefined ? overrides.linkedSectionKeys : source.linkedSectionKeys,
            overrides.sectionKey || source.sectionKey,
            true
        );

        const savedSource = normalizePaper({
            ...source,
            ...overrides,
            id: overrides.id || source.id || `custom-${Date.now()}-${nextTempId++}`,
            isCustom: true,
            isImported: overrides.isImported !== undefined ? overrides.isImported : Boolean(source.isImported),
            linkedSectionKeys: nextLinkedSectionKeys,
            sectionKey: nextLinkedSectionKeys[0] || extraSectionKey,
            sourceKind: overrides.sourceKind
                || source.sourceKind
                || detectDocumentKind(
                    {
                        fileName: overrides.fileName !== undefined ? overrides.fileName : source.fileName,
                        localOverrideLabel: overrides.localOverrideLabel !== undefined ? overrides.localOverrideLabel : source.localOverrideLabel,
                    },
                    overrides.localOverrideUrl !== undefined
                        ? overrides.localOverrideUrl
                        : (source.localOverrideUrl || overrides.objectUrl || source.objectUrl || overrides.url || source.url || "")
                )
                || ((source.objectUrl || source.fileBlob) ? "pdf" : (source.url ? "url" : "manual")),
            fileBlob: overrides.fileBlob !== undefined ? overrides.fileBlob : (source.fileBlob || null),
            objectUrl: overrides.objectUrl !== undefined ? overrides.objectUrl : (source.objectUrl || ""),
            localOverrideUrl: overrides.localOverrideUrl !== undefined ? overrides.localOverrideUrl : (source.localOverrideUrl || ""),
            localOverrideLabel: overrides.localOverrideLabel !== undefined ? overrides.localOverrideLabel : (source.localOverrideLabel || ""),
            fileName: overrides.fileName !== undefined ? overrides.fileName : (source.fileName || ""),
        });
        savedSource.localOverrideBlob = overrides.localOverrideBlob !== undefined
            ? overrides.localOverrideBlob
            : (source.localOverrideBlob || null);

        if (!savedSource.fullRef || !savedSource.narrativeRef || !getParentheticalReferenceValue(savedSource)) {
            const generated = buildReferenceFromMetadata(savedSource);
            applyReferenceFields(savedSource, {
                full: savedSource.fullRef || generated.full,
                narrative: savedSource.narrativeRef || generated.narrative,
                parenthetical: getParentheticalReferenceValue(savedSource) || generated.parenthetical,
            });
        }

        return savedSource;
    }

    function ensureArticleRecord(source = syncActiveSourceFromForm()) {
        if (!source || (!source.title && !source.url && !source.objectUrl && !source.localOverrideUrl)) {
            return null;
        }

        const resolvedReference = resolveReferenceInputs(source);
        applyReferenceFields(source, resolvedReference);

        if (source.isCustom || source.id?.startsWith("static-")) {
            setLinkedSectionKeys(source, getLinkedSectionKeys(source));
            persistMetadataForSource(source);
            revealArticleInList(source);
            return source;
        }

        const matchingArticle = findMatchingArticle(source, { excludeId: source.id });
        if (matchingArticle) {
            migrateStoredChatThread(source.id, matchingArticle.id);
            revealArticleInList(matchingArticle);
            return matchingArticle;
        }

        const savedSource = buildCustomSourceFromSource(source, {
            id: `custom-${Date.now()}-${nextTempId++}`,
        });
        customSources.unshift(savedSource);
        saveCustomSources();
        migrateStoredChatThread(source.id, savedSource.id);
        revealArticleInList(savedSource);
        return savedSource;
    }

    function saveCurrentSourceToList() {
        const currentSource = syncActiveSourceFromForm();
        const matchingArticle = currentSource && !currentSource.isCustom
            ? findMatchingArticle(currentSource, { excludeId: currentSource.id })
            : null;

        if (currentSource?.id?.startsWith("static-")) {
            revealArticleInList(currentSource);
            metaStatus.textContent = `Already saved as "${formatArticleLabel(currentSource)}". ${formatArticleLocation(currentSource)}`;
            return;
        }

        if (matchingArticle) {
            showDuplicateArticleMessage(matchingArticle);
            return;
        }

        const alreadyCustom = Boolean(currentSource && currentSource.isCustom);
        const savedSource = ensureArticleRecord(currentSource);

        if (!savedSource) {
            metaStatus.textContent = "Load a URL or document first, then save it to Sources.";
            return;
        }

        if (alreadyCustom) {
            metaStatus.textContent = `Already saved as "${formatArticleLabel(savedSource)}". ${formatArticleLocation(savedSource)}`;
            return;
        }

        metaStatus.textContent = savedSource.objectUrl || savedSource.localOverrideUrl.startsWith("blob:")
            ? (alreadyCustom
                ? "Source updated for this session. Use a stable local URL if you want it to survive a reload."
                : "Added to Sources for this session. Use a stable local URL if you want it to survive a reload.")
            : (alreadyCustom ? "Source updated." : "Added to Sources.");
    }

    function deleteCustomSource(source, options = {}) {
        if (!source || !source.isCustom) {
            return false;
        }

        const index = customSources.findIndex((paper) => paper.id === source.id);
        if (index === -1) {
            return false;
        }

        const wasActive = Boolean(activeSource && activeSource.id === source.id);
        customSources.splice(index, 1);
        deletedArticleHistory.push({
            source,
            index,
            wasActive,
        });

        delete localOverrides[source.id];
        removeReferenceOverride(source.id, { persist: false });
        saveLocalOverrides();
        saveReferenceOverrides();
        saveCustomSources();
        renderList();

        if (wasActive) {
            const fallbackSource = normalizePaper({
                ...source,
                id: `manual-${nextTempId++}`,
                isCustom: false,
                linkedSectionKeys: [],
                sectionKey: extraSectionKey,
            });
            setActiveSource(fallbackSource);
        }

        if (options.skipStatus !== true) {
            metaStatus.textContent = "Source deleted from the list. Undo is available until you refresh.";
        }

        return true;
    }

    function deleteArticleFromList(sourceId) {
        const source = customSources.find((paper) => paper.id === sourceId);
        if (!source) {
            return;
        }

        deleteCustomSource(source);
    }

    function undoDeleteArticle() {
        const deleted = deletedArticleHistory.pop();
        if (!deleted) {
            return;
        }

        const insertIndex = Math.max(0, Math.min(deleted.index, customSources.length));
        customSources.splice(insertIndex, 0, deleted.source);
        saveCustomSources();
        renderList();

        if (deleted.wasActive) {
            setActiveSource(deleted.source);
        }

        metaStatus.textContent = "Deleted source restored.";
    }

    function linkActiveSourceToSelectedSection() {
        const targetKey = cleanMetadataValue(sectionLinkSelect.value);
        if (!targetKey) {
            linkedSectionsStatus.textContent = "Choose a section first.";
            return;
        }

        const targetLabel = getSectionOptionLabel(targetKey);
        const source = ensureArticleRecord();
        if (!source) {
            metaStatus.textContent = "Open or save a source first.";
            return;
        }

        const linkedSectionKeys = getLinkedSectionKeys(source);
        if (linkedSectionKeys.includes(targetKey)) {
            linkedSectionsStatus.textContent = `Already linked to ${targetLabel}.`;
            renderLinkedSectionsSummary(source);
            return;
        }

        setLinkedSectionKeys(source, [...linkedSectionKeys, targetKey]);
        if (source.isCustom) {
            saveCustomSources();
        }
        renderList();
        setActiveSource(source);
        linkedSectionsStatus.textContent = `Linked to ${targetLabel}.`;
        metaStatus.textContent = `Source linked to ${targetLabel}.`;
    }

    function unlinkActiveSourceFromSelectedSection() {
        if (!activeSource || (!activeSource.isCustom && !activeSource.id?.startsWith("static-"))) {
            linkedSectionsStatus.textContent = "Select a source first.";
            return;
        }

        const targetKey = cleanMetadataValue(sectionLinkSelect.value);
        if (!targetKey) {
            linkedSectionsStatus.textContent = "Choose a section first.";
            return;
        }

        const targetLabel = getSectionOptionLabel(targetKey);
        const remainingSectionKeys = getLinkedSectionKeys(activeSource).filter((sectionKey) => sectionKey !== targetKey);

        if (remainingSectionKeys.length === getLinkedSectionKeys(activeSource).length) {
            linkedSectionsStatus.textContent = `This source is not linked to ${targetLabel}.`;
            return;
        }

        setLinkedSectionKeys(activeSource, remainingSectionKeys);
        if (activeSource.isCustom) {
            saveCustomSources();
        }
        renderList();
        setActiveSource(activeSource);
        linkedSectionsStatus.textContent = `Unlinked from ${targetLabel}.`;
        metaStatus.textContent = `Source unlinked from ${targetLabel}.`;
    }

    function unlinkArticleFromSection(sourceId, sectionKey) {
        const source = findSourceById(sourceId);
        if (!source) {
            return;
        }

        const targetLabel = getSectionOptionLabel(sectionKey);
        const remainingSectionKeys = getLinkedSectionKeys(source).filter((linkedKey) => linkedKey !== sectionKey);
        setLinkedSectionKeys(source, remainingSectionKeys);

        if (source.isCustom) {
            saveCustomSources();
        }

        renderList();

        if (activeSource && activeSource.id === source.id) {
            setActiveSource(source);
        }

        linkedSectionsStatus.textContent = `Unlinked from ${targetLabel}.`;
        metaStatus.textContent = `Source unlinked from ${targetLabel}.`;
    }

    function createCustomSection() {
        const label = cleanMetadataValue(newSectionNameInput.value);
        if (!label) {
            linkedSectionsStatus.textContent = "Enter a section name first.";
            return;
        }

        const existingSection = getContentSections().find((section) => section.label.toLowerCase() === label.toLowerCase());
        if (existingSection) {
            sectionLinkSelect.value = existingSection.key;
            linkedSectionsStatus.textContent = `${label} already exists.`;
            return;
        }

        const section = {
            key: `custom-section-${Date.now()}-${nextTempId++}`,
            label,
        };
        customSections.push(section);
        sectionDrafts[section.key] = sectionDrafts[section.key] || "";
        saveCustomSections();
        saveSectionDrafts();
        renderSectionLinkOptions();
        renderDraftSectionOptions();
        renderList();
        sectionLinkSelect.value = section.key;
        setActiveDraftSection(section.key, { focus: false });
        renderLinkedSectionsSummary(activeSource);
        newSectionNameInput.value = "";
        linkedSectionsStatus.textContent = `${label} created.`;
        metaStatus.textContent = `${label} created as a custom section.`;
    }

    function deleteSelectedSection() {
        const sectionKey = cleanMetadataValue(sectionLinkSelect.value);
        if (!sectionKey) {
            linkedSectionsStatus.textContent = "Choose a section first.";
            return;
        }

        if (!isCustomSectionKey(sectionKey)) {
            linkedSectionsStatus.textContent = "Only custom sections can be deleted.";
            return;
        }

        const sectionIndex = customSections.findIndex((section) => section.key === sectionKey);
        if (sectionIndex === -1) {
            linkedSectionsStatus.textContent = "That custom section could not be found.";
            return;
        }

        const [removedSection] = customSections.splice(sectionIndex, 1);
        getAllArticles().forEach((paper) => {
            setLinkedSectionKeys(
                paper,
                getLinkedSectionKeys(paper).filter((linkedKey) => linkedKey !== sectionKey)
            );
        });

        delete sectionDrafts[sectionKey];
        saveCustomSections();
        saveCustomSources();
        saveSectionDrafts();
        renderSectionLinkOptions();
        renderDraftSectionOptions();
        renderList();

        if (activeSource && activeSource.isCustom) {
            setActiveSource(activeSource);
        } else {
            renderLinkedSectionsSummary(activeSource);
        }

        if (activeDraftSectionKey === sectionKey) {
            setActiveDraftSection(generalDraftSectionKey, { focus: false });
        } else {
            setActiveDraftSection(activeDraftSectionKey, { focus: false });
        }

        linkedSectionsStatus.textContent = `${removedSection.label} deleted. Linked sources were unlinked from it.`;
        metaStatus.textContent = `${removedSection.label} deleted.`;
    }

    function removeCurrentCustomSource() {
        if (!activeSource || !activeSource.isCustom) {
            metaStatus.textContent = "The active source is not a saved custom entry.";
            return;
        }

        deleteCustomSource(activeSource);
    }

    function clearActive() {
        activeSource = null;
        currentRef = { full: "", narrative: "", parenthetical: "" };
        curName.innerText = "None";
        urlInput.value = "";
        clearMetadataForm();
        renderReferenceBox(currentRef);
        loadViewerSource("");
        updateActiveListItem("");
        updateViewerHelp(null);
        syncChatToActiveSource(null);
        setActiveDraftSection(activeDraftSectionKey, { focus: false });
        clearSavedActiveSource();
        updateSaveToArticlesButtonState(null);
        updateDeleteArticleButtonState(null);
        renderMetadataAiAction();
        metaStatus.textContent = "Select a source or drop a document to auto-fill this panel.";
        renderPaperNotesEditor();
    }

    async function importFiles(fileList) {
        const files = getSupportedDocumentFiles(fileList);

        if (!files.length) {
            metaStatus.textContent = "Drop supported document files only.";
            return;
        }

        let lastImported = null;

        for (const file of files) {
            const imported = await buildImportedPaper(file);
            customSources.unshift(imported);
            lastImported = imported;
        }

        saveCustomSources();
        renderList();
        if (lastImported) {
            revealArticleInList(lastImported);
        }

        metaStatus.textContent = files.length === 1
            ? `${getDocumentKindLabel(lastImported?.sourceKind)} imported into Sources as "${formatArticleLabel(lastImported)}".`
            : `${files.length} documents imported. The latest one is active.`;
    }

    async function buildImportedPaper(file) {
        const documentKind = getFileDocumentKind(file) || "document";
        let metadata = {};

        try {
            if (documentKind === "pdf") {
                metadata = await extractPdfMetadata(file);
            }
        } catch (error) {
            metadata = {};
        }

        const paper = normalizePaper({
            id: `custom-${Date.now()}-${nextTempId++}`,
            title: metadata.title || guessTitleFromFilename(file.name),
            author: metadata.author || "Unknown author",
            year: metadata.year || extractYear(file.name) || "",
            publisher: metadata.publisher || "",
            objectUrl: URL.createObjectURL(file),
            isImported: true,
            isCustom: true,
            linkedSectionKeys: [],
            sourceKind: documentKind,
            fileName: file.name,
            fileBlob: file,
        });

        await storePersistedPdfAttachment(paper.id, "object", file, file.name);
        const generated = buildReferenceFromMetadata(paper);
        applyReferenceFields(paper, generated);
        return paper;
    }

    async function extractPdfMetadata(file) {
        const buffer = await file.arrayBuffer();
        const bytes = new Uint8Array(buffer);
        const latin1Text = new TextDecoder("latin1").decode(bytes);
        const utf8Text = new TextDecoder("utf-8", { fatal: false }).decode(bytes);
        const xmpBlock = extractXmpBlock(utf8Text) || extractXmpBlock(latin1Text);

        const xmp = xmpBlock ? parseXmpBlock(xmpBlock) : {};
        const info = {
            title: extractPdfInfoValue(latin1Text, "Title"),
            author: extractPdfInfoValue(latin1Text, "Author"),
            creator: extractPdfInfoValue(latin1Text, "Creator"),
            creationDate: extractPdfInfoValue(latin1Text, "CreationDate"),
        };

        return {
            title: cleanMetadataValue(xmp.title || info.title),
            author: normalizeAuthorDisplayValue(xmp.creator || info.author),
            publisher: cleanMetadataValue(xmp.publisher || info.creator),
            year: extractYear(xmp.createDate || info.creationDate),
        };
    }

    function extractXmpBlock(text) {
        const start = text.indexOf("<x:xmpmeta");
        if (start === -1) {
            return "";
        }

        const end = text.indexOf("</x:xmpmeta>", start);
        if (end === -1) {
            return "";
        }

        return text.slice(start, end + "</x:xmpmeta>".length);
    }

    function parseXmpBlock(block) {
        return {
            title: decodeXmlEntities(extractFirstMatch(block, /<dc:title>[\s\S]*?<rdf:li[^>]*>([\s\S]*?)<\/rdf:li>/i)),
            creator: decodeXmlEntities(extractFirstMatch(block, /<dc:creator>[\s\S]*?<rdf:li[^>]*>([\s\S]*?)<\/rdf:li>/i)),
            publisher: decodeXmlEntities(extractFirstMatch(block, /<dc:publisher>[\s\S]*?<rdf:li[^>]*>([\s\S]*?)<\/rdf:li>/i)),
            createDate: decodeXmlEntities(
                extractFirstMatch(block, /<xmp:CreateDate>([\s\S]*?)<\/xmp:CreateDate>/i) ||
                extractFirstMatch(block, /<xmp:ModifyDate>([\s\S]*?)<\/xmp:ModifyDate>/i)
            ),
        };
    }

    function extractFirstMatch(text, pattern) {
        const match = text.match(pattern);
        return match ? match[1] : "";
    }

    function extractPdfInfoValue(text, key) {
        const token = `/${key}`;
        const start = text.indexOf(token);
        if (start === -1) {
            return "";
        }

        let cursor = start + token.length;
        while (cursor < text.length && /\s/.test(text[cursor])) {
            cursor += 1;
        }

        if (text[cursor] === "(") {
            return decodePdfLiteral(readPdfLiteral(text, cursor));
        }

        if (text[cursor] === "<" && text[cursor + 1] !== "<") {
            return decodePdfHex(readPdfHex(text, cursor));
        }

        return "";
    }

    function readPdfLiteral(text, start) {
        let value = "";
        let depth = 0;

        for (let index = start + 1; index < text.length; index += 1) {
            const char = text[index];

            if (char === "(" && !isEscaped(text, index)) {
                depth += 1;
                value += char;
                continue;
            }

            if (char === ")" && !isEscaped(text, index)) {
                if (depth === 0) {
                    return value;
                }
                depth -= 1;
                value += char;
                continue;
            }

            value += char;
        }

        return value;
    }

    function readPdfHex(text, start) {
        let value = "";

        for (let index = start + 1; index < text.length; index += 1) {
            const char = text[index];
            if (char === ">") {
                return value;
            }
            value += char;
        }

        return value;
    }

    function isEscaped(text, index) {
        let slashCount = 0;
        for (let cursor = index - 1; cursor >= 0 && text[cursor] === "\\"; cursor -= 1) {
            slashCount += 1;
        }
        return slashCount % 2 === 1;
    }

    function decodePdfLiteral(value) {
        return cleanMetadataValue(
            value
                .replace(/\\([0-7]{1,3})/g, (_, octal) => String.fromCharCode(parseInt(octal, 8)))
                .replace(/\\n/g, "\n")
                .replace(/\\r/g, "\r")
                .replace(/\\t/g, "\t")
                .replace(/\\b/g, "\b")
                .replace(/\\f/g, "\f")
                .replace(/\\([()\\])/g, "$1")
                .replace(/\\\r?\n/g, "")
        );
    }

    function decodePdfHex(value) {
        const hex = value.replace(/[^0-9a-f]/gi, "");
        if (!hex) {
            return "";
        }

        const padded = hex.length % 2 === 0 ? hex : `${hex}0`;
        const bytes = new Uint8Array(padded.match(/../g).map((pair) => parseInt(pair, 16)));

        try {
            if (bytes.length > 1 && bytes[0] === 0xfe && bytes[1] === 0xff) {
                return cleanMetadataValue(new TextDecoder("utf-16be").decode(bytes.slice(2)));
            }

            if (bytes.length > 1 && bytes[0] === 0xff && bytes[1] === 0xfe) {
                return cleanMetadataValue(new TextDecoder("utf-16le").decode(bytes.slice(2)));
            }

            return cleanMetadataValue(new TextDecoder("utf-8", { fatal: false }).decode(bytes));
        } catch (error) {
            return "";
        }
    }

    function handleDragEnter(event) {
        if (!eventContainsFiles(event)) {
            return;
        }

        event.preventDefault();
        dragDepth += 1;
        viewerOverlay.classList.add("is-visible");
    }

    function handleDragOver(event) {
        if (!eventContainsFiles(event)) {
            return;
        }

        event.preventDefault();
    }

    function handleDragLeave(event) {
        if (!eventContainsFiles(event)) {
            return;
        }

        dragDepth = Math.max(0, dragDepth - 1);
        if (dragDepth === 0) {
            viewerOverlay.classList.remove("is-visible");
        }
    }

    async function handleDrop(event) {
        if (!eventContainsFiles(event)) {
            return;
        }

        event.preventDefault();
        dragDepth = 0;
        viewerOverlay.classList.remove("is-visible");
        await importFiles(event.dataTransfer.files);
    }

    function eventContainsFiles(event) {
        return Boolean(event.dataTransfer && Array.from(event.dataTransfer.types || []).includes("Files"));
    }

    function cleanupObjectUrls() {
        [...staticSections.flatMap((section) => section.papers), activeSource].forEach((paper) => {
            if (paper && paper.localOverrideUrl && paper.localOverrideUrl.startsWith("blob:")) {
                URL.revokeObjectURL(paper.localOverrideUrl);
            }
        });

        customSources.forEach((paper) => {
            if (paper.objectUrl && paper.objectUrl.startsWith("blob:")) {
                URL.revokeObjectURL(paper.objectUrl);
            }

            if (paper.localOverrideUrl && paper.localOverrideUrl.startsWith("blob:")) {
                URL.revokeObjectURL(paper.localOverrideUrl);
            }
        });
    }

    function updateColumnToggleButtons() {
        const leftHidden = layout.classList.contains("hide-refs");
        const rightHidden = layout.classList.contains("hide-notes");

        if (toggleLeftBtn) {
            toggleLeftBtn.textContent = leftHidden ? ">" : "<";
            toggleLeftBtn.title = leftHidden ? "Show left column" : "Hide left column";
            toggleLeftBtn.setAttribute("aria-label", toggleLeftBtn.title);
        }

        if (toggleRightBtn) {
            toggleRightBtn.textContent = rightHidden ? "<" : ">";
            toggleRightBtn.title = rightHidden ? "Show right column" : "Hide right column";
            toggleRightBtn.setAttribute("aria-label", toggleRightBtn.title);
        }
    }

    function toggleRefsColumn() {
        layout.classList.toggle("hide-refs");
        updateColumnToggleButtons();
    }

    function toggleToolsColumn() {
        layout.classList.toggle("hide-notes");
        updateColumnToggleButtons();
    }

    function toggleNotes() {
        toggleToolsColumn();
    }

    function toggleDraftPanelDetached() {
        setDraftPanelDetached(!draftPanelDetached);
    }

    function renderDraftPanelState() {
        draftPanel.classList.toggle("is-detached", draftPanelDetached);
        draftPanel.classList.toggle("is-open", draftPanelDetached);
        draftPanel.setAttribute("aria-hidden", draftPanelDetached ? "false" : "true");
        if (draftDetachBtn) {
            draftDetachBtn.textContent = "Close";
        }
        if (draftLauncher) {
            draftLauncher.classList.toggle("is-active", draftPanelDetached);
        }
    }

    function setDraftPanelDetached(detached, options = {}) {
        draftPanelDetached = Boolean(detached);
        renderDraftPanelState();
        if (draftPanelDetached) {
            applyDraftPanelFrame(draftPanelFrame || getDefaultDraftPanelFrame(), { persist: false });
            requestAnimationFrame(() => notepad?.focus());
        } else {
            stopDraftPanelDrag();
            clearDraftPanelFrameStyles();
        }
        updateDraftStatus();

        if (options.persist === false) {
            return;
        }

        localStorage.setItem(draftPanelDetachedStorageKey, JSON.stringify(draftPanelDetached));
    }

    function copyToNotes(type) {
        if (!currentRef.full && !currentRef.narrative && !currentRef.parenthetical) {
            generateReference();
        }

        if (!currentRef.full && !currentRef.narrative && !currentRef.parenthetical) {
            return;
        }

        const referenceText = type === "full"
            ? currentRef.full
            : (type === "narrative" ? currentRef.narrative : currentRef.parenthetical);

        if (!referenceText) {
            return;
        }

        const text = type === "full" ? `\n${referenceText}\n` : ` ${referenceText} `;
        notepad.value += text;
        sectionDrafts[activeDraftSectionKey] = notepad.value;
        saveSectionDrafts();
        renderDraftEditor();
        updateDraftStatus();
    }

    function downloadTxt() {
        const compiledDraft = buildCompiledDraft();
        const blob = new Blob([compiledDraft], { type: "text/markdown" });
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = "Research_Draft.md";
        link.click();
    }

    function guessTitleFromFilename(name) {
        return cleanMetadataValue(
            (name || "")
                .replace(/\.[a-z0-9]+$/i, "")
                .replace(/[_]+/g, " ")
                .replace(/[-]+/g, " ")
        );
    }

    function inferTitleFromUrl(url) {
        try {
            const parsed = new URL(normaliseUrl(url));
            const lastSegment = parsed.pathname.split("/").filter(Boolean).pop() || parsed.hostname;
            return cleanMetadataValue(
                decodeURIComponent(lastSegment)
                    .replace(/\.[a-z0-9]+$/i, "")
                    .replace(/[_-]+/g, " ")
            );
        } catch (error) {
            return "";
        }
    }

    function inferPublisherFromUrl(url) {
        try {
            const parsed = new URL(normaliseUrl(url));
            const hostname = parsed.hostname.replace(/^www\./, "");
            const parts = hostname.split(".");
            const domain = parts.length > 1 ? parts[parts.length - 2] : parts[0];
            return cleanMetadataValue(domain.replace(/[-_]+/g, " ").replace(/\b\w/g, (letter) => letter.toUpperCase()));
        } catch (error) {
            return "";
        }
    }

    function isLikelyFrameBlocked(url) {
        try {
            const hostname = new URL(normaliseUrl(url)).hostname;
            return frameBlockedHosts.some((host) => hostname === host || hostname.endsWith(`.${host}`));
        } catch (error) {
            return false;
        }
    }

    function normaliseUrl(value) {
        const trimmed = cleanMetadataValue(value);
        if (!trimmed) {
            return "";
        }

        if (/^[a-z]+:\/\//i.test(trimmed)) {
            return trimmed;
        }

        return `https://${trimmed}`;
    }

    function normaliseLocalOverride(value) {
        const trimmed = stripWrappingQuotes(cleanMetadataValue(value));
        if (!trimmed) {
            return "";
        }

        const localFileUrl = normaliseLocalFilePath(trimmed);
        if (localFileUrl) {
            return localFileUrl;
        }

        if (/^(blob:|file:|https?:\/\/|data:)/i.test(trimmed)) {
            return trimmed;
        }

        if (/^(localhost|127\.0\.0\.1)(:\d+)?(\/.*)?$/i.test(trimmed)) {
            return `http://${trimmed}`;
        }

        return normaliseUrl(trimmed);
    }

    function stripWrappingQuotes(value) {
        let trimmed = String(value || "").trim();

        while (trimmed.startsWith("\"") || trimmed.startsWith("'")) {
            trimmed = trimmed.slice(1).trim();
        }

        while (trimmed.endsWith("\"") || trimmed.endsWith("'")) {
            trimmed = trimmed.slice(0, -1).trim();
        }

        return trimmed;
    }

    function normaliseLocalFilePath(value) {
        let candidate = stripWrappingQuotes(value);
        if (!candidate) {
            return "";
        }

        candidate = candidate
            .replace(/^https?:\/\/(?=\\\\)/i, "")
            .replace(/^https?:\/\/(?=\/\/)/i, "")
            .replace(/^https?:\/\/(?=[A-Za-z]:[\\/])/i, "")
            .replace(/^https?:\/\/(?=wsl\.localhost[\\/])/i, "")
            .replace(/^https?:\/\/(?=wsl\.localhost\/)/i, "");

        if (/^[A-Za-z]:[\\/]/.test(candidate)) {
            return buildFileUrlFromWindowsPath(candidate);
        }

        if (/^(\\\\|\/\/)/.test(candidate)) {
            return buildFileUrlFromUncPath(candidate);
        }

        if (/^wsl\.localhost(?:[\\/]|\/)/i.test(candidate)) {
            return buildFileUrlFromUncPath(`\\\\${candidate}`);
        }

        if (/^\//.test(candidate) && !candidate.startsWith("//")) {
            return buildFileUrlFromPosixPath(candidate);
        }

        return "";
    }

    function buildFileUrlFromWindowsPath(path) {
        const normalised = path.replace(/\\/g, "/");
        const drive = normalised.slice(0, 2);
        const rest = normalised
            .slice(2)
            .split("/")
            .filter(Boolean)
            .map((segment) => encodeURIComponent(segment))
            .join("/");

        return rest ? `file:///${drive}/${rest}` : `file:///${drive}/`;
    }

    function buildFileUrlFromUncPath(path) {
        const normalised = path
            .replace(/^\\\\/, "")
            .replace(/^\/\//, "")
            .replace(/\\/g, "/");
        const parts = normalised.split("/").filter(Boolean);

        if (parts.length < 2) {
            return "";
        }

        const host = parts.shift();
        const rest = parts.map((segment) => encodeURIComponent(segment)).join("/");
        return rest ? `file://${host}/${rest}` : `file://${host}`;
    }

    function buildFileUrlFromPosixPath(path) {
        const encodedPath = path
            .replace(/\\/g, "/")
            .split("/")
            .map((segment, index) => (index === 0 ? "" : encodeURIComponent(segment)))
            .join("/");

        return `file://${encodedPath}`;
    }

    function inferLocalOverrideLabel(url) {
        const cleaned = cleanMetadataValue(url);
        if (!cleaned) {
            return "";
        }

        if (cleaned.startsWith("blob:")) {
            return "Attached document";
        }

        if (cleaned.startsWith("file:")) {
            const name = cleaned.split("/").filter(Boolean).pop() || cleaned;
            return decodeURIComponent(name);
        }

        try {
            const parsed = new URL(cleaned);
            return decodeURIComponent(parsed.pathname.split("/").filter(Boolean).pop() || parsed.hostname);
        } catch (error) {
            return cleaned;
        }
    }

    function getViewerUrl(source) {
        return source.localOverrideUrl || source.url || source.objectUrl || "";
    }

    function getDisplayedSourceUrl(source) {
        if (source.localOverrideUrl && !source.localOverrideUrl.startsWith("blob:")) {
            return source.localOverrideUrl;
        }

        return source.url || "";
    }

    function findSourceById(sourceId) {
        if (!sourceId) {
            return null;
        }

        return getAllArticles().find((paper) => paper.id === sourceId) || null;
    }

    function serializeActiveSource(source) {
        if (!source) {
            return null;
        }

        const viewerUrl = getViewerUrl(source);
        if (viewerUrl && viewerUrl.startsWith("blob:")) {
            return null;
        }

        if (source.id && (source.id.startsWith("static-") || source.isCustom)) {
            return {
                mode: "id",
                id: source.id,
            };
        }

        if (!viewerUrl && !source.url && !source.title) {
            return null;
        }

        return {
            mode: "manual",
            source: {
                id: source.id || `manual-${nextTempId++}`,
                title: source.title || "",
                author: source.author || "",
                year: source.year || "",
                url: source.url || "",
                publisher: source.publisher || "",
                tags: getSourceTags(source),
                fullRef: source.fullRef || "",
                narrativeRef: source.narrativeRef || "",
                parentheticalRef: getParentheticalReferenceValue(source) || "",
                inlineRef: getParentheticalReferenceValue(source) || "",
                sectionKey: source.sectionKey || extraSectionKey,
                linkedSectionKeys: source.linkedSectionKeys || [],
                sourceKind: source.sourceKind || "manual",
                localOverrideUrl: source.localOverrideUrl || "",
                localOverrideLabel: source.localOverrideLabel || "",
            },
        };
    }

    function saveActiveSourceState(source = activeSource) {
        const serialized = serializeActiveSource(source);
        if (!serialized) {
            clearSavedActiveSource();
            return;
        }

        localStorage.setItem(activeSourceStorageKey, JSON.stringify(serialized));
    }

    function clearSavedActiveSource() {
        localStorage.removeItem(activeSourceStorageKey);
    }

    async function restoreActiveSource() {
        try {
            const raw = localStorage.getItem(activeSourceStorageKey);
            if (!raw) {
                return false;
            }

            const saved = JSON.parse(raw);
            if (saved.mode === "id") {
                const source = findSourceById(saved.id);
                if (source) {
                    setActiveSource(source);
                    return true;
                }
            }

            if (saved.mode === "manual" && saved.source) {
                const restoredSource = normalizePaper(saved.source);
                await restorePersistedAttachmentsForSource(restoredSource);
                setActiveSource(restoredSource);
                return true;
            }
        } catch (error) {
            // Ignore malformed state and fall back to a clean load.
        }

        clearSavedActiveSource();
        return false;
    }

    function persistMetadataForSource(source) {
        if (!source) {
            return;
        }

        persistLocalOverrideForSource(source);

        if (source.isCustom) {
            saveCustomSources();
            saveActiveSourceState(source);
            return;
        }

        if (source.id && source.id.startsWith("static-")) {
            metadataOverrides[source.id] = {
                title: cleanMetadataValue(source.title),
                author: cleanMetadataValue(source.author),
                year: cleanMetadataValue(source.year),
                publisher: cleanMetadataValue(source.publisher),
                tags: getSourceTags(source),
                url: cleanMetadataValue(source.url),
                sourceKind: isExplicitDocumentKind(source.sourceKind) ? source.sourceKind : "",
            };
            saveMetadataOverrides();
        }

        saveActiveSourceState(source);
    }

    function persistReferenceForSource(source) {
        persistMetadataForSource(source);

        if (source.isCustom) {
            removeReferenceOverride(source.id, { persist: false });
            saveCustomSources();
            saveReferenceOverrides();
            saveActiveSourceState(source);
            return;
        }

        if (source.id && source.id.startsWith("static-")) {
            referenceOverrides[source.id] = {
                fullRef: source.fullRef || "",
                narrativeRef: source.narrativeRef || "",
                parentheticalRef: getParentheticalReferenceValue(source) || "",
                inlineRef: getParentheticalReferenceValue(source) || "",
            };
            saveReferenceOverrides();
        }

        saveActiveSourceState(source);
    }

    function persistLocalOverrideForSource(source) {
        if (!source || !source.id) {
            return;
        }

        if (source.isCustom) {
            saveCustomSources();
            return;
        }

        if (source.localOverrideUrl && !source.localOverrideUrl.startsWith("blob:")) {
            localOverrides[source.id] = {
                url: source.localOverrideUrl,
                label: source.localOverrideLabel || inferLocalOverrideLabel(source.localOverrideUrl),
            };
        } else {
            delete localOverrides[source.id];
        }

        saveLocalOverrides();
    }

    function getPersistedPdfAttachmentEntry(sourceId) {
        return sourceId ? (persistedPdfAttachments[sourceId] || null) : null;
    }

    function hasPersistedPdfAttachment(sourceId, kind = "") {
        const entry = getPersistedPdfAttachmentEntry(sourceId);
        if (!entry) {
            return false;
        }

        if (!kind) {
            return Boolean(entry.local || entry.object);
        }

        return Boolean(entry[kind]);
    }

    function setPersistedPdfAttachmentMeta(sourceId, kind, label = "") {
        if (!sourceId || !kind) {
            return;
        }

        persistedPdfAttachments[sourceId] = persistedPdfAttachments[sourceId] || {};
        persistedPdfAttachments[sourceId][kind] = {
            label: cleanMetadataValue(label),
        };
        savePersistedPdfAttachments();
    }

    function removePersistedPdfAttachmentMeta(sourceId, kind) {
        if (!sourceId || !kind || !persistedPdfAttachments[sourceId]) {
            return;
        }

        delete persistedPdfAttachments[sourceId][kind];
        if (!persistedPdfAttachments[sourceId].local && !persistedPdfAttachments[sourceId].object) {
            delete persistedPdfAttachments[sourceId];
        }
        savePersistedPdfAttachments();
    }

    function openPdfAttachmentDatabase() {
        if (pdfAttachmentDbPromise) {
            return pdfAttachmentDbPromise;
        }

        if (typeof indexedDB === "undefined") {
            pdfAttachmentDbPromise = Promise.resolve(null);
            return pdfAttachmentDbPromise;
        }

        pdfAttachmentDbPromise = new Promise((resolve) => {
            const request = indexedDB.open(pdfAttachmentDbName, 1);

            request.onupgradeneeded = () => {
                const db = request.result;
                if (!db.objectStoreNames.contains(pdfAttachmentStoreName)) {
                    db.createObjectStore(pdfAttachmentStoreName);
                }
            };

            request.onsuccess = () => {
                const db = request.result;
                db.onversionchange = () => db.close();
                resolve(db);
            };

            request.onerror = () => {
                console.warn("PDF attachment database could not be opened.", request.error);
                resolve(null);
            };
        });

        return pdfAttachmentDbPromise;
    }

    async function putPdfAttachmentBlob(sourceId, kind, blob) {
        const db = await openPdfAttachmentDatabase();
        if (!db || !sourceId || !kind || !(blob instanceof Blob)) {
            return false;
        }

        return new Promise((resolve) => {
            const transaction = db.transaction(pdfAttachmentStoreName, "readwrite");
            transaction.objectStore(pdfAttachmentStoreName).put(blob, `${sourceId}:${kind}`);
            transaction.oncomplete = () => resolve(true);
            transaction.onerror = () => {
                console.warn("PDF attachment could not be stored.", transaction.error);
                resolve(false);
            };
        });
    }

    async function getPdfAttachmentBlob(sourceId, kind) {
        const db = await openPdfAttachmentDatabase();
        if (!db || !sourceId || !kind) {
            return null;
        }

        return new Promise((resolve) => {
            const transaction = db.transaction(pdfAttachmentStoreName, "readonly");
            const request = transaction.objectStore(pdfAttachmentStoreName).get(`${sourceId}:${kind}`);
            request.onsuccess = () => resolve(request.result instanceof Blob ? request.result : null);
            request.onerror = () => {
                console.warn("Stored PDF attachment could not be read.", request.error);
                resolve(null);
            };
        });
    }

    async function deletePdfAttachmentBlob(sourceId, kind) {
        const db = await openPdfAttachmentDatabase();
        if (!db || !sourceId || !kind) {
            return false;
        }

        return new Promise((resolve) => {
            const transaction = db.transaction(pdfAttachmentStoreName, "readwrite");
            transaction.objectStore(pdfAttachmentStoreName).delete(`${sourceId}:${kind}`);
            transaction.oncomplete = () => resolve(true);
            transaction.onerror = () => {
                console.warn("Stored PDF attachment could not be removed.", transaction.error);
                resolve(false);
            };
        });
    }

    async function storePersistedPdfAttachment(sourceId, kind, file, label = "") {
        const stored = await putPdfAttachmentBlob(sourceId, kind, file);
        if (stored) {
            setPersistedPdfAttachmentMeta(sourceId, kind, label);
        }
        return stored;
    }

    async function removePersistedPdfAttachment(sourceId, kind) {
        if (!sourceId || !kind) {
            return false;
        }

        await deletePdfAttachmentBlob(sourceId, kind);
        removePersistedPdfAttachmentMeta(sourceId, kind);
        return true;
    }

    async function prunePersistedPdfAttachments() {
        const validSourceIds = new Set(getAllArticles().map((source) => source.id));
        const savedActiveSourceId = getSavedActiveSourceId();
        if (savedActiveSourceId) {
            validSourceIds.add(savedActiveSourceId);
        }
        const staleSourceIds = Object.keys(persistedPdfAttachments).filter((sourceId) => !validSourceIds.has(sourceId));

        if (!staleSourceIds.length) {
            return;
        }

        for (const sourceId of staleSourceIds) {
            const entry = persistedPdfAttachments[sourceId] || {};
            if (entry.local) {
                await deletePdfAttachmentBlob(sourceId, "local");
            }
            if (entry.object) {
                await deletePdfAttachmentBlob(sourceId, "object");
            }
            delete persistedPdfAttachments[sourceId];
        }

        savePersistedPdfAttachments();
    }

    async function restorePersistedPdfAttachments() {
        for (const source of getAllArticles()) {
            await restorePersistedAttachmentsForSource(source);
        }
    }

    async function restorePersistedAttachmentsForSource(source) {
        const entry = getPersistedPdfAttachmentEntry(source?.id);
        if (!entry || !source) {
            return;
        }

        if (entry.object) {
            const objectBlob = await getPdfAttachmentBlob(source.id, "object");
            if (objectBlob) {
                releaseObjectUrl(source.objectUrl);
                source.objectUrl = URL.createObjectURL(objectBlob);
                source.fileBlob = objectBlob;
                source.fileName = source.fileName || entry.object.label || "";
                source.sourceKind = detectDocumentKind(
                    {
                        sourceKind: "",
                        fileName: source.fileName || entry.object.label || "",
                    },
                    source.objectUrl,
                    objectBlob.type || ""
                ) || source.sourceKind;
            } else {
                removePersistedPdfAttachmentMeta(source.id, "object");
            }
        }

        if (entry.local) {
            const localBlob = await getPdfAttachmentBlob(source.id, "local");
            if (localBlob) {
                releaseObjectUrl(source.localOverrideUrl);
                source.localOverrideUrl = URL.createObjectURL(localBlob);
                source.localOverrideLabel = entry.local.label || source.localOverrideLabel || "Attached document";
                source.localOverrideBlob = localBlob;
                source.sourceKind = detectDocumentKind(
                    {
                        sourceKind: "",
                        fileName: source.localOverrideLabel || source.fileName || "",
                    },
                    source.localOverrideUrl,
                    localBlob.type || ""
                ) || source.sourceKind;
            } else {
                removePersistedPdfAttachmentMeta(source.id, "local");
            }
        }

        source.sourceUrl = getViewerUrl(source);
    }

    function getSavedActiveSourceId() {
        try {
            const raw = localStorage.getItem(activeSourceStorageKey);
            if (!raw) {
                return "";
            }

            const saved = JSON.parse(raw);
            if (saved?.mode === "id") {
                return cleanMetadataValue(saved.id);
            }

            if (saved?.mode === "manual" && saved?.source?.id) {
                return cleanMetadataValue(saved.source.id);
            }
        } catch (error) {
            return "";
        }

        return "";
    }

    function loadLocalOverrides() {
        try {
            const raw = localStorage.getItem(localOverrideStorageKey);
            return raw ? JSON.parse(raw) : {};
        } catch (error) {
            return {};
        }
    }

    function loadMetadataOverrides() {
        try {
            const raw = localStorage.getItem(metadataOverrideStorageKey);
            return raw ? JSON.parse(raw) : {};
        } catch (error) {
            return {};
        }
    }

    function loadPersistedPdfAttachments() {
        try {
            const raw = localStorage.getItem(pdfAttachmentMetaStorageKey);
            return raw ? JSON.parse(raw) : {};
        } catch (error) {
            return {};
        }
    }

    function loadCustomSources() {
        try {
            const raw = localStorage.getItem(customSourcesStorageKey);
            const parsed = raw ? JSON.parse(raw) : [];
            return parsed.map((paper) => normalizePaper({
                ...paper,
                isCustom: true,
            }));
        } catch (error) {
            return [];
        }
    }

    function loadCustomSections() {
        try {
            const raw = localStorage.getItem(customSectionsStorageKey);
            const parsed = raw ? JSON.parse(raw) : [];
            return parsed
                .map((section, index) => ({
                    key: cleanMetadataValue(section.key) || `custom-section-restored-${index}`,
                    label: cleanMetadataValue(section.label || section.name || `Custom Section ${index + 1}`),
                }))
                .filter((section) => section.key && section.label);
        } catch (error) {
            return [];
        }
    }

    function loadArticleLinkOverrides() {
        try {
            const raw = localStorage.getItem(articleLinkOverrideStorageKey);
            return raw ? JSON.parse(raw) : {};
        } catch (error) {
            return {};
        }
    }

    function loadReferenceOverrides() {
        try {
            const raw = localStorage.getItem(referenceOverrideStorageKey);
            return raw ? JSON.parse(raw) : {};
        } catch (error) {
            return {};
        }
    }

    function saveLocalOverrides() {
        localStorage.setItem(localOverrideStorageKey, JSON.stringify(localOverrides));
    }

    function saveMetadataOverrides() {
        localStorage.setItem(metadataOverrideStorageKey, JSON.stringify(metadataOverrides));
    }

    function savePersistedPdfAttachments() {
        localStorage.setItem(pdfAttachmentMetaStorageKey, JSON.stringify(persistedPdfAttachments));
    }

    function saveReferenceOverrides() {
        localStorage.setItem(referenceOverrideStorageKey, JSON.stringify(referenceOverrides));
    }

    function saveCustomSections() {
        localStorage.setItem(customSectionsStorageKey, JSON.stringify(customSections));
    }

    function saveArticleLinkOverrides() {
        localStorage.setItem(articleLinkOverrideStorageKey, JSON.stringify(articleLinkOverrides));
    }

    function removeReferenceOverride(sourceId, options = {}) {
        if (!sourceId) {
            return;
        }

        delete referenceOverrides[sourceId];
        if (options.persist === false) {
            return;
        }

        saveReferenceOverrides();
    }

    function removeMetadataOverride(sourceId, options = {}) {
        if (!sourceId) {
            return;
        }

        delete metadataOverrides[sourceId];
        if (options.persist === false) {
            return;
        }

        saveMetadataOverrides();
    }

    function saveCustomSources() {
        const serializableSources = customSources
            .filter((paper) => {
                return !paper.objectUrl ||
                    !paper.objectUrl.startsWith("blob:") ||
                    paper.url ||
                    (paper.localOverrideUrl && !paper.localOverrideUrl.startsWith("blob:")) ||
                    hasPersistedPdfAttachment(paper.id);
            })
            .map((paper) => ({
                id: paper.id,
                title: paper.title,
                author: paper.author,
                year: paper.year,
                url: paper.url,
                publisher: paper.publisher,
                tags: getSourceTags(paper),
                baseFullRef: paper.baseFullRef,
                baseNarrativeRef: paper.baseNarrativeRef,
                baseParentheticalRef: paper.baseParentheticalRef,
                baseInlineRef: paper.baseInlineRef,
                fullRef: paper.fullRef,
                narrativeRef: paper.narrativeRef,
                parentheticalRef: getParentheticalReferenceValue(paper),
                inlineRef: getParentheticalReferenceValue(paper),
                isCustom: true,
                sectionKey: getLinkedSectionKeys(paper)[0] || extraSectionKey,
                linkedSectionKeys: getLinkedSectionKeys(paper),
                sourceKind: paper.sourceKind || "manual",
                fileName: paper.fileName || "",
                localOverrideUrl: paper.localOverrideUrl && !paper.localOverrideUrl.startsWith("blob:") ? paper.localOverrideUrl : "",
                localOverrideLabel: (paper.localOverrideUrl && !paper.localOverrideUrl.startsWith("blob:")) || hasPersistedPdfAttachment(paper.id, "local")
                    ? paper.localOverrideLabel
                    : "",
            }));

        localStorage.setItem(customSourcesStorageKey, JSON.stringify(serializableSources));
    }

    function renderSectionLinkOptions() {
        const options = getContentSections();
        sectionLinkSelect.innerHTML = options
            .map((option) => `<option value="${escapeHtml(option.key)}">${escapeHtml(option.label)}</option>`)
            .join("");
        syncSectionLinkSelection(activeSource);
    }

    function renderDraftSectionOptions() {
        draftSectionSelect.innerHTML = getDraftSections()
            .map((section) => `<option value="${escapeHtml(section.key)}">${escapeHtml(section.label)}</option>`)
            .join("");
    }

    function syncSectionLinkSelection(source) {
        const optionValues = Array.from(sectionLinkSelect.options).map((option) => option.value);
        if (!optionValues.length) {
            return;
        }

        let targetKey = sectionLinkSelect.value;
        if (source) {
            const linkedSectionKeys = getLinkedSectionKeys(source);
            if (!linkedSectionKeys.includes(targetKey)) {
                targetKey = linkedSectionKeys[0] || source.defaultSectionKey || targetKey;
            }
        }

        if (!optionValues.includes(targetKey)) {
            targetKey = optionValues[0];
        }

        sectionLinkSelect.value = targetKey;
    }

    function renderLinkedSectionsSummary(source) {
        if (!source) {
            linkedSectionsSummary.innerHTML = '<span class="link-pill">No active source</span>';
            linkedSectionsStatus.textContent = "Sources can be linked into one or more sections.";
            return;
        }

        const linkedSectionKeys = getLinkedSectionKeys(source);
        if (!linkedSectionKeys.length) {
            linkedSectionsSummary.innerHTML = '<span class="link-pill">Sources only</span>';
            linkedSectionsStatus.textContent = "This source is currently unlinked and appears only in Sources.";
            return;
        }

        linkedSectionsSummary.innerHTML = linkedSectionKeys
            .map((sectionKey) => `<span class="link-pill">${escapeHtml(getSectionOptionLabel(sectionKey))}</span>`)
            .join("");
        linkedSectionsStatus.textContent = `This source appears in Sources and ${linkedSectionKeys.length} linked section${linkedSectionKeys.length === 1 ? "" : "s"}.`;
    }

    function updateUndoDeleteButton() {
        undoDeleteBtn.disabled = deletedArticleHistory.length === 0;
    }

    function getDraftSections() {
        return [
            { key: generalDraftSectionKey, label: "General Draft" },
            { key: extraSectionKey, label: "Sources" },
            ...getContentSections().map((section) => ({ key: section.key, label: section.label })),
        ];
    }

    function getDraftSectionLabel(sectionKey) {
        return getDraftSections().find((section) => section.key === sectionKey)?.label || "General Draft";
    }

    function resolveDraftSectionKey(source) {
        if (!source) {
            return activeDraftSectionKey || generalDraftSectionKey;
        }

        const linkedSectionKeys = getLinkedSectionKeys(source);
        if (linkedSectionKeys.includes(activeDraftSectionKey)) {
            return activeDraftSectionKey;
        }

        return linkedSectionKeys[0] || source.defaultSectionKey || source.sectionKey || extraSectionKey;
    }

    function setActiveDraftSection(sectionKey, options = {}) {
        const resolvedSectionKey = getDraftSections().some((section) => section.key === sectionKey)
            ? sectionKey
            : generalDraftSectionKey;

        if (!(resolvedSectionKey in sectionDrafts)) {
            sectionDrafts[resolvedSectionKey] = "";
        }

        activeDraftSectionKey = resolvedSectionKey;
        draftSectionSelect.value = resolvedSectionKey;
        notepad.value = sectionDrafts[resolvedSectionKey] || "";
        notepad.placeholder = `Draft ${getDraftSectionLabel(resolvedSectionKey)} here...`;
        draftPanelSection.textContent = getDraftSectionLabel(resolvedSectionKey);
        renderDraftEditor();
        updateDraftStatus();

        if (options.focus) {
            notepad.focus();
        }
    }

    function updateDraftStatus() {
        const sectionText = sectionDrafts[activeDraftSectionKey] || "";
        const wordCount = countWords(sectionText);
        draftStatus.textContent = `Editing ${getDraftSectionLabel(activeDraftSectionKey)} · ${wordCount} words · floating draft panel`;
    }

    function buildCompiledDraft() {
        return getDraftSections()
            .map((section) => {
                const content = (sectionDrafts[section.key] || "").trim();
                if (!content) {
                    return "";
                }

                return `${section.label}\n${"=".repeat(section.label.length)}\n${content}`;
            })
            .filter(Boolean)
            .join("\n\n");
    }

    function setDraftEditorMode(mode) {
        draftEditorMode = normalizeEditorMode(mode);
        updateEditorModeToggle(draftEditorModeToggle, draftEditorMode);
        applyMarkdownEditorMode(draftEditorBody, draftEditorMode);
        renderDraftEditor();
    }

    function renderDraftEditor() {
        const sectionText = sectionDrafts[activeDraftSectionKey] || "";
        renderMarkdownPreview(draftPreview, sectionText, "Nothing to preview yet.");
        if (draftMarkdownStatus) {
            draftMarkdownStatus.textContent = `${countWords(sectionText)} words · ${draftEditorMode === "split" ? "split view" : `${draftEditorMode} view`} · Markdown preview enabled`;
        }
    }

    function loadSectionDrafts() {
        try {
            const raw = localStorage.getItem(sectionDraftStorageKey);
            if (raw) {
                return JSON.parse(raw);
            }
        } catch (error) {
            // Ignore malformed draft storage and fall back to the legacy single draft.
        }

        const legacyDraft = localStorage.getItem(noteStorageKey);
        return legacyDraft
            ? { [generalDraftSectionKey]: legacyDraft }
            : { [generalDraftSectionKey]: "" };
    }

    function saveSectionDrafts() {
        localStorage.setItem(sectionDraftStorageKey, JSON.stringify(sectionDrafts));
    }

    function loadChatThreadsBySource() {
        try {
            const raw = localStorage.getItem(chatThreadsStorageKey);
            if (!raw) {
                return {};
            }

            const parsed = JSON.parse(raw);
            if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) {
                return {};
            }

            return Object.fromEntries(
                Object.entries(parsed)
                    .map(([sourceId, thread]) => [cleanMetadataValue(sourceId), normalizeStoredChatThread(thread)])
                    .filter(([sourceId, thread]) => Boolean(sourceId) && thread.length)
            );
        } catch (error) {
            return {};
        }
    }

    function saveChatThreadsBySource() {
        localStorage.setItem(chatThreadsStorageKey, JSON.stringify(chatThreadsBySource));
    }

    function loadPaperNotesBySource() {
        try {
            const raw = localStorage.getItem(paperNotesStorageKey);
            if (!raw) {
                return {};
            }

            const parsed = JSON.parse(raw);
            if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) {
                return {};
            }

            return Object.fromEntries(
                Object.entries(parsed)
                    .map(([sourceId, text]) => [cleanMetadataValue(sourceId), normalizeMarkdownEditorText(text)])
                    .filter(([sourceId]) => Boolean(sourceId))
            );
        } catch (error) {
            return {};
        }
    }

    function savePaperNotesBySource() {
        localStorage.setItem(paperNotesStorageKey, JSON.stringify(paperNotesBySource));
    }

    function loadPaperNotesExpanded() {
        try {
            return JSON.parse(localStorage.getItem(paperNotesExpandedStorageKey) || "false") === true;
        } catch (error) {
            return false;
        }
    }

    function renderPaperNotesPanelState() {
        if (!paperNotesCard) {
            return;
        }

        paperNotesCard.classList.toggle("is-open", paperNotesExpanded);
        paperNotesCard.setAttribute("aria-hidden", paperNotesExpanded ? "false" : "true");
        if (paperNotesSizeBtn) {
            paperNotesSizeBtn.textContent = "Close";
        }
        if (paperNotesLauncher) {
            paperNotesLauncher.classList.toggle("is-active", paperNotesExpanded);
        }
    }

    function setPaperNotesExpanded(expanded, options = {}) {
        paperNotesExpanded = Boolean(expanded);
        renderPaperNotesPanelState();
        if (paperNotesExpanded) {
            applyPaperNotesFrame(paperNotesFrame || getDefaultPaperNotesFrame(), { persist: false });
            requestAnimationFrame(() => paperNotesInput?.focus());
        } else {
            stopPaperNotesDrag();
            clearPaperNotesFrameStyles();
        }

        if (options.persist === false) {
            return;
        }

        localStorage.setItem(paperNotesExpandedStorageKey, JSON.stringify(paperNotesExpanded));
    }

    function togglePaperNotesExpanded() {
        setPaperNotesExpanded(!paperNotesExpanded);
    }

    function setPaperNotesEditorMode(mode) {
        paperNotesEditorMode = normalizeEditorMode(mode);
        updateEditorModeToggle(paperNotesModeToggle, paperNotesEditorMode);
        applyMarkdownEditorMode(paperNotesBody, paperNotesEditorMode);
        renderPaperNotesEditor();
    }

    function renderPaperNotesEditor() {
        if (!paperNotesInput || !paperNotesPreview || !paperNotesStatus) {
            return;
        }

        if (!activeSource?.id) {
            paperNotesInput.value = "";
            paperNotesInput.disabled = true;
            paperNotesInput.placeholder = "Select a source to keep notes for that paper...";
            setMarkdownToolbarDisabled("paper-notes", true);
            renderMarkdownPreview(paperNotesPreview, "", "Select a source to preview paper notes.");
            paperNotesStatus.textContent = "Select a source to keep notes for that paper.";
            return;
        }

        const noteText = paperNotesBySource[activeSource.id] || "";
        if (paperNotesInput.value !== noteText) {
            paperNotesInput.value = noteText;
        }

        paperNotesInput.disabled = false;
        setMarkdownToolbarDisabled("paper-notes", false);
        paperNotesInput.placeholder = `Keep paper-specific notes for ${activeSource.title || "this source"}...`;
        renderMarkdownPreview(
            paperNotesPreview,
            noteText,
            "No paper-specific notes yet. Write notes in markdown and switch to preview when needed."
        );
        paperNotesStatus.textContent = `${activeSource.title || "Active source"} · ${countWords(noteText)} words · saved per paper`;
    }

    function loadDraftPanelDetached() {
        try {
            return JSON.parse(localStorage.getItem(draftPanelDetachedStorageKey) || "false") === true;
        } catch (error) {
            return false;
        }
    }

    function loadCollapsedRightPanels() {
        try {
            const raw = localStorage.getItem(rightPanelCollapseStorageKey);
            if (!raw) {
                return {};
            }

            const parsed = JSON.parse(raw);
            if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) {
                return {};
            }

            return Object.fromEntries(
                Object.entries(parsed).filter((entry) => entry[1] === true)
            );
        } catch (error) {
            return {};
        }
    }

    function saveCollapsedRightPanels() {
        localStorage.setItem(rightPanelCollapseStorageKey, JSON.stringify(collapsedRightPanels));
    }

    function releaseObjectUrl(url) {
        if (url && url.startsWith("blob:")) {
            URL.revokeObjectURL(url);
        }
    }

    function extractYear(value) {
        const match = String(value || "").match(/\b(19|20)\d{2}\b/);
        return match ? match[0] : "";
    }

    function cleanMetadataValue(value) {
        return String(value || "")
            .replace(/\0/g, " ")
            .replace(/\s+/g, " ")
            .trim();
    }

    function decodeXmlEntities(value) {
        return cleanMetadataValue(
            String(value || "")
                .replace(/&amp;/g, "&")
                .replace(/&lt;/g, "<")
                .replace(/&gt;/g, ">")
                .replace(/&quot;/g, "\"")
                .replace(/&#39;/g, "'")
        );
    }

    function escapeHtml(value) {
        return String(value || "")
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#39;");
    }

    const actions = {
        undoDeleteArticle,
        openCreateModuleModal,
        exportWorkspace,
        openWorkspaceImportPicker,
        openTypedUrl,
        openPdfPicker,
        toggleTheme,
        toggleRefsColumn,
        toggleToolsColumn,
        toggleNotes,
        generateReference,
        populateMetadataWithAi,
        saveReferenceToPaper,
        attachLocalPdfToPaper,
        clearLocalOverride,
        saveCurrentSourceToList,
        removeCurrentCustomSource,
        copyToNotes,
        linkActiveSourceToSelectedSection,
        unlinkActiveSourceFromSelectedSection,
        createCustomSection,
        deleteSelectedSection,
        toggleDraftPanelDetached,
        togglePaperNotesExpanded,
        applyMarkdownFormat,
        downloadTxt,
        toggleChatWidget,
        toggleChatWidgetExpanded,
        clearChatMessages,
        sendChatMessage,
    };

    return { init, actions };
}
