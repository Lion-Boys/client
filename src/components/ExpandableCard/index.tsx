import type { ExpandableCardProps } from "./types";
import { useCollapsible } from "@/hooks/useCollapsible";
import { CardHeader } from "./CardHeader";
import { motion } from "motion/react";
import { SMOOOTH } from "@/styles/transitions";

export default function ExpandableCard({
    title,
    includeIndicator = false,
    isExpandable = false,
    defaultExpanded = false,
    expanded: expandedProp,
    onExpandedChange,
    className,
    children,
}: ExpandableCardProps) {
    const { expanded, toggle, contentMotion } = useCollapsible({
        expandedProp,
        defaultExpanded,
        onExpandedChange,
    });

    return (
        <motion.div layout transition={SMOOOTH} className={`card-designed ${className ?? ""}`}>
            <CardHeader
                title={title}
                includeIndicator={includeIndicator}
                isExpandable={isExpandable}
                expanded={expanded}
                onToggle={toggle}
            />

            <motion.div {...contentMotion}>
                <div className="pt-0 pb-4">{children}</div>
            </motion.div>
        </motion.div>
    );
}
