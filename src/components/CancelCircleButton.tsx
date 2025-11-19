import XCircle from "./Icons/XCircle";

type CancelCircleButtonProps = {
    onClick?: () => void;
    ariaLabel?: string;
    size?: number;
    className?: string;
};

export default function CancelCircleButton({
    onClick,
    ariaLabel,
    size = 22,
    className = "",
}: CancelCircleButtonProps) {
    return (
        <button
            type="button"
            aria-label={ariaLabel ?? "항목 제거"}
            className={`rounded-full bg-transparent ${className}`}
            onClick={onClick}
        >
            <XCircle width={size} height={size} />
        </button>
    );
}
