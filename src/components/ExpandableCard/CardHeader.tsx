import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";
import { CheckCircle } from "../Icons/CheckCircle";

type CardHeaderProps = {
    title?: string | React.ReactNode;
    description?: string | React.ReactNode;
    includeIndicator?: boolean;
    isExpandable?: boolean;
    expanded?: boolean;
    onToggle?: () => void;
};

export function CardHeader({ title, isExpandable, expanded, onToggle }: CardHeaderProps) {
    return (
        <motion.div
            className={`flex items-center justify-between gap-1 px-5 py-4 ${
                isExpandable && "cursor-pointer"
            }`}
            onClick={(e) => {
                e.stopPropagation();
                isExpandable && onToggle?.();
            }}
            initial={{ marginBottom: 0 }}
            animate={{ marginBottom: expanded ? -4 : 0 }}
            transition={{ duration: 0.15 }}
        >
            <div className="flex items-center gap-1">
                {title && (
                    <h2 className="truncate font-text-lg-18_semibold text-grey-900">{title}</h2>
                )}
                <CheckCircle width={20} height={20} className="text-primary-blue" />
            </div>

            {isExpandable && (
                <button
                    type="button"
                    aria-expanded={!!expanded}
                    aria-label={expanded ? "Collapse" : "Expand"}
                    onClick={(e) => {
                        e.stopPropagation();
                        onToggle?.();
                    }}
                    className="grid transition-colors rounded-md place-items-center hover:bg-grey-100"
                >
                    <ChevronDown
                        className={`size-5 text-grey-500 transition-transform ${
                            expanded ? "rotate-180" : "rotate-0"
                        }`}
                    />
                </button>
            )}
        </motion.div>
    );
}
