export function CollapsibleToggleButton({ target, controlsId }) {
    return (
        <button
            className="collapsible-card-toggle"
            type="button"
            data-collapse-target={target}
            aria-expanded="true"
            aria-controls={controlsId}
        >
            <span className="collapsible-card-toggle-label">Hide</span>
            <span className="collapsible-card-chevron" aria-hidden="true"></span>
        </button>
    );
}
