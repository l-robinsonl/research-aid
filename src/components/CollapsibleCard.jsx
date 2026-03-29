import { CollapsibleToggleButton } from "./CollapsibleToggleButton";

export function CollapsibleCard({
    collapseId,
    title,
    bodyId,
    className = "meta-card collapsible-card",
    children,
}) {
    return (
        <div className={className} data-collapse-id={collapseId}>
            <div className="collapsible-card-header">
                <h3>{title}</h3>
                <CollapsibleToggleButton target={collapseId} controlsId={bodyId} />
            </div>
            <div className="collapsible-card-body" id={bodyId}>
                {children}
            </div>
        </div>
    );
}
